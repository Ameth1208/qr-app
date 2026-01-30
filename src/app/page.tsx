"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import QRForm from "@/components/features/qr/qr-form";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"dynamic" | "static">("dynamic");

  return (
    <main className="min-h-screen bg-[#F2F2F7] text-[#1C1C1E] selection:bg-[#007AFF]/10 font-sans antialiased">
      <Navbar />

      {/* Hero Section: Compact Pro Typography */}
      <div className="max-w-[1100px] mx-auto px-6 pt-10 pb-8">
        <h1 className="text-[32px] md:text-[40px] font-bold tracking-tight text-[#1C1C1E] mb-3">
          Generador de códigos QR
        </h1>
        <p className="text-[16px] text-[#86868B] max-w-xl font-medium leading-relaxed">
          Crea, personaliza y gestiona códigos QR profesionales con la
          simplicidad de una aplicación nativa.
        </p>
      </div>

      {/* Main App Container */}
      <div className="max-w-[1100px] mx-auto px-6 pb-24">
        <div className="flex flex-col space-y-6">
          {/* Tab Switcher: Compact */}
          <div className="flex">
            <div className="bg-[#E8E8ED] p-1 rounded-xl flex shadow-inner">
              <button
                onClick={() => setActiveTab("dynamic")}
                className={`flex-1 py-1.5 px-6 rounded-lg text-[12px] font-bold transition-all ${
                  activeTab === "dynamic"
                    ? "bg-white text-[#1C1C1E] shadow-sm"
                    : "text-[#86868B] hover:text-[#1C1C1E]"
                }`}
              >
                DINÁMICO
              </button>
              <button
                onClick={() => setActiveTab("static")}
                className={`flex-1 py-1.5 px-6 rounded-lg text-[12px] font-bold transition-all ${
                  activeTab === "static"
                    ? "bg-white text-[#1C1C1E] shadow-sm"
                    : "text-[#86868B] hover:text-[#1C1C1E]"
                }`}
              >
                ESTÁTICO
              </button>
            </div>
          </div>

          <div className="transition-all duration-500">
            <div hidden={activeTab !== "dynamic"}>
              <QRForm mode="dynamic" />
            </div>
            <div hidden={activeTab !== "static"}>
              <QRForm mode="static" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="max-w-[1100px] mx-auto px-6 py-12 border-t border-[#D2D2D7]/40">
        <div className="flex justify-between items-center">
          <p className="text-[11px] text-[#86868B] font-medium font-sans">
            © 2026 Designed by{" "}
            <a
              href="https://amethgm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1C1C1E] hover:underline font-bold"
            >
              Ameth Galarcio
            </a>
            .
          </p>
          <div className="flex space-x-6">
            <a
              href="https://amethgm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-[#86868B] hover:text-[#1C1C1E] font-semibold"
            >
              Contacto
            </a>
            <a
              href="#"
              className="text-[11px] text-[#86868B] hover:text-[#1C1C1E] font-semibold"
            >
              Privacidad
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
