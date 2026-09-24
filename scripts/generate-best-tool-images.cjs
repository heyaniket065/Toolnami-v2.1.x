const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDirPublic = path.join(__dirname, "..", "public", "assets", "tools");
const outDirSrc = path.join(__dirname, "..", "src", "assets", "tools");

[outDirPublic, outDirSrc].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const W = 1200;
const H = 750;

// High-end 3D Studio definitions
const studioDefs = `
  <defs>
    <!-- Soft 3D Drop Shadows -->
    <filter id="shadow-3d-lg" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="32" stdDeviation="28" flood-color="#0f172a" flood-opacity="0.20"/>
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>
    <filter id="shadow-3d-md" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.16"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.10"/>
    </filter>
    <filter id="shadow-3d-sm" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.14"/>
    </filter>

    <!-- Vivid Ambient Glows -->
    <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#f59e0b" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#06b6d4" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#10b981" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-purple" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#8b5cf6" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-rose" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#f43f5e" flood-opacity="0.55"/>
    </filter>
    <filter id="glow-blue" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="#3b82f6" flood-opacity="0.55"/>
    </filter>

    <!-- Metallic & Glass Gradients -->
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="35%" stop-color="#eab308"/>
      <stop offset="70%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
    <linearGradient id="glass-pill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f8fafc" stop-opacity="0.88"/>
    </linearGradient>

    <!-- Transparency Checkerboard -->
    <pattern id="checker" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#ffffff"/>
      <rect x="0" y="0" width="12" height="12" fill="#e2e8f0"/>
      <rect x="12" y="12" width="12" height="12" fill="#e2e8f0"/>
    </pattern>
  </defs>
`;

/**
 * 1. PDF Rotate 3D Studio Artwork
 * Isometric 3D PDF document rotating on axis with glowing cyan curved arrows and 90° angle badges
 */
function getPdfRotateSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-rot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#eff6ff"/>
        <stop offset="100%" stop-color="#dbeafe"/>
      </linearGradient>
      <radialGradient id="glow-rot" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#60a5fa" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#eff6ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="pdf-doc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#f1f5f9"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-rot)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-rot)"/>

    <g transform="translate(600, 375)">
      <!-- Ground Shadow -->
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Rotating Orbit Track -->
      <ellipse cx="0" cy="0" rx="270" ry="120" fill="none" stroke="#93c5fd" stroke-width="4" stroke-dasharray="12,10" opacity="0.6"/>

      <!-- Giant 3D Curved Rotation Arrow (Front CW) -->
      <g filter="url(#glow-cyan)">
        <path d="M -180 50 C -120 130, 120 130, 200 40" fill="none" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
        <polygon points="215,25 180,38 200,65" fill="#0284c7"/>
      </g>
      <!-- Top CCW arrow arc -->
      <g filter="url(#glow-blue)">
        <path d="M 180 -50 C 120 -130, -120 -130, -200 -40" fill="none" stroke="#3b82f6" stroke-width="10" stroke-linecap="round"/>
        <polygon points="-215,-25 -180,-38 -200,-65" fill="#3b82f6"/>
      </g>

      <!-- Center 3D PDF Document Rotated at 45-degree isometric angle -->
      <g transform="rotate(-18) scale(1.05)" filter="url(#shadow-3d-lg)">
        <!-- Back Page Shadow Sheet -->
        <rect x="-120" y="-160" width="240" height="320" rx="20" fill="#cbd5e1" opacity="0.5" transform="rotate(22)"/>
        
        <!-- Main Document Sheet -->
        <rect x="-120" y="-160" width="240" height="320" rx="20" fill="url(#pdf-doc-grad)" stroke="#ffffff" stroke-width="4"/>
        
        <!-- Top Red PDF Badge Banner -->
        <path d="M -120 -120 L -60 -160 L -120 -160 Z" fill="#ef4444"/>
        <rect x="-95" y="-140" width="80" height="28" rx="8" fill="#ef4444"/>
        <text x="-55" y="-121" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#ffffff" text-anchor="middle">PDF</text>
        
        <!-- Text Layout Lines on Document -->
        <rect x="-85" y="-85" width="170" height="12" rx="6" fill="#cbd5e1"/>
        <rect x="-85" y="-60" width="140" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="-85" y="-40" width="155" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="-85" y="-20" width="120" height="10" rx="5" fill="#e2e8f0"/>

        <!-- Middle Circular Compass Dial -->
        <circle cx="0" cy="50" r="46" fill="#eff6ff" stroke="#3b82f6" stroke-width="3"/>
        <path d="M 0 16 L 0 84 M -34 50 L 34 50" stroke="#93c5fd" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="0" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#1d4ed8" text-anchor="middle">90°</text>
      </g>

      <!-- Floating 3D Angle Badges -->
      <g transform="translate(190, -80)" filter="url(#shadow-3d-md)">
        <rect x="-45" y="-25" width="90" height="50" rx="25" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="8" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#2563eb" text-anchor="middle">↻ 90°</text>
      </g>
      <g transform="translate(-190, 80)" filter="url(#shadow-3d-md)">
        <rect x="-45" y="-25" width="90" height="50" rx="25" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="8" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#0284c7" text-anchor="middle">↺ 180°</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(160, 110)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>
      <g transform="translate(-150, -120)" filter="url(#glow-gold)">
        <polygon points="0,-14 4,-3 14,0 4,3 0,14 -4,3 -14,0 -4,-3" fill="#facc15"/>
      </g>

      <!-- Bottom 3D Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#2563eb"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">ROTATE &amp; ALIGN</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 2. PDF Split 3D Studio Artwork
 * Crisp 3D Scissors dividing multiple stacked PDF sheets with clean separation
 */
function getPdfSplitSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-spt" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fff1f2"/>
        <stop offset="100%" stop-color="#ffe4e6"/>
      </linearGradient>
      <radialGradient id="glow-spt" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#fb7185" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#fff1f2" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="sciss-blade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="40%" stop-color="#cbd5e1"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-spt)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-spt)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Split Left Page -->
      <g transform="translate(-130, -10) rotate(-8)" filter="url(#shadow-3d-md)">
        <rect x="-90" y="-140" width="180" height="260" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-70" y="-120" width="50" height="24" rx="6" fill="#ef4444"/>
        <text x="-45" y="-103" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">PAGE 1-3</text>
        <rect x="-65" y="-75" width="130" height="10" rx="5" fill="#cbd5e1"/>
        <rect x="-65" y="-55" width="105" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="-65" y="-38" width="120" height="8" rx="4" fill="#e2e8f0"/>
      </g>

      <!-- Split Right Page -->
      <g transform="translate(130, -10) rotate(8)" filter="url(#shadow-3d-md)">
        <rect x="-90" y="-140" width="180" height="260" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-70" y="-120" width="50" height="24" rx="6" fill="#f43f5e"/>
        <text x="-45" y="-103" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">PAGE 4-8</text>
        <rect x="-65" y="-75" width="130" height="10" rx="5" fill="#cbd5e1"/>
        <rect x="-65" y="-55" width="105" height="8" rx="4" fill="#e2e8f0"/>
        <rect x="-65" y="-38" width="120" height="8" rx="4" fill="#e2e8f0"/>
      </g>

      <!-- Center Perforation Laser Line -->
      <line x1="0" y1="-170" x2="0" y2="150" stroke="#f43f5e" stroke-width="4" stroke-dasharray="8,6" filter="url(#glow-rose)"/>

      <!-- Giant 3D Golden/Chrome Scissors Cutting Center -->
      <g transform="translate(0, -30)" filter="url(#shadow-3d-lg)">
        <!-- Left Blade -->
        <path d="M 0 0 L -80 -130 L -60 -140 L 15 -10 Z" fill="url(#sciss-blade)"/>
        <!-- Right Blade -->
        <path d="M 0 0 L 80 -130 L 60 -140 L -15 -10 Z" fill="url(#sciss-blade)"/>
        <!-- Center Pivot Screw (Gold) -->
        <circle cx="0" cy="0" r="14" fill="url(#gold-grad)"/>
        <circle cx="0" cy="0" r="6" fill="#78350f"/>
        
        <!-- Scissor Handles (Red Ergonomic 3D Rings) -->
        <!-- Left Ring -->
        <ellipse cx="-45" cy="70" rx="30" ry="40" fill="none" stroke="#e11d48" stroke-width="14"/>
        <!-- Right Ring -->
        <ellipse cx="45" cy="70" rx="30" ry="40" fill="none" stroke="#e11d48" stroke-width="14"/>
      </g>

      <!-- Sparkles -->
      <g transform="translate(180, -110)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#e11d48"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">EXTRACT &amp; SPLIT</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 3. PDF Protect 3D Studio Artwork
 * Titanium Safe Lock & Cyber Shield guarding PDF Document
 */
function getPdfProtectSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-pro" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0fdf4"/>
        <stop offset="100%" stop-color="#dcfce7"/>
      </linearGradient>
      <radialGradient id="glow-pro" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#10b981" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#34d399" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#f0fdf4" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="50%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-pro)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-pro)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- PDF Document Behind Shield -->
      <g transform="translate(-40, -40)" filter="url(#shadow-3d-md)">
        <rect x="-110" y="-140" width="220" height="290" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-85" y="-115" width="60" height="26" rx="6" fill="#ef4444"/>
        <text x="-55" y="-98" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">PDF</text>
        <rect x="-85" y="-70" width="150" height="12" rx="6" fill="#cbd5e1"/>
        <rect x="-85" y="-45" width="130" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="-85" y="-25" width="140" height="10" rx="5" fill="#e2e8f0"/>
      </g>

      <!-- 3D Emerald Cyber Shield in Front -->
      <g transform="translate(60, 0)" filter="url(#shadow-3d-lg)">
        <path d="M 0 -130 L 100 -80 C 100 40, 50 110, 0 140 C -50 110, -100 40, -100 -80 Z" fill="url(#shield-grad)" stroke="#ffffff" stroke-width="4"/>
        <!-- Inner Glow Ring -->
        <path d="M 0 -105 L 75 -65 C 75 30, 35 85, 0 110 C -35 85, -75 30, -75 -65 Z" fill="none" stroke="#a7f3d0" stroke-width="3" opacity="0.6"/>
        
        <!-- Big Golden Padlock Centered on Shield -->
        <g transform="translate(0, -10)" filter="url(#shadow-3d-sm)">
          <!-- Shackle -->
          <path d="M -24 0 L -24 -26 C -24 -48 24 -48 24 -26 L 24 0" fill="none" stroke="url(#gold-grad)" stroke-width="12" stroke-linecap="round"/>
          <!-- Lock Body -->
          <rect x="-38" y="0" width="76" height="64" rx="14" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="2"/>
          <circle cx="0" cy="26" r="7" fill="#78350f"/>
          <polygon points="-3,28 3,28 5,42 -5,42" fill="#78350f"/>
        </g>
      </g>

      <!-- Sparkles -->
      <g transform="translate(-160, -100)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#059669"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">ENCRYPT &amp; LOCK</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 4. Image Watermark 3D Studio Artwork
 * High-gloss Photo with 3D Holographic Copyright Seal & Stamp
 */
function getImageWatermarkSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-wm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fdf4ff"/>
        <stop offset="100%" stop-color="#fae8ff"/>
      </linearGradient>
      <radialGradient id="glow-wm" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#c026d3" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#e879f9" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#fdf4ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="photo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#818cf8"/>
        <stop offset="100%" stop-color="#c084fc"/>
      </linearGradient>
      <linearGradient id="stamp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="100%" stop-color="#be123c"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-wm)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-wm)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Photo Card (Canvas Canvas) -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-220" y="-150" width="440" height="290" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-205" y="-135" width="410" height="260" rx="20" fill="url(#photo-grad)"/>
        
        <!-- Mountains & Sun inside Photo -->
        <circle cx="120" cy="-60" r="34" fill="#fef08a" opacity="0.9"/>
        <path d="M -205 125 L -80 -20 L 20 60 L 100 -40 L 205 125 Z" fill="#ffffff" opacity="0.25"/>
        <path d="M -120 125 L 0 10 L 120 125 Z" fill="#ffffff" opacity="0.35"/>
      </g>

      <!-- Diagonal Watermark Repeats across Photo -->
      <g transform="rotate(-25)" opacity="0.45">
        <text x="0" y="-40" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="8">PROTECTED</text>
        <text x="0" y="40" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="6">TOOLNAMI © 2026</text>
      </g>

      <!-- 3D Golden Copyright Rubber Stamp Badge (Bottom-Right) -->
      <g transform="translate(130, 40) rotate(12)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="62" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="0" cy="0" r="52" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,4"/>
        <text x="0" y="14" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="900" fill="#78350f" text-anchor="middle">©</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(-160, -110)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#c026d3"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">CUSTOM WATERMARK</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 5. JPG to WebP 3D Studio Artwork
 * JPG file transforming into ultra-lightweight WebP feather with 35% smaller badge
 */
function getJpgToWebpSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-webp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#ecfeff"/>
        <stop offset="100%" stop-color="#cffafe"/>
      </linearGradient>
      <radialGradient id="glow-webp" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#22d3ee" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#ecfeff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="feather-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#06b6d4"/>
        <stop offset="100%" stop-color="#0e7490"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-webp)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-webp)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Left: Heavy JPG Document Card -->
      <g transform="translate(-150, -20) rotate(-6)" filter="url(#shadow-3d-md)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-65" y="-100" width="55" height="26" rx="6" fill="#f59e0b"/>
        <text x="-37" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">JPG</text>
        <rect x="-65" y="-55" width="130" height="90" rx="10" fill="#e2e8f0"/>
        <circle cx="-35" cy="-25" r="14" fill="#cbd5e1"/>
        <polygon points="-55,25 -25,-10 5,25" fill="#94a3b8"/>
        <text x="0" y="80" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#64748b" text-anchor="middle">4.2 MB</text>
      </g>

      <!-- Center Dynamic Conversion Arrow -->
      <g transform="translate(0, -20)" filter="url(#glow-cyan)">
        <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#06b6d4" stroke-width="4"/>
        <path d="M -14 0 L 8 0 M 0 -10 L 10 0 L 0 10" stroke="#0891b2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>

      <!-- Right: Modern Lightweight WebP Card with Rocket -->
      <g transform="translate(150, -20) rotate(6)" filter="url(#shadow-3d-lg)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#06b6d4" stroke-width="3"/>
        <rect x="-65" y="-100" width="65" height="26" rx="6" fill="#0891b2"/>
        <text x="-32" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">WEBP</text>
        
        <!-- Glowing Lightweight Feather Graphics -->
        <g transform="translate(0, 0)">
          <ellipse cx="0" cy="0" rx="45" ry="45" fill="#ecfeff"/>
          <!-- 3D Rocket Icon -->
          <path d="M 0 -28 C 14 -14 18 10 0 28 C -18 10 -14 -14 0 -28 Z" fill="url(#feather-grad)"/>
          <circle cx="0" cy="-4" r="6" fill="#ffffff"/>
        </g>

        <!-- Speed Badge (-75% Size) -->
        <g transform="translate(0, 80)">
          <rect x="-55" y="-14" width="110" height="28" rx="14" fill="#10b981"/>
          <text x="0" y="5" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" text-anchor="middle">⚡ -75% SIZE</text>
        </g>
      </g>

      <!-- Sparkles -->
      <g transform="translate(180, -110)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#0891b2"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">SUPERIOR WEBP</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 6. Free Invoice Generator 3D Studio Artwork
 * Clean 3D Invoice with Itemized Line Items, Currency Stamp, Paid Checkmark
 */
function getInvoiceGeneratorSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-inv" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#eef2ff"/>
        <stop offset="100%" stop-color="#e0e7ff"/>
      </linearGradient>
      <radialGradient id="glow-inv" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#6366f1" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#eef2ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="inv-top" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4f46e5"/>
        <stop offset="100%" stop-color="#3730a3"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-inv)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-inv)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Invoice Card Document -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-170" y="-155" width="340" height="305" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        
        <!-- Header Banner with Brand -->
        <rect x="-170" y="-155" width="340" height="60" rx="24" fill="url(#inv-top)"/>
        <text x="-135" y="-118" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900" fill="#ffffff">INVOICE</text>
        <text x="135" y="-118" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="700" fill="#a5b4fc" text-anchor="end">#INV-2026-08</text>

        <!-- Bill To Details -->
        <g transform="translate(-135, -65)">
          <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="800" fill="#94a3b8" letter-spacing="1">BILLED TO</text>
          <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#1e293b">Acme Corporation Ltd.</text>
        </g>

        <!-- Line Items Table -->
        <g transform="translate(-135, -15)">
          <rect x="0" y="0" width="270" height="24" rx="6" fill="#f1f5f9"/>
          <text x="10" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#64748b">Item Description</text>
          <text x="260" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#64748b" text-anchor="end">Amount</text>

          <text x="10" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#334155">UI/UX App Redesign</text>
          <text x="260" y="44" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="end">$2,400.00</text>

          <text x="10" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600" fill="#334155">Full-Stack Development</text>
          <text x="260" y="68" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#1e293b" text-anchor="end">$3,800.00</text>

          <!-- Divider -->
          <line x1="0" y1="84" x2="270" y2="84" stroke="#e2e8f0" stroke-width="2"/>

          <!-- Total Due -->
          <text x="10" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#1e293b">TOTAL DUE</text>
          <text x="260" y="108" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#4f46e5" text-anchor="end">$6,200.00</text>
        </g>
      </g>

      <!-- 3D "PAID" Emerald Stamp -->
      <g transform="translate(110, 45) rotate(-14)" filter="url(#shadow-3d-md)">
        <rect x="-60" y="-22" width="120" height="44" rx="10" fill="none" stroke="#10b981" stroke-width="4"/>
        <text x="0" y="8" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#10b981" text-anchor="middle" letter-spacing="3">PAID</text>
      </g>

      <!-- Floating 3D Dollar Coin -->
      <g transform="translate(-170, 40)" filter="url(#glow-gold)">
        <circle cx="0" cy="0" r="32" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="10" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="900" fill="#78350f" text-anchor="middle">$</text>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#4f46e5"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">FREE INVOICE MAKER</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 7. JSON to CSV 3D Studio Artwork
 * JSON code brackets transforming into tabular Excel spreadsheet grid
 */
function getJsonToCsvSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-jcsv" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0fdfa"/>
        <stop offset="100%" stop-color="#ccfbf1"/>
      </linearGradient>
      <radialGradient id="glow-jcsv" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#0d9488" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#14b8a6" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#f0fdfa" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="excel-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-jcsv)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-jcsv)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Left: JSON Code Block -->
      <g transform="translate(-150, -20) rotate(-6)" filter="url(#shadow-3d-md)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-85" y="-120" width="170" height="34" rx="20" fill="#f8fafc"/>
        <text x="0" y="-98" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="700" fill="#64748b" text-anchor="middle">{ data.json }</text>
        
        <g transform="translate(-65, -60)">
          <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" fill="#8b5cf6">[ {</text>
          <text x="12" y="24" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#3b82f6">"name": "Alex",</text>
          <text x="12" y="44" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#3b82f6">"role": "Dev",</text>
          <text x="12" y="64" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" fill="#10b981">"sales": 950</text>
          <text x="0" y="88" font-family="'JetBrains Mono', monospace" font-size="14" font-weight="900" fill="#8b5cf6">} ]</text>
        </g>
      </g>

      <!-- Center Flow Arrow -->
      <g transform="translate(0, -20)" filter="url(#glow-cyan)">
        <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#0d9488" stroke-width="4"/>
        <path d="M -14 0 L 8 0 M 0 -10 L 10 0 L 0 10" stroke="#0f766e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>

      <!-- Right: CSV Excel SpreadSheet Grid -->
      <g transform="translate(150, -20) rotate(6)" filter="url(#shadow-3d-lg)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#10b981" stroke-width="3"/>
        <rect x="-85" y="-120" width="170" height="34" rx="20" fill="url(#excel-green)"/>
        <text x="0" y="-98" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">SPREADSHEET.CSV</text>

        <!-- Tabular Grid Rows -->
        <g transform="translate(-70, -65)">
          <rect x="0" y="0" width="140" height="20" fill="#f0fdf4"/>
          <text x="10" y="14" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="800" fill="#047857">NAME | ROLE | SALES</text>
          
          <rect x="0" y="24" width="140" height="20" fill="#ffffff"/>
          <text x="10" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#334155">Alex | Dev | $950</text>
          
          <rect x="0" y="48" width="140" height="20" fill="#f8fafc"/>
          <text x="10" y="62" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#334155">Sara | Lead | $1,400</text>
          
          <rect x="0" y="72" width="140" height="20" fill="#ffffff"/>
          <text x="10" y="86" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="600" fill="#334155">John | PM | $1,200</text>
        </g>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#0d9488"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">JSON TO SPREADSHEET</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 8. SVG to PNG 3D Studio Artwork
 * Vector Pen Tool converting into High-Res Pixel PNG Canvas
 */
function getSvgToPngSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-spng" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fff7ed"/>
        <stop offset="100%" stop-color="#ffedd5"/>
      </linearGradient>
      <radialGradient id="glow-spng" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f97316" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#fb923c" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#fff7ed" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-spng)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-spng)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Vector Bézier Curve Frame (Left) -->
      <g transform="translate(-140, -20) rotate(-6)" filter="url(#shadow-3d-md)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-65" y="-100" width="55" height="26" rx="6" fill="#ea580c"/>
        <text x="-37" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">SVG</text>
        
        <!-- Vector Nodes & Bézier Handles -->
        <g transform="translate(0, 10)">
          <path d="M -50 40 C -40 -40, 40 -40, 50 40" fill="none" stroke="#f97316" stroke-width="5"/>
          <!-- Pen Handles -->
          <circle cx="-50" cy="40" r="6" fill="#3b82f6"/>
          <circle cx="50" cy="40" r="6" fill="#3b82f6"/>
          <rect x="-6" y="-36" width="12" height="12" fill="#ffffff" stroke="#f97316" stroke-width="3"/>
        </g>
      </g>

      <!-- Center Dynamic Icon -->
      <g transform="translate(0, -20)" filter="url(#glow-gold)">
        <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#ea580c" stroke-width="4"/>
        <path d="M -14 0 L 8 0 M 0 -10 L 10 0 L 0 10" stroke="#c2410c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>

      <!-- Transparent PNG Canvas Frame (Right) -->
      <g transform="translate(140, -20) rotate(6)" filter="url(#shadow-3d-lg)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#3b82f6" stroke-width="3"/>
        <rect x="-65" y="-100" width="60" height="26" rx="6" fill="#2563eb"/>
        <text x="-35" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">PNG</text>
        
        <!-- Checkerboard Inside -->
        <rect x="-65" y="-55" width="130" height="120" rx="12" fill="url(#checker)"/>
        <!-- Star Vector rendered sharply -->
        <polygon points="0,-20 8,-5 24,-5 12,5 16,20 0,10 -16,20 -12,5 -24,-5 -8,-5" fill="#f59e0b"/>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#ea580c"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">RASTERIZE TO PNG</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 9. Image Cropper 3D Studio Artwork
 * Aspect Ratio Presets with Glowing Crop Handles & Grid
 */
function getImageCropperSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-crp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#eff6ff"/>
        <stop offset="100%" stop-color="#dbeafe"/>
      </linearGradient>
      <radialGradient id="glow-crp" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#2563eb" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#3b82f6" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#eff6ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="crop-photo" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#60a5fa"/>
        <stop offset="50%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-crp)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-crp)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Photo Base Card -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-220" y="-150" width="440" height="290" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-205" y="-135" width="410" height="260" rx="20" fill="url(#crop-photo)"/>
        
        <!-- Scenery -->
        <circle cx="100" cy="-60" r="36" fill="#fef08a" opacity="0.85"/>
        <polygon points="-205,125 -60,-20 60,70 140,-10 205,125" fill="#ffffff" opacity="0.3"/>
      </g>

      <!-- Glowing Crop Bounding Box with Rule-of-Thirds Grid -->
      <g transform="translate(-10, -5)" filter="url(#glow-cyan)">
        <!-- Dimmed Surroundings -->
        <!-- Center Sharp Crop Window -->
        <rect x="-140" y="-100" width="280" height="200" rx="12" fill="none" stroke="#ffffff" stroke-width="4"/>
        
        <!-- Rule of Thirds Grid Lines -->
        <line x1="-47" y1="-100" x2="-47" y2="100" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,6" opacity="0.75"/>
        <line x1="47" y1="-100" x2="47" y2="100" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,6" opacity="0.75"/>
        <line x1="-140" y1="-33" x2="140" y2="-33" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,6" opacity="0.75"/>
        <line x1="-140" y1="33" x2="140" y2="33" stroke="#ffffff" stroke-width="2" stroke-dasharray="6,6" opacity="0.75"/>

        <!-- 4 Thick Corner Crop Handles -->
        <!-- Top Left -->
        <path d="M -140 -70 L -140 -100 L -110 -100" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <!-- Top Right -->
        <path d="M 110 -100 L 140 -100 L 140 -70" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <!-- Bottom Left -->
        <path d="M -140 70 L -140 100 L -110 100" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
        <!-- Bottom Right -->
        <path d="M 110 100 L 140 100 L 140 70" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>
      </g>

      <!-- Floating Aspect Ratio Badges -->
      <g transform="translate(190, -80)" filter="url(#shadow-3d-md)">
        <rect x="-45" y="-22" width="90" height="44" rx="22" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="7" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#2563eb" text-anchor="middle">16 : 9</text>
      </g>
      <g transform="translate(-190, 80)" filter="url(#shadow-3d-md)">
        <rect x="-45" y="-22" width="90" height="44" rx="22" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="7" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#0284c7" text-anchor="middle">1 : 1</text>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#2563eb"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">CROP &amp; RESCALE</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 10. Image Rotate & Flip 3D Studio Artwork
 * Photo Canvas rotating 360 degrees on gimbal axis
 */
function getImageRotateSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-irot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#faf5ff"/>
        <stop offset="100%" stop-color="#f3e8ff"/>
      </linearGradient>
      <radialGradient id="glow-irot" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#9333ea" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#a855f7" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#faf5ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="photo-rot" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c084fc"/>
        <stop offset="50%" stop-color="#9333ea"/>
        <stop offset="100%" stop-color="#6b21a8"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-irot)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-irot)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Orbit Ring -->
      <ellipse cx="0" cy="0" rx="260" ry="120" fill="none" stroke="#d8b4fe" stroke-width="4" stroke-dasharray="10,8"/>

      <!-- 3D Curved Circular Arrows -->
      <g filter="url(#glow-purple)">
        <path d="M -180 50 C -120 130, 120 130, 190 45" fill="none" stroke="#9333ea" stroke-width="12" stroke-linecap="round"/>
        <polygon points="205,30 170,42 190,70" fill="#9333ea"/>
      </g>

      <!-- Center Rotated Photo -->
      <g transform="rotate(22) scale(1.05)" filter="url(#shadow-3d-lg)">
        <rect x="-140" y="-100" width="280" height="200" rx="24" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-125" y="-85" width="250" height="170" rx="16" fill="url(#photo-rot)"/>
        <circle cx="50" cy="-30" r="24" fill="#fef08a" opacity="0.9"/>
        <polygon points="-125,85 -40,-10 30,50 80,0 125,85" fill="#ffffff" opacity="0.35"/>
      </g>

      <!-- Flip Mirror Badge (Top Left) -->
      <g transform="translate(-180, -70)" filter="url(#shadow-3d-md)">
        <rect x="-45" y="-22" width="90" height="44" rx="22" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="7" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900" fill="#9333ea" text-anchor="middle">↔ FLIP</text>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#9333ea"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">ROTATE &amp; FLIP</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 11. PDF to Text 3D Studio Artwork
 * PDF Object converting into cleanly formatted editable text documents
 */
function getPdfToTextSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-txt" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f1f5f9"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <radialGradient id="glow-txt" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#475569" stop-opacity="0.25"/>
        <stop offset="60%" stop-color="#64748b" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#f1f5f9" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-txt)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-txt)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <!-- Left: PDF File -->
      <g transform="translate(-140, -20) rotate(-6)" filter="url(#shadow-3d-md)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-65" y="-100" width="55" height="26" rx="6" fill="#ef4444"/>
        <text x="-37" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">PDF</text>
        <rect x="-65" y="-55" width="130" height="12" rx="6" fill="#cbd5e1"/>
        <rect x="-65" y="-35" width="110" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="-65" y="-18" width="120" height="10" rx="5" fill="#e2e8f0"/>
      </g>

      <!-- Center Flow Icon -->
      <g transform="translate(0, -20)" filter="url(#glow-blue)">
        <circle cx="0" cy="0" r="38" fill="#ffffff" stroke="#3b82f6" stroke-width="4"/>
        <path d="M -14 0 L 8 0 M 0 -10 L 10 0 L 0 10" stroke="#1d4ed8" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </g>

      <!-- Right: Text Document with glowing caret -->
      <g transform="translate(140, -20) rotate(6)" filter="url(#shadow-3d-lg)">
        <rect x="-85" y="-120" width="170" height="240" rx="20" fill="#ffffff" stroke="#3b82f6" stroke-width="3"/>
        <rect x="-65" y="-100" width="55" height="26" rx="6" fill="#3b82f6"/>
        <text x="-37" y="-83" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">TXT</text>
        
        <g transform="translate(-65, -55)">
          <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#334155">Extracted Plaintext</text>
          <text x="0" y="36" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#64748b">100% clean characters</text>
          <text x="0" y="56" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="500" fill="#64748b">Ready to copy/paste</text>
          <!-- Glowing Blinking Caret -->
          <line x1="110" y1="44" x2="110" y2="58" stroke="#2563eb" stroke-width="3"/>
        </g>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#3b82f6"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">EXTRACT TEXT</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 12. PDF Watermark 3D Studio Artwork
 */
function getPdfWatermarkSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${studioDefs}
    <defs>
      <linearGradient id="bg-pwm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fef2f2"/>
        <stop offset="100%" stop-color="#fee2e2"/>
      </linearGradient>
      <radialGradient id="glow-pwm" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.30"/>
        <stop offset="60%" stop-color="#f87171" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#fef2f2" stop-opacity="0"/>
      </radialGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-pwm)"/>
    <ellipse cx="600" cy="380" rx="440" ry="240" fill="url(#glow-pwm)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.14" filter="url(#shadow-3d-lg)"/>

      <g filter="url(#shadow-3d-lg)">
        <rect x="-130" y="-160" width="260" height="320" rx="20" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <rect x="-105" y="-135" width="60" height="26" rx="6" fill="#ef4444"/>
        <text x="-75" y="-118" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffffff" text-anchor="middle">PDF</text>
        
        <rect x="-105" y="-90" width="180" height="12" rx="6" fill="#cbd5e1"/>
        <rect x="-105" y="-70" width="160" height="10" rx="5" fill="#e2e8f0"/>
        <rect x="-105" y="-50" width="140" height="10" rx="5" fill="#e2e8f0"/>
        
        <!-- Big Diagonal Stamp Across Document -->
        <g transform="rotate(-30)" opacity="0.8">
          <rect x="-100" y="-24" width="200" height="48" rx="8" fill="none" stroke="#ef4444" stroke-width="5"/>
          <text x="0" y="8" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="900" fill="#ef4444" text-anchor="middle" letter-spacing="4">CONFIDENTIAL</text>
        </g>
      </g>

      <!-- Glass Pill Badge -->
      <g transform="translate(-130, 125)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#ef4444"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">STAMP &amp; PROTECT</text>
      </g>
    </g>
  </svg>
  `;
}

async function generate() {
  console.log("Generating Best 3D Tool Artwork...");

  const list = [
    { name: "pdf-rotate.png", svg: getPdfRotateSvg() },
    { name: "pdf-split.png", svg: getPdfSplitSvg() },
    { name: "pdf-protect.png", svg: getPdfProtectSvg() },
    { name: "pdf-watermark.png", svg: getPdfWatermarkSvg() },
    { name: "pdf-to-text.png", svg: getPdfToTextSvg() },
    { name: "image-cropper.png", svg: getImageCropperSvg() },
    { name: "image-rotate.png", svg: getImageRotateSvg() },
    { name: "image-flip.png", svg: getImageRotateSvg() },
    { name: "image-watermark.png", svg: getImageWatermarkSvg() },
    { name: "jpg-to-webp.png", svg: getJpgToWebpSvg() },
    { name: "svg-to-png.png", svg: getSvgToPngSvg() },
    { name: "invoice-generator.png", svg: getInvoiceGeneratorSvg() },
    { name: "json-to-csv.png", svg: getJsonToCsvSvg() },
  ];

  for (const item of list) {
    const buf = await sharp(Buffer.from(item.svg)).png({ quality: 95 }).toBuffer();
    fs.writeFileSync(path.join(outDirPublic, item.name), buf);
    fs.writeFileSync(path.join(outDirSrc, item.name), buf);
    console.log(`Rendered 3D photo: ${item.name}`);
  }

  console.log("Successfully generated all best 3D tool images!");
}

generate().catch(console.error);
