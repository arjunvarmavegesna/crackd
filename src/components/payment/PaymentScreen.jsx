// Razorpay-style payment modal with UPI/Card/Netbanking tabs
import { useState } from "react";
import { Lock, Shield, Loader2 } from "lucide-react";
import Button from "../ui/Button";
import Avatar from "../ui/Avatar";

function formatCard(val) {
  return val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
}
function formatExpiry(val) {
  const d = val.replace(/\D/g, "").slice(0, 4);
  if (d.length >= 3) return d.slice(0, 2) + "/" + d.slice(2);
  return d;
}

export default function PaymentScreen({ mentor, totalAmount, onSuccess, onFail }) {
  const [tab, setTab] = useState("upi");
  const [processing, setProcessing] = useState(false);
  const [upi, setUpi] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "", name: "" });

  const handlePay = () => {
    setProcessing(true);
    const fail = upi.trim().toLowerCase() === "fail@upi";
    setTimeout(() => {
      setProcessing(false);
      if (fail) onFail();
      else onSuccess();
    }, 2200);
  };

  const canPay =
    !processing &&
    (tab === "upi"
      ? upi.trim().length > 5
      : tab === "card"
      ? card.number.replace(/\s/g, "").length === 16 && card.expiry.length === 5 && card.cvv.length === 3 && card.name.trim().length > 2
      : true);

  const TABS = [
    { id: "upi", label: "UPI" },
    { id: "card", label: "Card" },
    { id: "netbanking", label: "Netbanking" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-md glass-card rounded-3xl overflow-hidden animate-fade-up">
        {/* Header */}
        <div className="p-5 border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {mentor && <Avatar initials={mentor.initials} gradient={mentor.gradient} size="sm" />}
              <div>
                <p className="text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>Paying to</p>
                <p className="font-bold text-sm" style={{ color: "var(--fg)" }}>Crackd · Session with {mentor?.name?.split(" ")[0]}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: "var(--fg-muted)" }}>Total</p>
              <p className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>₹{totalAmount}</p>
            </div>
          </div>
        </div>

        <div className="p-5">
          {/* Tabs */}
          <div className="flex gap-1 p-1 rounded-xl mb-5" style={{ background: "var(--surface-2)" }}>
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  tab === t.id ? "bg-white shadow text-gray-900" : ""
                }`}
                style={tab !== t.id ? { color: "var(--fg-muted)" } : {}}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* UPI */}
          {tab === "upi" && (
            <div className="space-y-3 animate-fade-in">
              <label className="block text-sm font-semibold mb-1" style={{ color: "var(--fg)" }}>UPI ID</label>
              <input
                type="text"
                placeholder="yourname@upi"
                value={upi}
                onChange={(e) => setUpi(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all"
                style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
              />
              <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
                Tip: type <code className="bg-[var(--surface-2)] px-1 rounded">fail@upi</code> to test the failure flow
              </p>
            </div>
          )}

          {/* Card */}
          {tab === "card" && (
            <div className="space-y-3 animate-fade-in">
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={card.number}
                  onChange={(e) => setCard((c) => ({ ...c, number: formatCard(e.target.value) }))}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all font-mono"
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>Expiry MM/YY</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={card.expiry}
                    onChange={(e) => setCard((c) => ({ ...c, expiry: formatExpiry(e.target.value) }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all font-mono"
                    style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>CVV</label>
                  <input
                    type="password"
                    placeholder="•••"
                    maxLength={3}
                    value={card.cvv}
                    onChange={(e) => setCard((c) => ({ ...c, cvv: e.target.value.replace(/\D/g, "").slice(0, 3) }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all font-mono"
                    style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1" style={{ color: "var(--fg-muted)" }}>Name on Card</label>
                <input
                  type="text"
                  placeholder="ARJUN KUMAR"
                  value={card.name}
                  onChange={(e) => setCard((c) => ({ ...c, name: e.target.value.toUpperCase() }))}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all"
                  style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
                />
              </div>
            </div>
          )}

          {/* Netbanking */}
          {tab === "netbanking" && (
            <div className="animate-fade-in">
              <p className="text-sm mb-4" style={{ color: "var(--fg-muted)" }}>Select your bank</p>
              <div className="grid grid-cols-3 gap-3">
                {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Other"].map((bank) => (
                  <button
                    key={bank}
                    className="py-3 px-2 rounded-xl border text-sm font-semibold transition-all hover:border-indigo-500/50"
                    style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
                  >
                    {bank}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Pay button */}
          <div className="mt-5">
            <button
              onClick={handlePay}
              disabled={!canPay}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: canPay || processing ? "var(--grad)" : "", opacity: !canPay && !processing ? 0.5 : 1 }}
            >
              {processing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing payment...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  Pay ₹{totalAmount} Securely
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-3">
            <Shield className="w-3 h-3" style={{ color: "var(--fg-muted)" }} />
            <span className="text-xs" style={{ color: "var(--fg-muted)" }}>Secured by Razorpay · 256-bit SSL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
