"use client";

interface EndpointBarProps {
  method: string;
  url: string;
}

export function EndpointBar({ method, url }: EndpointBarProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="flex items-center space-x-3 bg-[#F5F5F7] p-1.5 rounded-2xl border border-[#D2D2D7]/30 mb-8 w-full group overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
      <div className="flex items-center space-x-3 px-3 py-1.5 bg-white rounded-xl border border-[#D2D2D7]/20 shadow-sm flex-1">
        <span className="text-[11px] font-black text-white bg-[#007AFF] px-2.5 py-1 rounded-lg shadow-[0_2px_4px_rgba(0,122,255,0.3)]">
          {method}
        </span>
        <code className="text-[13px] font-mono font-bold text-[#1C1C1E] tracking-tight truncate">
          {url}
        </code>
      </div>
      <button
        onClick={handleCopy}
        className="p-2.5 hover:bg-white rounded-xl transition-all duration-200 text-[#86868B] hover:text-[#007AFF] active:scale-90"
        title="Copy Endpoint"
      >
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
      </button>
    </div>
  );
}
