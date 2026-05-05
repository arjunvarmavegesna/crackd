// Sticky bottom CTA bar shown on mobile for landing and mentors views
import Button from "../ui/Button";

export default function StickyMobileCTA({ setView }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4 border-t"
      style={{ background: "var(--nav-bg)", backdropFilter: "blur(16px)", borderColor: "var(--border)" }}>
      <Button onClick={() => setView("mentors")} className="w-full" size="lg">
        Book a Session — from ₹299
      </Button>
      <p className="text-center text-xs mt-1.5" style={{ color: "var(--fg-muted)" }}>
        100% money-back guarantee · Secured by Razorpay
      </p>
    </div>
  );
}
