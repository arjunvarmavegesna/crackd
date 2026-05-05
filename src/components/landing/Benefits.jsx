// 3 benefit cards section
import { Target, Zap, Shield } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Personalised Roadmap",
    desc: "No generic advice. Your mentor looks at your scores, weak topics, and schedule — then builds a plan specifically for you.",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: Zap,
    title: "Real Talk, No Fluff",
    desc: "Your mentor cracked JEE recently. They know what actually works today — not outdated coaching-centre wisdom from 10 years ago.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Zero Risk, Full Value",
    desc: "Not satisfied? Full refund within 24 hours. No questions asked. We're confident in our mentors — that's why we can offer this.",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: "var(--fg)" }}>
            Why Crackd actually works
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--fg-muted)" }}>
            One honest conversation with someone who's been there is worth months of generic coaching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--fg)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
