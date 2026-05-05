// 4-card testimonials section
import { testimonials } from "../../data/testimonials";
import Avatar from "../ui/Avatar";
import Stars from "../ui/Stars";

export default function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--fg)" }}>
            Students who cracked it
          </h2>
          <p className="text-lg" style={{ color: "var(--fg-muted)" }}>
            Real results from real students. No paid reviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="glass-card rounded-2xl p-6 hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Avatar initials={t.avatar} gradient={t.gradient} size="md" />
                <div>
                  <h4 className="font-bold text-sm" style={{ color: "var(--fg)" }}>{t.name}</h4>
                  <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{t.college}</p>
                  <Stars rating={t.rating} />
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
