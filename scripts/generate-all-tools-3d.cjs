const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const outDirSrc = path.join(__dirname, "..", "src", "assets", "tools");
const outDirPublic = path.join(__dirname, "..", "public", "assets", "tools");

[outDirSrc, outDirPublic].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

const W = 1200;
const H = 750;

const commonDefs = `
  <defs>
    <!-- Soft Multi-Layer 3D Studio Shadows -->
    <filter id="shadow-3d-lg" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="32" stdDeviation="28" flood-color="#0f172a" flood-opacity="0.22"/>
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.14"/>
    </filter>
    <filter id="shadow-3d-md" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.18"/>
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0f172a" flood-opacity="0.10"/>
    </filter>
    <filter id="shadow-3d-sm" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.15"/>
    </filter>
    
    <!-- Vivid Ambient Glows -->
    <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#f59e0b" flood-opacity="0.45"/>
    </filter>
    <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#06b6d4" flood-opacity="0.45"/>
    </filter>
    <filter id="glow-emerald" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#10b981" flood-opacity="0.45"/>
    </filter>
    <filter id="glow-purple" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#8b5cf6" flood-opacity="0.45"/>
    </filter>
    <filter id="glow-rose" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#f43f5e" flood-opacity="0.45"/>
    </filter>
    <filter id="glow-indigo" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="0" stdDeviation="14" flood-color="#6366f1" flood-opacity="0.45"/>
    </filter>

    <!-- Metallic Gradients -->
    <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a"/>
      <stop offset="30%" stop-color="#eab308"/>
      <stop offset="70%" stop-color="#ca8a04"/>
      <stop offset="100%" stop-color="#854d0e"/>
    </linearGradient>
    <linearGradient id="silver-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#e2e8f0"/>
      <stop offset="100%" stop-color="#94a3b8"/>
    </linearGradient>
    <linearGradient id="glass-pill" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#f1f5f9" stop-opacity="0.85"/>
    </linearGradient>

    <!-- Transparency Checkerboard Pattern -->
    <pattern id="checker" width="24" height="24" patternUnits="userSpaceOnUse">
      <rect width="24" height="24" fill="#ffffff"/>
      <rect x="0" y="0" width="12" height="12" fill="#e2e8f0"/>
      <rect x="12" y="12" width="12" height="12" fill="#e2e8f0"/>
    </pattern>
  </defs>
`;

/**
 * 1. Background Remover 3D Artwork
 * Magic cutout wand removing background to reveal transparency checkerboard with floating 3D subject
 */
function getBackgroundRemoverSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-rm" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f3e8ff"/>
        <stop offset="100%" stop-color="#ede9fe"/>
      </linearGradient>
      <radialGradient id="amb-glow-rm" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#c084fc" stop-opacity="0.35"/>
        <stop offset="60%" stop-color="#a855f7" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f3e8ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="subject-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f43f5e"/>
        <stop offset="40%" stop-color="#ec4899"/>
        <stop offset="100%" stop-color="#8b5cf6"/>
      </linearGradient>
      <linearGradient id="wand-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#38bdf8"/>
        <stop offset="50%" stop-color="#6366f1"/>
        <stop offset="100%" stop-color="#4f46e5"/>
      </linearGradient>
      <linearGradient id="wand-tip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#fef08a"/>
        <stop offset="100%" stop-color="#eab308"/>
      </linearGradient>
    </defs>

    <!-- Studio Canvas -->
    <rect width="${W}" height="${H}" fill="url(#bg-grad-rm)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-rm)"/>

    <!-- 3D Studio Pedestal Platform with Checkerboard Cutout Canvas -->
    <g transform="translate(600, 375)">
      <!-- Ground Soft Shadow -->
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>
      
      <!-- Backing Frame / Photo Card Left Half (Solid) -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-240" y="-170" width="480" height="320" rx="28" fill="#ffffff"/>
        <!-- Inner Photo Area -->
        <rect x="-225" y="-155" width="450" height="290" rx="20" fill="#f1f5f9"/>
        
        <!-- Left Side: Checkerboard Transparency Grid Revealed -->
        <rect x="-225" y="-155" width="225" height="290" rx="20" fill="url(#checker)"/>
        <!-- Right Side: Scenic Mountain / Background Gradient being removed -->
        <rect x="0" y="-155" width="225" height="290" fill="#e0e7ff" opacity="0.85"/>
        <path d="M 0 40 L 70 -30 L 130 30 L 170 -10 L 225 60 L 225 135 L 0 135 Z" fill="#c7d2fe" opacity="0.9"/>
        
        <!-- Split Cut Laser Line (Vertical dividing line with cyan glow) -->
        <line x1="0" y1="-165" x2="0" y2="145" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,4" filter="url(#glow-cyan)"/>
      </g>

      <!-- 3D Floating Cutout Subject (Vibrant High-Gloss Silhouette) -->
      <g transform="translate(-10, -10)" filter="url(#shadow-3d-md)">
        <!-- Elegant floating sneaker / product / portrait silhouette -->
        <!-- Center Floating Gem / Diamond Icon Cutout -->
        <polygon points="0,-90 85,-20 55,80 -55,80 -85,-20" fill="url(#subject-grad)" filter="url(#glow-purple)"/>
        <polygon points="0,-85 80,-18 50,75 -50,75 -80,-18" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.6"/>
        <!-- Subject Inner Star / Core -->
        <polygon points="0,-60 18,-15 65,-15 28,12 42,55 0,30 -42,55 -28,12 -65,-15 -18,-15" fill="#ffffff" opacity="0.9"/>
      </g>

      <!-- 3D Magic Wand / Laser Tool floating on Top Right -->
      <g transform="translate(140, -120) rotate(-35)" filter="url(#shadow-3d-md)">
        <!-- Wand Shaft -->
        <rect x="-14" y="0" width="28" height="180" rx="14" fill="url(#wand-grad)"/>
        <rect x="-6" y="10" width="12" height="160" rx="6" fill="#ffffff" opacity="0.4"/>
        <!-- Gold Accent Rings -->
        <rect x="-16" y="25" width="32" height="10" rx="4" fill="url(#gold-grad)"/>
        <rect x="-16" y="60" width="32" height="10" rx="4" fill="url(#gold-grad)"/>
        <!-- Wand Star Tip with Glowing Spark -->
        <g transform="translate(0, -10)" filter="url(#glow-gold)">
          <circle cx="0" cy="0" r="22" fill="url(#wand-tip)"/>
          <path d="M 0 -32 L 6 -8 L 30 0 L 6 8 L 0 32 L -6 8 L -30 0 L -6 -8 Z" fill="#ffffff"/>
        </g>
      </g>

      <!-- Floating 3D Sparkles and Cutout Dust -->
      <g transform="translate(-140, -100)" filter="url(#glow-cyan)">
        <polygon points="0,-18 5,-4 19,0 5,4 0,18 -5,4 -19,0 -5,-4" fill="#38bdf8"/>
      </g>
      <g transform="translate(-180, 50)" filter="url(#glow-gold)">
        <polygon points="0,-14 4,-3 15,0 4,3 0,14 -4,3 -15,0 -4,-3" fill="#fbbf24"/>
      </g>
      <g transform="translate(190, 80)" filter="url(#glow-rose)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#f43f5e"/>
      </g>

      <!-- 3D Glass Badge: "100% TRANSPARENT PNG" -->
      <g transform="translate(-140, 110)" filter="url(#shadow-3d-sm)">
        <rect width="280" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#10b981"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="800" fill="#0f172a" letter-spacing="1">INSTANT CUTOUT</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 2. Image Size Reducer (1MB to 200KB) 3D Artwork
 * Sleek precision dial / balance gauge reducing photo weight with emerald success badge
 */
function getImageSizeReducerSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-scale" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#ecfdf5"/>
        <stop offset="100%" stop-color="#d1fae5"/>
      </linearGradient>
      <radialGradient id="amb-glow-scale" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#34d399" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#10b981" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#ecfdf5" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="dial-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="60%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
      <linearGradient id="emerald-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#6ee7b7"/>
        <stop offset="40%" stop-color="#10b981"/>
        <stop offset="100%" stop-color="#047857"/>
      </linearGradient>
      <linearGradient id="blue-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#93c5fd"/>
        <stop offset="40%" stop-color="#3b82f6"/>
        <stop offset="100%" stop-color="#1d4ed8"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-scale)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-scale)"/>

    <g transform="translate(600, 375)">
      <!-- Platform Drop Shadow -->
      <ellipse cx="0" cy="180" rx="350" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>

      <!-- Large 3D Precision Digital Gauge / Scale Base -->
      <g filter="url(#shadow-3d-lg)">
        <circle cx="0" cy="0" r="180" fill="url(#dial-grad)" stroke="#ffffff" stroke-width="6"/>
        <!-- Inner Rim -->
        <circle cx="0" cy="0" r="158" fill="#f8fafc" stroke="#e2e8f0" stroke-width="4"/>
        <!-- Gauge Outer Arc (Emerald Track) -->
        <circle cx="0" cy="0" r="140" fill="none" stroke="#e2e8f0" stroke-width="16" stroke-linecap="round"/>
        <circle cx="0" cy="0" r="140" fill="none" stroke="url(#emerald-metal)" stroke-width="16" stroke-dasharray="600" stroke-dashoffset="220" stroke-linecap="round" filter="url(#glow-emerald)"/>
      </g>

      <!-- Center Digital Weight Indicator Display -->
      <g transform="translate(0, -10)" filter="url(#shadow-3d-md)">
        <!-- Screen Plate -->
        <rect x="-105" y="-65" width="210" height="130" rx="20" fill="#0f172a" stroke="#334155" stroke-width="3"/>
        <!-- Screen Glare -->
        <path d="M -100 -60 L 100 -60 L -30 60 L -100 60 Z" fill="#ffffff" opacity="0.06"/>
        <!-- Target Size Reading -->
        <text x="0" y="-10" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="900" fill="#34d399" text-anchor="middle" letter-spacing="1">200 KB</text>
        <text x="0" y="24" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="13" font-weight="700" fill="#94a3b8" text-anchor="middle" letter-spacing="1.5">TARGET SIZE</text>
        <rect x="-60" y="36" width="120" height="4" rx="2" fill="#10b981" filter="url(#glow-emerald)"/>
      </g>

      <!-- Left Input Photo Card (1 MB) -->
      <g transform="translate(-240, 20) rotate(-12)" filter="url(#shadow-3d-md)">
        <rect x="-70" y="-85" width="140" height="170" rx="18" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <rect x="-58" y="-73" width="116" height="105" rx="12" fill="#dbeafe"/>
        <!-- Mountain and Sun inside photo -->
        <circle cx="30" cy="-45" r="12" fill="#fbbf24"/>
        <polygon points="-40,15 0,-30 40,15" fill="#3b82f6" opacity="0.8"/>
        <polygon points="-10,15 25,-15 55,15" fill="#60a5fa" opacity="0.9"/>
        <!-- Tag 1 MB -->
        <rect x="-48" y="44" width="96" height="28" rx="8" fill="#f1f5f9"/>
        <text x="0" y="63" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="800" fill="#64748b" text-anchor="middle">1.0 MB</text>
      </g>

      <!-- Right Compressed Photo Card (200 KB) -->
      <g transform="translate(240, 20) rotate(12)" filter="url(#shadow-3d-md)">
        <rect x="-70" y="-85" width="140" height="170" rx="18" fill="#ffffff" stroke="#10b981" stroke-width="3" filter="url(#glow-emerald)"/>
        <rect x="-58" y="-73" width="116" height="105" rx="12" fill="#ecfdf5"/>
        <circle cx="30" cy="-45" r="12" fill="#fbbf24"/>
        <polygon points="-40,15 0,-30 40,15" fill="#10b981" opacity="0.8"/>
        <polygon points="-10,15 25,-15 55,15" fill="#34d399" opacity="0.9"/>
        <!-- Tag 200 KB -->
        <rect x="-52" y="44" width="104" height="28" rx="8" fill="#10b981"/>
        <text x="0" y="63" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="800" fill="#ffffff" text-anchor="middle">200 KB ✓</text>
      </g>

      <!-- Animated Reduction Arrows -->
      <g transform="translate(-130, -30)" filter="url(#glow-emerald)">
        <path d="M 0 0 L 25 -15 L 25 -5 L 50 -5 L 50 5 L 25 5 L 25 15 Z" fill="#10b981" transform="rotate(15)"/>
      </g>
      <g transform="translate(100, -30)" filter="url(#glow-emerald)">
        <path d="M 0 0 L 25 -15 L 25 -5 L 50 -5 L 50 5 L 25 5 L 25 15 Z" fill="#10b981" transform="rotate(15)"/>
      </g>

      <!-- Floating 3D Sparkles and Gem -->
      <g transform="translate(-200, -130)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>
      <g transform="translate(220, -110)" filter="url(#glow-emerald)">
        <polygon points="0,-18 5,-4 18,0 5,4 0,18 -5,4 -18,0 -5,-4" fill="#34d399"/>
      </g>

      <!-- 3D Glass Badge: "-80% SAVED" -->
      <g transform="translate(-125, 120)" filter="url(#shadow-3d-sm)">
        <rect width="250" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#10b981"/>
        <path d="M 28 18 L 28 34 M 22 28 L 28 34 L 34 28" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="52" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#065f46" letter-spacing="1">-80% REDUCED</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 3. Loan EMI / Financial Calculator 3D Artwork
 * 3D sleek device, gold coins stack, glowing percentage % and financial growth curve
 */
function getLoanEmiCalculatorSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-emi" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#fef3c7"/>
        <stop offset="100%" stop-color="#fde68a"/>
      </linearGradient>
      <radialGradient id="amb-glow-emi" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#d97706" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#fef3c7" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="calc-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="50%" stop-color="#f8fafc"/>
        <stop offset="100%" stop-color="#e2e8f0"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-emi)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-emi)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Calculator Device (Center) -->
      <g transform="translate(-40, -10)" filter="url(#shadow-3d-lg)">
        <rect x="-130" y="-170" width="260" height="340" rx="36" fill="url(#calc-body)" stroke="#ffffff" stroke-width="4"/>
        <!-- Display Screen -->
        <rect x="-105" y="-145" width="210" height="85" rx="18" fill="#0f172a"/>
        <text x="85" y="-90" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="34" font-weight="900" fill="#38bdf8" text-anchor="end" letter-spacing="2">₹24,500</text>
        <text x="-90" y="-120" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="11" font-weight="700" fill="#64748b" letter-spacing="1.5">MONTHLY EMI</text>
        
        <!-- Calculator Keys Grid -->
        <g transform="translate(-85, -35)">
          <!-- Row 1 -->
          <rect x="0" y="0" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="60" y="0" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="120" y="0" width="50" height="40" rx="12" fill="url(#gold-grad)"/>
          <!-- Row 2 -->
          <rect x="0" y="50" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="60" y="50" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="120" y="50" width="50" height="40" rx="12" fill="#6366f1"/>
          <!-- Row 3 -->
          <rect x="0" y="100" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="60" y="100" width="45" height="40" rx="12" fill="#e2e8f0"/>
          <rect x="120" y="100" width="50" height="40" rx="12" fill="#10b981"/>
        </g>
      </g>

      <!-- 3D Stack of Gold Coins (Right) -->
      <g transform="translate(180, 50)" filter="url(#shadow-3d-md)">
        <!-- Coin 1 (Bottom) -->
        <ellipse cx="0" cy="50" rx="70" ry="24" fill="url(#gold-grad)"/>
        <rect x="-70" y="34" width="140" height="16" fill="#b45309"/>
        <ellipse cx="0" cy="34" rx="70" ry="24" fill="url(#gold-grad)"/>
        <!-- Coin 2 -->
        <rect x="-70" y="10" width="140" height="16" fill="#b45309"/>
        <ellipse cx="0" cy="10" rx="70" ry="24" fill="url(#gold-grad)"/>
        <!-- Coin 3 -->
        <rect x="-70" y="-14" width="140" height="16" fill="#b45309"/>
        <ellipse cx="0" cy="-14" rx="70" ry="24" fill="url(#gold-grad)"/>
        <!-- Coin 4 (Top) -->
        <rect x="-70" y="-38" width="140" height="16" fill="#b45309"/>
        <ellipse cx="0" cy="-38" rx="70" ry="24" fill="url(#gold-grad)" stroke="#fef08a" stroke-width="2"/>
        <text x="0" y="-30" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="26" font-weight="900" fill="#78350f" text-anchor="middle">₹</text>
      </g>

      <!-- 3D Floating Percent Badge (Left) -->
      <g transform="translate(-210, -50)" filter="url(#glow-gold)">
        <circle cx="0" cy="0" r="52" fill="url(#gold-grad)" filter="url(#shadow-3d-md)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="16" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="44" font-weight="900" fill="#78350f" text-anchor="middle">%</text>
      </g>

      <!-- 3D Sparkles -->
      <g transform="translate(-160, -140)" filter="url(#glow-gold)">
        <polygon points="0,-18 5,-4 18,0 5,4 0,18 -5,4 -18,0 -5,-4" fill="#fbbf24"/>
      </g>
      <g transform="translate(240, -80)" filter="url(#glow-gold)">
        <polygon points="0,-15 4,-3 15,0 4,3 0,15 -4,3 -15,0 -4,-3" fill="#facc15"/>
      </g>

      <!-- 3D Glass Pill Badge -->
      <g transform="translate(-120, 120)" filter="url(#shadow-3d-sm)">
        <rect width="240" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#f59e0b"/>
        <text x="28" y="32" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">₹</text>
        <text x="52" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">INSTANT AMORT</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 4. Currency Converter 3D Artwork
 * Globe / Portal with orbiting 3D currencies: USD, EUR, INR, GBP, JPY
 */
function getCurrencyConverterSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-fx" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#eff6ff"/>
        <stop offset="100%" stop-color="#dbeafe"/>
      </linearGradient>
      <radialGradient id="amb-glow-fx" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#0284c7" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#eff6ff" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="portal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7"/>
        <stop offset="50%" stop-color="#2563eb"/>
        <stop offset="100%" stop-color="#1e40af"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-fx)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-fx)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>

      <!-- Center Dimensional FX Portal Ring -->
      <g filter="url(#shadow-3d-lg)">
        <circle cx="0" cy="0" r="140" fill="#ffffff" stroke="#e2e8f0" stroke-width="4"/>
        <circle cx="0" cy="0" r="120" fill="url(#portal-grad)"/>
        <!-- Inner Exchange Arrows -->
        <g filter="url(#glow-cyan)">
          <path d="M -45 -20 L 35 -20 L 15 -40" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M 45 20 L -35 20 L -15 40" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>

      <!-- Orbiting 3D Coin 1: USD $ (Top Left) -->
      <g transform="translate(-180, -90)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="44" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="14" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle">$</text>
      </g>

      <!-- Orbiting 3D Coin 2: EUR € (Top Right) -->
      <g transform="translate(180, -90)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="44" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="14" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle">€</text>
      </g>

      <!-- Orbiting 3D Coin 3: INR ₹ (Bottom Left) -->
      <g transform="translate(-190, 80)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="44" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="14" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle">₹</text>
      </g>

      <!-- Orbiting 3D Coin 4: GBP £ (Bottom Right) -->
      <g transform="translate(190, 80)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="44" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <text x="0" y="14" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="36" font-weight="900" fill="#78350f" text-anchor="middle">£</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(0, -170)" filter="url(#glow-gold)">
        <polygon points="0,-18 5,-4 18,0 5,4 0,18 -5,4 -18,0 -5,-4" fill="#fbbf24"/>
      </g>

      <!-- 3D Glass Pill -->
      <g transform="translate(-110, 120)" filter="url(#shadow-3d-sm)">
        <rect width="220" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#2563eb"/>
        <circle cx="28" cy="26" r="6" fill="#ffffff"/>
        <text x="50" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">LIVE FX RATES</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 5. JSON Formatter 3D Artwork
 * Luminous code brackets { } with indented syntax structure in futuristic acrylic glass
 */
function getJsonFormatterSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-json" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#ede9fe"/>
        <stop offset="100%" stop-color="#ddd6fe"/>
      </linearGradient>
      <radialGradient id="amb-glow-json" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#6d28d9" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#ede9fe" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="bracket-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#c084fc"/>
        <stop offset="40%" stop-color="#8b5cf6"/>
        <stop offset="100%" stop-color="#4c1d95"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-json)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-json)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Code Studio Glass Terminal Block -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-220" y="-150" width="440" height="290" rx="28" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>
        <!-- Title bar with dots -->
        <rect x="-220" y="-150" width="440" height="46" rx="28" fill="#f8fafc"/>
        <circle cx="-185" cy="-127" r="7" fill="#f43f5e"/>
        <circle cx="-163" cy="-127" r="7" fill="#fbbf24"/>
        <circle cx="-141" cy="-127" r="7" fill="#10b981"/>
        <text x="0" y="-121" font-family="'JetBrains Mono', monospace, sans-serif" font-size="14" font-weight="700" fill="#64748b" text-anchor="middle">data.json</text>

        <!-- Formatted Syntax Lines (Color Coded) -->
        <g transform="translate(-180, -70)">
          <!-- Line 1: { -->
          <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="900" fill="#8b5cf6">{</text>
          
          <!-- Line 2: "status": 200, -->
          <text x="35" y="32" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#3b82f6">"status"</text>
          <text x="135" y="32" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#64748b">:</text>
          <text x="155" y="32" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#10b981">200,</text>

          <!-- Line 3: "valid": true, -->
          <text x="35" y="64" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#3b82f6">"valid"</text>
          <text x="120" y="64" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#64748b">:</text>
          <text x="140" y="64" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#f59e0b">true,</text>

          <!-- Line 4: "clean": "100%" -->
          <text x="35" y="96" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#3b82f6">"clean"</text>
          <text x="120" y="96" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#64748b">:</text>
          <text x="140" y="96" font-family="'JetBrains Mono', monospace" font-size="20" font-weight="700" fill="#ec4899">"100%"</text>

          <!-- Line 5: } -->
          <text x="0" y="128" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="900" fill="#8b5cf6">}</text>
        </g>
      </g>

      <!-- Floating 3D Giant Brackets on Sides -->
      <g transform="translate(-180, -20)" filter="url(#glow-purple)">
        <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="120" font-weight="900" fill="url(#bracket-grad)" text-anchor="middle">{</text>
      </g>
      <g transform="translate(180, -20)" filter="url(#glow-purple)">
        <text x="0" y="0" font-family="'JetBrains Mono', monospace" font-size="120" font-weight="900" fill="url(#bracket-grad)" text-anchor="middle">}</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(160, -130)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- 3D Glass Pill -->
      <g transform="translate(-115, 120)" filter="url(#shadow-3d-sm)">
        <rect width="230" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#8b5cf6"/>
        <text x="28" y="32" font-family="'JetBrains Mono', monospace" font-size="16" font-weight="900" fill="#ffffff" text-anchor="middle">&lt;&gt;</text>
        <text x="50" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">PRETTY &amp; MINIFY</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 6. Password Generator 3D Artwork
 * High security titanium padlock, glowing key and shielded cypher
 */
function getPasswordGeneratorSvg() {
  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-grad-pwd" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fafc"/>
        <stop offset="50%" stop-color="#f0fdf4"/>
        <stop offset="100%" stop-color="#dcfce7"/>
      </linearGradient>
      <radialGradient id="amb-glow-pwd" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#22c55e" stop-opacity="0.38"/>
        <stop offset="60%" stop-color="#15803d" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#f0fdf4" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="lock-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#34d399"/>
        <stop offset="40%" stop-color="#059669"/>
        <stop offset="100%" stop-color="#064e3b"/>
      </linearGradient>
      <linearGradient id="shackle-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="40%" stop-color="#e2e8f0"/>
        <stop offset="100%" stop-color="#64748b"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-grad-pwd)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-glow-pwd)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.12" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Padlock -->
      <g filter="url(#shadow-3d-lg)">
        <!-- Shackle (Top Arch) -->
        <path d="M -65 -20 L -65 -90 C -65 -150 65 -150 65 -90 L 65 -20" fill="none" stroke="url(#shackle-grad)" stroke-width="28" stroke-linecap="round"/>
        
        <!-- Padlock Body -->
        <rect x="-105" y="-20" width="210" height="175" rx="32" fill="url(#lock-body)" stroke="#ffffff" stroke-width="4"/>
        
        <!-- Keyhole with Golden Sheen -->
        <circle cx="0" cy="50" r="18" fill="url(#gold-grad)"/>
        <polygon points="-7,55 7,55 12,85 -12,85" fill="url(#gold-grad)"/>
      </g>

      <!-- Floating 3D Golden Key (Right) -->
      <g transform="translate(180, -40) rotate(-45)" filter="url(#shadow-3d-md)">
        <!-- Key Bow (Ring) -->
        <circle cx="0" cy="-40" r="28" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="3"/>
        <circle cx="0" cy="-40" r="14" fill="#f8fafc"/>
        <!-- Key Shaft -->
        <rect x="-6" y="-15" width="12" height="95" rx="5" fill="url(#gold-grad)"/>
        <!-- Key Bits -->
        <rect x="6" y="45" width="20" height="8" rx="3" fill="url(#gold-grad)"/>
        <rect x="6" y="62" width="14" height="8" rx="3" fill="url(#gold-grad)"/>
      </g>

      <!-- Floating Protected Asterisks * * * * (Left) -->
      <g transform="translate(-180, 20)" filter="url(#shadow-3d-sm)">
        <rect x="-60" y="-25" width="120" height="50" rx="25" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
        <text x="0" y="10" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="32" font-weight="900" fill="#059669" text-anchor="middle" letter-spacing="4">••••</text>
      </g>

      <!-- Sparkles -->
      <g transform="translate(-140, -130)" filter="url(#glow-gold)">
        <polygon points="0,-16 4,-4 16,0 4,4 0,16 -4,4 -16,0 -4,-4" fill="#fbbf24"/>
      </g>

      <!-- 3D Glass Pill -->
      <g transform="translate(-120, 125)" filter="url(#shadow-3d-sm)">
        <rect width="240" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="#059669"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="52" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="15" font-weight="900" fill="#0f172a" letter-spacing="1">STRONG &amp; 100% RANDOM</text>
      </g>
    </g>
  </svg>
  `;
}

/**
 * 7. Universal Studio 3D Artwork Generator for any tool!
 * Generates an ultra clean, modern, light studio 3D card for any tool
 */
function getUniversalStudioSvg(toolTitle, category, iconType) {
  // Theme pallete based on category
  const palettes = {
    pdf: {
      bg1: "#f8fafc",
      bg2: "#fee2e2",
      bg3: "#fecaca",
      glow: "#ef4444",
      main1: "#f87171",
      main2: "#dc2626",
      main3: "#991b1b",
    },
    image: {
      bg1: "#f8fafc",
      bg2: "#dbeafe",
      bg3: "#bfdbfe",
      glow: "#3b82f6",
      main1: "#60a5fa",
      main2: "#2563eb",
      main3: "#1d4ed8",
    },
    text: {
      bg1: "#f8fafc",
      bg2: "#ecfdf5",
      bg3: "#a7f3d0",
      glow: "#10b981",
      main1: "#34d399",
      main2: "#059669",
      main3: "#065f46",
    },
    developer: {
      bg1: "#f8fafc",
      bg2: "#ede9fe",
      bg3: "#ddd6fe",
      glow: "#8b5cf6",
      main1: "#c084fc",
      main2: "#7c3aed",
      main3: "#5b21b6",
    },
    calculator: {
      bg1: "#f8fafc",
      bg2: "#fef3c7",
      bg3: "#fde68a",
      glow: "#f59e0b",
      main1: "#fbbf24",
      main2: "#d97706",
      main3: "#92400e",
    },
    seo: {
      bg1: "#f8fafc",
      bg2: "#fae8ff",
      bg3: "#f5d0fe",
      glow: "#d946ef",
      main1: "#e879f9",
      main2: "#c026d3",
      main3: "#86198f",
    },
    utility: {
      bg1: "#f8fafc",
      bg2: "#e0f2fe",
      bg3: "#bae6fd",
      glow: "#0284c7",
      main1: "#38bdf8",
      main2: "#0284c7",
      main3: "#0369a1",
    },
    ai: {
      bg1: "#f8fafc",
      bg2: "#fdf2f8",
      bg3: "#fce7f3",
      glow: "#ec4899",
      main1: "#f472b6",
      main2: "#db2777",
      main3: "#9d174d",
    },
  };

  const p = palettes[category] || palettes.developer;

  return `
  <svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    ${commonDefs}
    <defs>
      <linearGradient id="bg-u" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="50%" stop-color="${p.bg2}"/>
        <stop offset="100%" stop-color="${p.bg3}"/>
      </linearGradient>
      <radialGradient id="amb-u" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${p.glow}" stop-opacity="0.32"/>
        <stop offset="60%" stop-color="${p.main2}" stop-opacity="0.10"/>
        <stop offset="100%" stop-color="${p.bg2}" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="main-obj" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${p.main1}"/>
        <stop offset="50%" stop-color="${p.main2}"/>
        <stop offset="100%" stop-color="${p.main3}"/>
      </linearGradient>
    </defs>

    <rect width="${W}" height="${H}" fill="url(#bg-u)"/>
    <ellipse cx="600" cy="380" rx="420" ry="240" fill="url(#amb-u)"/>

    <g transform="translate(600, 375)">
      <ellipse cx="0" cy="180" rx="340" ry="60" fill="#0f172a" opacity="0.10" filter="url(#shadow-3d-lg)"/>

      <!-- 3D Studio Glass Display Podium -->
      <g filter="url(#shadow-3d-lg)">
        <rect x="-180" y="-140" width="360" height="280" rx="32" fill="#ffffff" stroke="#ffffff" stroke-width="4"/>
        <rect x="-160" y="-120" width="320" height="240" rx="22" fill="#f8fafc"/>
      </g>

      <!-- Center 3D Floating Iconic Emblem -->
      <g transform="translate(0, -20)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="75" fill="url(#main-obj)" stroke="#ffffff" stroke-width="5"/>
        <circle cx="0" cy="0" r="60" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.6"/>
        
        <!-- Category-specific 3D glyph inside -->
        ${renderGlyph(iconType, p.glow)}
      </g>

      <!-- Orbiting Geometric 3D Spheres and Cubes -->
      <g transform="translate(-160, -80)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="28" fill="url(#gold-grad)" stroke="#ffffff" stroke-width="2"/>
      </g>
      <g transform="translate(160, 60)" filter="url(#shadow-3d-md)">
        <circle cx="0" cy="0" r="24" fill="url(#silver-grad)" stroke="#ffffff" stroke-width="2"/>
      </g>
      <g transform="translate(150, -90)" filter="url(#glow-gold)">
        <polygon points="0,-18 5,-4 18,0 5,4 0,18 -5,4 -18,0 -5,-4" fill="#fbbf24"/>
      </g>
      <g transform="translate(-150, 70)" filter="url(#glow-gold)">
        <polygon points="0,-14 4,-3 14,0 4,3 0,14 -4,3 -14,0 -4,-3" fill="#facc15"/>
      </g>

      <!-- 3D Glass Pill Badge -->
      <g transform="translate(-130, 115)" filter="url(#shadow-3d-sm)">
        <rect width="260" height="52" rx="26" fill="url(#glass-pill)" stroke="#e2e8f0" stroke-width="2"/>
        <circle cx="28" cy="26" r="14" fill="${p.main2}"/>
        <path d="M 22 26 L 26 30 L 34 22" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="54" y="34" font-family="'Plus Jakarta Sans', system-ui, sans-serif" font-size="14" font-weight="900" fill="#0f172a" letter-spacing="1">${cleanLabel(toolTitle)}</text>
      </g>
    </g>
  </svg>
  `;
}

function cleanLabel(title) {
  return title.toUpperCase().slice(0, 18);
}

function renderGlyph(type, glowColor) {
  switch (type) {
    case "pdf":
      return `
        <rect x="-24" y="-32" width="48" height="64" rx="8" fill="#ffffff" opacity="0.9"/>
        <text x="0" y="8" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#dc2626" text-anchor="middle">PDF</text>
      `;
    case "image":
    case "resizer":
      return `
        <rect x="-35" y="-28" width="70" height="56" rx="10" fill="#ffffff" opacity="0.95"/>
        <circle cx="16" cy="-10" r="8" fill="#f59e0b"/>
        <polygon points="-24,18 0,-10 24,18" fill="#3b82f6"/>
      `;
    case "color":
      return `
        <circle cx="-14" cy="-10" r="18" fill="#ef4444" opacity="0.9"/>
        <circle cx="14" cy="-10" r="18" fill="#3b82f6" opacity="0.9"/>
        <circle cx="0" cy="14" r="18" fill="#10b981" opacity="0.9"/>
      `;
    case "hash":
      return `
        <text x="0" y="16" font-family="'JetBrains Mono', monospace" font-size="52" font-weight="900" fill="#ffffff" text-anchor="middle">#</text>
      `;
    case "seo":
    case "keyword":
      return `
        <circle cx="-8" cy="-8" r="22" fill="none" stroke="#ffffff" stroke-width="6"/>
        <line x1="8" y1="8" x2="26" y2="26" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
      `;
    case "text":
    case "case":
    case "word":
      return `
        <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="900" fill="#ffffff" text-anchor="middle">Aa</text>
      `;
    case "calc":
    case "age":
    case "percent":
      return `
        <text x="0" y="16" font-family="'Plus Jakarta Sans', sans-serif" font-size="48" font-weight="900" fill="#ffffff" text-anchor="middle">%</text>
      `;
    default:
      return `
        <polygon points="0,-35 28,24 -28,24" fill="#ffffff" opacity="0.95"/>
      `;
  }
}

async function run() {
  console.log("Generating 3D light-studio artwork for ToolNami tools...");

  const customTools = [
    { name: "background-remover.png", svg: getBackgroundRemoverSvg() },
    { name: "image-background-remover.png", svg: getBackgroundRemoverSvg() },
    { name: "image-size-reducer.png", svg: getImageSizeReducerSvg() },
    { name: "loan-emi-calculator.png", svg: getLoanEmiCalculatorSvg() },
    { name: "emi-calculator.png", svg: getLoanEmiCalculatorSvg() },
    { name: "currency-converter.png", svg: getCurrencyConverterSvg() },
    { name: "json-formatter.png", svg: getJsonFormatterSvg() },
    { name: "password-generator.png", svg: getPasswordGeneratorSvg() },
  ];

  // Specific 3D artwork for key catalogue tools
  const catalogueTools = [
    { name: "pdf-merger.png", title: "PDF Merger", cat: "pdf", glyph: "pdf" },
    { name: "pdf-merge.png", title: "PDF Merger", cat: "pdf", glyph: "pdf" },
    { name: "pdf-splitter.png", title: "PDF Splitter", cat: "pdf", glyph: "pdf" },
    { name: "split-pdf.png", title: "PDF Splitter", cat: "pdf", glyph: "pdf" },
    { name: "pdf-to-word.png", title: "PDF to Word", cat: "pdf", glyph: "pdf" },
    { name: "image-resizer.png", title: "Image Resizer", cat: "image", glyph: "resizer" },
    { name: "color-converter.png", title: "Color Converter", cat: "utility", glyph: "color" },
    { name: "hash-generator.png", title: "Hash Generator", cat: "developer", glyph: "hash" },
    { name: "keyword-density-checker.png", title: "Keyword Density", cat: "seo", glyph: "keyword" },
    { name: "case-converter.png", title: "Case Converter", cat: "text", glyph: "case" },
    { name: "word-counter.png", title: "Word Counter", cat: "text", glyph: "word" },
    { name: "age-calculator.png", title: "Age Calculator", cat: "calculator", glyph: "calc" },
    {
      name: "percentage-calculator.png",
      title: "Percentage Calc",
      cat: "calculator",
      glyph: "percent",
    },
    { name: "sitemap-generator.png", title: "Sitemap Gen", cat: "seo", glyph: "seo" },
    { name: "meta-tag-generator.png", title: "Meta Tag Gen", cat: "seo", glyph: "seo" },
    { name: "base64-encoder.png", title: "Base64 Encoder", cat: "developer", glyph: "hash" },
    { name: "base64-encode.png", title: "Base64 Encoder", cat: "developer", glyph: "hash" },
    { name: "base64-decode.png", title: "Base64 Decoder", cat: "developer", glyph: "hash" },
    { name: "regex-tester.png", title: "Regex Tester", cat: "developer", glyph: "hash" },
    { name: "regex-cheat-sheet.png", title: "Regex Tester", cat: "developer", glyph: "hash" },
    { name: "unit-converter.png", title: "Unit Converter", cat: "utility", glyph: "calc" },
    { name: "lorem-ipsum-generator.png", title: "Lorem Ipsum", cat: "text", glyph: "text" },
    { name: "lorem-ipsum.png", title: "Lorem Ipsum", cat: "text", glyph: "text" },
  ];

  for (const item of customTools) {
    const buf = await sharp(Buffer.from(item.svg)).png({ quality: 95 }).toBuffer();
    fs.writeFileSync(path.join(outDirPublic, item.name), buf);
    fs.writeFileSync(path.join(outDirSrc, item.name), buf);
    console.log("Rendered custom 3D:", item.name);
  }

  for (const item of catalogueTools) {
    const svg = getUniversalStudioSvg(item.title, item.cat, item.glyph);
    const buf = await sharp(Buffer.from(svg)).png({ quality: 95 }).toBuffer();
    fs.writeFileSync(path.join(outDirPublic, item.name), buf);
    fs.writeFileSync(path.join(outDirSrc, item.name), buf);
    console.log("Rendered studio 3D:", item.name);
  }

  console.log("All tool images generated successfully!");
}

run().catch(console.error);
