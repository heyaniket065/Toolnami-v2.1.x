const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const srcAssetsDir = path.join(__dirname, "..", "src", "assets");
const toolsPublicDir = path.join(publicDir, "assets", "tools");
const toolsSrcDir = path.join(srcAssetsDir, "tools");

[publicDir, srcAssetsDir, toolsPublicDir, toolsSrcDir].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Master SVG Badge (1024 x 1024)
// Circular badge: Anime-style character with black hair and a cigarette set against a 3D blue "T" emblem with a neon-blue border.
const svgBadge = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <defs>
    <!-- Background Radial Gradients -->
    <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0d2459" />
      <stop offset="55%" stop-color="#071330" />
      <stop offset="85%" stop-color="#030816" />
      <stop offset="100%" stop-color="#02040b" />
    </radialGradient>

    <radialGradient id="cyanBacklight" cx="68%" cy="42%" r="45%">
      <stop offset="0%" stop-color="#00f0ff" stop-opacity="0.45" />
      <stop offset="50%" stop-color="#0077ff" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>

    <!-- Neon Rim Border Gradients -->
    <linearGradient id="neonRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00f0ff" />
      <stop offset="35%" stop-color="#0099ff" />
      <stop offset="70%" stop-color="#00d4ff" />
      <stop offset="100%" stop-color="#0066ff" />
    </linearGradient>

    <!-- 3D "T" Gradients -->
    <linearGradient id="tTopFacet" x1="0%" y1="0%" x2="100%" y2="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="60%" stop-color="#e2e8f0" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <linearGradient id="tFrontStem" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#00e5ff" />
      <stop offset="30%" stop-color="#0088ff" />
      <stop offset="80%" stop-color="#0055dd" />
      <stop offset="100%" stop-color="#003bb5" />
    </linearGradient>

    <linearGradient id="tSideExtrusion" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#082f49" />
    </linearGradient>

    <!-- Character Skin Gradients -->
    <linearGradient id="skinBase" x1="0%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#fdf2e9" />
      <stop offset="50%" stop-color="#fae2d0" />
      <stop offset="85%" stop-color="#ecc7b2" />
      <stop offset="100%" stop-color="#d4aa94" />
    </linearGradient>

    <linearGradient id="skinShadow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d8ab95" />
      <stop offset="60%" stop-color="#b8836c" />
      <stop offset="100%" stop-color="#8a5342" />
    </linearGradient>

    <!-- Hair Shading Gradients -->
    <linearGradient id="hairDark" x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stop-color="#141a29" />
      <stop offset="40%" stop-color="#0a0e17" />
      <stop offset="100%" stop-color="#03060a" />
    </linearGradient>

    <linearGradient id="hairHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="60%" stop-color="#1d4ed8" />
      <stop offset="100%" stop-color="transparent" />
    </linearGradient>

    <!-- Filters -->
    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#00f0ff" flood-opacity="0.8" />
      <feDropShadow dx="0" dy="0" stdDeviation="30" flood-color="#0077ff" flood-opacity="0.4" />
    </filter>

    <filter id="shadow3D" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="-8" dy="16" stdDeviation="18" flood-color="#000000" flood-opacity="0.75" />
    </filter>

    <filter id="cigaretteGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" flood-color="#ff5500" flood-opacity="0.9" />
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#ffaa00" flood-opacity="0.6" />
    </filter>

    <!-- Circular Badge Clip -->
    <clipPath id="badgeCircle">
      <circle cx="512" cy="512" r="486" />
    </clipPath>
  </defs>

  <!-- Base Circle Background -->
  <g clip-path="url(#badgeCircle)">
    <rect width="1024" height="1024" fill="url(#bgGlow)" />
    <!-- Ambient Cyan Backlight behind T -->
    <circle cx="680" cy="420" r="420" fill="url(#cyanBacklight)" />

    <!-- ==================== 3D "T" EMBLEM ==================== -->
    <g filter="url(#shadow3D)">
      <!-- 3D Extrusion Back / Depth -->
      <!-- Top bar extrusion -->
      <polygon points="500,220 900,220 940,310 500,310" fill="url(#tSideExtrusion)" opacity="0.9" />
      <polygon points="870,220 940,310 910,380 840,320" fill="#042749" />

      <!-- Top bar 3D Bevel (White / Ice top facet) -->
      <polygon points="510,220 920,220 880,318 470,318" fill="url(#tTopFacet)" />

      <!-- Stem 3D Extrusion -->
      <polygon points="730,318 840,318 780,680 670,680" fill="url(#tSideExtrusion)" />
      
      <!-- Stem Front Face (Vivid Cyan-Blue gradient) -->
      <polygon points="620,318 790,318 730,680 610,680" fill="url(#tFrontStem)" />

      <!-- Inner Glow Highlight on T -->
      <polyline points="630,328 775,328 720,665" fill="none" stroke="#67e8f9" stroke-width="6" opacity="0.75" stroke-linecap="round" />
      <line x1="530" y1="230" x2="900" y2="230" stroke="#ffffff" stroke-width="7" opacity="0.9" stroke-linecap="round" />
    </g>

    <!-- ==================== ANIME CHARACTER ==================== -->
    <g id="character">
      <!-- Dark Silhouette / Clothes (Shoulders and Chest) -->
      <path d="M 80,1024 C 90,830 160,740 320,700 C 440,670 610,690 730,730 C 850,770 950,860 970,1024 Z" fill="#0a0d14" />
      <!-- Black T-Shirt folds and shadows -->
      <path d="M 280,710 C 350,750 420,840 450,1024" stroke="#161f30" stroke-width="8" stroke-linecap="round" fill="none" />
      <path d="M 640,730 C 600,780 560,880 540,1024" stroke="#161f30" stroke-width="8" stroke-linecap="round" fill="none" />
      <!-- Rim light on shoulder -->
      <path d="M 700,730 C 800,760 880,820 930,940" stroke="#00d4ff" stroke-width="7" stroke-linecap="round" opacity="0.7" fill="none" />

      <!-- Neck & Collarbone -->
      <path d="M 390,600 C 400,680 430,750 490,770 C 540,750 560,680 570,600 Z" fill="url(#skinShadow)" />
      <path d="M 430,620 C 450,700 480,740 510,750 C 530,730 540,680 545,620 Z" fill="url(#skinBase)" />
      <!-- Neck shadow & tendons -->
      <path d="M 450,650 Q 470,720 485,745" stroke="#9d624b" stroke-width="4" stroke-linecap="round" fill="none" />
      <path d="M 525,650 Q 520,710 515,740" stroke="#9d624b" stroke-width="4" stroke-linecap="round" fill="none" />

      <!-- Head / Face Contour (Slight 3/4 angle) -->
      <path d="M 290,480 C 270,550 310,630 390,670 C 450,700 490,700 520,665 C 555,625 580,540 575,450 C 570,390 545,340 500,320 C 440,300 340,320 290,480 Z" fill="url(#skinBase)" />

      <!-- Chin & Jawline Shadows -->
      <path d="M 370,610 C 410,650 460,675 495,665 C 530,640 550,580 560,520" fill="none" stroke="#261b17" stroke-width="5" stroke-linecap="round" />
      <!-- Shadow under jaw -->
      <path d="M 380,630 Q 450,695 500,670 Q 450,650 380,630" fill="url(#skinShadow)" opacity="0.8" />

      <!-- Ear (Left visible) -->
      <path d="M 285,480 C 265,490 260,540 280,565 C 295,580 310,580 315,560" fill="url(#skinBase)" stroke="#261b17" stroke-width="4" />
      <path d="M 280,510 C 275,530 285,545 295,540" fill="none" stroke="#b8836c" stroke-width="3" />

      <!-- Hand supporting cheek / chin (Anime classic pose) -->
      <!-- Palm and wrist -->
      <path d="M 120,680 C 130,590 180,540 230,530 C 260,525 280,550 270,590 C 255,640 220,700 170,740 Z" fill="url(#skinBase)" stroke="#261b17" stroke-width="5" />
      <!-- Fingers curled against jaw -->
      <!-- Index Finger -->
      <path d="M 225,535 C 235,480 250,460 270,470 C 285,480 285,510 275,545" fill="url(#skinBase)" stroke="#261b17" stroke-width="4.5" />
      <!-- Middle Finger -->
      <path d="M 200,550 C 215,490 230,475 245,485 C 255,495 250,525 240,565" fill="url(#skinBase)" stroke="#261b17" stroke-width="4.5" />
      <!-- Knuckles & Finger shadows -->
      <path d="M 210,570 C 225,580 245,575 255,560" fill="none" stroke="#b8836c" stroke-width="3" />
      <path d="M 180,630 C 195,650 215,640 225,615" fill="none" stroke="#b8836c" stroke-width="3" />

      <!-- Facial Features -->
      <!-- Left Eye (Intense, sharp anime half-lidded gaze) -->
      <g id="eyes">
        <!-- Left eye upper lash line -->
        <path d="M 330,490 C 345,475 375,475 395,490" fill="none" stroke="#0a0e17" stroke-width="7" stroke-linecap="round" />
        <!-- Eye lower line -->
        <path d="M 345,502 C 360,510 380,508 390,498" fill="none" stroke="#0a0e17" stroke-width="3.5" stroke-linecap="round" />
        <!-- Iris & Pupil (Dark slate grey with blue highlight) -->
        <ellipse cx="365" cy="493" rx="14" ry="11" fill="#1e293b" />
        <ellipse cx="365" cy="493" rx="8" ry="7" fill="#020617" />
        <circle cx="362" cy="489" r="3.5" fill="#38bdf8" />
        <circle cx="368" cy="491" r="2" fill="#ffffff" />
        <!-- Eyelid crease -->
        <path d="M 340,475 C 360,468 380,470 395,480" fill="none" stroke="#8a5342" stroke-width="3" />
        <!-- Eyebrow (Sharp, masculine slant) -->
        <path d="M 320,465 C 345,450 375,452 405,465" fill="none" stroke="#0a0e17" stroke-width="7" stroke-linecap="round" />

        <!-- Right Eye -->
        <path d="M 445,485 C 465,470 495,470 515,485" fill="none" stroke="#0a0e17" stroke-width="7" stroke-linecap="round" />
        <path d="M 458,497 C 475,505 495,503 508,493" fill="none" stroke="#0a0e17" stroke-width="3.5" stroke-linecap="round" />
        <ellipse cx="482" cy="488" rx="14" ry="11" fill="#1e293b" />
        <ellipse cx="482" cy="488" rx="8" ry="7" fill="#020617" />
        <circle cx="479" cy="484" r="3.5" fill="#38bdf8" />
        <circle cx="485" cy="486" r="2" fill="#ffffff" />
        <path d="M 455,470 C 475,463 495,465 510,475" fill="none" stroke="#8a5342" stroke-width="3" />
        <path d="M 438,460 C 465,445 498,448 528,462" fill="none" stroke="#0a0e17" stroke-width="7" stroke-linecap="round" />
      </g>

      <!-- Nose (Sharp anime angular bridge & shadow) -->
      <path d="M 425,480 L 420,535 L 435,545" fill="none" stroke="#261b17" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round" />
      <polygon points="415,510 422,545 408,540" fill="url(#skinShadow)" opacity="0.6" />

      <!-- Mouth & Cigarette -->
      <!-- Lips line -->
      <path d="M 405,585 C 425,582 450,580 475,590" fill="none" stroke="#261b17" stroke-width="5" stroke-linecap="round" />
      <path d="M 430,598 C 445,602 460,600 470,594" fill="none" stroke="#b8836c" stroke-width="3" stroke-linecap="round" />

      <!-- The Cigarette -->
      <!-- White tube angled down-right -->
      <g>
        <!-- Soft rising smoke wisp -->
        <path d="M 525,650 C 550,620 540,580 570,550 C 600,520 620,460 610,400" fill="none" stroke="#e0f2fe" stroke-width="3" opacity="0.45" stroke-linecap="round" />
        <path d="M 530,660 C 570,640 590,570 615,530" fill="none" stroke="#93c5fd" stroke-width="2" opacity="0.35" stroke-linecap="round" />

        <!-- Cigarette Shaft -->
        <polygon points="435,582 510,650 518,642 443,574" fill="#f8fafc" stroke="#334155" stroke-width="2" />
        <!-- Orange/Amber Tip Ember with Glow Filter -->
        <polygon points="508,652 522,664 528,657 514,645" fill="#f97316" filter="url(#cigaretteGlow)" />
        <circle cx="522" cy="658" r="5" fill="#fbbf24" filter="url(#cigaretteGlow)" />
        <circle cx="524" cy="660" r="2" fill="#ffffff" />
      </g>

      <!-- ==================== SPKY JET-BLACK ANIME HAIR ==================== -->
      <g id="hair">
        <!-- Back Hair Volume (Behind head/neck) -->
        <path d="M 230,420 C 180,350 200,240 280,180 C 350,130 460,110 560,130 C 650,150 710,210 740,300 C 760,370 750,470 700,540 C 660,490 640,430 630,370 C 600,430 580,510 550,560 C 580,470 590,380 570,320 C 510,250 400,230 330,270 C 270,300 240,360 230,420 Z" fill="url(#hairDark)" />

        <!-- Dynamic Hair Strands / Spikes -->
        <!-- Top Crown Spikes -->
        <path d="M 380,140 Q 420,70 470,110 Q 440,130 430,160 Z" fill="#080c14" />
        <path d="M 450,110 Q 510,60 560,110 Q 520,130 500,160 Z" fill="#0c121e" />
        <path d="M 540,110 Q 620,80 660,140 Q 610,150 590,180 Z" fill="#080c14" />
        <path d="M 310,180 Q 330,110 390,140 Q 360,170 350,210 Z" fill="#0c121e" />

        <!-- Side Left Bangs -->
        <path d="M 240,340 C 210,280 250,220 290,200 C 270,240 260,290 280,340 Z" fill="#0a0e18" />
        <path d="M 230,410 C 200,360 210,320 240,300 C 235,340 240,380 260,420 Z" fill="#070a10" />

        <!-- Face Framing Bangs (Falling over forehead and eyes) -->
        <!-- Center Long Bang crossing between eyes -->
        <path d="M 430,250 Q 410,360 415,480 Q 425,540 435,530 Q 435,460 445,380 Q 455,300 460,250 Z" fill="#05070c" />
        <!-- Left Forehead Bang -->
        <path d="M 370,260 Q 350,330 325,410 Q 345,400 365,360 Q 385,320 395,270 Z" fill="#0a0e18" />
        <!-- Right Forehead Bang -->
        <path d="M 480,260 Q 505,330 520,410 Q 510,370 495,330 Q 485,290 480,260 Z" fill="#070a12" />
        <!-- Wisps across temples -->
        <path d="M 300,380 Q 280,440 295,490 Q 310,460 315,420 Z" fill="#05070c" />
        <path d="M 560,370 Q 585,440 575,510 Q 560,460 550,410 Z" fill="#05070c" />

        <!-- Electric Blue Rim Light / Hair Highlights -->
        <path d="M 420,105 Q 480,75 540,95" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" opacity="0.85" />
        <path d="M 560,115 Q 630,95 670,150" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round" opacity="0.75" />
        <path d="M 680,210 Q 730,270 735,350" fill="none" stroke="#00d4ff" stroke-width="5" stroke-linecap="round" opacity="0.8" />
        <path d="M 418,340 Q 422,430 428,510" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" opacity="0.65" />
        <path d="M 330,300 Q 350,370 365,420" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" opacity="0.5" />
        <path d="M 485,300 Q 500,360 515,410" fill="none" stroke="#0284c7" stroke-width="3" stroke-linecap="round" opacity="0.5" />
      </g>
    </g>
  </g>

  <!-- ==================== OUTER NEON-BLUE BORDER RING ==================== -->
  <circle cx="512" cy="512" r="486" fill="none" stroke="url(#neonRim)" stroke-width="26" filter="url(#neonGlow)" />
  <!-- Inner crisp highlight line -->
  <circle cx="512" cy="512" r="473" fill="none" stroke="#a5f3fc" stroke-width="3" opacity="0.7" />
  <!-- Outer subtle border sheen -->
  <circle cx="512" cy="512" r="499" fill="none" stroke="#003899" stroke-width="3" opacity="0.5" />
</svg>
`;

async function buildBrandAssets() {
  console.log("Generating master SVG and high-resolution PNG brand assets...");

  const svgBuffer = Buffer.from(svgBadge.trim());

  // 1. Save Master SVG to public and src
  fs.writeFileSync(path.join(publicDir, "logo.svg"), svgBuffer);
  fs.writeFileSync(path.join(publicDir, "favicon.svg"), svgBuffer);
  fs.writeFileSync(path.join(srcAssetsDir, "logo.svg"), svgBuffer);

  // 2. High-Res 1024x1024 Master PNG
  const png1024 = await sharp(svgBuffer)
    .resize(1024, 1024)
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, "logo.png"), png1024);
  fs.writeFileSync(path.join(publicDir, "logo-1024.png"), png1024);
  fs.writeFileSync(path.join(srcAssetsDir, "logo.png"), png1024);
  fs.writeFileSync(path.join(toolsPublicDir, "toolnami-badge.png"), png1024);
  fs.writeFileSync(path.join(toolsSrcDir, "toolnami-badge.png"), png1024);

  // 3. Retina 512x512 PNG
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "logo-512.png"), png512);
  fs.writeFileSync(path.join(publicDir, "apple-touch-icon.png"), png512);

  // 4. WebP Version for modern speed
  const webp512 = await sharp(svgBuffer).resize(512, 512).webp({ quality: 95 }).toBuffer();
  fs.writeFileSync(path.join(publicDir, "logo.webp"), webp512);

  // 5. 192x192 & 128x128 PWA / Icon sizes
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "logo-192.png"), png192);

  const png64 = await sharp(svgBuffer).resize(64, 64).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon-64.png"), png64);

  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, "favicon-32.png"), png32);
  fs.writeFileSync(path.join(publicDir, "favicon.png"), png32);

  // 6. ICO file format (using 32x32 PNG container or standard raw icon buffer)
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), png32);

  console.log("Master brand badge & favicons successfully created!");
}

buildBrandAssets().catch((err) => {
  console.error("Failed to build brand assets:", err);
  process.exit(1);
});
