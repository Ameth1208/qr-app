"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="bg-white p-10 rounded-[24px] shadow-apple-card border border-[#D2D2D7]/40 max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 bg-[#FFF2F2] rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#FF3B30]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#1C1C1E] mb-2 font-sans tracking-tight">
          Algo salió mal
        </h1>
        <p className="text-[15px] text-[#86868B] mb-8 font-medium leading-relaxed">
          Ocurrió un error inesperado. Estamos trabajando para solucionarlo lo
          antes posible.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-[10px] font-semibold tracking-tight transition-all duration-200 h-10 px-6 text-[14px] bg-[#007AFF] text-white hover:bg-[#0071E3] w-full"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-[10px] font-semibold tracking-tight transition-all duration-200 h-10 px-6 text-[14px] border border-[#D2D2D7] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] w-full"
          >
            Ir al Inicio
          </a>
        </div>
      </div>

      <p className="mt-8 text-[11px] text-[#86868B] font-medium uppercase tracking-widest">
        Sistema de Errores • GenQR
      </p>
    </div>
  );
}
