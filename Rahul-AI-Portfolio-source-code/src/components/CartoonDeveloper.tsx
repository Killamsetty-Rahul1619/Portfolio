/**
 * Original cartoon illustration of a developer at a laptop.
 * (Custom artwork — not copied from any reference site.)
 */
export default function CartoonDeveloper() {
  return (
    <svg
      viewBox="0 0 480 520"
      role="img"
      aria-label="Cartoon illustration of Rahul working at a laptop with a headset on"
      className="h-full w-full"
    >
      {/* Soft backdrop */}
      <ellipse cx="240" cy="262" rx="206" ry="238" fill="#FFE8DC" />

      {/* Code bracket — top left */}
      <g
        stroke="#FF5A1F"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      >
        <path d="M 98 90 L 72 112 L 98 134" />
        <path d="M 118 90 L 144 112 L 118 134" />
        <path d="M 124 84 L 92 140" />
      </g>

      {/* Cloud — top right */}
      <path
        d="M 356 112 a 12 12 0 0 1 4 -22 a 18 18 0 0 1 34 -4 a 16 16 0 0 1 30 8 a 12 12 0 0 1 0 22 z"
        fill="#FFFFFF"
        stroke="#181410"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Gear — left */}
      <circle
        cx="60"
        cy="330"
        r="15"
        fill="none"
        stroke="#FF5A1F"
        strokeWidth="8"
        strokeDasharray="6 6"
      />
      <circle cx="60" cy="330" r="7" fill="#FF5A1F" />
      <circle cx="60" cy="330" r="3" fill="#FBF7F1" />

      {/* Bar chart — right */}
      <rect x="392" y="322" width="12" height="30" rx="3" fill="#181410" />
      <rect x="410" y="306" width="12" height="46" rx="3" fill="#FF5A1F" />
      <rect x="428" y="288" width="12" height="64" rx="3" fill="#6E6356" />
      <line
        x1="386"
        y1="354"
        x2="444"
        y2="354"
        stroke="#181410"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Torso / hoodie */}
      <rect x="182" y="206" width="116" height="150" rx="48" fill="#FF5A1F" />
      <ellipse cx="240" cy="218" rx="54" ry="24" fill="#E8480F" />

      {/* Ears */}
      <circle cx="180" cy="152" r="13" fill="#F2B27E" />
      <circle cx="300" cy="152" r="13" fill="#F2B27E" />

      {/* Head */}
      <circle cx="240" cy="150" r="58" fill="#F2B27E" />

      {/* Hair */}
      <path
        d="M 184 162 C 184 100 296 100 296 162 C 290 126 272 112 240 112 C 208 112 190 126 184 162 Z"
        fill="#2B211A"
      />

      {/* Blush */}
      <circle cx="204" cy="180" r="6" fill="#FFC9A3" opacity="0.8" />
      <circle cx="276" cy="180" r="6" fill="#FFC9A3" opacity="0.8" />

      {/* Glasses */}
      <rect
        x="204"
        y="150"
        width="30"
        height="24"
        rx="7"
        fill="#FFFFFF"
        stroke="#181410"
        strokeWidth="3"
      />
      <rect
        x="246"
        y="150"
        width="30"
        height="24"
        rx="7"
        fill="#FFFFFF"
        stroke="#181410"
        strokeWidth="3"
      />
      <line x1="234" y1="162" x2="246" y2="162" stroke="#181410" strokeWidth="3" />
      <line x1="204" y1="160" x2="180" y2="156" stroke="#181410" strokeWidth="3" />
      <line x1="276" y1="160" x2="300" y2="156" stroke="#181410" strokeWidth="3" />

      {/* Eyes */}
      <circle cx="219" cy="163" r="3" fill="#181410" />
      <circle cx="261" cy="163" r="3" fill="#181410" />

      {/* Eyebrows */}
      <path
        d="M206 141 Q219 135 232 141"
        stroke="#181410"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M248 141 Q261 135 274 141"
        stroke="#181410"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Smile */}
      <path
        d="M224 190 Q240 201 256 190"
        stroke="#181410"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Headphones */}
      <path
        d="M 183 148 C 183 84 297 84 297 148"
        stroke="#181410"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
      <rect x="166" y="140" width="18" height="30" rx="8" fill="#181410" />
      <rect x="296" y="140" width="18" height="30" rx="8" fill="#181410" />
      <circle cx="175" cy="155" r="4" fill="#FF5A1F" />
      <circle cx="305" cy="155" r="4" fill="#FF5A1F" />

      {/* Laptop screen */}
      <rect x="118" y="292" width="244" height="146" rx="12" fill="#181410" />
      <rect x="128" y="302" width="224" height="126" rx="6" fill="#241E18" />
      <circle cx="142" cy="315" r="4" fill="#FF5A1F" />
      <circle cx="156" cy="315" r="4" fill="#FFE8DC" />
      <circle cx="170" cy="315" r="4" fill="#6E6356" />
      <rect x="138" y="331" width="72" height="9" rx="4.5" fill="#FF5A1F" />
      <rect x="138" y="349" width="116" height="9" rx="4.5" fill="#FFFFFF" opacity="0.9" />
      <rect x="156" y="367" width="92" height="9" rx="4.5" fill="#FFE8DC" />
      <rect x="156" y="385" width="60" height="9" rx="4.5" fill="#6E6356" />
      <rect x="138" y="403" width="128" height="9" rx="4.5" fill="#FFFFFF" opacity="0.6" />
      <rect x="278" y="396" width="56" height="18" rx="9" fill="#FF5A1F" />

      {/* Keyboard */}
      <rect x="132" y="442" width="216" height="20" rx="6" fill="#2B211A" />
      <rect x="140" y="447" width="200" height="4" rx="2" fill="#6E6356" opacity="0.45" />

      {/* Desk */}
      <rect x="40" y="458" width="400" height="22" rx="11" fill="#E3C5A0" />
      <rect x="40" y="470" width="400" height="10" rx="5" fill="#D2B087" />

      {/* Sleeves + hands (in front of the laptop) */}
      <rect x="126" y="418" width="38" height="34" rx="15" fill="#E8480F" />
      <rect x="316" y="418" width="38" height="34" rx="15" fill="#E8480F" />
      <circle cx="150" cy="449" r="13" fill="#F2B27E" />
      <circle cx="330" cy="449" r="13" fill="#F2B27E" />

      {/* Sparkles */}
      <path
        d="M 330 150 L 332 158 L 340 160 L 332 162 L 330 170 L 328 162 L 320 160 L 328 158 Z"
        fill="#FF5A1F"
      />
      <path
        d="M 96 214 L 98 220 L 104 222 L 98 224 L 96 230 L 94 224 L 88 222 L 94 220 Z"
        fill="#6E6356"
      />
    </svg>
  );
}
