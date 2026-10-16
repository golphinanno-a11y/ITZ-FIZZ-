import React from 'react';

export interface StatItem {
  id: string;
  targetNum: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: 'stat-satisfaction',
    targetNum: 98,
    suffix: '%',
    label: 'Customer Satisfaction',
    sublabel: 'Verified Feedback',
  },
  {
    id: 'stat-growth',
    targetNum: 3,
    suffix: 'x',
    label: 'Faster Growth',
    sublabel: 'Measured Impact',
  },
  {
    id: 'stat-users',
    targetNum: 10,
    suffix: 'K+',
    label: 'Happy Users',
    sublabel: 'Global Community',
  },
  {
    id: 'stat-support',
    targetNum: 24,
    suffix: '/7',
    label: 'Continuous Support',
    sublabel: 'Direct Access',
  },
];

interface StatBannersProps {
  className?: string;
}

export const StatBanners: React.FC<StatBannersProps> = ({ className = '' }) => {
  return (
    <div
      id="stat-banners-container"
      className={`relative z-20 flex flex-col items-center max-w-5xl px-4 mx-auto will-change-transform ${className}`}
    >
      {/* ============================================================== */}
      {/* SUSPENSION ROPES FROM BASKET (Desktop view) */}
      {/* ============================================================== */}
      <div className="hidden lg:block w-full h-10 -mb-1 relative pointer-events-none select-none">
        <svg
          viewBox="0 0 960 40"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Ropes originating from basket base (x: 480) to the 4 banner tops */}
          {/* Rope 1: to Banner 1 (approx x: 130) */}
          <path
            d="M 480 0 Q 320 22 135 40"
            stroke="#78350f"
            strokeWidth="1.2"
            strokeDasharray="3,1"
            opacity="0.75"
          />
          {/* Rope 2: to Banner 2 (approx x: 360) */}
          <path
            d="M 480 0 Q 425 20 365 40"
            stroke="#78350f"
            strokeWidth="1.2"
            strokeDasharray="3,1"
            opacity="0.75"
          />
          {/* Rope 3: to Banner 3 (approx x: 595) */}
          <path
            d="M 480 0 Q 535 20 595 40"
            stroke="#78350f"
            strokeWidth="1.2"
            strokeDasharray="3,1"
            opacity="0.75"
          />
          {/* Rope 4: to Banner 4 (approx x: 825) */}
          <path
            d="M 480 0 Q 640 22 825 40"
            stroke="#78350f"
            strokeWidth="1.2"
            strokeDasharray="3,1"
            opacity="0.75"
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* 4 HANGING BANNER CARDS */}
      {/* ============================================================== */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 w-full justify-items-center">
        {STATS_DATA.map((item) => (
          <div
            key={item.id}
            className="stat-banner-item group relative flex flex-col items-center opacity-0 will-change-transform w-full max-w-[210px]"
          >
            {/* Hanging Ring & Carabiner fixture */}
            <div className="hidden sm:flex flex-col items-center h-4 w-full pointer-events-none">
              <div className="w-[1.5px] h-full bg-amber-800/60" />
              <div className="w-2 h-2 rounded-full border border-amber-600 bg-amber-300 shadow-xs -mt-1" />
            </div>

            {/* Frosted Glass Banner Card */}
            <div className="w-full relative px-4 py-3 sm:px-4 sm:py-3.5 rounded-2xl backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border border-white/60 dark:border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_35px_rgba(0,0,0,0.12)] transition-all duration-300 text-center">
              {/* Top Gilded Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />

              {/* Impact Metric Number */}
              <div className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white flex items-center justify-center gap-0.5">
                {item.prefix && <span>{item.prefix}</span>}
                <span className="stat-number tabular-nums font-mono" data-target={item.targetNum}>
                  0
                </span>
                <span className="text-amber-500 font-bold ml-0.5">{item.suffix}</span>
              </div>

              {/* Metric Label */}
              <div className="mt-1 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-slate-800 dark:text-slate-100 line-clamp-1">
                {item.label}
              </div>

              {/* Sublabel */}
              <div className="text-[10px] tracking-wide text-slate-600 dark:text-slate-400 font-medium">
                {item.sublabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
