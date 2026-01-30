"use client";

import { useState, useMemo, useEffect } from "react";

export function useSandbox() {
  const [type, setType] = useState<"website" | "vcard" | "wifi" | "text">(
    "website"
  );
  const [mode, setMode] = useState<"static" | "dynamic">("static");
  const [content, setContent] = useState<any>("https://amethgm.com");
  const [dotsColor, setDotsColor] = useState("#000000");
  const [dotsType, setDotsType] = useState("square");
  const [baseUrl, setBaseUrl] = useState("https://genqr.studio");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/qr/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          content,
          mode,
          options: { dotsColor, dotsType },
        }),
      });
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setResponse({ error: "Failed to connect to API" });
    }
    setLoading(false);
  };

  const fetchExample = useMemo(() => {
    return `fetch('${baseUrl}/api/qr/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    type: '${type}',
    mode: '${mode}',
    content: ${
      typeof content === "string"
        ? `'${content}'`
        : JSON.stringify(content, null, 2)
    },
    options: {
      dotsColor: '${dotsColor}',
      dotsType: '${dotsType}'
    }
  })
})`;
  }, [type, mode, content, dotsColor, dotsType, baseUrl]);

  return {
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
  };
}
