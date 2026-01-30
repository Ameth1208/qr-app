import { db } from './firebase';
import { collection, addDoc, doc, getDoc, serverTimestamp } from 'firebase/firestore';

export interface ShortUrl {
  id?: string;
  originalUrl: string;
  shortId: string;
  clicks: number;
  createdAt: any;
  updatedAt: any;
}

function generateShortId(length: number = 6): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function createShortUrl(originalUrl: string): Promise<ShortUrl> {
  try {
    const shortId = generateShortId();
    
    const urlData: Omit<ShortUrl, 'id'> = {
      originalUrl,
      shortId,
      clicks: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, 'urls'), urlData);
    
    return {
      id: docRef.id,
      ...urlData
    };
  } catch (error) {
    console.error('Error creating short URL:', error);
    throw new Error('Failed to create short URL');
  }
}

export async function getOriginalUrl(shortId: string): Promise<string | null> {
  try {
    const urlsRef = collection(db, 'urls');
    const q = query(urlsRef, where('shortId', '==', shortId));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const data = doc.data() as ShortUrl;
      
      await updateDoc(doc.ref, {
        clicks: increment(1),
        updatedAt: serverTimestamp()
      });
      
      return data.originalUrl;
    }
    
    return null;
  } catch (error) {
    console.error('Error getting original URL:', error);
    throw new Error('Failed to get original URL');
  }
}

import { query, where, getDocs, updateDoc, increment } from 'firebase/firestore';