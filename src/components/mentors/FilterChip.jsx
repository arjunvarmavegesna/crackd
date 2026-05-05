// Filter chip toggle button
export default function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 whitespace-nowrap ${
        active
          ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-500/25"
          : "border-[var(--border)] text-[var(--fg-muted)] hover:border-indigo-500/50 hover:text-[var(--fg)]"
      }`}
      style={!active ? { background: "var(--surface)" } : {}}
    >
      {label}
    </button>
  );
}
