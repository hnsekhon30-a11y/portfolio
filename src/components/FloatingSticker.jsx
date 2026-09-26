export default function FloatingSticker({ label, className = '', delay = 0, rotate = -6 }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute select-none whitespace-nowrap rounded-full border border-paper/15 bg-white/5 px-3 py-1.5 font-body text-[11px] font-semibold tracking-wider text-paper/70 backdrop-blur-sm animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        '--r': `${rotate}deg`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      {label}
    </span>
  )
}
