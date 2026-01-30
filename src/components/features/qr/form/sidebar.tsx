"use client";

import React from "react";
import { TYPES, QRType } from "./constants";

interface SidebarProps {
  activeType: QRType;
  onTypeChange: (type: QRType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeType, onTypeChange }) => {
  return (
    <div className="w-full lg:w-56 bg-[#F5F5F7]/30 p-6 border-r border-[#D2D2D7]/30">
      <p className="text-[10px] font-bold text-[#86868B] uppercase tracking-[0.15em] mb-4">
        Destino
      </p>
      <div className="flex flex-col gap-1.5">
        {TYPES.map((t) => (
          <button
            key={t.id}
            onClick={() => onTypeChange(t.id)}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all ${
              activeType === t.id
                ? "bg-[#007AFF] text-white shadow-sm"
                : "text-[#424245] hover:bg-[#E8E8ED]/60"
            }`}
          >
            <div className="w-4 h-4">{t.icon}</div>
            <span className="text-[13px] font-semibold">{t.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
