import React from 'react';

interface HotAirBalloonProps {
  className?: string;
}

export const HotAirBalloon: React.FC<HotAirBalloonProps> = ({ className = '' }) => {
  return (
    <div className={`relative select-none pointer-events-none ${className}`}>
      <style>{`
        @keyframes streamerWaveLeft {
          0%, 100% {
            transform: rotate(0deg) skewX(0deg);
          }
          50% {
            transform: rotate(5deg) skewX(3.5deg);
          }
        }
        @keyframes streamerWaveRight {
          0%, 100% {
            transform: rotate(0deg) skewX(0deg);
          }
          50% {
            transform: rotate(-5deg) skewX(-3.5deg);
          }
        }
        .streamer-flutter-left {
          animation: streamerWaveLeft 2.4s infinite ease-in-out;
          transform-origin: 163px 420px;
        }
        .streamer-flutter-right {
          animation: streamerWaveRight 2.8s infinite ease-in-out 0.4s;
          transform-origin: 217px 420px;
        }

        /* Active Hot Air Balloon Burner Flame Animations */
        @keyframes flameDanceMain {
          0%, 100% {
            transform: scale(1) skewX(0deg);
          }
          20% {
            transform: scale(1.05, 0.96) skewX(-1.5deg);
          }
          40% {
            transform: scale(0.96, 1.07) skewX(2deg);
          }
          60% {
            transform: scale(1.03, 0.98) skewX(-1.8deg);
          }
          80% {
            transform: scale(0.97, 1.04) skewX(1.2deg);
          }
        }
        @keyframes flameTongueLeft {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.92;
          }
          33% {
            transform: scale(1.12, 1.15) rotate(-3.5deg);
            opacity: 1;
          }
          66% {
            transform: scale(0.88, 0.92) rotate(2.5deg);
            opacity: 0.75;
          }
        }
        @keyframes flameTongueRight {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.88;
          }
          40% {
            transform: scale(0.9, 0.9) rotate(-2.5deg);
            opacity: 0.72;
          }
          75% {
            transform: scale(1.15, 1.18) rotate(3deg);
            opacity: 1;
          }
        }
        @keyframes flameCorePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.95;
          }
          50% {
            transform: scale(0.96, 1.1);
            opacity: 1;
          }
        }
        @keyframes flameHaloBreathe {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.85;
            transform: scale(1.14);
          }
        }
        @keyframes envelopeGlowBreath {
          0%, 100% {
            opacity: 0.32;
          }
          50% {
            opacity: 0.46;
          }
        }
        @keyframes emberFloat1 {
          0% {
            transform: translate(0px, 0px) scale(0.6);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 0.8;
          }
          100% {
            transform: translate(-14px, -65px) scale(1.1);
            opacity: 0;
          }
        }
        @keyframes emberFloat2 {
          0% {
            transform: translate(0px, 0px) scale(0.8);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 0.7;
          }
          100% {
            transform: translate(12px, -75px) scale(0.4);
            opacity: 0;
          }
        }
        @keyframes emberFloat3 {
          0% {
            transform: translate(0px, 0px) scale(0.5);
            opacity: 0;
          }
          30% {
            opacity: 0.95;
          }
          70% {
            opacity: 0.85;
          }
          100% {
            transform: translate(-6px, -82px) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes emberFloat4 {
          0% {
            transform: translate(0px, 0px) scale(0.7);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 0.6;
          }
          100% {
            transform: translate(8px, -60px) scale(0.9);
            opacity: 0;
          }
        }
        .flame-main-dance {
          animation: flameDanceMain 0.38s infinite ease-in-out;
          transform-origin: 190px 376px;
        }
        .flame-tongue-left {
          animation: flameTongueLeft 0.32s infinite ease-in-out;
          transform-origin: 184px 374px;
        }
        .flame-tongue-right {
          animation: flameTongueRight 0.42s infinite ease-in-out;
          transform-origin: 196px 374px;
        }
        .flame-core-pulse {
          animation: flameCorePulse 0.22s infinite ease-in-out alternate;
          transform-origin: 190px 376px;
        }
        .flame-halo-breathe {
          animation: flameHaloBreathe 0.55s infinite ease-in-out alternate;
          transform-origin: 190px 350px;
        }
        .envelope-glow-flicker {
          animation: envelopeGlowBreath 0.48s infinite ease-in-out alternate;
        }
        .ember-rise-1 {
          animation: emberFloat1 1.6s infinite ease-out;
        }
        .ember-rise-2 {
          animation: emberFloat2 1.9s infinite ease-out 0.4s;
        }
        .ember-rise-3 {
          animation: emberFloat3 2.2s infinite ease-out 0.8s;
        }
        .ember-rise-4 {
          animation: emberFloat4 1.7s infinite ease-out 1.2s;
        }

        @media (prefers-reduced-motion: reduce) {
          .streamer-flutter-left,
          .streamer-flutter-right,
          .flame-main-dance,
          .flame-tongue-left,
          .flame-tongue-right,
          .flame-core-pulse,
          .flame-halo-breathe,
          .envelope-glow-flicker,
          .ember-rise-1,
          .ember-rise-2,
          .ember-rise-3,
          .ember-rise-4 {
            animation: none;
          }
        }
      `}</style>
      <svg
        viewBox="0 0 380 490"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-2xl overflow-visible"
        aria-label="Majestic Hot Air Balloon"
      >
        <defs>
          {/* Envelope 3D Volume Light Gradient */}
          <radialGradient
            id="envelopeShade"
            cx="32%"
            cy="28%"
            r="68%"
            fx="30%"
            fy="25%"
          >
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.55" />
          </radialGradient>

          {/* Balloon Gore Gradients */}
          {/* Coral / Crimson Gore */}
          <linearGradient id="goreCoral" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="50%" stopColor="#f43f5e" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>

          {/* Sunburst Amber Gore */}
          <linearGradient id="goreAmber" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Midnight Indigo Gore */}
          <linearGradient id="goreIndigo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="50%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#1e1b4b" />
          </linearGradient>

          {/* Emerald / Teal Gore */}
          <linearGradient id="goreTeal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="50%" stopColor="#0d9488" />
            <stop offset="100%" stopColor="#115e59" />
          </linearGradient>

          {/* Champagne Cream Gore */}
          <linearGradient id="goreCream" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>

          {/* Gilded Gold Trim Gradient */}
          <linearGradient id="goldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          {/* Basket Wicker Texture Gradient */}
          <linearGradient id="wickerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92400e" />
            <stop offset="40%" stopColor="#b45309" />
            <stop offset="80%" stopColor="#78350f" />
            <stop offset="100%" stopColor="#451a03" />
          </linearGradient>

          {/* Burner Flame Gradients */}
          {/* Electric Blue Propane Combustion Root Gradient */}
          <linearGradient id="flameBlueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>

          {/* Outer Roaring Flame Gradient */}
          <linearGradient id="flameOuterGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.95" />
            <stop offset="25%" stopColor="#ea580c" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#f59e0b" stopOpacity="0.95" />
            <stop offset="90%" stopColor="#fde047" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#fef08a" stopOpacity="0" />
          </linearGradient>

          {/* Dynamic Licking Tongue Gradient */}
          <linearGradient id="flameTongueGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="0.92" />
            <stop offset="45%" stopColor="#f59e0b" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#fef08a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Intense Hot Core Gradient */}
          <linearGradient id="flameInnerGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="35%" stopColor="#facc15" />
            <stop offset="75%" stopColor="#fef9c3" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Radial Heat Glow Halo */}
          <radialGradient id="flameHaloGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
            <stop offset="30%" stopColor="#fb923c" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#ea580c" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="envelopeIgnitionGrad" cx="50%" cy="100%" r="75%">
            <stop offset="0%" stopColor="#fff7ae" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#fb923c" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
          </radialGradient>

          {/* Glow Filters */}
          <filter id="flameGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="lanternGlowFilter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Shadow for Envelope */}
          <filter id="balloonShadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="16" stdDeviation="22" floodColor="#0f172a" floodOpacity="0.32" />
          </filter>

          {/* Dynamic Time-of-Day Balloon Lighting Shaders */}
          {/* Dawn: Soft morning peach / rose rim light */}
          <radialGradient id="envelopeDawnLight" cx="68%" cy="42%" r="65%">
            <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.55" />
            <stop offset="40%" stopColor="#fb7185" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
          </radialGradient>

          {/* High Noon: Crisp high-altitude specular sunbeam */}
          <radialGradient id="envelopeDayLight" cx="35%" cy="20%" r="55%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.58" />
            <stop offset="35%" stopColor="#bae6fd" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
          </radialGradient>

          {/* Sunset: Warm amber-gold and fiery crimson edge rim */}
          <radialGradient id="envelopeSunsetLight" cx="22%" cy="48%" r="68%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
            <stop offset="32%" stopColor="#f97316" stopOpacity="0.5" />
            <stop offset="72%" stopColor="#be123c" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#2e1065" stopOpacity="0" />
          </radialGradient>

          {/* Dusk: Cool moonlight deep indigo shading */}
          <radialGradient id="envelopeDuskLight" cx="48%" cy="25%" r="72%">
            <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#312e81" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#020617" stopOpacity="0.55" />
          </radialGradient>

          {/* Dusk: Warm lantern glow bounced onto envelope skirt */}
          <radialGradient id="envelopeLanternBounceLight" cx="50%" cy="100%" r="42%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
            <stop offset="48%" stopColor="#f59e0b" stopOpacity="0.32" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ============================================================== */}
        {/* BALLOON ENVELOPE (AERODYNAMIC BULB) */}
        {/* ============================================================== */}
        <g id="balloon-envelope" filter="url(#balloonShadow)">
          {/* Main Envelope Silhouette Clip Path */}
          <clipPath id="envelopeClip">
            <path d="M 190 28 C 280 28, 342 94, 342 186 C 342 248, 292 298, 246 348 L 134 348 C 88 298, 38 248, 38 186 C 38 94, 100 28, 190 28 Z" />
          </clipPath>

          <g clipPath="url(#envelopeClip)">
            {/* Outer Background Base */}
            <rect x="30" y="20" width="320" height="340" fill="#1e1b4b" />

            {/* Gore 1: Far Left (Teal) */}
            <path
              d="M 190 28 C 110 32, 38 110, 38 186 C 38 250, 88 300, 134 348 L 152 348 C 110 298, 70 248, 70 186 C 70 110, 130 35, 190 28 Z"
              fill="url(#goreTeal)"
            />

            {/* Gore 2: Mid Left (Amber / Gold) */}
            <path
              d="M 190 28 C 135 34, 75 110, 75 186 C 75 250, 115 300, 154 348 L 172 348 C 140 298, 110 248, 110 186 C 110 110, 155 35, 190 28 Z"
              fill="url(#goreAmber)"
            />

            {/* Gore 3: Left-Center (Coral / Crimson) */}
            <path
              d="M 190 28 C 155 35, 110 110, 110 186 C 110 248, 140 298, 172 348 L 188 348 C 165 298, 150 248, 150 186 C 150 110, 175 35, 190 28 Z"
              fill="url(#goreCoral)"
            />

            {/* Gore 4: Center (Champagne Cream with Royal Accent) */}
            <path
              d="M 190 28 C 175 35, 150 110, 150 186 C 150 248, 165 298, 188 348 L 192 348 C 215 298, 230 248, 230 186 C 230 110, 205 35, 190 28 Z"
              fill="url(#goreCream)"
            />

            {/* Gore 5: Center-Right (Coral / Crimson) */}
            <path
              d="M 190 28 C 205 35, 230 110, 230 186 C 230 248, 215 298, 192 348 L 208 348 C 240 298, 270 248, 270 186 C 270 110, 225 35, 190 28 Z"
              fill="url(#goreCoral)"
            />

            {/* Gore 6: Mid Right (Amber / Gold) */}
            <path
              d="M 190 28 C 225 34, 270 110, 270 186 C 270 250, 240 298, 208 348 L 226 348 C 265 300, 305 250, 305 186 C 305 110, 245 34, 190 28 Z"
              fill="url(#goreAmber)"
            />

            {/* Gore 7: Far Right (Teal) */}
            <path
              d="M 190 28 C 245 34, 305 110, 305 186 C 305 250, 265 300, 226 348 L 246 348 C 292 298, 342 248, 342 186 C 342 110, 270 32, 190 28 Z"
              fill="url(#goreTeal)"
            />

            {/* Equator Chevron Pattern Bands (Luxury Airship Aesthetic) */}
            <g opacity="0.92">
              {/* Band 1 - Upper Gold */}
              <path
                d="M 46 160 Q 190 195 334 160 L 338 174 Q 190 209 42 174 Z"
                fill="url(#goldTrim)"
              />
              {/* Band 2 - Middle Indigo Diamond Accent */}
              <path
                d="M 42 174 Q 190 209 338 174 L 341 188 Q 190 223 39 188 Z"
                fill="url(#goreIndigo)"
              />
              {/* Band 3 - Lower Gold */}
              <path
                d="M 39 188 Q 190 223 341 188 L 342 200 Q 190 235 38 200 Z"
                fill="url(#goldTrim)"
              />
              {/* Star / Diamond Motifs along equator */}
              <circle cx="190" cy="198" r="4.5" fill="#ffffff" />
              <circle cx="140" cy="192" r="3.5" fill="#fef08a" />
              <circle cx="240" cy="192" r="3.5" fill="#fef08a" />
              <circle cx="95" cy="180" r="3" fill="#fef08a" />
              <circle cx="285" cy="180" r="3" fill="#fef08a" />
            </g>

            {/* Gore Ridge Seam Lines */}
            <path d="M 190 28 L 190 348" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
            <path d="M 190 28 C 165 35, 150 110, 150 186 C 150 248, 165 298, 188 348" stroke="rgba(0,0,0,0.22)" strokeWidth="1" fill="none" />
            <path d="M 190 28 C 215 35, 230 110, 230 186 C 230 248, 215 298, 192 348" stroke="rgba(0,0,0,0.22)" strokeWidth="1" fill="none" />
            <path d="M 190 28 C 135 34, 75 110, 75 186 C 75 250, 115 300, 154 348" stroke="rgba(0,0,0,0.28)" strokeWidth="1" fill="none" />
            <path d="M 190 28 C 245 34, 305 110, 305 186 C 305 250, 265 300, 226 348" stroke="rgba(0,0,0,0.28)" strokeWidth="1" fill="none" />

            {/* Specular 3D Highlight & Shadow Overlay */}
            <rect x="30" y="20" width="320" height="340" fill="url(#envelopeShade)" />

            {/* Dynamic Time-of-Day Lighting Layers */}
            <rect id="envelope-light-dawn" x="30" y="20" width="320" height="340" fill="url(#envelopeDawnLight)" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
            <rect id="envelope-light-day" x="30" y="20" width="320" height="340" fill="url(#envelopeDayLight)" opacity="0" style={{ mixBlendMode: 'screen' }} />
            <rect id="envelope-light-sunset" x="30" y="20" width="320" height="340" fill="url(#envelopeSunsetLight)" opacity="0" style={{ mixBlendMode: 'screen' }} />
            <rect id="envelope-light-dusk" x="30" y="20" width="320" height="340" fill="url(#envelopeDuskLight)" opacity="0" style={{ mixBlendMode: 'multiply' }} />
            <rect id="envelope-light-lantern-bounce" x="30" y="20" width="320" height="340" fill="url(#envelopeLanternBounceLight)" opacity="0" style={{ mixBlendMode: 'screen' }} />

            <ellipse
              id="envelope-ignition-glow"
              className="envelope-glow-flicker"
              cx="190"
              cy="320"
              rx="145"
              ry="130"
              fill="url(#envelopeIgnitionGrad)"
              opacity="0.32"
              filter="url(#flameGlowFilter)"
            />
          </g>

          {/* Top Crown Ring & Vent Cap */}
          <ellipse cx="190" cy="28" rx="22" ry="7" fill="url(#goldTrim)" />
          <ellipse cx="190" cy="27" rx="14" ry="4" fill="#991b1b" />
          <path d="M 190 23 L 190 14" stroke="url(#goldTrim)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="190" cy="12" r="3" fill="#fef08a" />

          {/* Lower Burner Collar / Scalloped Skirt */}
          <path
            d="M 130 348 C 145 356, 175 356, 190 354 C 205 356, 235 356, 250 348 L 244 362 C 230 366, 190 366, 136 362 Z"
            fill="#1e293b"
            stroke="url(#goldTrim)"
            strokeWidth="1.5"
          />
          {/* Collar Rivets */}
          <circle cx="150" cy="358" r="2" fill="#fef08a" />
          <circle cx="170" cy="360" r="2" fill="#fef08a" />
          <circle cx="190" cy="360.5" r="2.2" fill="#fef08a" />
          <circle cx="210" cy="360" r="2" fill="#fef08a" />
          <circle cx="230" cy="358" r="2" fill="#fef08a" />
        </g>

        {/* ============================================================== */}
        {/* BURNER & DYNAMIC FLAME */}
        {/* ============================================================== */}
        <g id="balloon-burner" className="gpu-layer">
          {/* Burner Coils Frame */}
          <path d="M 175 374 L 205 374 L 202 384 L 178 384 Z" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
          <path d="M 172 376 Q 190 368 208 376" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
          <path d="M 174 380 Q 190 372 206 380" stroke="#f59e0b" strokeWidth="2" fill="none" />

          {/* Dynamic Active Burner Flame */}
          <g id="burner-flame-group" className="will-change-transform">
            {/* Ambient Heat Glow Halo */}
            <circle
              id="flame-glow-halo"
              className="flame-halo-breathe"
              cx="190"
              cy="348"
              r="44"
              fill="url(#flameHaloGrad)"
              filter="url(#flameGlowFilter)"
            />

            {/* Main Roaring Flame Body */}
            <path
              id="flame-outer"
              className="flame-main-dance"
              d="M 178 376 C 168 358, 166 332, 190 302 C 214 332, 212 358, 202 376 C 195 379, 185 379, 178 376 Z"
              fill="url(#flameOuterGrad)"
              filter="url(#flameGlowFilter)"
            />

            {/* Left Dynamic Flame Tongue */}
            <path
              id="flame-tongue-1"
              className="flame-tongue-left"
              d="M 179 375 C 170 358, 169 334, 182 314 C 187 332, 188 354, 188 375 Z"
              fill="url(#flameTongueGrad)"
            />

            {/* Right Dynamic Flame Tongue */}
            <path
              id="flame-tongue-2"
              className="flame-tongue-right"
              d="M 192 375 C 192 354, 193 332, 198 316 C 210 336, 210 358, 201 375 Z"
              fill="url(#flameTongueGrad)"
            />

            {/* Intense Incandescent Core Flame */}
            <path
              id="flame-inner"
              className="flame-core-pulse"
              d="M 183 376 C 176 362, 179 344, 190 326 C 201 344, 204 362, 197 376 C 193 378, 187 378, 183 376 Z"
              fill="url(#flameInnerGrad)"
            />

            {/* Electric Blue Propane Nozzle Combustion Root */}
            <path
              id="flame-blue-root"
              d="M 177 378 C 175 371, 181 366, 190 366 C 199 366, 205 371, 203 378 C 197 381, 183 381, 177 378 Z"
              fill="url(#flameBlueGrad)"
            />
            <ellipse cx="190" cy="377" rx="8" ry="3" fill="#e0f2fe" opacity="0.9" />
          </g>

          <g id="burner-embers" className="pointer-events-none">
            {/* Continuous Rising Embers drifting into balloon throat */}
            <circle className="ember-rise-1" cx="187" cy="364" r="1.8" fill="#fef08a" />
            <circle className="ember-rise-2" cx="193" cy="366" r="1.5" fill="#f59e0b" />
            <circle className="ember-rise-3" cx="184" cy="368" r="2.1" fill="#fff7ae" />
            <circle className="ember-rise-4" cx="196" cy="362" r="1.4" fill="#fb923c" />
            <circle className="ember-rise-1" cx="191" cy="370" r="1.6" fill="#fef9c3" />
            <circle className="ember-rise-2" cx="182" cy="372" r="1.3" fill="#ea580c" />
            <circle className="ember-rise-3" cx="198" cy="368" r="1.7" fill="#fef08a" />
          </g>
        </g>

        {/* ============================================================== */}
        {/* RIGGING SUSPENSION ROPES */}
        {/* ============================================================== */}
        <g id="balloon-gondola-sway">
        <g id="balloon-rigging" stroke="#78350f" strokeWidth="1.3" opacity="0.85">
          {/* Envelope to Burner & Basket Ropes */}
          <line x1="138" y1="362" x2="166" y2="420" />
          <line x1="148" y1="364" x2="170" y2="420" />
          <line x1="162" y1="366" x2="178" y2="420" />
          <line x1="184" y1="367" x2="184" y2="384" />
          <line x1="196" y1="367" x2="196" y2="384" />
          <line x1="218" y1="366" x2="202" y2="420" />
          <line x1="232" y1="364" x2="210" y2="420" />
          <line x1="242" y1="362" x2="214" y2="420" />

          {/* Cross Support Straps for Basket */}
          <line x1="166" y1="420" x2="178" y2="384" stroke="#92400e" strokeWidth="0.8" opacity="0.6" />
          <line x1="214" y1="420" x2="202" y2="384" stroke="#92400e" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* ============================================================== */}
        {/* WICKER BASKET (GONDOLA) */}
        {/* ============================================================== */}
        <g id="balloon-basket" className="gpu-layer">
          {/* Basket Drop Shadow */}
          <ellipse cx="190" cy="468" rx="28" ry="6" fill="#000000" opacity="0.3" filter="url(#flameGlowFilter)" />

          {/* Main Wicker Body */}
          <path
            d="M 164 422 L 216 422 L 210 460 C 209 464, 205 466, 200 466 L 180 466 C 175 466, 171 464, 170 460 Z"
            fill="url(#wickerGrad)"
            stroke="#451a03"
            strokeWidth="1.5"
          />

          {/* Wicker Weave Texture Lines */}
          <g stroke="#78350f" strokeWidth="1" opacity="0.75">
            <line x1="166" y1="428" x2="214" y2="428" />
            <line x1="168" y1="436" x2="212" y2="436" />
            <line x1="169" y1="444" x2="211" y2="444" />
            <line x1="170" y1="452" x2="210" y2="452" />
            <line x1="171" y1="460" x2="209" y2="460" />

            {/* Vertical Ribs */}
            <line x1="174" y1="422" x2="175" y2="466" />
            <line x1="184" y1="422" x2="183" y2="466" />
            <line x1="190" y1="422" x2="190" y2="466" />
            <line x1="196" y1="422" x2="197" y2="466" />
            <line x1="206" y1="422" x2="205" y2="466" />
          </g>

          {/* Leather-Padded Basket Rim */}
          <rect x="162" y="418" width="56" height="6" rx="3" fill="#581c87" stroke="url(#goldTrim)" strokeWidth="1.2" />

          {/* Aerodynamic Silk Pennant Streamers */}
          <g id="balloon-basket-streamers" className="gpu-layer will-change-transform">
            {/* Left Amber/Gold Streamer */}
            <path
              id="streamer-left"
              className="streamer-flutter-left"
              d="M 163 420 C 153 436, 150 452, 155 468 C 158 480, 150 492, 154 506 L 149 507 C 144 492, 152 480, 149 468 C 145 452, 148 436, 161 420 Z"
              fill="url(#goldTrim)"
              opacity="0.9"
            />
            {/* Right Coral/Crimson Streamer */}
            <path
              id="streamer-right"
              className="streamer-flutter-right"
              d="M 217 420 C 227 436, 230 452, 225 468 C 222 480, 230 492, 226 506 L 231 507 C 236 492, 228 480, 231 468 C 235 452, 232 436, 219 420 Z"
              fill="url(#goreCoral)"
              opacity="0.85"
            />
          </g>

          {/* Ballast Sandbags */}
          <g id="sandbags">
            {/* Left Sandbag */}
            <path
              d="M 160 435 C 158 438, 155 448, 157 452 C 159 455, 164 454, 164 450 C 164 446, 162 438, 160 435 Z"
              fill="#d97706"
              stroke="#78350f"
              strokeWidth="0.8"
            />
            <line x1="163" y1="424" x2="160" y2="435" stroke="#78350f" strokeWidth="1" />

            {/* Right Sandbag */}
            <path
              d="M 220 435 C 222 438, 225 448, 223 452 C 221 455, 216 454, 216 450 C 216 446, 218 438, 220 435 Z"
              fill="#d97706"
              stroke="#78350f"
              strokeWidth="0.8"
            />
            <line x1="217" y1="424" x2="220" y2="435" stroke="#78350f" strokeWidth="1" />
          </g>

          {/* Antique Brass Telescope / Mast */}
          <path d="M 210 418 L 224 402 L 226 404 L 212 420 Z" fill="url(#goldTrim)" />

          {/* Twilight Beacon / Evening Lantern hanging under basket */}
          <g id="basket-lantern" className="will-change-transform">
            <line x1="190" y1="466" x2="190" y2="475" stroke="#451a03" strokeWidth="1.2" />
            <rect x="186" y="475" width="8" height="10" rx="2" fill="#334155" stroke="url(#goldTrim)" strokeWidth="0.8" />
            {/* Lantern Glass & Glow */}
            <rect x="187.5" y="477" width="5" height="6" rx="1" fill="#fef08a" />
            {/* Glowing Lantern Halo (scrubbed opacity on sunset/dusk) */}
            <circle
              id="lantern-glow-halo"
              cx="190"
              cy="480"
              r="24"
              fill="rgba(254, 240, 138, 0.45)"
              filter="url(#lanternGlowFilter)"
              className="opacity-0 transition-opacity duration-700"
            />
          </g>
        </g>
        </g>
      </svg>
    </div>
  );
};
