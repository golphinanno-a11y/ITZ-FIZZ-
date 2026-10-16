import React from 'react';

interface LandscapeLayersProps {
  className?: string;
}

export const LandscapeLayers: React.FC<LandscapeLayersProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}>
      {/* ============================================================== */}
      {/* LAYER 1: FAR MOUNTAINS (Deep Atmospheric Ridge) */}
      {/* ============================================================== */}
      <div
        id="landscape-far"
        className="absolute bottom-0 left-0 w-full h-[55vh] will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="farMountainGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.36" />
              <stop offset="24%" stopColor="#6366a5" stopOpacity="0.52" />
              <stop offset="58%" stopColor="#312e81" stopOpacity="0.76" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0.91" />
            </linearGradient>
            <linearGradient id="farMountainFace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.68" />
              <stop offset="38%" stopColor="#a5b4fc" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#312e81" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="mountainSnow" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#c7d2fe" stopOpacity="0.42" />
            </linearGradient>
            <linearGradient id="farMountainMist" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff7ed" stopOpacity="0.38" />
              <stop offset="40%" stopColor="#fed7aa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0" />
            </linearGradient>
            <filter id="mountainDistance" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="1.1" />
            </filter>
          </defs>

          <path
            d="M 0 300 L 105 252 L 186 276 L 298 211 L 388 260 L 505 215 L 622 266 L 734 205 L 846 257 L 960 199 L 1068 244 L 1184 210 L 1298 270 L 1390 228 L 1440 244 L 1440 420 L 0 420 Z"
            fill="#6470a5"
            opacity="0.22"
            filter="url(#mountainDistance)"
          />

          {/* Jagged Alpine Peaks */}
          <path
            d="M 0 280 
               L 110 230 L 220 270 L 360 170 L 480 250 L 620 190 L 740 240 
               L 890 150 L 1020 230 L 1150 180 L 1280 250 L 1380 200 L 1440 220 
               L 1440 420 L 0 420 Z"
            fill="url(#farMountainGrad)"
          />

          <path
            d="M 220 270 L 360 170 L 480 250 L 414 224 L 378 238 L 354 210 L 328 231 L 304 221 L 270 256 Z
               M 620 190 L 740 240 L 690 224 L 664 230 L 642 209 L 626 219 Z
               M 890 150 L 1020 230 L 968 205 L 940 214 L 914 183 L 894 198 Z
               M 1150 180 L 1280 250 L 1236 229 L 1208 238 L 1182 211 L 1160 224 Z"
            fill="url(#farMountainFace)"
          />

          <path
            d="M 360 170 L 328 231 L 354 210 L 378 238 L 414 224 Z
               M 620 190 L 626 219 L 642 209 L 664 230 L 690 224 Z
               M 890 150 L 894 198 L 914 183 L 940 214 L 968 205 Z
               M 1150 180 L 1160 224 L 1182 211 L 1208 238 L 1236 229 Z"
            fill="url(#mountainSnow)"
            opacity="0.82"
          />

          <g
            fill="none"
            stroke="#c7d2fe"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.22"
          >
            <path d="M 275 250 L 320 226 L 337 213 L 350 220" strokeWidth="1.5" />
            <path d="M 382 207 L 395 197 L 408 203 L 430 220" strokeWidth="1.2" />
            <path d="M 570 222 L 602 207 L 617 212 L 636 202" strokeWidth="1.3" />
            <path d="M 677 211 L 697 217 L 716 228" strokeWidth="1.2" />
            <path d="M 846 192 L 875 171 L 889 166 L 902 179" strokeWidth="1.5" />
            <path d="M 925 177 L 945 192 L 964 203" strokeWidth="1.2" />
            <path d="M 1110 208 L 1138 190 L 1150 187 L 1172 205" strokeWidth="1.4" />
            <path d="M 1205 216 L 1225 229 L 1250 238" strokeWidth="1.2" />
          </g>

          <path
            d="M 110 230 L 220 270 M 360 170 L 480 250 M 620 190 L 740 240 M 890 150 L 1020 230 M 1150 180 L 1280 250 M 1380 200 L 1440 220"
            stroke="#dbeafe"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.32"
          />
          <path
            d="M 0 292 C 132 268 213 282 304 255 C 376 234 422 252 490 278 C 575 310 652 293 730 259 C 818 222 895 229 982 262 C 1083 299 1163 282 1251 250 C 1335 220 1390 228 1440 245 L 1440 345 C 1307 328 1189 350 1078 324 C 948 294 833 327 711 347 C 565 371 427 332 300 344 C 180 355 76 333 0 348 Z"
            fill="#1e293b"
            opacity="0.16"
          />

          {/* Mist Over Far Mountain Peaks */}
          <path
            d="M 0 248 C 170 228 284 254 414 240 C 570 223 676 250 806 238 C 968 223 1073 246 1215 231 C 1300 222 1370 226 1440 222 L 1440 320 C 1272 294 1136 314 972 298 C 780 280 633 316 465 300 C 302 284 164 310 0 294 Z"
            fill="url(#farMountainMist)"
            filter="url(#mountainDistance)"
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* LAYER 2: MID HILLS & PINE RIDGES */}
      {/* ============================================================== */}
      <div
        id="landscape-mid"
        className="absolute bottom-0 left-0 w-full h-[45vh] will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="midHillsGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.65" />
              <stop offset="45%" stopColor="#0f265c" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#06122e" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="midSunRim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="10%" stopColor="#fbbf24" stopOpacity="0.2" />
              <stop offset="45%" stopColor="#f472b6" stopOpacity="0.28" />
              <stop offset="76%" stopColor="#c4b5fd" stopOpacity="0.24" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.12" />
            </linearGradient>
            <linearGradient id="ridgeFaceLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Rolling Midground Ridges with Tree Pine Jagged Details */}
          <path
            d="M 0 210 
               C 160 190 280 240 440 200 
               C 600 160 760 220 940 180 
               C 1100 140 1260 200 1440 170 
               L 1440 360 L 0 360 Z"
            fill="url(#midHillsGrad)"
          />
          <path
            d="M 0 210 C 160 190 280 240 440 200 C 600 160 760 220 940 180 C 1100 140 1260 200 1440 170 L 1440 225 C 1250 247 1098 199 942 231 C 770 263 605 210 443 247 C 286 280 147 235 0 254 Z"
            fill="url(#ridgeFaceLight)"
          />

          {/* Ridge Rim Highlight */}
          <path
            d="M 0 210 
               C 160 190 280 240 440 200 
               C 600 160 760 220 940 180 
               C 1100 140 1260 200 1440 170"
            stroke="url(#midSunRim)"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Secondary Layer of Rolling Forest */}
          <path
            d="M 0 270 
               C 220 240 420 280 660 250 
               C 900 220 1140 260 1440 230 
               L 1440 360 L 0 360 Z"
            fill="#091838"
            opacity="0.85"
          />
          <path
            d="M 0 270 C 220 240 420 280 660 250 C 900 220 1140 260 1440 230"
            stroke="#a5b4fc"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* LAYER 3: FOREGROUND FOOTHILLS & MORNING VALLEY MIST */}
      {/* ============================================================== */}
      <div
        id="landscape-near"
        className="absolute bottom-0 left-0 w-full h-[32vh] will-change-transform gpu-layer"
      >
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="nearFoothillsGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#040d21" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
            <linearGradient id="valleyMistGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffedd5" stopOpacity="0.45" />
              <stop offset="60%" stopColor="#fed7aa" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Rolling Foreground Foothills */}
          <path
            d="M 0 150 
               C 240 110 460 180 720 130 
               C 980 80 1200 160 1440 120 
               L 1440 280 L 0 280 Z"
            fill="url(#nearFoothillsGrad)"
          />

          {/* Valley Low Morning Mist */}
          <path
            d="M 0 130 
               Q 320 90 680 120 
               T 1440 100 
               L 1440 230 
               Q 1040 210 600 220 
               T 0 230 Z"
            fill="url(#valleyMistGrad)"
          />
        </svg>
      </div>
    </div>
  );
};
