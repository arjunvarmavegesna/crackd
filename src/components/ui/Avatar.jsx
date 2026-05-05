// Avatar component with gradient background and initials
export default function Avatar({ initials, gradient, size = "md", className = "" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
    xl: "w-20 h-20 text-2xl",
  };
  return (
    <div
      className={`
        ${sizes[size]} rounded-full bg-gradient-to-br ${gradient}
        flex items-center justify-center font-bold text-white flex-shrink-0
        ${className}
      `}
    >
      {initials}
    </div>
  );
}
