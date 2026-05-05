// Accordion FAQ section
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "../../data/constants";

function FAQItem({ q, a, open, onToggle }) {
  return (
    <div className="border-b last:border-0" style={{ borderColor: "var(--border)" }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-sm" style={{ color: "var(--fg)" }}>{q}</span>
        <ChevronDown
          className="w-4 h-4 flex-shrink-0 transition-transform duration-200"
          style={{ color: "var(--fg-muted)", transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed animate-fade-in" style={{ color: "var(--fg-muted)" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 px-4" style={{ background: "var(--surface)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--fg)" }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="glass-card rounded-2xl px-6">
          {FAQS.map((f, i) => (
            <FAQItem
              key={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
