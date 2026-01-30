"use client";

import { Navbar } from "@/components/layout/navbar";
import { CodeBlock } from "@/components/features/api-docs/code-block";
import { ParamItem } from "@/components/features/api-docs/param-item";
import { EndpointBar } from "@/components/features/api-docs/endpoint-bar";
import { Sandbox } from "@/components/features/api-docs/sandbox";
import { useSandbox } from "@/components/features/api-docs/use-sandbox";

export default function APIDocs() {
  const {
    type,
    setType,
    mode,
    setMode,
    content,
    setContent,
    dotsColor,
    setDotsColor,
    dotsType,
    setDotsType,
    baseUrl,
    response,
    loading,
    testAPI,
    fetchExample,
  } = useSandbox();

  return (
    <main className="min-h-screen bg-[#F2F2F7] text-[#1C1C1E] selection:bg-[#007AFF]/10 font-sans antialiased pb-24">
      <Navbar />

      <div className="max-w-[1100px] mx-auto px-6 pt-16">
        <header className="mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#007AFF]/10 text-[#007AFF] text-[11px] font-bold uppercase tracking-wider mb-4 border border-[#007AFF]/20 shadow-sm">
            Developer API
          </div>
          <h1 className="text-[40px] font-bold tracking-tight text-[#1C1C1E] mb-4">
            API Reference
          </h1>
          <p className="text-[17px] text-[#86868B] max-w-2xl font-medium leading-relaxed">
            Integra el motor de GenQR en tus propias aplicaciones. Sencillo,
            potente y diseñado para desarrolladores profesionales.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Documentation / Reference */}
          <div className="lg:col-span-7 space-y-8">
            <section className="bg-white rounded-[24px] p-8 shadow-apple-card border border-[#D2D2D7]/40">
              <h2 className="text-[20px] font-bold text-[#1C1C1E] mb-6">
                Generar Código QR
              </h2>

              <EndpointBar method="POST" url={`${baseUrl}/api/qr/generate`} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-[12px] font-black text-[#86868B] uppercase tracking-[0.1em] mb-4">
                    Estructura del Cuerpo
                  </h3>
                  <div className="space-y-1 divide-y divide-[#F5F5F7] border-t border-[#F5F5F7]">
                    <ParamItem
                      name="type"
                      type="string"
                      desc="'website' | 'vcard' | 'wifi' | 'text'"
                      required
                    />
                    <ParamItem
                      name="mode"
                      type="string"
                      desc="'static' | 'dynamic'"
                      required
                    />
                    <ParamItem
                      name="content"
                      type="mixed"
                      desc="String (URL/Texto) o un objeto (para vCard/WiFi)."
                      required
                    />
                    <ParamItem
                      name="options"
                      type="object"
                      desc="Incluye dotsColor y dotsType (square, dots, rounded)."
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-[12px] font-black text-[#86868B] uppercase tracking-[0.1em] mb-4">
                    Respuesta Exitosa
                  </h3>
                  <div className="bg-[#1C1C1E] rounded-2xl border border-[#D2D2D7]/30 overflow-hidden">
                    <CodeBlock
                      code={`{
  "success": true,
  "data": {
    "qrData": "...",
    "type": "website",
    "mode": "static",
    "options": { ... }
  }
}`}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#1C1C1E] rounded-[24px] p-8 shadow-apple-card text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF] opacity-20 blur-[100px] pointer-events-none" />
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
                  </div>
                  <h2 className="text-[14px] font-bold text-white/90">
                    Ejemplo de Implementación
                  </h2>
                </div>
              </div>
              <div className="relative group z-10">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#007AFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg pointer-events-none" />
                <CodeBlock code={fetchExample} />
              </div>
            </section>
          </div>

          {/* Playground / Interactive */}
          <div className="lg:col-span-5">
            <Sandbox
              type={type}
              setType={setType}
              mode={mode}
              setMode={setMode}
              content={content}
              setContent={setContent}
              dotsColor={dotsColor}
              setDotsColor={setDotsColor}
              dotsType={dotsType}
              setDotsType={setDotsType}
              response={response}
              loading={loading}
              testAPI={testAPI}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
