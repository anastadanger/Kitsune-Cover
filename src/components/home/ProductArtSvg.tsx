type Props = {
  accent: string;
  accent2: string;
  dark?: boolean;
};

export function ProductArtSvg({ accent, accent2, dark = false }: Props) {
  const fg = dark ? "#fff" : "#000";
  return (
    <svg
      viewBox="0 0 400 280"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-full w-full"
      aria-hidden
    >
      <rect x="0" y="0" width="400" height="280" fill={accent} />
      <circle cx="70" cy="190" r="70" fill={accent2} stroke="#000" strokeWidth="6" />
      <circle
        cx="298"
        cy="78"
        r="42"
        fill="#fff"
        fillOpacity="0.75"
        stroke="#000"
        strokeWidth="6"
      />
      <path d="M56 54H130" stroke="#000" strokeWidth="8" />
      <path d="M300 220H360" stroke="#000" strokeWidth="8" />
      <text x="26" y="32" fontSize="18" fontFamily="Arial Black, Arial" fill={fg}>
        DROP
      </text>
      <text x="250" y="258" fontSize="18" fontFamily="Arial Black, Arial" fill={fg}>
        LIMITED
      </text>
    </svg>
  );
}
