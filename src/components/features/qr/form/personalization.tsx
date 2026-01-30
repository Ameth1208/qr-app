"use client";

import { forwardRef } from "react";
import { QRCard } from "../qr-card";
import { QRGeneratorHandle } from "../qr-generator";

interface PersonalizationProps {
  qrData: string;
  dotsColor: string;
  setDotsColor: (val: string) => void;
  dotsType: "square" | "rounded" | "dots";
  setDotsType: (val: "square" | "rounded" | "dots") => void;
  logo: string;
  setLogo: (val: string) => void;
}
export const Personalization = forwardRef<
  QRGeneratorHandle,
  PersonalizationProps
>(
  (
    { qrData, dotsColor, setDotsColor, dotsType, setDotsType, logo, setLogo },
    ref
  ) => {
    return (
      <div className="w-full lg:w-64 bg-[#F5F5F7]/20 p-8 flex flex-col items-center border-l border-[#D2D2D7]/30">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-[#D2D2D7]/30 mb-8 w-full flex justify-center">
          <QRCard
            ref={ref}
            data={qrData || undefined}
            dotsColor={dotsColor}
            backgroundColor="#ffffff"
            dotsType={dotsType}
            cornersSquareType="square"
            cornersDotType="square"
            logo={logo}
          />
        </div>

        <div className="w-full space-y-6">
          <div>
            <p className="text-[10px] font-bold text-[#86868B] uppercase tracking-[0.15em] mb-4">
              Estilo de Puntos
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "square", label: "Cuadrado" },
                { id: "rounded", label: "Redondo" },
                { id: "dots", label: "Puntos" },
              ].map((st) => (
                <button
                  key={st.id}
                  onClick={() => setDotsType(st.id as any)}
                  className={`py-2 px-1 rounded-md border text-[10px] font-bold transition-all ${
                    dotsType === st.id
                      ? "border-[#007AFF] bg-blue-50 text-[#007AFF]"
                      : "border-[#D2D2D7] bg-white text-[#86868B]"
                  }`}
                >
                  {st.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#86868B] uppercase tracking-[0.15em] mb-4">
              Color
            </p>
            <div className="flex flex-wrap gap-2">
              {["#000000", "#007AFF", "#FF3B30", "#34C759", "#5856D6"].map(
                (c) => (
                  <button
                    key={c}
                    onClick={() => setDotsColor(c)}
                    className={`h-5 w-5 rounded-full ring-offset-2 transition-all ${
                      dotsColor === c ? "ring-2 ring-[#007AFF]" : "opacity-60"
                    }`}
                    style={{ background: c }}
                  />
                )
              )}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold text-[#86868B] uppercase tracking-[0.15em] mb-4">
              Logotipo
            </p>
            <div className="relative group">
              <label className="flex flex-col items-center justify-center h-16 w-full rounded-lg border border-dashed border-[#D2D2D7] bg-white hover:bg-[#F5F5F7] transition-all cursor-pointer overflow-hidden">
                {logo ? (
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-5 h-5 text-[#D2D2D7] mb-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01"
                      />
                    </svg>
                    <span className="text-[8px] font-bold text-[#86868B]">
                      SUBIR
                    </span>
                  </div>
                )}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (ev) =>
                        setLogo(ev.target?.result as string);
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
              {logo && (
                <button
                  onClick={() => setLogo("")}
                  className="absolute -top-1 -right-1 bg-[#FF3B30] text-white rounded-full p-0.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

