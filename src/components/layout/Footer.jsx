// Site footer with branding, links and legal
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-24" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-extrabold text-lg" style={{ color: "var(--fg)" }}>Crackd</span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--fg-muted)" }}>
              Connecting JEE aspirants with verified IIT/NIT mentors for honest,
              personalised 1-on-1 guidance sessions.
            </p>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>
              support@crackd.in · crackd.in
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "var(--fg)" }}>Product</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--fg-muted)" }}>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Browse Mentors</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Become a Mentor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3" style={{ color: "var(--fg)" }}>Company</h4>
            <ul className="space-y-2 text-sm" style={{ color: "var(--fg-muted)" }}>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderColor: "var(--border)", color: "var(--fg-muted)" }}
        >
          <span>© 2024 Crackd Technologies Pvt. Ltd. All rights reserved.</span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
            Secured by Razorpay
          </span>
        </div>
      </div>
    </footer>
  );
}
