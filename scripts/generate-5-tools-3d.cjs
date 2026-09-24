const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDirSrc = path.join(__dirname, "..", "src", "assets", "tools");
const outDirPublic = path.join(__dirname, "..", "public", "assets", "tools");

[outDirSrc, outDirPublic].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

// Canvas dimensions: 1200 x 750 (16:10 matching card aspect ratio)
const W = 1200;
const H = 750;

/**
 * Common SVG filter definitions for realistic 3D lighting, specular highlights,
 * glassmorphism, soft ambient shadows, and metallic sheen.
 */
const commonDefs = `
  <defs>
    <!-- Soft Drop Shadows -->
    <filter id="shadow-3d-lg" x="-20%" y="-20%" width="150%" height="150%">
      <feDropShadow dx="0" dy="28" stdDeviation="24" flood-color="#0f172a" flood-opacity="0.38"/>
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.22"/>
    </filter>
    <filter id="shadow-3d-md" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#0f172a" flood-opacity="0.32"/>
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.18"/>
    </filter>
    <filter id="shadow-3d-sm" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.25"/>
    </filter>
    <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#fbbf24" flood-opacity="0.6"/>
    </filter>
    <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#38bdf8" flood-opacity="0.65"/>
    </filter>
    <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#34d399" flood-opacity="0.6"/>
    </filter>
    <filter id="glow-crimson" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#f43f5e" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-violet" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="18" flood-color="#a855f7" flood-opacity="0.6"/>
    </filter>
    <!-- Glass Specular / Bevel Light Filter -->
    <filter id="glass-specular" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
      <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1.2" specularExponent="25" result="specOut" lighting-color="#ffffff">
        <fePointLight x="400" y="200" z="350"/>
      </feSpecularLighting>
      <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut"/>
      <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
    </filter>
  </defs>
`;

/**
 * 1. PDF Compressor 3D Artwork
 */
function getPdfCompressorSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <!-- Studio Light Gradient Background -->
      <linearGradient id="bg-grad-pdf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <!-- Ambient Glow Behind 3D Subject -->
      <radialGradient id="amb-glow-pdf" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fda4af" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#f43f5e" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f8fafc" stop-opacity="0"/>
      </radialGradient>
      <!-- 3D Document Gradients -->
      <linearGradient id="pdf-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ff4b4b"/>
        <stop offset="45%" stop-color="#dc2626"/>
        <stop offset="100%" stop-color="#991b1b"/>
      </linearGradient>
      <linearGradient id="pdf-fold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#fca5a5"/>
      </linearGradient>
      <linearGradient id="pdf-spine-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#7f1d1d"/>
        <stop offset="100%" stop-color="#b91c1c"/>
      </linearGradient>
      <!-- Gold Vice Clamp Gradients -->
      <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="35%" stop-color="#eab308"/>
        <stop offset="70%" stop-color="#ca8a04"/>
        <stop offset="100%" stop-color="#854d0e"/>
      </linearGradient>
      <linearGradient id="chrome-metal" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#cbd5e1"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
      <linearGradient id="glass-badge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#059669" stop-opacity="0.95"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${W}" height="${H}" fill="url(#bg-grad-pdf)"/>
    <circle cx="600" cy="375" r="420" fill="url(#amb-glow-pdf)"/>

    <!-- Subtle Tech Matrix Grid Dots -->
    <g fill="#94a3b8" opacity="0.18">
      ${Array.from({ length: 9 })
        .map((_, i) =>
          Array.from({ length: 6 })
            .map((__, j) => `<circle cx="${140 + i * 115}" cy="${100 + j * 110}" r="2"/>`)
            .join(""),
        )
        .join("")}
    </g>

    <!-- 3D Pedestal Platform Shadow -->
    <ellipse cx="600" cy="580" rx="360" ry="42" fill="#0f172a" opacity="0.18" filter="url(#shadow-3d-lg)"/>
    <ellipse cx="600" cy="570" rx="270" ry="24" fill="#64748b" opacity="0.15"/>

    <!-- 3D FLOATING PDF DOCUMENT -->
    <g transform="translate(0, -10)">
      <!-- Document Base Thickness (3D Edge Depth) -->
      <path d="M 450 180 L 690 180 L 770 260 L 770 510 L 450 510 Z" fill="url(#pdf-spine-grad)" transform="translate(14, 18)" filter="url(#shadow-3d-lg)"/>
      <path d="M 450 180 L 690 180 L 770 260 L 770 510 L 450 510 Z" fill="#7f1d1d" transform="translate(7, 9)"/>

      <!-- Main Document Surface -->
      <path d="M 450 180 L 680 180 L 760 260 L 760 510 C 760 522 750 530 738 530 L 450 530 C 438 530 430 522 430 510 L 430 200 C 430 188 438 180 450 180 Z" fill="url(#pdf-body-grad)" filter="url(#shadow-3d-md)"/>

      <!-- Document Bevel Highlight Edge -->
      <path d="M 450 181 L 680 181" stroke="#ff8080" stroke-width="3" stroke-linecap="round" opacity="0.8"/>
      <path d="M 431 200 L 431 510" stroke="#ff9999" stroke-width="2.5" stroke-linecap="round" opacity="0.6"/>

      <!-- Folded Page Corner (Top Right 3D Fold) -->
      <path d="M 680 180 L 680 260 L 760 260 Z" fill="#7f1d1d" opacity="0.4"/>
      <path d="M 680 180 L 760 260 L 680 260 Z" fill="url(#pdf-fold-grad)" filter="url(#shadow-3d-sm)"/>

      <!-- Document Inner Content Lines & Embossed Elements -->
      <rect x="475" y="325" width="240" height="12" rx="6" fill="#ffffff" opacity="0.3"/>
      <rect x="475" y="355" width="180" height="12" rx="6" fill="#ffffff" opacity="0.3"/>
      <rect x="475" y="385" width="210" height="12" rx="6" fill="#ffffff" opacity="0.3"/>

      <!-- Prominent 3D "PDF" Emblem Badge -->
      <g transform="translate(470, 220)">
        <rect width="130" height="64" rx="16" fill="#ffffff" filter="url(#shadow-3d-sm)"/>
        <!-- Inner Gloss -->
        <rect x="2" y="2" width="126" height="30" rx="14" fill="#ffffff" opacity="0.6"/>
        <text x="65" y="44" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="30" font-weight="900" fill="#dc2626" text-anchor="middle" letter-spacing="1.5">PDF</text>
      </g>

      <!-- 3D Compression Clamp / Inward Pressure Vise (Top & Bottom / Left & Right) -->
      <!-- TOP COMPRESSION VISE BAR -->
      <g transform="translate(500, 115)" filter="url(#shadow-3d-md)">
        <rect x="0" y="0" width="200" height="32" rx="10" fill="url(#gold-metal)"/>
        <rect x="15" y="3" width="170" height="10" rx="5" fill="#ffffff" opacity="0.5"/>
        <!-- Clamp Screws / Bolts -->
        <circle cx="25" cy="16" r="6" fill="url(#chrome-metal)"/>
        <circle cx="175" cy="16" r="6" fill="url(#chrome-metal)"/>
        <!-- Downward Arrow on Clamp -->
        <path d="M 100 18 L 88 6 L 112 6 Z" fill="#ffffff" opacity="0.9"/>
      </g>

      <!-- BOTTOM COMPRESSION VISE BAR -->
      <g transform="translate(500, 555)" filter="url(#shadow-3d-md)">
        <rect x="0" y="0" width="200" height="32" rx="10" fill="url(#gold-metal)"/>
        <rect x="15" y="3" width="170" height="10" rx="5" fill="#ffffff" opacity="0.5"/>
        <circle cx="25" cy="16" r="6" fill="url(#chrome-metal)"/>
        <circle cx="175" cy="16" r="6" fill="url(#chrome-metal)"/>
        <!-- Upward Arrow on Clamp -->
        <path d="M 100 14 L 88 26 L 112 26 Z" fill="#ffffff" opacity="0.9"/>
      </g>

      <!-- DUAL 3D INWARD COMPRESS ARROWS -->
      <!-- Left Inward Arrow -->
      <g transform="translate(340, 320)" filter="url(#glow-gold)">
        <path d="M 0 35 L 50 35 L 50 15 L 90 45 L 50 75 L 50 55 L 0 55 Z" fill="url(#gold-metal)" filter="url(#shadow-3d-md)"/>
        <path d="M 3 38 L 47 38 L 47 22 L 80 45 L 47 68 L 47 52 L 3 52 Z" fill="#ffffff" opacity="0.4"/>
      </g>

      <!-- Right Inward Arrow -->
      <g transform="translate(770, 320)" filter="url(#glow-gold)">
        <path d="M 90 35 L 40 35 L 40 15 L 0 45 L 40 75 L 40 55 L 90 55 Z" fill="url(#gold-metal)" filter="url(#shadow-3d-md)"/>
        <path d="M 87 38 L 43 38 L 43 22 L 10 45 L 43 68 L 43 52 L 87 52 Z" fill="#ffffff" opacity="0.4"/>
      </g>

      <!-- FLOATING 3D GLASS BADGE: "-75% SIZE" -->
      <g transform="translate(710, 440)" filter="url(#glow-emerald)">
        <rect width="190" height="62" rx="31" fill="url(#glass-badge)" filter="url(#shadow-3d-md)"/>
        <rect x="3" y="3" width="184" height="26" rx="15" fill="#ffffff" opacity="0.35"/>
        <!-- Bolt / Down icon -->
        <circle cx="34" cy="31" r="16" fill="#ffffff" opacity="0.25"/>
        <path d="M 34 22 L 34 40 M 27 33 L 34 40 L 41 33" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="60" y="39" font-family="'Plus Jakarta Sans', Arial, sans-serif" font-size="21" font-weight="900" fill="#ffffff" letter-spacing="0.5">-75% SIZE</text>
      </g>

      <!-- Floating 3D Sparkles and Particles -->
      <!-- Sparkle 1 (Top Left) -->
      <g transform="translate(370, 190) scale(1.1)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>
      <!-- Sparkle 2 (Top Right) -->
      <g transform="translate(820, 180) scale(0.9)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>
      <!-- Sparkle 3 (Bottom Left) -->
      <g transform="translate(330, 470) scale(0.8)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>

      <!-- Floating 3D Crystal Data Blocks -->
      <rect x="760" y="140" width="22" height="22" rx="6" fill="#38bdf8" opacity="0.85" transform="rotate(25 771 151)" filter="url(#shadow-3d-sm)"/>
      <rect x="390" y="440" width="18" height="18" rx="5" fill="#f43f5e" opacity="0.85" transform="rotate(15 399 449)" filter="url(#shadow-3d-sm)"/>
    </g>
  </svg>
  `;
}

/**
 * 2. PDF Merge 3D Artwork
 */
function getPdfMergeSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-merge" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0f9ff"/>
        <stop offset="100%" stop-color="#e0f2fe"/>
      </linearGradient>
      <radialGradient id="amb-glow-merge" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32"/>
        <stop offset="60%" stop-color="#0284c7" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f0f9ff" stop-opacity="0"/>
      </radialGradient>
      <!-- 3 Documents Colors -->
      <!-- Doc 1: Royal Crimson PDF -->
      <linearGradient id="merge-doc1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#be123c"/>
      </linearGradient>
      <!-- Doc 2: Vibrant Cyan Blue -->
      <linearGradient id="merge-doc2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="100%" stop-color="#0284c7"/>
      </linearGradient>
      <!-- Doc 3: Amber Gold -->
      <linearGradient id="merge-doc3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
      <linearGradient id="ring-gold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="50%" stop-color="#eab308"/>
        <stop offset="100%" stop-color="#ca8a04"/>
      </linearGradient>
      <linearGradient id="plus-badge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-merge)"/>
    <circle cx="600" cy="375" r="420" fill="url(#amb-glow-merge)"/>

    <ellipse cx="600" cy="590" rx="380" ry="44" fill="#0f172a" opacity="0.16" filter="url(#shadow-3d-lg)"/>

    <!-- 3D FANNING DOCUMENTS COMBINING -->
    <g transform="translate(0, -10)">
      <!-- Left Document (Crimson, angled -18 deg) -->
      <g transform="translate(370, 310) rotate(-16)" filter="url(#shadow-3d-md)">
        <rect width="210" height="290" rx="20" fill="#9f1239" transform="translate(6, 10)"/>
        <rect width="210" height="290" rx="20" fill="url(#merge-doc1)"/>
        <!-- Bevel -->
        <rect x="2" y="2" width="206" height="286" rx="18" fill="none" stroke="#fda4af" stroke-width="2" opacity="0.6"/>
        <!-- Document lines -->
        <rect x="30" y="60" width="90" height="34" rx="8" fill="#ffffff" opacity="0.9"/>
        <text x="75" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#be123c" text-anchor="middle">PDF 1</text>
        <rect x="30" y="120" width="150" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
        <rect x="30" y="145" width="120" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
        <rect x="30" y="170" width="140" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
      </g>

      <!-- Right Document (Amber Gold, angled +16 deg) -->
      <g transform="translate(620, 310) rotate(16)" filter="url(#shadow-3d-md)">
        <rect width="210" height="290" rx="20" fill="#92400e" transform="translate(6, 10)"/>
        <rect width="210" height="290" rx="20" fill="url(#merge-doc3)"/>
        <!-- Bevel -->
        <rect x="2" y="2" width="206" height="286" rx="18" fill="none" stroke="#fef08a" stroke-width="2" opacity="0.6"/>
        <!-- Document lines -->
        <rect x="30" y="60" width="90" height="34" rx="8" fill="#ffffff" opacity="0.9"/>
        <text x="75" y="84" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#d97706" text-anchor="middle">PDF 2</text>
        <rect x="30" y="120" width="150" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
        <rect x="30" y="145" width="130" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
        <rect x="30" y="170" width="110" height="10" rx="5" fill="#ffffff" opacity="0.4"/>
      </g>

      <!-- Center Master Combined Document (Cyan Blue, upright, raised forward) -->
      <g transform="translate(480, 200)" filter="url(#shadow-3d-lg)">
        <rect width="240" height="330" rx="24" fill="#0369a1" transform="translate(10, 16)"/>
        <rect width="240" height="330" rx="24" fill="url(#merge-doc2)"/>
        <!-- Top Glass Sheen -->
        <rect x="3" y="3" width="234" height="160" rx="22" fill="#ffffff" opacity="0.2"/>
        <rect x="2" y="2" width="236" height="326" rx="22" fill="none" stroke="#bae6fd" stroke-width="2.5" opacity="0.8"/>

        <!-- Master Cover Badge -->
        <g transform="translate(45, 45)">
          <rect width="150" height="54" rx="14" fill="#ffffff" filter="url(#shadow-3d-sm)"/>
          <text x="75" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#0284c7" text-anchor="middle">MERGED</text>
        </g>

        <!-- Document Mock Rows -->
        <rect x="45" y="130" width="150" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="45" y="158" width="120" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="45" y="186" width="140" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="45" y="214" width="90" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
      </g>

      <!-- Central 3D Merge Rings / Interlocking Helix -->
      <!-- 3D Interlocking Golden Rings -->
      <g transform="translate(560, 360)" filter="url(#glow-gold)">
        <!-- Outer Golden Merge Token -->
        <circle cx="40" cy="40" r="46" fill="url(#ring-gold)" filter="url(#shadow-3d-md)"/>
        <circle cx="40" cy="40" r="38" fill="#ffffff"/>
        <!-- Central Plus Merge Symbol -->
        <path d="M 40 22 L 40 58 M 22 40 L 58 40" stroke="#0284c7" stroke-width="9" stroke-linecap="round"/>
      </g>

      <!-- Dynamic Converging Speed Arcs / Ribbons -->
      <path d="M 330 380 Q 450 440 560 410" fill="none" stroke="#f43f5e" stroke-width="8" stroke-linecap="round" opacity="0.75" filter="url(#glow-crimson)"/>
      <path d="M 870 380 Q 750 440 640 410" fill="none" stroke="#f59e0b" stroke-width="8" stroke-linecap="round" opacity="0.75" filter="url(#glow-gold)"/>

      <!-- Floating 3D Sparkles -->
      <g transform="translate(380, 170) scale(1.1)" filter="url(#glow-cyan)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#38bdf8"/>
      </g>
      <g transform="translate(790, 190) scale(1.1)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>
      <g transform="translate(680, 480) scale(0.9)" filter="url(#glow-cyan)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#38bdf8"/>
      </g>

      <!-- Floating Status Pill: "UNLIMITED PAGES" -->
      <g transform="translate(700, 460)" filter="url(#glow-cyan)">
        <rect width="210" height="58" rx="29" fill="url(#plus-badge-grad)" filter="url(#shadow-3d-md)"/>
        <rect x="3" y="3" width="204" height="24" rx="14" fill="#ffffff" opacity="0.3"/>
        <text x="105" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="0.5">ALL IN ONE PDF</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 3. Image Compressor 3D Artwork
 */
function getImageCompressorSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-img" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0fdf4"/>
        <stop offset="100%" stop-color="#dcfce7"/>
      </linearGradient>
      <radialGradient id="amb-glow-img" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#34d399" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#10b981" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f0fdf4" stop-opacity="0"/>
      </radialGradient>
      <!-- Landscape Gradient inside Picture Frame -->
      <linearGradient id="photo-sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#bae6fd"/>
        <stop offset="100%" stop-color="#fef08a"/>
      </linearGradient>
      <linearGradient id="photo-mtn-back" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#818cf8"/>
        <stop offset="100%" stop-color="#4f46e5"/>
      </linearGradient>
      <linearGradient id="photo-mtn-front" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <!-- Chrome & Emerald Ring Gradients -->
      <linearGradient id="emerald-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6ee7b7"/>
        <stop offset="50%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <linearGradient id="pill-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-img)"/>
    <circle cx="600" cy="375" r="420" fill="url(#amb-glow-img)"/>

    <ellipse cx="600" cy="580" rx="360" ry="42" fill="#0f172a" opacity="0.16" filter="url(#shadow-3d-lg)"/>

    <!-- 3D PHOTO FRAME & APERTURE COMPRESSION -->
    <g transform="translate(0, -10)">
      <!-- 3D Photo Polaroid Frame Depth -->
      <rect x="420" y="150" width="360" height="420" rx="28" fill="#cbd5e1" transform="translate(10, 16)" filter="url(#shadow-3d-lg)"/>
      <!-- Main White Acrylic Picture Frame -->
      <rect x="420" y="150" width="360" height="420" rx="28" fill="#ffffff" filter="url(#shadow-3d-md)"/>
      <rect x="422" y="152" width="356" height="180" rx="26" fill="#ffffff" opacity="0.6"/>

      <!-- Photo Canvas Area (Beveled inside) -->
      <g transform="translate(446, 176)">
        <clipPath id="photo-clip">
          <rect width="308" height="280" rx="18"/>
        </clipPath>
        <g clip-path="url(#photo-clip)">
          <!-- Sky Background -->
          <rect width="308" height="280" fill="url(#photo-sky)"/>
          <!-- Glowing Golden Sun -->
          <circle cx="230" cy="70" r="38" fill="#fbbf24" filter="url(#glow-gold)"/>
          <circle cx="230" cy="70" r="30" fill="#fef08a"/>
          <!-- Back Mountain -->
          <polygon points="40,280 150,110 260,280" fill="url(#photo-mtn-back)"/>
          <!-- Front Mountain (Green) -->
          <polygon points="-20,280 80,160 210,280" fill="url(#photo-mtn-front)"/>
          <polygon points="140,280 230,170 340,280" fill="#047857"/>
          <!-- Glass Reflection diagonal swipe -->
          <path d="M 0 0 L 120 0 L 0 160 Z" fill="#ffffff" opacity="0.25"/>
        </g>
      </g>

      <!-- Camera Lens Aperture Ring Floating in Front of Frame -->
      <g transform="translate(600, 360)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="85" fill="#0f172a" opacity="0.85"/>
        <circle cx="0" cy="0" r="76" fill="url(#emerald-glow)"/>
        <circle cx="0" cy="0" r="64" fill="#022c22"/>
        <circle cx="0" cy="0" r="54" fill="#0f172a"/>
        <!-- Cyan Lens Glass Reflection -->
        <circle cx="0" cy="0" r="48" fill="#064e3b"/>
        <ellipse cx="-12" cy="-14" rx="26" ry="16" fill="#6ee7b7" opacity="0.4" transform="rotate(-30 -12 -14)"/>
      </g>

      <!-- DUAL INWARD COMPRESS ARROWS (VIBRANT EMERALD & GOLD) -->
      <!-- Left Arrow -->
      <g transform="translate(310, 310)" filter="url(#glow-emerald)">
        <path d="M 0 40 L 60 40 L 60 18 L 105 52 L 60 86 L 60 64 L 0 64 Z" fill="url(#emerald-glow)" filter="url(#shadow-3d-md)"/>
        <path d="M 3 43 L 57 43 L 57 26 L 96 52 L 57 78 L 57 61 L 3 61 Z" fill="#ffffff" opacity="0.45"/>
      </g>

      <!-- Right Arrow -->
      <g transform="translate(785, 310)" filter="url(#glow-emerald)">
        <path d="M 105 40 L 45 40 L 45 18 L 0 52 L 45 86 L 45 64 L 105 64 Z" fill="url(#emerald-glow)" filter="url(#shadow-3d-md)"/>
        <path d="M 102 43 L 48 43 L 48 26 L 9 52 L 48 78 L 48 61 L 102 61 Z" fill="#ffffff" opacity="0.45"/>
      </g>

      <!-- FLOATING GLASS BADGE: "-85% KB" -->
      <g transform="translate(700, 450)" filter="url(#glow-emerald)">
        <rect width="210" height="64" rx="32" fill="url(#pill-green)" filter="url(#shadow-3d-md)"/>
        <rect x="3" y="3" width="204" height="28" rx="16" fill="#ffffff" opacity="0.35"/>
        <circle cx="36" cy="32" r="18" fill="#ffffff" opacity="0.25"/>
        <path d="M 36 22 L 36 42 M 28 34 L 36 42 L 44 34" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
        <text x="66" y="40" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#ffffff" letter-spacing="0.5">-85% KB</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(360, 180) scale(1.1)" filter="url(#glow-emerald)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#34d399"/>
      </g>
      <g transform="translate(810, 190) scale(1)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 4. JPG to PDF 3D Artwork
 */
function getJpgToPdfSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-jpgtopdf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fdf4ff"/>
        <stop offset="100%" stop-color="#ede9fe"/>
      </linearGradient>
      <radialGradient id="amb-glow-jpgtopdf" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#818cf8" stop-opacity="0.32"/>
        <stop offset="60%" stop-color="#4f46e5" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#fdf4ff" stop-opacity="0"/>
      </radialGradient>
      <!-- JPG Card Gradients -->
      <linearGradient id="jpg-card-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>
      <!-- PDF Card Gradients -->
      <linearGradient id="pdf-target-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#be123c"/>
      </linearGradient>
      <!-- Transformation Vortex Ribbon -->
      <linearGradient id="vortex-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#f43f5e"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-jpgtopdf)"/>
    <circle cx="600" cy="375" r="420" fill="url(#amb-glow-jpgtopdf)"/>

    <ellipse cx="600" cy="580" rx="370" ry="42" fill="#0f172a" opacity="0.16" filter="url(#shadow-3d-lg)"/>

    <g transform="translate(0, -10)">
      <!-- LEFT: 3D JPG IMAGE TILE -->
      <g transform="translate(320, 230) rotate(-10)" filter="url(#shadow-3d-lg)">
        <rect width="230" height="290" rx="24" fill="#1e3a8a" transform="translate(8, 12)"/>
        <rect width="230" height="290" rx="24" fill="url(#jpg-card-grad)"/>
        <rect x="2" y="2" width="226" height="286" rx="22" fill="none" stroke="#bae6fd" stroke-width="2.5" opacity="0.7"/>

        <!-- Top Sheen -->
        <rect x="3" y="3" width="224" height="130" rx="21" fill="#ffffff" opacity="0.2"/>

        <!-- "JPG" Badge -->
        <g transform="translate(25, 30)">
          <rect width="90" height="42" rx="12" fill="#ffffff" filter="url(#shadow-3d-sm)"/>
          <text x="45" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#2563eb" text-anchor="middle">JPG</text>
        </g>

        <!-- Graphic inside JPG -->
        <g transform="translate(25, 90)">
          <rect width="180" height="160" rx="14" fill="#0284c7"/>
          <circle cx="130" cy="45" r="22" fill="#fbbf24"/>
          <polygon points="10,160 80,75 140,160" fill="#38bdf8"/>
          <polygon points="70,160 130,95 190,160" fill="#ffffff" opacity="0.9"/>
        </g>
      </g>

      <!-- RIGHT: 3D PDF FOLIO (Emerging Transformed) -->
      <g transform="translate(650, 210) rotate(10)" filter="url(#shadow-3d-lg)">
        <rect width="230" height="300" rx="24" fill="#881337" transform="translate(8, 12)"/>
        <rect width="230" height="300" rx="24" fill="url(#pdf-target-grad)"/>
        <rect x="2" y="2" width="226" height="296" rx="22" fill="none" stroke="#fecdd3" stroke-width="2.5" opacity="0.7"/>

        <!-- Folded Corner -->
        <path d="M 170 0 L 230 60 L 170 60 Z" fill="#9f1239" opacity="0.5"/>
        <path d="M 170 0 L 170 60 L 230 60 Z" fill="#ffffff" opacity="0.8"/>

        <!-- "PDF" Badge -->
        <g transform="translate(25, 30)">
          <rect width="90" height="42" rx="12" fill="#ffffff" filter="url(#shadow-3d-sm)"/>
          <text x="45" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#e11d48" text-anchor="middle">PDF</text>
        </g>

        <!-- Document Lines -->
        <rect x="25" y="110" width="160" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="25" y="140" width="130" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="25" y="170" width="150" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
        <rect x="25" y="200" width="100" height="12" rx="6" fill="#ffffff" opacity="0.5"/>
      </g>

      <!-- CENTER 3D TRANSFORMATION VORTEX RIBBON -->
      <g transform="translate(0, 0)">
        <!-- Curved 3D Sweep Arc from JPG to PDF -->
        <path d="M 480 430 C 520 480, 680 480, 720 370" fill="none" stroke="#fbbf24" stroke-width="22" stroke-linecap="round" filter="url(#glow-gold)"/>
        <path d="M 480 430 C 520 480, 680 480, 720 370" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" opacity="0.9"/>
        <!-- Arrowhead pointing to PDF -->
        <polygon points="720,350 695,385 745,385" fill="#fbbf24" filter="url(#glow-gold)"/>

        <!-- Reverse Loop Ribbon in depth -->
        <path d="M 720 320 C 670 230, 530 230, 480 340" fill="none" stroke="#38bdf8" stroke-width="16" stroke-linecap="round" opacity="0.85" filter="url(#glow-cyan)"/>
      </g>

      <!-- Central Floating 3D Sparkle Star & Magic Conversion Tag -->
      <g transform="translate(600, 360)" filter="url(#glow-gold)">
        <circle cx="0" cy="0" r="44" fill="#fbbf24" filter="url(#shadow-3d-md)"/>
        <circle cx="0" cy="0" r="36" fill="#ffffff"/>
        <!-- Dual Circular Sync Arrows -->
        <path d="M -16 -6 A 18 18 0 0 1 16 -6 M 16 6 A 18 18 0 0 1 -16 6" fill="none" stroke="#4f46e5" stroke-width="5.5" stroke-linecap="round"/>
        <polygon points="16,-6 10,-16 22,-14" fill="#4f46e5"/>
        <polygon points="-16,6 -10,16 -22,14" fill="#4f46e5"/>
      </g>

      <!-- Sparkles and Floating Stars -->
      <g transform="translate(430, 160) scale(1.2)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#fbbf24"/>
      </g>
      <g transform="translate(760, 160) scale(1.1)" filter="url(#glow-crimson)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#f43f5e"/>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 5. QR Code Generator 3D Artwork
 */
function getQrCodeSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-qr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0fdfa"/>
        <stop offset="100%" stop-color="#ccfbf1"/>
      </linearGradient>
      <radialGradient id="amb-glow-qr" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#0284c7" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f0fdfa" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="phone-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7"/>
        <stop offset="100%" stop-color="#0369a1"/>
      </linearGradient>
      <linearGradient id="phone-screen" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
      <linearGradient id="laser-beam" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#22d3ee" stop-opacity="0"/>
        <stop offset="50%" stop-color="#22d3ee" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#22d3ee" stop-opacity="0"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-qr)"/>
    <circle cx="600" cy="375" r="420" fill="url(#amb-glow-qr)"/>

    <ellipse cx="600" cy="585" rx="380" ry="42" fill="#0f172a" opacity="0.16" filter="url(#shadow-3d-lg)"/>

    <g transform="translate(0, -10)">
      <!-- 3D FLOATING QR CODE PLATE -->
      <g transform="translate(370, 180)" filter="url(#shadow-3d-lg)">
        <!-- 3D Plate Extrusion Depth -->
        <rect width="360" height="360" rx="36" fill="#cbd5e1" transform="translate(10, 16)"/>
        <!-- Main Plate Surface -->
        <rect width="360" height="360" rx="36" fill="#ffffff" filter="url(#shadow-3d-md)"/>
        <rect x="2" y="2" width="356" height="356" rx="34" fill="none" stroke="#99f6e4" stroke-width="3" opacity="0.8"/>

        <!-- Top Glass Specular -->
        <rect x="3" y="3" width="354" height="150" rx="33" fill="#ffffff" opacity="0.4"/>

        <!-- QR CODE PIXEL MATRIX (CYAN & INDIGO & GOLD) -->
        <g transform="translate(42, 42)">
          <!-- Top Left Finder Eye -->
          <rect x="0" y="0" width="76" height="76" rx="20" fill="#0284c7"/>
          <rect x="12" y="12" width="52" height="52" rx="14" fill="#ffffff"/>
          <rect x="24" y="24" width="28" height="28" rx="8" fill="#0284c7"/>

          <!-- Top Right Finder Eye -->
          <rect x="200" y="0" width="76" height="76" rx="20" fill="#0284c7"/>
          <rect x="212" y="12" width="52" height="52" rx="14" fill="#ffffff"/>
          <rect x="224" y="24" width="28" height="28" rx="8" fill="#0284c7"/>

          <!-- Bottom Left Finder Eye -->
          <rect x="0" y="200" width="76" height="76" rx="20" fill="#0284c7"/>
          <rect x="12" y="212" width="52" height="52" rx="14" fill="#ffffff"/>
          <rect x="24" y="224" width="28" height="28" rx="8" fill="#0284c7"/>

          <!-- Data Modules (Curved 3D modules) -->
          <!-- Row 1-2 -->
          <rect x="96" y="8" width="20" height="20" rx="6" fill="#06b6d4"/>
          <rect x="126" y="8" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="156" y="8" width="20" height="20" rx="6" fill="#06b6d4"/>

          <rect x="96" y="38" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="156" y="38" width="20" height="20" rx="6" fill="#06b6d4"/>

          <!-- Central Core (Gold highlight) -->
          <rect x="100" y="100" width="76" height="76" rx="18" fill="#facc15" filter="url(#glow-gold)"/>
          <circle cx="138" cy="138" r="18" fill="#ca8a04"/>
          <circle cx="138" cy="138" r="10" fill="#ffffff"/>

          <!-- Random scattered modern matrix modules -->
          <rect x="8" y="96" width="20" height="20" rx="6" fill="#06b6d4"/>
          <rect x="42" y="96" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="8" y="140" width="20" height="20" rx="6" fill="#06b6d4"/>
          <rect x="42" y="140" width="20" height="20" rx="6" fill="#0284c7"/>

          <rect x="200" y="96" width="20" height="20" rx="6" fill="#06b6d4"/>
          <rect x="240" y="96" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="200" y="140" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="240" y="140" width="20" height="20" rx="6" fill="#06b6d4"/>

          <rect x="96" y="200" width="20" height="20" rx="6" fill="#06b6d4"/>
          <rect x="126" y="200" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="156" y="200" width="20" height="20" rx="6" fill="#06b6d4"/>

          <rect x="96" y="240" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="136" y="240" width="30" height="20" rx="6" fill="#06b6d4"/>
          <rect x="200" y="200" width="30" height="20" rx="6" fill="#06b6d4"/>
          <rect x="240" y="200" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="200" y="240" width="20" height="20" rx="6" fill="#0284c7"/>
          <rect x="236" y="240" width="30" height="20" rx="6" fill="#06b6d4"/>
        </g>
      </g>

      <!-- 3D SMARTPHONE SCANNER HOVERING IN PERSPECTIVE -->
      <g transform="translate(670, 260)" filter="url(#shadow-3d-lg)">
        <!-- Phone 3D Extrusion -->
        <rect width="180" height="340" rx="36" fill="#0369a1" transform="translate(6, 12)"/>
        <!-- Phone Case -->
        <rect width="180" height="340" rx="36" fill="url(#phone-body)"/>
        <rect x="2" y="2" width="176" height="336" rx="34" fill="none" stroke="#38bdf8" stroke-width="2.5" opacity="0.8"/>

        <!-- Screen Area -->
        <rect x="12" y="24" width="156" height="292" rx="24" fill="#0f172a"/>

        <!-- Screen Content: Camera Viewfinder with Golden Sun / Graphic -->
        <rect x="16" y="28" width="148" height="284" rx="22" fill="url(#phone-screen)"/>

        <!-- Laser Target Reticle on Phone Screen -->
        <g transform="translate(44, 95)">
          <rect width="100" height="100" rx="16" fill="#0284c7" opacity="0.85"/>
          <path d="M 12 28 L 12 12 L 28 12 M 72 12 L 88 12 L 88 28 M 12 72 L 12 88 L 28 88 M 72 88 L 88 88 L 88 72" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="14" fill="#ffffff" opacity="0.9"/>
        </g>

        <!-- Home Indicator Bar -->
        <rect x="60" y="300" width="60" height="5" rx="2.5" fill="#ffffff" opacity="0.8"/>
      </g>

      <!-- 3D LASER SCAN WAVE -->
      <g transform="translate(350, 340)" filter="url(#glow-cyan)">
        <rect width="400" height="10" rx="5" fill="url(#laser-beam)"/>
        <rect x="100" y="3" width="200" height="4" rx="2" fill="#ffffff" opacity="0.9"/>
      </g>

      <!-- Floating Hologram Sparkles & Data Cubes -->
      <g transform="translate(340, 160) scale(1.1)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>
      <g transform="translate(860, 210) scale(1)" filter="url(#glow-cyan)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#22d3ee"/>
      </g>
      <g transform="translate(330, 480) scale(0.9)" filter="url(#glow-gold)">
        <path d="M 20 0 Q 20 20 40 20 Q 20 20 20 40 Q 20 20 0 20 Q 20 20 20 0 Z" fill="#facc15"/>
      </g>

      <!-- Floating 3D Cubes -->
      <rect x="330" y="300" width="22" height="22" rx="6" fill="#06b6d4" opacity="0.9" transform="rotate(22 341 311)" filter="url(#shadow-3d-sm)"/>
      <rect x="850" y="440" width="24" height="24" rx="7" fill="#facc15" opacity="0.9" transform="rotate(-18 862 452)" filter="url(#shadow-3d-sm)"/>
    </g>
  </svg>
  `;
}

async function main() {
  console.log("Generating 5 high quality 3D aesthetic illustrations...");

  const items = [
    { name: "3d-pdf-compressor.png", svg: getPdfCompressorSvg() },
    { name: "3d-pdf-merge.png", svg: getPdfMergeSvg() },
    { name: "3d-image-compressor.png", svg: getImageCompressorSvg() },
    { name: "3d-jpg-to-pdf.png", svg: getJpgToPdfSvg() },
    { name: "3d-qr-code-generator.png", svg: getQrCodeSvg() },
  ];

  for (const item of items) {
    const pngBuffer = await sharp(Buffer.from(item.svg))
      .resize(W, H)
      .png({ quality: 100, compressionLevel: 7 })
      .toBuffer();

    const srcFile = path.join(outDirSrc, item.name);
    const pubFile = path.join(outDirPublic, item.name);

    fs.writeFileSync(srcFile, pngBuffer);
    fs.writeFileSync(pubFile, pngBuffer);
    console.log(`Generated: ${item.name} (${pngBuffer.length} bytes)`);
  }

  console.log("All 5 3D artworks generated successfully!");
}

main().catch(console.error);
