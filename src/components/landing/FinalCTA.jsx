// Bottom gradient CTA section
import { ArrowRight, Shield } from "lucide-react";
import Button from "../ui/Button";

export default function FinalCTA({ setView }) {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="rounded-3xl p-12 relative overflow-hidden grain"
          style={{ background: "var(--grad)" }}
        >
          {/* Glow overlays */}
          <div className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(255,255,255,0.3), transparent)" }} />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Your JEE roadmap is{" "}
              <span className="font-serif-italic">45 minutes away.</span>
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Don't spend another week wondering what to do. Talk to someone who's been there.
            </p>

            <Button variant="glass" size="lg" onClick={() => setView("mentors")} className="group mx-auto">
              Browse Mentors & Book Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center justify-center gap-2 mt-6">
              <Shield className="w-4 h-4 text-white/70" />
              <span className="text-white/70 text-sm">100% money-back guarantee · Secured by Razorpay</span>
            </div>

            <p className="text-white/50 text-xs mt-3">
              Sessions from ₹299 · Available today · No subscription
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
