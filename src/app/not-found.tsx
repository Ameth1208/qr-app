"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F2F2F7] flex flex-col items-center justify-center p-6 text-center antialiased">
      <div className="bg-white p-10 rounded-[24px] shadow-apple-card border border-[#D2D2D7]/40 max-w-md w-full">
        <div className="mb-6 flex justify-center">
          <div className="h-16 w-16 bg-[#F5F5F7] rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#86868B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-[#1C1C1E] mb-2 font-sans tracking-tight">
          Página no encontrada
        </h1>
        <p className="text-[15px] text-[#86868B] mb-8 font-medium leading-relaxed">
          Lo sentimos, no pudimos encontrar lo que buscabas. El enlace puede
          haber expirado o la dirección es incorrecta.
        </p>

        <Link href="/" passHref legacyBehavior>
          <a className="inline-flex items-center justify-center rounded-[10px] font-semibold tracking-tight transition-all duration-200 h-10 px-6 text-[14px] bg-[#007AFF] text-white hover:bg-[#0071E3] w-full">
            Volver al Inicio
          </a>
        </Link>
      </div>

      <p className="mt-8 text-[11px] text-[#86868B] font-medium uppercase tracking-widest">
        Error 404 • GenQR
      </p>
    </div>
  );
}
