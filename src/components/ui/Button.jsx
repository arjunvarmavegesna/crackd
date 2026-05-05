// Reusable button with variant and size support
const variants = {
  primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40",
  secondary: "bg-white/10 hover:bg-white/20 text-[var(--fg)] border border-[var(--border)]",
  ghost: "hover:bg-white/10 text-[var(--fg-muted)]",
  glass: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white shadow-lg",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-7 py-3.5 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 font-semibold
        transition-all duration-200 cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]} ${sizes[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
