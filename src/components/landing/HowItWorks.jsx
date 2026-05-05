// 3-step "how it works" section
const steps = [
  {
    num: "01",
    title: "Pick your mentor",
    desc: "Browse verified IIT/NIT mentors. Filter by college, subject, price. Read their bios and pick the one whose story resonates.",
  },
  {
    num: "02",
    title: "Book a 45-min slot",
    desc: "Choose a date and time that works for you. Pay securely via Razorpay. You'll get a calendar invite with the meeting link instantly.",
  },
  {
    num: "03",
    title: "Get your roadmap",
    desc: "Show up to the call. Your mentor will review your situation and give you a personalised, actionable plan you can start today.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-4" style={{ background: "var(--surface)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--fg)" }}>
            How it works
          </h2>
          <p className="text-lg" style={{ color: "var(--fg-muted)" }}>
            From zero to your personalised JEE roadmap in under 30 minutes of booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px"
            style={{ background: "var(--border)" }} />

          {steps.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/25">
                <span className="text-white font-extrabold text-lg">{s.num}</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: "var(--fg)" }}>{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
