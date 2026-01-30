"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { createDynamicQR } from "@/app/actions/qr-actions";
import { QRFormProps } from "@/types/qr";

// Import modular components directly (Vercel Best Practices)
import Sidebar from "./form/sidebar";
import { Editor } from "./form/editor";
import { Personalization } from "./form/personalization";
import { QRType } from "./form/constants";
import { QRGeneratorHandle } from "./qr-generator";

const QRForm: React.FC<QRFormProps> = ({ mode }) => {
  const [activeType, setActiveType] = useState<QRType>("website");
  const [inputValue, setInputValue] = useState("");
  const [qrData, setQrData] = useState("");
  const [loading, setLoading] = useState(false);
  const [_, setError] = useState("");

  const qrRef = useRef<QRGeneratorHandle>(null);

  const [vCard, setVCard] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [wifi, setWifi] = useState({
    ssid: "",
    password: "",
    encryption: "WPA",
  });

  const [dotsColor, setDotsColor] = useState("#000000");
  const [dotsType, setDotsType] = useState<"square" | "rounded" | "dots">(
    "square"
  );
  const [logo, setLogo] = useState("");

  useEffect(() => {
    if (activeType === "vcard") {
      const { firstName, lastName, phone, email } = vCard;
      setInputValue(
        `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName};;;\nFN:${firstName} ${lastName}\nTEL;TYPE=CELL:${phone}\nEMAIL:${email}\nEND:VCARD`.trim()
      );
    }
  }, [vCard, activeType]);

  useEffect(() => {
    if (activeType === "wifi") {
      const { ssid, password, encryption } = wifi;
      setInputValue(
        ssid ? `WIFI:T:${encryption};S:${ssid};P:${password};;` : ""
      );
    }
  }, [wifi, activeType]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");
      if (!inputValue.trim()) return;

      if (mode === "dynamic") {
        setLoading(true);
        const formData = new FormData();
        formData.append("longUrl", inputValue);
        const result = await createDynamicQR(formData);
        if (result.success) setQrData(result.data!.qrData);
        else setError(result.error!);
        setLoading(false);
      } else {
        setQrData(inputValue);
      }
    },
    [inputValue, mode]
  );

  const handleDownload = useCallback(() => {
    qrRef.current?.download("png");
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-apple-card border border-[#D2D2D7]/40 max-w-[1100px] mx-auto overflow-hidden transition-all duration-300">
      <Sidebar activeType={activeType} onTypeChange={setActiveType} />

      <Editor
        activeType={activeType}
        inputValue={inputValue}
        setInputValue={setInputValue}
        vCard={vCard}
        setVCard={setVCard}
        wifi={wifi}
        setWifi={setWifi}
        onSubmit={handleSubmit}
        onDownload={handleDownload}
        loading={loading}
        hasData={!!qrData}
      />

      <Personalization
        ref={qrRef}
        qrData={qrData}
        dotsColor={dotsColor}
        setDotsColor={setDotsColor}
        dotsType={dotsType}
        setDotsType={setDotsType}
        logo={logo}
        setLogo={setLogo}
      />
    </div>
  );
};

export default QRForm;
