"use client";

import React from "react";
import { Input, Textarea } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { QRType } from "./constants";

interface VCardData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

interface WifiData {
  ssid: string;
  password: string;
  encryption: string;
}

interface EditorProps {
  activeType: QRType;
  inputValue: string;
  setInputValue: (val: string) => void;
  vCard: VCardData;
  setVCard: (val: VCardData) => void;
  wifi: WifiData;
  setWifi: (val: WifiData) => void;
  onSubmit: (e: React.FormEvent) => void;
  onDownload: () => void;
  loading: boolean;
  hasData: boolean;
}

export const Editor: React.FC<EditorProps> = ({
  activeType,
  inputValue,
  setInputValue,
  vCard,
  setVCard,
  wifi,
  setWifi,
  onSubmit,
  onDownload,
  loading,
  hasData,
}) => {
  return (
    <div className="flex-1 p-8 lg:p-10">
      <form onSubmit={onSubmit} className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[#1C1C1E]">
            Configurar{" "}
            {activeType === "vcard"
              ? "Contacto"
              : activeType.charAt(0).toUpperCase() + activeType.slice(1)}
          </h2>

          <div className="space-y-4">
            {activeType === "website" && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">
                  URL del sitio
                </label>
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="https://ejemplo.com"
                />
              </div>
            )}
            {activeType === "text" && (
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-[#86868B] uppercase tracking-wider">
                  Nota
                </label>
                <Textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe algo..."
                />
              </div>
            )}
            {activeType === "vcard" && (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    Nombre
                  </label>
                  <Input
                    inputSize="sm"
                    value={vCard.firstName}
                    onChange={(e) =>
                      setVCard({ ...vCard, firstName: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    Apellido
                  </label>
                  <Input
                    inputSize="sm"
                    value={vCard.lastName}
                    onChange={(e) =>
                      setVCard({ ...vCard, lastName: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    Teléfono
                  </label>
                  <Input
                    inputSize="sm"
                    value={vCard.phone}
                    onChange={(e) =>
                      setVCard({ ...vCard, phone: e.target.value })
                    }
                  />
                </div>
                <div className="col-span-2 space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    Email
                  </label>
                  <Input
                    inputSize="sm"
                    value={vCard.email}
                    onChange={(e) =>
                      setVCard({ ...vCard, email: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
            {activeType === "wifi" && (
              <div className="space-y-3">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    SSID
                  </label>
                  <Input
                    inputSize="sm"
                    value={wifi.ssid}
                    onChange={(e) => setWifi({ ...wifi, ssid: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#86868B]">
                    Contraseña
                  </label>
                  <Input
                    inputSize="sm"
                    type="password"
                    value={wifi.password}
                    onChange={(e) =>
                      setWifi({ ...wifi, password: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-3 pt-4 border-t border-[#D2D2D7]/30">
          <Button type="submit" disabled={loading} size="md" className="flex-1">
            {loading ? "Generando..." : "Generar QR"}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={onDownload}
            disabled={!hasData}
          >
            Descargar
          </Button>
        </div>
      </form>
    </div>
  );
};
