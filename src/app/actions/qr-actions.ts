'use server';

import { createShortUrl } from '@/lib/firebase-actions';

export async function createDynamicQR(formData: FormData) {
  const longUrl = formData.get('longUrl') as string;
  
  if (!longUrl || !isValidUrl(longUrl)) {
    return {
      success: false,
      error: 'Por favor ingresa una URL válida'
    };
  }
  
  try {
    const shortUrl = await createShortUrl(longUrl);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const qrData = `${baseUrl}/r/${shortUrl.shortId}`;
    
    return {
      success: true,
      data: {
        shortId: shortUrl.shortId,
        qrData,
        originalUrl: longUrl
      }
    };
  } catch (error) {
    console.error('Error creating dynamic QR:', error);
    return {
      success: false,
      error: 'Error al crear el código QR dinámico'
    };
  }
}

function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}