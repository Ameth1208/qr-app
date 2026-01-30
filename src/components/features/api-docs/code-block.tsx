"use client";

import { useState, useMemo } from "react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightedCode = useMemo(() => {
    // Escape HTML first to prevent injection issues
    let escaped = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Comprehensive regex for single-pass highlighting
    const regex =
      /('(?:\\'|.)*?'|"(?:\\"|.)*?")|\b(fetch|method|headers|body|JSON|stringify|const|let|var|return|async|await)\b|\b(POST|static|dynamic|vcard|wifi|website|text|true|false|null)\b|([{}()\[\],:])/g;

    return escaped.replace(
      regex,
      (match, string, keyword, constant, punctuation) => {
        if (string) return `<span class="text-[#A5D6FF]">${match}</span>`;
        if (keyword)
          return `<span class="text-[#FF7B72] font-bold">${match}</span>`;
        if (constant) return `<span class="text-[#79C0FF]">${match}</span>`;
        if (punctuation) return `<span class="text-[#D1D5DB]">${match}</span>`;
        return match;
      }
    );
  }, [code]);

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 z-20 p-2 rounded-lg bg-white/10 border border-white/10 text-white/50 hover:text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
      >
        {copied ? (
          <svg
            className="w-4 h-4 text-[#34C759]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
      </button>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="flex items-center px-4 py-2 border-b border-white/5 bg-white/5">
          <span className="text-[11px] font-bold text-white/30 uppercase tracking-widest">
            javascript
          </span>
        </div>
        <pre className="p-6 text-[13px] font-mono leading-relaxed overflow-x-auto scrollbar-hide">
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </div>
    </div>
  );
}
