"use client";

import React from "react";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SandboxProps {
  type: "website" | "vcard" | "wifi" | "text";
  setType: (t: any) => void;
  mode: "static" | "dynamic";
  setMode: (m: any) => void;
  content: any;
  setContent: (c: any) => void;
  dotsColor: string;
  setDotsColor: (c: string) => void;
  dotsType: string;
  setDotsType: (t: string) => void;
  response: any;
  loading: boolean;
  testAPI: () => void;
}

export function Sandbox({
  type,
  setType,
  mode,
  setMode,
  setContent,
  dotsColor,
  setDotsColor,
  dotsType,
  setDotsType,
  response,
  loading,
  testAPI,
}: SandboxProps) {
  return (
    <aside className="bg-white rounded-[24px] p-8 shadow-apple-card border border-[#D2D2D7]/40 sticky top-24">
      <div className="flex items-center space-x-3 mb-8">
        <div className="h-8 w-8 rounded-lg bg-[#007AFF]/10 flex items-center justify-center">
          <svg
            className="w-5 h-5 text-[#007AFF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-3.568 0l-.727-2.903a2 2 0 00-1.96-1.414l-2.387.477a2 2 0 00-1.022.547l2.146 2.146a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-2.146-2.146z"
            />
          </svg>
        </div>
        <h2 className="text-[18px] font-bold text-[#1C1C1E]">
          Sandbox Interactivo
        </h2>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-[11px] font-black text-[#86868B] uppercase tracking-wider">
            Tipo de Contenido
          </label>
          <div className="grid grid-cols-2 gap-2">
            {["website", "text", "vcard", "wifi"].map((t) => (
              <button
                key={t}
                onClick={() => {
                  setType(t as any);
                  if (t === "website") setContent("https://amethgm.com");
                  if (t === "text") setContent("Hola Mundo");
                  if (t === "vcard")
                    setContent({
                      firstName: "Ameth",
                      lastName: "G",
                      phone: "123",
                      email: "a@a.com",
                    });
                  if (t === "wifi")
                    setContent({ ssid: "Mi Red", password: "pass" });
                }}
                className={cn(
                  "py-2.5 rounded-xl text-[12px] font-bold border transition-all duration-200",
                  type === t
                    ? "bg-[#1C1C1E] text-white border-transparent shadow-lg"
                    : "bg-white text-[#86868B] border-[#D2D2D7]/50 hover:border-[#1C1C1E] hover:text-[#1C1C1E]"
                )}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] font-black text-[#86868B] uppercase tracking-wider">
            Modo de Redirección
          </label>
          <div className="flex bg-[#F5F5F7] p-1.5 rounded-xl border border-[#D2D2D7]/30 shadow-inner">
            <button
              onClick={() => setMode("static")}
              className={cn(
                "flex-1 py-2 rounded-lg text-[12px] font-bold transition-all duration-200",
                mode === "static"
                  ? "bg-white text-[#1C1C1E] shadow-sm"
                  : "text-[#86868B] hover:text-[#1C1C1E]"
              )}
            >
              ESTÁTICO
            </button>
            <button
              onClick={() => setMode("dynamic")}
              className={cn(
                "flex-1 py-2 rounded-lg text-[12px] font-bold transition-all duration-200",
                mode === "dynamic"
                  ? "bg-white text-[#1C1C1E] shadow-sm"
                  : "text-[#86868B] hover:text-[#1C1C1E]"
              )}
            >
              DINÁMICO
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-[11px] font-black text-[#86868B] uppercase tracking-wider">
            Configuración Visual
          </label>
          <div className="flex items-center space-x-3">
            <div className="flex-1 flex items-center justify-between p-3 bg-[#F5F5F7] rounded-xl border border-[#D2D2D7]/30">
              <input
                type="color"
                value={dotsColor}
                onChange={(e) => setDotsColor(e.target.value)}
                className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-none"
              />
              <div className="h-6 w-px bg-[#D2D2D7]/30" />
              <select
                value={dotsType}
                onChange={(e) => setDotsType(e.target.value)}
                className="bg-transparent text-[13px] font-bold outline-none cursor-pointer"
              >
                <option value="square">Square</option>
                <option value="dots">Dots</option>
                <option value="rounded">Rounded</option>
              </select>
            </div>
          </div>
        </div>

        <Button
          onClick={testAPI}
          loading={loading}
          className="w-full h-12 rounded-2xl text-[14px] font-bold shadow-apple-card"
        >
          Ejecutar Solicitud
        </Button>

        {response && (
          <div className="pt-6 border-t border-[#F5F5F7] animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-4">
              <label className="text-[11px] font-black text-[#86868B] uppercase tracking-wider">
                Respuesta JSON
              </label>
              <div
                className={cn(
                  "flex items-center px-2 py-0.5 rounded-md text-[10px] font-black uppercase",
                  response.success
                    ? "bg-[#E6F6EC] text-[#1A7F37]"
                    : "bg-[#FFF2F2] text-[#FF3B30]"
                )}
              >
                {response.success ? "200 Success" : "Error"}
              </div>
            </div>
            <pre className="p-5 bg-[#F5F5F7] rounded-2xl border border-[#D2D2D7]/30 text-[12px] font-mono text-[#1C1C1E] overflow-x-auto max-h-[250px] scrollbar-hide shadow-inner ring-1 ring-black/5 leading-relaxed">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </aside>
  );
}
