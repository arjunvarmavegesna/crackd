// Payment failure screen with retry option
import { XCircle, RefreshCw } from "lucide-react";
import Button from "../ui/Button";

export default function PaymentFailedScreen({ onRetry, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)" }}>
      <div className="w-full max-w-sm glass-card rounded-3xl p-8 text-center animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-4">
          <XCircle className="w-8 h-8 text-red-400" />
        </div>

        <h2 className="text-xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>Payment Failed</h2>
        <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
          Your payment could not be processed. No money was deducted. Please try again with a different payment method.
        </p>

        <div className="space-y-3">
          <Button onClick={onRetry} className="w-full" size="lg">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Button variant="ghost" onClick={onCancel} className="w-full" size="md">
            Cancel Booking
          </Button>
        </div>

        <p className="text-xs mt-4" style={{ color: "var(--fg-muted)" }}>
          Need help? Email support@crackd.in
        </p>
      </div>
    </div>
  );
}
