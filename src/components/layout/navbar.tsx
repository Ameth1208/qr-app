"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { label: "Generador", href: "/" },
    { label: "Documentación", href: "/api-docs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D2D2D7]/30 bg-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo Section - Fixed Width for Stability */}
        <div className="w-[160px]">
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-opacity hover:opacity-80"
          >
            <div className="h-7 w-7 bg-[#1C1C1E] rounded-lg flex items-center justify-center shadow-sm group-active:scale-95 transition-transform">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-[15px] font-bold tracking-tight text-[#1C1C1E]">
                GenQR
              </span>
              <span className="text-[9px] font-bold text-[#86868B] uppercase tracking-[0.1em]">
                Studio
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Links - Centered */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center space-x-1 bg-[#F5F5F7]/80 p-1 rounded-full border border-[#D2D2D7]/30">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-5 py-1.5 rounded-full text-[13px] font-bold transition-all duration-300",
                    isActive
                      ? "bg-white text-[#1C1C1E] shadow-[0_2px_4px_rgba(0,0,0,0.05)] ring-1 ring-black/5"
                      : "text-[#86868B] hover:text-[#1C1C1E] hover:bg-white/40"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Status Area - Fixed Width for Stability */}
        <div className="w-[160px] flex justify-end">
          <div className="flex items-center px-3 py-1 rounded-full bg-[#34C759]/10 border border-[#34C759]/20 shadow-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-[#34C759] animate-pulse mr-2" />
            <span className="text-[10px] font-bold text-[#1A7F37] uppercase tracking-wider">
              En línea
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
