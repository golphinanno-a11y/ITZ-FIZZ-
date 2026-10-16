import React from 'react';

interface BirdsProps {
  className?: string;
}

const FLOCK_BIRDS = [
  { x: 220, y: 75, scale: 1, delay: '' },
  { x: 155, y: 39, scale: 0.78, delay: 'bird-delay-1' },
  { x: 108, y: 100, scale: 0.68, delay: 'bird-delay-2' },
  { x: 287, y: 44, scale: 0.82, delay: 'bird-delay-2' },
  { x: 339, y: 100, scale: 0.64, delay: 'bird-delay-3' },
  { x: 58, y: 156, scale: 0.54, delay: 'bird-delay-1' },
  { x: 100, y: 43, scale: 0.46, delay: 'bird-delay-3' },
  { x: 371, y: 40, scale: 0.5, delay: 'bird-delay-1' },
  { x: 181, y: 157, scale: 0.56, delay: 'bird-delay-3' },
  { x: 264, y: 158, scale: 0.44, delay: 'bird-delay-2' },
  { x: 421, y: 123, scale: 0.4, delay: 'bird-delay-3' },
  { x: 24, y: 92, scale: 0.38, delay: 'bird-delay-2' },
];

export const Birds: React.FC<BirdsProps> = ({ className = '' }) => {
  return (
    <div
      id="birds-flock"
      className={`absolute pointer-events-none select-none will-change-transform opacity-0 gpu-layer ${className}`}
      style={{
        top: '22%',
        left: '0%',
        width: 'min(500px, 92vw)',
        height: 'min(250px, 50vw)',
      }}
    >
      <style>{`
        @keyframes birdWingLeft {
          0%, 100% { transform: rotate(22deg); }
          50% { transform: rotate(-25deg); }
        }
        @keyframes birdWingRight {
          0%, 100% { transform: rotate(-22deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes birdBodyGlide {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.5px); }
        }
        .bird-wing-l {
          animation: birdWingLeft 0.62s infinite ease-in-out;
          transform-box: fill-box;
          transform-origin: 100% 85%;
        }
        .bird-wing-r {
          animation: birdWingRight 0.62s infinite ease-in-out;
          transform-box: fill-box;
          transform-origin: 0% 85%;
        }
        .bird-flight {
          animation: birdBodyGlide 1.24s infinite ease-in-out;
        }
        .bird-delay-1 .bird-wing-l, .bird-delay-1 .bird-wing-r {
          animation-delay: 0.12s;
        }
        .bird-delay-2 .bird-wing-l, .bird-delay-2 .bird-wing-r {
          animation-delay: 0.24s;
        }
        .bird-delay-3 .bird-wing-l, .bird-delay-3 .bird-wing-r {
          animation-delay: 0.36s;
        }
        .bird-delay-1 .bird-flight {
          animation-delay: 0.12s;
        }
        .bird-delay-2 .bird-flight {
          animation-delay: 0.24s;
        }
        .bird-delay-3 .bird-flight {
          animation-delay: 0.36s;
        }
        @media (prefers-reduced-motion: reduce) {
          .bird-wing-l, .bird-wing-r, .bird-flight {
            animation: none;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 500 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_3px_5px_rgba(15,23,42,0.3)]"
        aria-label="Flock of birds migrating across the daytime sky"
      >
        <defs>
          <linearGradient id="birdSilhouette" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="55%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>
          <filter id="birdShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {FLOCK_BIRDS.map(({ x, y, scale, delay }, index) => (
          <g
            key={`${x}-${y}`}
            transform={`translate(${x}, ${y}) scale(${scale})`}
            className={delay}
            opacity={index > 5 ? 0.72 : 1}
          >
            <ellipse cx="0" cy="3" rx="31" ry="3.8" fill="#0f172a" opacity="0.18" filter="url(#birdShadow)" />
            <g className="bird-flight">
              <path
                className="bird-wing-l"
                d="M -2 0 C -9 -7 -17 -19 -37 -28 C -33 -21 -35 -18 -44 -17 C -36 -13 -38 -10 -46 -8 C -36 -6 -33 -2 -38 2 C -26 -1 -17 0 -7 7 Z"
                fill="url(#birdSilhouette)"
              />
              <path
                className="bird-wing-r"
                d="M 2 0 C 9 -7 17 -19 37 -28 C 33 -21 35 -18 44 -17 C 36 -13 38 -10 46 -8 C 36 -6 33 -2 38 2 C 26 -1 17 0 7 7 Z"
                fill="url(#birdSilhouette)"
              />
              <path d="M -7 1 C -4 -3 2 -4 8 -1 L 14 2 L 8 4 C 2 7 -4 6 -7 1 Z" fill="#0f172a" />
              <ellipse cx="8" cy="-2" rx="4.2" ry="4" fill="#0f172a" />
              <path d="M 11 -2 L 19 0 L 11 1 Z" fill="#0f172a" />
              <path d="M -6 3 C -12 8 -17 12 -23 12 C -17 8 -15 4 -14 1 Z" fill="#0f172a" />
              <path d="M -4 3 C -8 9 -10 13 -16 15 C -12 10 -11 6 -12 3 Z" fill="#0f172a" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};
