import { NextRequest, NextResponse } from "next/server";
import { createShortUrl } from "@/lib/firebase-actions";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type = "website", content, mode = "static", options = {} } = body;

    if (!content) {
      return NextResponse.json(
        { success: false, error: "Content is required" },
        { status: 400 }
      );
    }

    let rawData = "";

    // Handle different content types
    switch (type) {
      case "website":
      case "text":
        rawData = content;
        break;
      case "vcard":
        const {
          firstName = "",
          lastName = "",
          phone = "",
          email = "",
        } = content;
        rawData =
          `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName};;;\nFN:${firstName} ${lastName}\nTEL;TYPE=CELL:${phone}\nEMAIL:${email}\nEND:VCARD`.trim();
        break;
      case "wifi":
        const { ssid = "", password = "", encryption = "WPA" } = content;
        rawData = `WIFI:T:${encryption};S:${ssid};P:${password};;`;
        break;
      default:
        rawData = content;
    }

    let finalQrData = rawData;

    if (mode === "dynamic") {
      console.log("Starting dynamic URL creation for:", rawData);
      // Basic URL validation only for dynamic mode since it needs a redirect
      try {
        new URL(rawData);
        const shortUrl = await createShortUrl(rawData);
        console.log("Firebase short URL created:", shortUrl.shortId);

        const baseUrl =
          process.env.NEXT_PUBLIC_BASE_URL ||
          (typeof window !== "undefined"
            ? window.location.origin
            : "https://qrz.vercel.app");

        finalQrData = `${baseUrl}/r/${shortUrl.shortId}`;
      } catch (err) {
        console.error("Dynamic mode error:", err);
        return NextResponse.json(
          {
            success: false,
            error:
              err instanceof Error
                ? err.message
                : "Dynamic mode requires a valid URL as content",
          },
          { status: 400 }
        );
      }
    }

    console.log("Success: Returning QR data");
    return NextResponse.json({
      success: true,
      data: {
        qrData: finalQrData,
        type,
        mode,
        options: {
          dotsColor: options.dotsColor || "#000000",
          dotsType: options.dotsType || "square",
          logo: options.logo || null,
        },
      },
    });
  } catch (error) {
    console.error("CRITICAL API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
