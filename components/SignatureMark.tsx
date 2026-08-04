export default function SignatureMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 340 90"
      className={className}
      fill="none"
      role="img"
      aria-label="Signature flourish"
    >
      <path
        className="signature-path"
        d="M8 62 C 22 20, 40 18, 48 46 C 54 68, 62 70, 70 44 C 76 24, 86 22, 92 40
           C 98 58, 108 62, 118 40 C 126 22, 138 18, 148 34 C 154 44, 150 58, 138 58
           C 150 58, 168 40, 182 42 C 196 44, 198 60, 186 64 C 176 67, 168 60, 172 50
           C 178 34, 200 20, 222 24 C 244 28, 248 50, 232 58 C 220 64, 210 56, 216 44
           C 224 28, 250 18, 276 24 C 296 29, 300 46, 288 54"
        stroke="var(--crimson)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="292"
        y1="70"
        x2="330"
        y2="70"
        stroke="var(--crimson)"
        strokeWidth="4"
        strokeLinecap="round"
        className="signature-path"
        style={{ strokeDasharray: 40, animationDelay: "2.3s", animationDuration: "0.3s" }}
      />
    </svg>
  );
}
