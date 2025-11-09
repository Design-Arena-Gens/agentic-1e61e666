"use client";

import dynamic from "next/dynamic";

const AudioControl = dynamic(() => import("./SceneAudio"), { ssr: false });

export function CinematicScene() {
  return (
    <section className="letterbox relative flex min-h-screen items-center justify-center overflow-hidden pb-32 pt-24">
      <div className="grain-overlay" />
      <div className="lens-flare -right-[22vw] -top-[28vh]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_-10%,rgba(248,205,140,0.38),transparent_55%),radial-gradient(circle_at_70%_-20%,rgba(250,182,96,0.28),transparent_65%),linear-gradient(180deg,rgba(29,9,19,0.75)_0%,rgba(4,2,4,0.95)_80%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[72rem] px-6 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[42px] border border-white/15 bg-black/35 shadow-[0_60px_140px_-60px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <div className="scene-pan absolute inset-0 scale-[1.08]">
              <SceneArt />
            </div>
          </div>

          <div className="relative z-10 grid gap-6 px-10 pb-12 pt-8 sm:max-w-xl">
            <p className="text-sm uppercase tracking-[0.42em] text-white/70">
              11 Listopada · Świt Niepodległości
            </p>
            <h1
              className="font-heading text-4xl leading-tight text-[color:var(--ivory)] drop-shadow-[0_6px_32px_rgba(249,220,162,0.36)] sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Dawn of a Nation Reborn
            </h1>
            <p className="text-base leading-7 text-white/75 sm:text-lg">
              A lone commander rides through Warsaw’s awakening streets. Flags
              ignite the horizon, the crowd breathes freedom, and the golden sun
              crowns a reborn Republic.
            </p>
          </div>

          <div className="relative z-10 border-t border-white/10 bg-gradient-to-r from-white/5 via-white/3 to-white/5 px-10 py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-sm font-semibold uppercase tracking-[0.32em] text-white/80 backdrop-blur">
                  4K
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-white/60">
                    Historical Drama · Golden Hour
                  </p>
                  <p className="text-sm text-white/80">
                    Slow pan · Lens flare · Depth of field · Orchestral score
                  </p>
                </div>
              </div>
              <AudioControl />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SceneArt() {
  return (
    <svg
      viewBox="0 0 3840 2160"
      role="img"
      aria-label="Polish Independence Day rider greeted by crowds under a golden sunrise"
      className="h-full w-full object-cover"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f3c87f" />
          <stop offset="40%" stopColor="#f7a966" />
          <stop offset="78%" stopColor="#8d3c2b" />
          <stop offset="100%" stopColor="#2d0c18" />
        </linearGradient>
        <linearGradient id="cityGlow" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="rgba(253,224,173,0.78)" />
          <stop offset="15%" stopColor="rgba(189,110,75,0.55)" />
          <stop offset="100%" stopColor="rgba(64,21,33,0.85)" />
        </linearGradient>
        <linearGradient id="crowdFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(22,11,19,0.85)" />
          <stop offset="75%" stopColor="rgba(12,5,9,0.95)" />
          <stop offset="100%" stopColor="rgba(4,2,6,1)" />
        </linearGradient>
        <radialGradient
          id="sunGlow"
          cx="62%"
          cy="18%"
          r="35%"
          fx="58%"
          fy="18%"
        >
          <stop offset="0%" stopColor="#ffe4b2" />
          <stop offset="35%" stopColor="rgba(255,227,173,0.75)" />
          <stop offset="100%" stopColor="rgba(255,227,173,0)" />
        </radialGradient>
        <linearGradient id="flagRed" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#991416" />
          <stop offset="60%" stopColor="#be1e2d" />
          <stop offset="100%" stopColor="#ed4c4c" />
        </linearGradient>
        <linearGradient id="flagWhite" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#f5f0e6" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="horseBody" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#2a1617" />
          <stop offset="55%" stopColor="#1d0e12" />
          <stop offset="100%" stopColor="#11060b" />
        </linearGradient>
        <linearGradient id="commanderCoat" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0e0c14" />
          <stop offset="50%" stopColor="#162132" />
          <stop offset="100%" stopColor="#23334b" />
        </linearGradient>
        <linearGradient id="commanderSash" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#c72631" />
          <stop offset="100%" stopColor="#f04444" />
        </linearGradient>
        <filter id="soften" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="depthBlur" x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>

      <rect width="3840" height="2160" fill="url(#skyGradient)" />
      <circle cx="2460" cy="360" r="520" fill="url(#sunGlow)" />

      <g opacity="0.95" filter="url(#soften)">
        <path
          d="M0 1260 C 320 1120 600 1090 860 1165 C 1180 1270 1320 1205 1480 1260 C 1680 1340 1800 1410 1940 1360 C 2150 1280 2270 1190 2435 1215 C 2640 1250 2760 1345 2900 1335 C 3070 1323 3240 1210 3420 1185 C 3580 1164 3720 1185 3840 1205 L 3840 2160 L 0 2160 Z"
          fill="url(#cityGlow)"
        />
        <path
          d="M120 1410 C 420 1285 670 1295 910 1400 C 1080 1475 1200 1470 1330 1440 C 1460 1410 1670 1420 1820 1470 C 1970 1520 2100 1505 2220 1440 C 2380 1355 2560 1325 2740 1375 C 2920 1425 3040 1450 3180 1425 C 3400 1385 3600 1290 3840 1295 L 3840 2160 L 120 2160 Z"
          fill="rgba(37,14,22,0.85)"
        />
      </g>

      <g opacity="0.55">
        <path
          d="M1820 760 L1860 520 L1950 500 L2000 620 L2080 540 L2120 780 L2000 820 Z"
          fill="rgba(255,216,156,0.4)"
        />
        <path
          d="M2240 820 L2260 560 L2390 540 L2460 680 L2560 620 L2590 860 L2450 900 Z"
          fill="rgba(255,221,166,0.28)"
        />
      </g>

      <g filter="url(#depthBlur)">
        <path
          d="M0 1320 C 280 1300 560 1470 780 1560 C 940 1625 1090 1685 1240 1760 C 1460 1870 1600 1910 1780 1910 C 2100 1910 2400 1780 2640 1780 C 2860 1780 3080 1880 3240 1950 C 3400 2020 3520 2060 3840 2060 L 3840 2160 L 0 2160 Z"
          fill="url(#crowdFade)"
        />
      </g>

      <g className="flag-wave" style={{ animationDelay: "0.3s" }}>
        <path d="M460 1300 L640 1180 L640 1340 L460 1460 Z" fill="url(#flagWhite)" />
        <path d="M460 1460 L640 1340 L640 1500 L460 1620 Z" fill="url(#flagRed)" />
        <path d="M455 1280 L490 1260 L500 1625 L465 1640 Z" fill="#2b1a17" />
      </g>

      <g className="flag-wave" style={{ animationDelay: "0.9s" }}>
        <path d="M760 1220 L940 1105 L940 1260 L760 1375 Z" fill="url(#flagWhite)" />
        <path d="M760 1375 L940 1260 L940 1415 L760 1530 Z" fill="url(#flagRed)" />
        <path d="M752 1200 L786 1180 L802 1550 L768 1566 Z" fill="#2b1a17" />
      </g>

      <g className="flag-wave" style={{ animationDelay: "1.4s" }}>
        <path d="M1040 1160 L1220 1050 L1220 1205 L1040 1315 Z" fill="url(#flagWhite)" />
        <path d="M1040 1315 L1220 1205 L1220 1360 L1040 1470 Z" fill="url(#flagRed)" />
        <path d="M1030 1140 L1070 1120 L1088 1488 L1046 1502 Z" fill="#2b1a17" />
      </g>

      <g opacity="0.72">
        <path
          d="M420 1580 C 580 1530 640 1550 760 1610 C 840 1650 940 1700 1030 1750 C 1210 1850 1500 1950 1700 1935 C 1900 1920 1960 1830 2100 1780 C 2300 1705 2580 1710 2770 1770 C 2980 1835 3200 1980 3460 2000 C 3640 2015 3800 1970 3840 1930 L 3840 2160 L 420 2160 Z"
          fill="rgba(14,7,11,0.75)"
        />
      </g>

      <g transform="translate(1680 980)">
        <path
          d="M120 560 C 210 510 350 440 480 450 C 620 460 760 540 860 560 C 940 580 990 650 1005 720 C 1020 790 1005 850 960 890 C 900 945 840 965 700 960 C 520 955 360 880 220 840 C 120 810 60 760 20 700 C -20 640 -10 590 120 560 Z"
          fill="url(#horseBody)"
        />
        <path
          d="M210 620 C 300 610 360 650 460 720 C 520 760 580 780 640 780 C 700 780 760 760 800 740 C 830 725 860 740 870 770 C 880 800 860 840 780 870 C 700 900 540 890 420 850 C 300 810 180 720 160 660 C 150 630 160 620 210 620 Z"
          fill="rgba(60,31,29,0.7)"
        />
        <path
          d="M520 270 C 580 270 640 300 700 360 C 760 420 790 480 800 560 L 720 600 C 700 540 660 500 600 460 C 560 435 520 430 480 440 L 450 360 C 470 300 500 270 520 270 Z"
          fill="url(#commanderCoat)"
        />
        <path
          d="M600 160 C 650 150 720 180 750 240 C 780 300 760 360 720 380 C 680 400 600 380 560 320 C 520 260 550 170 600 160 Z"
          fill="#2f1a1a"
        />
        <path
          d="M600 150 C 630 110 710 90 760 120 C 810 150 820 220 810 250 C 800 280 750 300 710 300 C 680 300 630 270 620 240 C 610 210 610 170 600 150 Z"
          fill="#f9d9b7"
        />
        <path
          d="M560 320 C 600 330 650 360 690 420 C 720 465 740 520 750 580 L 680 620 C 650 540 600 480 540 460 Z"
          fill="url(#commanderSash)"
        />
        <path
          d="M300 820 C 360 760 480 720 600 730 C 720 740 780 800 820 860 C 860 920 860 980 820 1010 C 780 1040 700 1040 580 1010 C 460 980 360 920 280 880 C 220 850 240 860 300 820 Z"
          fill="#12080c"
        />
        <path
          className="mane-billow"
          d="M -40 580 C -80 520 -70 450 -40 400 C 0 330 100 280 160 290 C 220 300 260 360 260 420 C 260 480 210 530 150 560 C 80 600 0 620 -40 580 Z"
          fill="#2c151d"
          opacity="0.85"
        />
        <path
          d="M430 600 C 460 610 480 630 500 660 L 420 700 C 380 650 370 600 430 600 Z"
          fill="#0b0609"
        />
        <path
          d="M40 660 C 120 650 160 700 260 780 C 320 830 360 860 420 880 C 460 890 500 920 520 960 C 540 1000 520 1030 440 1040 C 360 1050 260 1000 200 960 C 120 910 60 840 20 780 C -20 710 -10 670 40 660 Z"
          fill="#14090d"
        />
      </g>

      <g opacity="0.45">
        <path
          d="M0 1920 C 160 1930 360 2040 520 2080 C 700 2125 900 2140 1100 2140 L 0 2160 Z"
          fill="#050305"
        />
      </g>
    </svg>
  );
}
