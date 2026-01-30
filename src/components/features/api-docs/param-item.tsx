"use client";

interface ParamItemProps {
  name: string;
  type: string;
  desc: string;
  required?: boolean;
}

export function ParamItem({ name, type, desc, required }: ParamItemProps) {
  return (
    <div className="flex items-start justify-between py-6 first:border-none group/item">
      <div className="space-y-2 flex-1 pr-6">
        <div className="flex items-center space-x-3">
          <code className="text-[14px] font-black text-[#1C1C1E] bg-[#F5F5F7] px-2 py-0.5 rounded-md group-hover/item:bg-[#E8E8ED] transition-colors">
            {name}
          </code>
          {required && (
            <span className="flex items-center text-[10px] font-bold text-white bg-[#FF3B30] px-2 py-0.5 rounded-full shadow-[0_2px_4px_rgba(255,59,48,0.2)]">
              Obligatorio
            </span>
          )}
        </div>
        <p className="text-[14px] text-[#86868B] leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-[11px] font-bold text-[#1C1C1E] bg-[#F5F5F7] px-3 py-1 rounded-full border border-[#D2D2D7]/40 shadow-sm">
          {type}
        </span>
      </div>
    </div>
  );
}
