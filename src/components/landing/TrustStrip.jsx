// Trust metrics strip below the hero
const stats = [
  { value: "200+", label: "Verified Mentors" },
  { value: "12,400+", label: "Sessions Completed" },
  { value: "4.9★", label: "Average Rating" },
  { value: "₹299", label: "Starting Price" },
];

export default function TrustStrip() {
  return (
    <section className="py-8 border-y" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-extrabold grad-text">{s.value}</div>
              <div className="text-sm mt-0.5" style={{ color: "var(--fg-muted)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
