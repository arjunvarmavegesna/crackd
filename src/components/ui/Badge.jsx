// Reusable badge with tone variants
const tones = {
  default: "bg-[var(--surface-2)] text-[var(--fg-muted)]",
  primary: "bg-indigo-500/15 text-indigo-400 border border-indigo-500/30",
  success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30",
  warn: "bg-amber-500/15 text-amber-400 border border-amber-500/30",
  danger: "bg-red-500/15 text-red-400 border border-red-500/30",
};

export default function Badge({ children, tone = "default", className = "", pulse = false }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold
        ${tones[tone]} ${className}
      `}
    >
      {pulse && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
        </span>
      )}
      {children}
    </span>
  );
}
