// Hero section with headline, floating mentor card and trust strip
import { ArrowRight, Shield, Star } from "lucide-react";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";
import Stars from "../ui/Stars";

const floatingMentor = {
  name: "Aarav Sharma",
  college: "IIT Bombay • AIR 234",
  initials: "AS",
  gradient: "from-indigo-500 to-purple-600",
  rating: 4.9,
  reviews: 312,
  price: 499,
  tag: "Maths + Physics",
};

const avatarPile = [
  { initials: "DK", gradient: "from-pink-500 to-rose-500" },
  { initials: "SV", gradient: "from-emerald-500 to-teal-600" },
  { initials: "PA", gradient: "from-violet-500 to-purple-700" },
  { initials: "AM", gradient: "from-indigo-500 to-blue-600" },
];

export default function Hero({ setView }) {
  return (
    <section className="mesh-bg grain min-h-screen flex items-center pt-24 pb-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 animate-fade-up"
            style={{ background: "var(--surface-2)", color: "var(--fg-muted)", border: "1px solid var(--border)" }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            200+ verified IIT/NIT mentors · 12,400+ sessions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up-d1"
            style={{ color: "var(--fg)" }}>
            Talk to people who{" "}
            <span className="font-serif-italic grad-text">cracked JEE.</span>
          </h1>

          <p className="text-lg leading-relaxed mb-8 animate-fade-up-d2" style={{ color: "var(--fg-muted)" }}>
            Honest 1-on-1 guidance from verified IIT/NIT mentors.
            Get your personalised roadmap in 45 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up-d3">
            <Button onClick={() => setView("mentors")} size="lg" className="group">
              Browse Mentors
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="secondary" size="lg">
              How it works
            </Button>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-4 animate-fade-up-d4">
            <div className="flex -space-x-2">
              {avatarPile.map((a, i) => (
                <Avatar key={i} initials={a.initials} gradient={a.gradient} size="sm"
                  className="ring-2 ring-[var(--bg)]" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <Stars rating={5} />
                <span className="text-sm font-bold" style={{ color: "var(--fg)" }}>4.9</span>
                <span className="text-sm" style={{ color: "var(--fg-muted)" }}>from 3,200+ reviews</span>
              </div>
              <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                Trusted by aspirants from 28 states
              </p>
            </div>
          </div>
        </div>

        {/* Right column — floating mentor card */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-80">
            <div className="animate-float">
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-4">
                  <Avatar initials={floatingMentor.initials} gradient={floatingMentor.gradient} size="lg" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base truncate" style={{ color: "var(--fg)" }}>
                      {floatingMentor.name}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                      {floatingMentor.college}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <Stars rating={floatingMentor.rating} />
                      <span className="text-xs font-semibold" style={{ color: "var(--fg)" }}>
                        {floatingMentor.rating}
                      </span>
                      <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
                        ({floatingMentor.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
                    {floatingMentor.tag}
                  </span>
                  <div className="text-right">
                    <span className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>₹{floatingMentor.price}</span>
                    <span className="text-xs block" style={{ color: "var(--fg-muted)" }}>per 45-min session</span>
                  </div>
                </div>

                <Button className="w-full" size="sm">
                  Book Now
                </Button>

                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <Shield className="w-3 h-3 text-emerald-400" />
                  <span className="text-xs text-emerald-400 font-medium">Money-back guarantee</span>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ background: "var(--grad)" }} />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-15 blur-2xl bg-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
