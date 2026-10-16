import React from 'react';

interface StarsLayerProps {
  className?: string;
}

export const StarsLayer: React.FC<StarsLayerProps> = ({ className = '' }) => {
  // Pre-calculated star distribution coordinates for performance & determinism
  const stars = [
    { x: '8%', y: '12%', size: 2.5, type: 'cross', delay: 'animate-twinkle-slow' },
    { x: '14%', y: '24%', size: 1.5, type: 'dot', delay: 'animate-twinkle-fast' },
    { x: '22%', y: '8%', size: 2.0, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '28%', y: '18%', size: 3.0, type: 'cross', delay: 'animate-twinkle-slow' },
    { x: '35%', y: '10%', size: 1.2, type: 'dot', delay: 'animate-twinkle-fast' },
    { x: '42%', y: '22%', size: 2.2, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '50%', y: '14%', size: 3.5, type: 'cross', delay: 'animate-twinkle-slow' },
    { x: '58%', y: '8%', size: 1.8, type: 'dot', delay: 'animate-twinkle-fast' },
    { x: '64%', y: '26%', size: 2.0, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '72%', y: '12%', size: 3.2, type: 'cross', delay: 'animate-twinkle-slow' },
    { x: '80%', y: '22%', size: 1.5, type: 'dot', delay: 'animate-twinkle-fast' },
    { x: '88%', y: '16%', size: 2.8, type: 'cross', delay: 'animate-twinkle-delay' },
    { x: '94%', y: '10%', size: 1.4, type: 'dot', delay: 'animate-twinkle-slow' },
    
    // Mid sky stars
    { x: '6%', y: '36%', size: 1.5, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '18%', y: '42%', size: 2.4, type: 'cross', delay: 'animate-twinkle-fast' },
    { x: '25%', y: '32%', size: 1.2, type: 'dot', delay: 'animate-twinkle-slow' },
    { x: '38%', y: '38%', size: 2.0, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '68%', y: '40%', size: 1.6, type: 'dot', delay: 'animate-twinkle-fast' },
    { x: '78%', y: '34%', size: 2.6, type: 'cross', delay: 'animate-twinkle-slow' },
    { x: '86%', y: '44%', size: 1.8, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '92%', y: '32%', size: 2.2, type: 'dot', delay: 'animate-twinkle-fast' },

    // Lower night sky stars
    { x: '12%', y: '58%', size: 1.4, type: 'dot', delay: 'animate-twinkle-slow' },
    { x: '24%', y: '64%', size: 2.0, type: 'dot', delay: 'animate-twinkle-delay' },
    { x: '76%', y: '56%', size: 2.5, type: 'cross', delay: 'animate-twinkle-fast' },
    { x: '84%', y: '68%', size: 1.6, type: 'dot', delay: 'animate-twinkle-slow' },
  ];

  return (
    <div
      id="stars-container"
      className={`absolute inset-0 pointer-events-none select-none will-change-transform opacity-0 gpu-layer ${className}`}
    >
      {/* ============================================================== */}
      {/* LUMINOUS CRESCENT MOON */}
      {/* ============================================================== */}
      <div
        className="absolute top-[12%] right-[14%] w-24 h-24 sm:w-28 sm:h-28"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#a5b4fc" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#4338ca" stopOpacity="0" />
            </radialGradient>
            <filter id="moonSoftFilter" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" />
            </filter>
          </defs>

          {/* Ambient Celestial Halo */}
          <circle cx="50" cy="50" r="45" fill="url(#moonGlow)" filter="url(#moonSoftFilter)" />

          {/* Glowing Crescent Moon */}
          <path
            d="M 50 15 
               C 70 15, 85 30, 85 50 
               C 85 70, 70 85, 50 85 
               C 62 75, 68 62, 68 50 
               C 68 38, 62 25, 50 15 Z"
            fill="#fef9c3"
            filter="drop-shadow(0 0 8px rgba(254, 240, 138, 0.7))"
          />
        </svg>
      </div>

      <svg
        id="finale-constellation"
        viewBox="0 0 180 120"
        aria-hidden="true"
        className="absolute top-[20%] left-1/2 w-36 sm:w-44 h-auto -translate-x-1/2 overflow-visible"
      >
        <path
          d="M 14 82 L 48 34 L 86 68 L 124 26 L 163 54"
          pathLength="1"
          stroke="#dbeafe"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1"
          strokeDashoffset="1"
          opacity="0"
        />
        <path
          d="M 48 34 L 76 14 M 86 68 L 104 104"
          pathLength="1"
          stroke="#c4b5fd"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="1"
          strokeDashoffset="1"
          opacity="0"
        />
        {[
          { cx: 14, cy: 82 },
          { cx: 48, cy: 34 },
          { cx: 86, cy: 68 },
          { cx: 124, cy: 26 },
          { cx: 163, cy: 54 },
          { cx: 76, cy: 14 },
          { cx: 104, cy: 104 },
        ].map((star) => (
          <circle
            key={`${star.cx}-${star.cy}`}
            className="constellation-star"
            cx={star.cx}
            cy={star.cy}
            r="2.8"
            fill="#ffffff"
            opacity="0"
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}
      </svg>

      {/* ============================================================== */}
      {/* SHOOTING STAR METEOR STREAK */}
      {/* ============================================================== */}
      <div
        className="absolute top-[18%] left-[22%] w-32 h-1 -rotate-35 opacity-70"
        style={{
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 85%, #ffffff 100%)',
          borderRadius: '9999px',
          filter: 'drop-shadow(0 0 4px #bae6fd)',
        }}
      />

      {/* ============================================================== */}
      {/* TWINKLING CONSTELLATIONS & STARS */}
      {/* ============================================================== */}
      {stars.map((star, idx) => (
        <div
          key={idx}
          className={`absolute flex items-center justify-center ${star.delay}`}
          style={{
            top: star.y,
            left: star.x,
            width: `${star.size * 5}px`,
            height: `${star.size * 5}px`,
          }}
        >
          {star.type === 'cross' ? (
            <svg viewBox="0 0 20 20" className="w-full h-full text-white/90">
              <path
                d="M 10 0 L 10 20 M 0 10 L 20 10 M 4 4 L 16 16 M 4 16 L 16 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />
              <circle cx="10" cy="10" r="2.5" fill="#ffffff" />
            </svg>
          ) : (
            <div
              className="rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};
