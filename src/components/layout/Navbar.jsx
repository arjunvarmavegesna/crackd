// Glassmorphism navbar with logo, nav links, theme toggle and CTA
import { Sparkles, Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "../ui/Button";

export default function Navbar({ theme, toggleTheme, view, setView }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => setView("landing")}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-extrabold" style={{ color: "var(--fg)" }}>
            Crackd
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setView("mentors")}
            className="text-sm font-medium transition-colors hover:text-indigo-400"
            style={{ color: view === "mentors" ? "#818cf8" : "var(--fg-muted)" }}
          >
            Browse Mentors
          </button>
          <button
            className="text-sm font-medium transition-colors"
            style={{ color: "var(--fg-muted)" }}
          >
            How it works
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors hover:bg-white/10"
            style={{ color: "var(--fg-muted)" }}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <Button onClick={() => setView("mentors")} size="sm">
            Book a Session
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 border-t"
          style={{ borderColor: "var(--border)", background: "var(--nav-bg)" }}
        >
          <div className="flex flex-col gap-3 pt-4">
            <button
              onClick={() => { setView("mentors"); setMenuOpen(false); }}
              className="text-sm font-medium text-left py-2"
              style={{ color: "var(--fg-muted)" }}
            >
              Browse Mentors
            </button>
            <button
              className="text-sm font-medium text-left py-2"
              style={{ color: "var(--fg-muted)" }}
            >
              How it works
            </button>
            <Button onClick={() => { setView("mentors"); setMenuOpen(false); }} className="w-full">
              Book a Session
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
