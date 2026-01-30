"use server";

import { createShortUrl } from "@/lib/firebase-actions";

export async function createDynamicQR(formData: FormData) {
  const longUrl = formData.get("longUrl") as string;

  if (!longUrl || !isValidUrl(longUrl)) {
    return {
      success: false,
      error: "Por favor ingresa una URL válida",
    };
  }

  try {
    console.log("Firebase: Attempting to create short URL for:", longUrl);
    const shortUrl = await createShortUrl(longUrl);

    // Explicitly use the production domain if available, otherwise fallback
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://qrz.vercel.app";
    const qrData = `${baseUrl}/r/${shortUrl.shortId}`;

    console.log("Firebase: Success! Short ID:", shortUrl.shortId);

    return {
      success: true,
      data: {
        shortId: shortUrl.shortId,
        qrData,
        originalUrl: longUrl,
      },
    };
  } catch (error) {
    console.error("CRITICAL: Error creating dynamic QR (Firebase):", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? `Error de Firebase: ${error.message}`
          : "Error al conectar con la base de datos",
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
