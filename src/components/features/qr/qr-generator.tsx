"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import QRCodeStyling from "qr-code-styling";
import { QRGeneratorProps } from "@/types/qr";

export interface QRGeneratorHandle {
  download: (format?: "png" | "jpeg") => void;
}

export const QRGenerator = forwardRef<QRGeneratorHandle, QRGeneratorProps>(
  (
    {
      data,
      width = 300,
      height = 300,
      dotsColor = "#000000",
      backgroundColor = "#ffffff",
      dotsType = "square",
      cornersSquareType = "square",
      cornersDotType = "square",
      logo,
      bare = false,
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [qrCode] = useState<QRCodeStyling>(
      () =>
        new QRCodeStyling({
          width,
          height,
          data,
          dotsOptions: {
            color: dotsColor,
            type: dotsType,
          },
          backgroundOptions: {
            color: backgroundColor,
          },
          cornersSquareOptions: {
            type: cornersSquareType,
            color: dotsColor,
          },
          cornersDotOptions: {
            type: cornersDotType,
            color: dotsColor,
          },
          image: logo,
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 10,
          },
        })
    );

    useImperativeHandle(ref, () => ({
      download: (format: "png" | "jpeg" = "png") => {
        qrCode.download({
          name: `qr-code-${Date.now()}`,
          extension: format,
        });
      },
    }));

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        qrCode.append(containerRef.current);
      }
    }, [qrCode]);

    useEffect(() => {
      qrCode.update({
        data,
        dotsOptions: {
          color: dotsColor,
          type: dotsType,
        },
        backgroundOptions: {
          color: backgroundColor,
        },
        cornersSquareOptions: {
          type: cornersSquareType,
          color: dotsColor,
        },
        cornersDotOptions: {
          type: cornersDotType,
          color: dotsColor,
        },
        image: logo,
      });
    }, [
      data,
      dotsColor,
      backgroundColor,
      dotsType,
      cornersSquareType,
      cornersDotType,
      logo,
      qrCode,
    ]);

    if (bare) {
      return <div ref={containerRef} />;
    }

    return (
      <div className="flex flex-col items-center space-y-4">
        <div
          ref={containerRef}
          className="rounded-2xl p-4 bg-white shadow-sm border border-gray-200"
        />
        <div className="flex space-x-2">
          <button
            onClick={() => qrCode.download({ extension: "png" })}
            className="px-4 py-2 rounded-full bg-[#007AFF] text-white hover:opacity-90 transition text-sm font-semibold"
          >
            Descargar PNG
          </button>
        </div>
      </div>
    );
  }
);
