// Success confirmation with booking details, timeline and WhatsApp CTA
import { CheckCircle, Shield, MessageCircle, Calendar, Clock, User } from "lucide-react";
import Avatar from "../ui/Avatar";
import Button from "../ui/Button";

const BOOKING_ID = () => "CRK" + Math.random().toString(36).slice(2, 8).toUpperCase();

const timeline = [
  { icon: MessageCircle, label: "WhatsApp message from your mentor within 2 hours with the meeting link" },
  { icon: Calendar, label: "Join the session on time. Have your mock test scores ready to share" },
  { icon: User, label: "Walk away with your personalised 90-day study plan" },
  { icon: CheckCircle, label: "Unlock unlimited WhatsApp messages to your mentor for 7 days post-session" },
];

export default function ConfirmationPage({ mentor, selectedDay, selectedTime, bookingForm, setView }) {
  const bookingId = BOOKING_ID();

  const displayDate = selectedDay
    ? new Date(selectedDay + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" })
    : "";

  return (
    <div className="min-h-screen mesh-bg pt-24 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success hero */}
        <div className="text-center mb-10 animate-fade-up">
          <div className="w-20 h-20 rounded-full bg-emerald-500/15 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>
            You're all set! 🎉
          </h1>
          <p className="text-base" style={{ color: "var(--fg-muted)" }}>
            Your session has been booked. Check your email for the confirmation.
          </p>
          <div className="inline-block mt-3 px-4 py-1.5 rounded-full text-sm font-mono"
            style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
            Booking ID: <strong style={{ color: "var(--fg)" }}>{bookingId}</strong>
          </div>
        </div>

        {/* Session card */}
        <div className="glass-card rounded-2xl p-6 mb-6 animate-fade-up-d1">
          <h2 className="text-sm font-bold mb-4" style={{ color: "var(--fg-muted)" }}>Session Details</h2>

          {mentor && (
            <div className="flex items-center gap-4 mb-5 pb-5 border-b" style={{ borderColor: "var(--border)" }}>
              <Avatar initials={mentor.initials} gradient={mentor.gradient} size="xl" />
              <div>
                <h3 className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>{mentor.name}</h3>
                <p style={{ color: "var(--fg-muted)" }}>{mentor.college} · {mentor.branch}</p>
                <p className="text-sm mt-1" style={{ color: "var(--fg-muted)" }}>AIR {mentor.rank.toLocaleString()}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>DATE</p>
              <p className="font-bold" style={{ color: "var(--fg)" }}>{displayDate}</p>
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>TIME</p>
              <p className="font-bold" style={{ color: "var(--fg)" }}>{selectedTime} IST</p>
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>DURATION</p>
              <p className="font-bold" style={{ color: "var(--fg)" }}>45 minutes</p>
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>AMOUNT PAID</p>
              <p className="font-bold text-emerald-400">₹{mentor?.price}</p>
            </div>
          </div>

          {bookingForm?.name && (
            <div className="mt-4 pt-4 border-t text-sm" style={{ borderColor: "var(--border)" }}>
              <p style={{ color: "var(--fg-muted)" }}>Booked by <strong style={{ color: "var(--fg)" }}>{bookingForm.name}</strong> · {bookingForm.phone}</p>
              <p style={{ color: "var(--fg-muted)" }}>Confirmation sent to <strong style={{ color: "var(--fg)" }}>{bookingForm.email}</strong></p>
            </div>
          )}
        </div>

        {/* What happens next */}
        <div className="glass-card rounded-2xl p-6 mb-6 animate-fade-up-d2">
          <h2 className="text-sm font-bold mb-5" style={{ color: "var(--fg-muted)" }}>What happens next</h2>
          <div className="space-y-4">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm pt-1 leading-relaxed" style={{ color: "var(--fg-muted)" }}>{t.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Money back banner */}
        <div className="rounded-2xl p-5 mb-8 animate-fade-up-d3 flex items-center gap-4"
          style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.25)" }}>
          <Shield className="w-8 h-8 text-emerald-400 flex-shrink-0" />
          <div>
            <p className="font-bold text-sm text-emerald-400">100% Money-Back Guarantee</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
              If you're not satisfied with your session, we'll refund the full amount within 24 hours. No questions asked.
            </p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center animate-fade-up-d4">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => window.open(`https://wa.me/919999999999?text=Hi%2C%20I%20just%20booked%20a%20session%20on%20Crackd%20(ID%3A%20${bookingId})`, "_blank")}
          >
            <MessageCircle className="w-4 h-4" />
            Send Booking Details on WhatsApp
          </Button>
          <button
            onClick={() => setView("landing")}
            className="block mt-4 text-sm mx-auto hover:underline"
            style={{ color: "var(--fg-muted)" }}
          >
            ← Back to home
          </button>
        </div>
      </div>
    </div>
  );
}
