// Step 4: Checkout form + sticky summary card
import { useState } from "react";
import { Shield, Lock } from "lucide-react";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function isValidPhone(p) { return /^[6-9]\d{9}$/.test(p.replace(/\s/g, "")); }

export default function Step4Checkout({ mentor, selectedDay, selectedTime, onPay, onBack }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", notes: "" });
  const [errors, setErrors] = useState({});

  const set = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Enter your full name";
    if (!isValidPhone(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!isValidEmail(form.email)) e.email = "Enter a valid email address";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePay = () => { if (validate()) onPay(form); };

  const valid =
    form.name.trim().length >= 2 &&
    isValidPhone(form.phone) &&
    isValidEmail(form.email);

  const displayDate = selectedDay
    ? new Date(selectedDay + "T00:00:00").toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "long" })
    : "";

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>Almost there!</h2>
      <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
        Fill in your details and proceed to secure payment.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <div className="lg:col-span-2 space-y-5">
          {[
            { id: "name", label: "Full Name", type: "text", placeholder: "Arjun Kumar" },
            { id: "phone", label: "WhatsApp Number", type: "tel", placeholder: "9876543210" },
            { id: "email", label: "Email Address", type: "email", placeholder: "arjun@example.com" },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--fg)" }}>
                {label} <span className="text-red-400">*</span>
              </label>
              <input
                type={type}
                placeholder={placeholder}
                value={form[id]}
                onChange={(e) => set(id, e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all ${
                  errors[id] ? "border-red-500" : "focus:border-indigo-500"
                }`}
                style={{
                  background: "var(--surface)",
                  borderColor: errors[id] ? "#ef4444" : "var(--border)",
                  color: "var(--fg)",
                }}
              />
              {errors[id] && <p className="text-xs text-red-400 mt-1">{errors[id]}</p>}
            </div>
          ))}

          <div>
            <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--fg)" }}>
              Topics / Questions <span className="text-xs font-normal" style={{ color: "var(--fg-muted)" }}>(optional)</span>
            </label>
            <textarea
              rows={3}
              placeholder="e.g. Struggling with Rotational Dynamics, need help with a study plan for the last 2 months..."
              value={form.notes}
              onChange={(e) => set("notes", e.target.value)}
              className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all resize-none focus:border-indigo-500"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <Button variant="secondary" onClick={onBack} size="lg">Back</Button>
            <Button onClick={handlePay} disabled={!valid} size="lg" className="flex-1 group">
              <Lock className="w-4 h-4" />
              Pay ₹{mentor?.price} Securely
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
              Secured by Razorpay · 100% money-back guarantee · Your data is safe
            </span>
          </div>
        </div>

        {/* Summary card */}
        <div>
          <div className="glass-card rounded-2xl p-5 sticky top-24">
            <h3 className="text-sm font-bold mb-4" style={{ color: "var(--fg)" }}>Booking Summary</h3>

            {mentor && (
              <div className="flex items-center gap-3 mb-4 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
                <Avatar initials={mentor.initials} gradient={mentor.gradient} size="md" />
                <div>
                  <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>{mentor.name}</p>
                  <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{mentor.college}</p>
                </div>
              </div>
            )}

            <div className="space-y-2.5 mb-4 text-sm">
              <div className="flex justify-between">
                <span style={{ color: "var(--fg-muted)" }}>Date</span>
                <span className="font-semibold" style={{ color: "var(--fg)" }}>{displayDate || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--fg-muted)" }}>Time</span>
                <span className="font-semibold" style={{ color: "var(--fg)" }}>{selectedTime || "—"}</span>
              </div>
              <div className="flex justify-between">
                <span style={{ color: "var(--fg-muted)" }}>Duration</span>
                <span className="font-semibold" style={{ color: "var(--fg)" }}>45 minutes</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: "var(--border)" }}>
              <span className="text-sm font-semibold" style={{ color: "var(--fg-muted)" }}>Total</span>
              <span className="text-2xl font-extrabold" style={{ color: "var(--fg)" }}>₹{mentor?.price}</span>
            </div>

            <div className="mt-3 text-center text-xs text-emerald-400 font-medium">
              ✓ Full refund if not satisfied
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
