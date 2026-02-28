// Yemeni-inspired decorative elements — qamariya geometric patterns and gypsum-style ornaments

const QamariyaDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-primary/40" />
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-primary opacity-60">
      <path d="M14 2L26 14L14 26L2 14Z" stroke="currentColor" strokeWidth="1" />
      <path d="M14 6L22 14L14 22L6 14Z" stroke="currentColor" strokeWidth="0.75" />
      <circle cx="14" cy="14" r="2" stroke="currentColor" strokeWidth="0.75" />
    </svg>
    <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-primary/40" />
  </div>
);

const QamariyaCorner = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    className={`text-primary/20 ${className}`}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
  >
    <path d="M0 0 Q20 0 20 20 Q20 40 40 40" stroke="currentColor" strokeWidth="1" />
    <path d="M0 8 Q12 8 12 20 Q12 32 24 32" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
  </svg>
);

const QamariyaBorder = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <svg width="100%" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" className="text-primary/15">
      <pattern id="yemeni-border" x="0" y="0" width="24" height="12" patternUnits="userSpaceOnUse">
        <path d="M0 6L6 0L12 6L6 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path d="M12 6L18 0L24 6L18 12Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
      </pattern>
      <rect width="200" height="12" fill="url(#yemeni-border)" />
    </svg>
  </div>
);

const QamariyaStar = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={`text-primary/15 ${className}`}>
    {/* 8-pointed star — classic Yemeni geometric motif */}
    <path
      d="M24 4L28 16L40 12L32 24L40 36L28 32L24 44L20 32L8 36L16 24L8 12L20 16Z"
      stroke="currentColor"
      strokeWidth="0.75"
      fill="none"
    />
    <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="24" cy="24" r="1.5" fill="currentColor" />
  </svg>
);

const ArchMotif = ({ className = "" }: { className?: string }) => (
  <svg width="80" height="40" viewBox="0 0 80 40" fill="none" className={`text-primary/20 ${className}`}>
    {/* Pointed arch — Yemeni architectural motif */}
    <path d="M5 40 Q5 15 40 2 Q75 15 75 40" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M15 40 Q15 20 40 10 Q65 20 65 40" stroke="currentColor" strokeWidth="0.5" fill="none" />
  </svg>
);

export { QamariyaDivider, QamariyaCorner, QamariyaBorder, QamariyaStar, ArchMotif };
