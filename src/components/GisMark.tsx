/**
 * Gis — the AuraAI brand mark. A stick of chalk with a kawaii face, leaning
 * like it was set down on the desk. Two inks only: ink-green outline/face and
 * fluorescent coral worn tip + baseline rule, on a cream chalk body.
 * Redrawn inline as SVG (never rasterized) so it stays crisp and themeable.
 */
export function GisMark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AuraAI — Gis the chalk"
      className={className}
    >
      <defs>
        <clipPath id="gisBody">
          <rect x="82" y="46" width="92" height="174" rx="44" ry="44" />
        </clipPath>
      </defs>
      <g transform="rotate(-10 128 133)">
        <rect
          x="82"
          y="46"
          width="92"
          height="174"
          rx="44"
          ry="44"
          fill="var(--chalk)"
          stroke="var(--ink)"
          strokeWidth="7"
        />
        <g clipPath="url(#gisBody)">
          <rect x="78" y="188" width="100" height="40" fill="var(--coral)" />
        </g>
        <ellipse cx="100" cy="120" rx="7" ry="4.5" fill="var(--coral)" fillOpacity="0.5" />
        <ellipse cx="156" cy="120" rx="7" ry="4.5" fill="var(--coral)" fillOpacity="0.5" />
        <g fill="var(--ink)">
          <ellipse cx="110" cy="106" rx="6" ry="8" />
          <ellipse cx="146" cy="106" rx="6" ry="8" />
        </g>
        <circle cx="112" cy="103" r="2" fill="var(--chalk)" />
        <circle cx="148" cy="103" r="2" fill="var(--chalk)" />
        <path
          d="M120 120 Q128 128 136 120"
          stroke="var(--ink)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <line
        x1="72"
        y1="240"
        x2="184"
        y2="240"
        stroke="var(--coral)"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
