import React from 'react';

interface CloudLayersProps {
  className?: string;
}

export const CloudLayers: React.FC<CloudLayersProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}>
      {/* ============================================================== */}
      {/* 1. BACKGROUND CIRRUS CLOUDS (High Altitude & Translucent) */}
      {/* ============================================================== */}
      <div
        id="clouds-bg"
        className="absolute inset-0 w-full h-full will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="cirrusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05" />
              <stop offset="30%" stopColor="#fef08a" stopOpacity="0.3" />
              <stop offset="70%" stopColor="#fed7aa" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
            </linearGradient>
            <filter id="cirrusBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" />
            </filter>
            <linearGradient id="cirrusEdge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="48%" stopColor="#fffdf8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* High Wispy Feathery Streaks */}
          <g id="cirrus-cloud-drift" filter="url(#cirrusBlur)">
            <path
              d="M 80 140 Q 380 90 680 130 T 1320 110 Q 1400 120 1440 140 L 1440 190 Q 1100 150 780 180 T 80 190 Z"
              fill="url(#cirrusGrad)"
            />
            <path
              d="M 200 240 Q 520 200 860 230 T 1400 210 L 1400 260 Q 940 240 540 270 T 200 280 Z"
              fill="url(#cirrusGrad)"
              opacity="0.7"
            />
            <path
              d="M 0 320 Q 340 280 720 310 T 1280 290 L 1280 340 Q 860 320 420 350 T 0 360 Z"
              fill="url(#cirrusGrad)"
              opacity="0.5"
            />
          </g>
          <g
            fill="none"
            stroke="url(#cirrusEdge)"
            strokeLinecap="round"
            opacity="0.56"
          >
            <path d="M 90 142 C 260 105 355 114 520 125" strokeWidth="2" />
            <path d="M 400 131 C 595 96 735 112 870 120" strokeWidth="1.4" />
            <path d="M 840 118 C 1010 88 1185 100 1340 116" strokeWidth="1.8" />
            <path d="M 190 246 C 360 214 470 220 610 231" strokeWidth="1.5" />
            <path d="M 735 235 C 930 205 1090 218 1270 227" strokeWidth="1.8" />
          </g>
        </svg>
      </div>

      {/* ============================================================== */}
      {/* 2. MIDGROUND CUMULUS CLOUDS (Fluffy Volumetric Masses) */}
      {/* ============================================================== */}
      <div
        id="clouds-mid"
        className="absolute inset-0 w-full h-full will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="cumulusGradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#fef3c7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="cumulusGradRight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fce7f3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.15" />
            </linearGradient>

            <linearGradient id="cumulusShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.34" />
            </linearGradient>

            <linearGradient id="cloudCrownLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#fff7ed" stopOpacity="0" />
            </linearGradient>

            <filter id="cloudSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.4" />
            </filter>
          </defs>

          {/* Left Cloud Bank */}
          <g id="cloud-bank-left-drift">
          <g id="cloud-bank-left" filter="url(#cloudSoftBlur)">
            {/* Base Pillows */}
            <path
              d="M -360 480 
                 C -30 420, 40 410, 80 440 
                 C 120 400, 200 390, 250 430 
                 C 290 410, 360 420, 390 460 
                 C 430 440, 490 460, 510 510 
                 C 520 540, 490 590, 430 610 
                 L -360 620 Z"
              fill="url(#cumulusGradLeft)"
            />
            <path
              d="M -360 541 C 16 519 47 525 94 545 C 148 514 210 517 258 545 C 309 522 352 535 394 562 C 433 544 469 554 495 578 L 490 610 L -360 620 Z"
              fill="url(#cumulusShade)"
              opacity="0.64"
            />
            <path
              d="M 33 468 C 46 436 83 425 111 447 C 135 415 181 405 215 435 C 245 415 284 426 300 456 C 264 441 243 450 224 464 C 189 440 158 451 143 470 C 108 447 79 455 66 480 Z"
              fill="url(#cloudCrownLight)"
              opacity="0.62"
            />
            {/* Luminous Highlight on Left Cloud Crown */}
            <path
              d="M 58 455 C 83 430 105 427 125 441 M 170 427 C 196 415 221 421 238 438 M 316 446 C 340 438 362 447 375 463"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.72"
              fill="none"
            />
          </g>
          </g>

          {/* Right Cloud Bank */}
          <g id="cloud-bank-right-drift">
          <g id="cloud-bank-right" filter="url(#cloudSoftBlur)">
            <path
              d="M 980 390 
                 C 1020 340, 1100 330, 1150 360 
                 C 1190 320, 1280 310, 1330 350 
                 C 1370 330, 1450 340, 1490 380 
                 C 1530 420, 1570 455, 1600 500
                 C 1550 520, 1510 530, 1460 520
                 C 1395 500, 1350 528, 1290 535
                 C 1220 550, 1150 526, 1090 520
                 C 1030 514, 990 536, 940 560
                 C 930 510, 950 430, 980 390 Z"
              fill="url(#cumulusGradRight)"
            />
            <path
              d="M 946 474 C 985 450 1034 446 1081 469 C 1124 437 1187 432 1234 459 C 1282 430 1341 441 1374 472 C 1417 454 1458 468 1600 500 C 1540 535 1489 535 1442 520 C 1375 500 1330 545 1270 543 C 1196 546 1155 513 1090 520 C 1025 525 986 544 944 550 Z"
              fill="url(#cumulusShade)"
              opacity="0.62"
            />
            <path
              d="M 1010 391 C 1036 360 1082 350 1117 375 C 1147 341 1198 333 1232 363 C 1261 336 1309 340 1335 369 C 1298 360 1271 378 1254 398 C 1219 369 1181 378 1164 398 C 1127 373 1092 384 1076 405 Z"
              fill="url(#cloudCrownLight)"
              opacity="0.66"
            />
            {/* Luminous Highlight on Right Cloud Crown */}
            <path
              d="M 1006 382 C 1031 356 1062 349 1086 362 M 1149 363 C 1175 340 1203 343 1223 359 M 1272 358 C 1292 345 1316 351 1335 370 M 1380 373 C 1406 369 1427 383 1438 399"
              stroke="#ffffff"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
              fill="none"
            />
          </g>
          </g>

          <g
            fill="none"
            stroke="#fff7ed"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#cloudSoftBlur)"
          >
            <path
              id="cloud-curl-left"
              d="M 700 420 C 650 390, 600 415, 605 452 C 610 482, 650 478, 656 452 C 662 430, 634 426, 620 444"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              opacity="0"
            />
            <path
              id="cloud-curl-right"
              d="M 740 420 C 790 390, 840 415, 835 452 C 830 482, 790 478, 784 452 C 778 430, 806 426, 820 444"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              opacity="0"
            />
          </g>
        </svg>
      </div>

      {/* ============================================================== */}
      {/* 3. FOREGROUND CLOUD BANKS (Layered in front of terrain/balloon) */}
      {/* ============================================================== */}
      <div
        id="clouds-fg"
        className="absolute bottom-0 left-0 w-full h-[40vh] will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="foreCloudGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.78" />
              <stop offset="22%" stopColor="#fffaf3" stopOpacity="0.62" />
              <stop offset="52%" stopColor="#ffedd5" stopOpacity="0.42" />
              <stop offset="78%" stopColor="#fed7aa" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#fbcfe8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="foreCloudShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" stopOpacity="0" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.22" />
            </linearGradient>
            <filter id="foreBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
          </defs>

          {/* Undulating Foreground Clouds Sweeping Bottom */}
          <g id="foreground-cloud-drift">
            <path
              d="M -40 220 
                 C 80 160, 220 180, 340 230 
                 C 460 170, 620 160, 740 210 
                 C 860 150, 1040 160, 1160 210 
                 C 1260 170, 1380 180, 1480 230 
                 L 1480 400 L -40 400 Z"
              fill="url(#foreCloudGrad)"
              filter="url(#foreBlur)"
            />
            <path
              d="M -40 280 C 120 228 240 248 340 278 C 475 235 610 230 740 264 C 874 226 1035 230 1160 266 C 1295 232 1395 250 1480 284 L 1480 400 L -40 400 Z"
              fill="url(#foreCloudShade)"
              opacity="0.62"
            />
            <g fill="none" stroke="#ffffff" strokeLinecap="round" opacity="0.42" filter="url(#foreBlur)">
              <path d="M 90 225 C 172 188 244 195 308 221" strokeWidth="5" />
              <path d="M 494 212 C 568 178 650 181 716 204" strokeWidth="4" />
              <path d="M 876 207 C 964 173 1056 183 1120 207" strokeWidth="4" />
              <path d="M 1212 218 C 1294 190 1378 204 1430 228" strokeWidth="5" />
            </g>
          </g>
        </svg>
      </div>

    </div>
  );
};

interface CloudPassageProps {
  className?: string;
}

export const CloudPassage: React.FC<CloudPassageProps> = ({ className = '' }) => (
  <div
    className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="flythroughMistLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="55%" stopColor="#fff7ed" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="flythroughMistRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="55%" stopColor="#e0f2fe" stopOpacity="0.66" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="flythroughMistBlur" x="-20%" y="-80%" width="140%" height="260%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
      </defs>
      <g filter="url(#flythroughMistBlur)" strokeLinecap="round" fill="none">
        <g id="cloud-flythrough-left" opacity="0">
          <path
            d="M -180 660 C 40 590, 170 735, 390 650 C 470 620, 510 630, 570 660"
            stroke="url(#flythroughMistLeft)"
            strokeWidth="128"
          />
          <path
            d="M -120 710 C 90 660, 220 760, 410 700 C 475 680, 515 685, 570 710"
            stroke="url(#flythroughMistLeft)"
            strokeWidth="64"
            opacity="0.75"
          />
        </g>
        <g id="cloud-flythrough-right" opacity="0">
          <path
            d="M 1620 660 C 1400 590, 1270 735, 1050 650 C 970 620, 930 630, 870 660"
            stroke="url(#flythroughMistRight)"
            strokeWidth="128"
          />
          <path
            d="M 1560 710 C 1350 660, 1220 760, 1030 700 C 965 680, 925 685, 870 710"
            stroke="url(#flythroughMistRight)"
            strokeWidth="64"
            opacity="0.75"
          />
        </g>
      </g>
    </svg>
  </div>
);
