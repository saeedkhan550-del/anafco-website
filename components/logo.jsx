// ANAFCO brand logo — geometric "A" monogram + wordmark.
// Palette matches the site tokens: electric lime accent (#C6F24E) on
// near-black ink (#0A0A0B). The mark scales cleanly from favicon to nav.

/* The monogram mark on its own — rounded accent tile with a cut "A" peak.
   `size` in px. Use this anywhere you need just the icon. */
export function LogoMark({ size = 32, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="anafco-mark" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D7FA6B" />
          <stop offset="1" stopColor="#C6F24E" />
        </linearGradient>
      </defs>
      {/* accent tile */}
      <rect width="32" height="32" rx="8" fill="url(#anafco-mark)" />
      {/* "A" — two legs meeting at a peak, drawn as a negative-space stroke */}
      <path
        d="M9 24 L16 7 L23 24"
        stroke="#0A0A0B"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* crossbar */}
      <path d="M12 18 H20" stroke="#0A0A0B" strokeWidth="2.75" strokeLinecap="round" />
      {/* accent apex dot */}
      <circle cx="16" cy="7" r="1.9" fill="#0A0A0B" />
    </svg>
  );
}

/* Full lockup — mark + wordmark. `subdued` greys the "Technologies" tail. */
export function Logo({ size = 32, showText = true, className = "" }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={size} className="transition-transform duration-300 group-hover:scale-105" />
      {showText && (
        <span className="font-display text-[15px] font-semibold tracking-tight text-ink">
          ANAFCO<span className="text-faint"> Technologies</span>
        </span>
      )}
    </span>
  );
}
