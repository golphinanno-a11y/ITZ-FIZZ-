import React from 'react';

export const SunlightRays: React.FC = () => (
  <div
    id="sunlight-rays"
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-[5] overflow-hidden opacity-0"
    style={{ mixBlendMode: 'screen' }}
  >
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="sunbeam-warm" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#fff2c7" stopOpacity="0" />
          <stop offset="45%" stopColor="#fff2c7" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#fffaf0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sunbeam-gold" x1="50%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#ffd59a" stopOpacity="0" />
          <stop offset="52%" stopColor="#ffd59a" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#fffaf0" stopOpacity="0" />
        </linearGradient>
        <filter id="sunbeam-soften" x="-20%" y="-10%" width="140%" height="120%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>
      <g id="sunbeam-fan" filter="url(#sunbeam-soften)" opacity="0.9">
        <path d="M 548 604 L 165 0 L 470 0 Z" fill="url(#sunbeam-warm)" />
        <path d="M 548 604 L 465 0 L 700 0 Z" fill="url(#sunbeam-gold)" />
        <path d="M 548 604 L 684 0 L 933 0 Z" fill="url(#sunbeam-warm)" />
        <path d="M 548 604 L 940 0 L 1240 0 Z" fill="url(#sunbeam-gold)" />
        <path d="M 548 604 L 1225 0 L 1440 46 L 1440 196 Z" fill="url(#sunbeam-warm)" />
      </g>
      <ellipse
        cx="548"
        cy="605"
        rx="340"
        ry="108"
        fill="#fff2d6"
        fillOpacity="0.15"
        filter="url(#sunbeam-soften)"
      />
    </svg>
  </div>
);

export const WindRibbons: React.FC = () => (
  <div
    id="wind-ribbons"
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 z-[12] overflow-hidden opacity-0"
    style={{ mixBlendMode: 'screen' }}
  >
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="wind-ribbon-pearl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="34%" stopColor="#fff8eb" stopOpacity="0.72" />
          <stop offset="66%" stopColor="#dff5ff" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="wind-ribbon-gold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fff6dd" stopOpacity="0" />
          <stop offset="45%" stopColor="#ffe9c2" stopOpacity="0.58" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="wind-ribbon-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <g
        fill="none"
        strokeLinecap="round"
        strokeDasharray="1"
        pathLength="1"
      >
        <g filter="url(#wind-ribbon-glow)" opacity="0.3">
          <path
            d="M -100 565 C 180 410 390 486 560 430 C 690 386 780 245 955 240 C 1120 235 1240 352 1535 258"
            stroke="#fff2d6"
            strokeWidth="18"
          />
          <path
            d="M -130 335 C 120 490 355 390 518 468 C 674 543 735 650 930 628 C 1135 605 1275 465 1540 575"
            stroke="#dff5ff"
            strokeWidth="14"
          />
          <path
            d="M -120 720 C 155 598 380 666 540 590 C 680 524 760 435 905 456 C 1090 484 1260 690 1540 640"
            stroke="#ffe8bf"
            strokeWidth="12"
          />
        </g>
        <path
          id="wind-ribbon-upper"
          d="M -100 565 C 180 410 390 486 560 430 C 690 386 780 245 955 240 C 1120 235 1240 352 1535 258"
          stroke="url(#wind-ribbon-pearl)"
          strokeWidth="2.4"
          strokeDashoffset="1"
        />
        <path
          id="wind-ribbon-middle"
          d="M -130 335 C 120 490 355 390 518 468 C 674 543 735 650 930 628 C 1135 605 1275 465 1540 575"
          stroke="url(#wind-ribbon-gold)"
          strokeWidth="1.8"
          strokeDashoffset="1"
        />
        <path
          id="wind-ribbon-lower"
          d="M -120 720 C 155 598 380 666 540 590 C 680 524 760 435 905 456 C 1090 484 1260 690 1540 640"
          stroke="url(#wind-ribbon-pearl)"
          strokeWidth="1.5"
          strokeDashoffset="1"
        />
      </g>
    </svg>
  </div>
);
