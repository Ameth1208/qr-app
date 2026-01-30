'use server';

import { uploadLogo } from '@/lib/storage-actions';

export async function uploadLogoAction(formData: FormData) {
  try {
    const file = formData.get('logo') as File;
    
    if (!file) {
      return {
        success: false,
        error: 'No se proporcionó ningún archivo'
      };
    }
    
    if (!file.type.startsWith('image/')) {
      return {
        success: false,
        error: 'El archivo debe ser una imagen'
      };
    }
    
    if (file.size > 2 * 1024 * 1024) { // 2MB límite
      return {
        success: false,
        error: 'La imagen no debe superar los 2MB'
      };
    }
    
    const downloadURL = await uploadLogo(file);
    
    return {
      success: true,
      data: { url: downloadURL }
    };
  } catch (error) {
    console.error('Error uploading logo:', error);
    return {
      success: false,
      error: 'Error al subir el logo'
    };
  }
}