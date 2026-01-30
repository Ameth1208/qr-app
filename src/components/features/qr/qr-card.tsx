"use client";

import { forwardRef } from "react";
import { QRGenerator, QRGeneratorHandle } from "./qr-generator";
import { QRCardProps } from "@/types/qr";

export const QRCard = forwardRef<QRGeneratorHandle, QRCardProps>(
  (
    {
      data,
      dotsColor,
      backgroundColor,
      dotsType,
      cornersSquareType,
      cornersDotType,
      logo,
    },
    ref
  ) => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center aspect-square">
          {data ? (
            <QRGenerator
              ref={ref}
              data={data}
              width={180}
              height={180}
              dotsColor={dotsColor}
              backgroundColor={backgroundColor}
              dotsType={dotsType}
              cornersSquareType={cornersSquareType}
              cornersDotType={cornersDotType}
              logo={logo}
              bare
            />
          ) : (
            <div className="w-[180px] h-[180px] flex flex-col items-center justify-center bg-[#F5F5F7] border border-dashed border-[#D2D2D7] rounded-lg">
              <svg
                className="w-6 h-6 text-[#D2D2D7] mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <span className="text-[9px] font-bold text-[#86868B] uppercase tracking-widest">
                QR PREVIEW
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }
);
