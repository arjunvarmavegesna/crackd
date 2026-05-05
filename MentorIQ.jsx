import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  Sparkles, ArrowRight, Star, Shield, Trophy, Clock, Users, CheckCircle2,
  Sun, Moon, Menu, X, ChevronRight, ChevronLeft, Calendar, Zap,
  GraduationCap, BookOpen, Target, TrendingUp, MessageCircle, Heart,
  Search, SlidersHorizontal, IndianRupee, ShieldCheck, Lock, CreditCard,
  Smartphone, Loader2, PartyPopper, Phone, Mail, Quote, ChevronDown,
  Award, Flame, Timer
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  THEME — CSS variables let us toggle dark/light cleanly             */
/* ------------------------------------------------------------------ */
const ThemeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

    :root, [data-theme="light"] {
      --bg: #fbfaf7;
      --bg-elev: #ffffff;
      --bg-soft: #f4f2ec;
      --border: #e8e4dc;
      --border-strong: #d4cfc4;
      --text: #0a0a0f;
      --text-muted: #5b5b66;
      --text-soft: #8b8b94;
      --primary: #4f46e5;
      --primary-hover: #4338ca;
      --primary-soft: #eef2ff;
      --accent: #7c3aed;
      --accent-2: #2563eb;
      --success: #059669;
      --warn: #d97706;
      --danger: #dc2626;
      --shadow-sm: 0 1px 2px rgba(15, 15, 30, 0.04), 0 1px 3px rgba(15, 15, 30, 0.06);
      --shadow-md: 0 4px 6px rgba(15,15,30,0.04), 0 10px 20px rgba(15,15,30,0.06);
      --shadow-lg: 0 10px 30px rgba(15,15,30,0.08), 0 30px 60px rgba(15,15,30,0.10);
      --glass: rgba(255,255,255,0.65);
      --grad: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%);
      --grad-soft: linear-gradient(135deg, #eef2ff 0%, #f5f3ff 50%, #eff6ff 100%);
    }
    [data-theme="dark"] {
      --bg: #07070d;
      --bg-elev: #0f0f1a;
      --bg-soft: #14141f;
      --border: #1f1f2e;
      --border-strong: #2a2a3d;
      --text: #f5f5fa;
      --text-muted: #a4a4b3;
      --text-soft: #6c6c7a;
      --primary: #818cf8;
      --primary-hover: #a5b4fc;
      --primary-soft: #1e1b4b;
      --accent: #a78bfa;
      --accent-2: #60a5fa;
      --success: #34d399;
      --warn: #fbbf24;
      --danger: #f87171;
      --shadow-sm: 0 1px 2px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.4);
      --shadow-md: 0 4px 6px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.4);
      --shadow-lg: 0 10px 30px rgba(0,0,0,0.4), 0 30px 60px rgba(0,0,0,0.5);
      --glass: rgba(15,15,26,0.7);
      --grad: linear-gradient(135deg, #818cf8 0%, #a78bfa 50%, #60a5fa 100%);
      --grad-soft: linear-gradient(135deg, #1e1b4b 0%, #2e1065 50%, #172554 100%);
    }
    html, body, #root { background: var(--bg); }
    body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif; color: var(--text); -webkit-font-smoothing: antialiased; }
    .font-serif { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; letter-spacing: -0.01em; }
    .font-display { font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.025em; }
    .gradient-text { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .glass { background: var(--glass); backdrop-filter: blur(20px) saturate(1.4); -webkit-backdrop-filter: blur(20px) saturate(1.4); }
    .grain {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E");
    }
    .mesh-bg {
      background:
        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124, 58, 237, 0.18), transparent 60%),
        radial-gradient(ellipse 60% 40% at 90% 20%, rgba(37, 99, 235, 0.14), transparent 60%),
        radial-gradient(ellipse 70% 50% at 10% 30%, rgba(79, 70, 229, 0.12), transparent 60%);
    }
    [data-theme="dark"] .mesh-bg {
      background:
        radial-gradient(ellipse 80% 50% at 50% -10%, rgba(167, 139, 250, 0.22), transparent 60%),
        radial-gradient(ellipse 60% 40% at 90% 20%, rgba(96, 165, 250, 0.15), transparent 60%),
        radial-gradient(ellipse 70% 50% at 10% 30%, rgba(129, 140, 248, 0.18), transparent 60%);
    }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes scaleIn { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
    @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
    @keyframes pulse-soft { 0%, 100% { opacity: 1; } 50% { opacity: 0.6; } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    @keyframes spin-slow { to { transform: rotate(360deg); } }
    .anim-fade-up { animation: fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .anim-fade-in { animation: fadeIn 0.5s ease both; }
    .anim-scale-in { animation: scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) both; }
    .anim-float { animation: float 4s ease-in-out infinite; }
    .anim-pulse-soft { animation: pulse-soft 2.5s ease-in-out infinite; }
    .skeleton {
      background: linear-gradient(90deg, var(--bg-soft) 0%, var(--border) 50%, var(--bg-soft) 100%);
      background-size: 200% 100%;
      animation: shimmer 1.6s infinite;
    }
    /* Hide scrollbar but keep scroll */
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { scrollbar-width: none; }
    /* button feedback */
    .btn-press { transition: transform 0.08s ease; }
    .btn-press:active { transform: scale(0.97); }
    /* focus ring */
    .focus-ring:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  DUMMY DATA                                                          */
/* ------------------------------------------------------------------ */
const MENTORS = [
  { id: 1, name: "Aarav Sharma", college: "IIT Bombay", branch: "Computer Science", rank: "AIR 234", year: "2nd Year", price: 499, rating: 4.9, reviews: 128, target: ["12th", "dropper"], bio: "JEE Advanced Top 250. Specialty: cracking Math & strategy for the last 90 days.", tags: ["Math Whisperer", "Last 90 Days"], slotsLeft: 3, gradient: "from-indigo-500 to-purple-500", initials: "AS" },
  { id: 2, name: "Priya Patel", college: "IIT Delhi", branch: "Electrical Engg.", rank: "AIR 567", year: "3rd Year", price: 599, rating: 4.9, reviews: 211, target: ["12th", "dropper"], bio: "Helped 80+ droppers cross 99 percentile. Honest, structured roadmaps.", tags: ["Dropper Coach", "PCM Roadmap"], slotsLeft: 2, gradient: "from-pink-500 to-rose-500", initials: "PP" },
  { id: 3, name: "Rohan Iyer", college: "IIT Madras", branch: "Mechanical", rank: "AIR 1,204", year: "4th Year", price: 449, rating: 4.8, reviews: 95, target: ["11th", "12th"], bio: "Built a syllabus tracker used by 2k+ aspirants. Strong on Physics intuition.", tags: ["Physics", "Daily Tracker"], slotsLeft: 5, gradient: "from-blue-500 to-cyan-500", initials: "RI" },
  { id: 4, name: "Ananya Reddy", college: "IIT Kanpur", branch: "Chemical Engg.", rank: "AIR 891", year: "2nd Year", price: 549, rating: 5.0, reviews: 76, target: ["11th", "12th"], bio: "Chemistry obsessive. Will help you stop fearing Organic forever.", tags: ["Chemistry", "11th Foundation"], slotsLeft: 4, gradient: "from-emerald-500 to-teal-500", initials: "AR" },
  { id: 5, name: "Karthik Menon", college: "NIT Trichy", branch: "Electronics", rank: "AIR 3,420", year: "Final Year", price: 349, rating: 4.7, reviews: 142, target: ["12th", "dropper"], bio: "NIT-track strategy expert. Knows every shortcut to a top NIT seat.", tags: ["NIT Strategy", "Mains Focus"], slotsLeft: 6, gradient: "from-amber-500 to-orange-500", initials: "KM" },
  { id: 6, name: "Sneha Joshi", college: "IIT Roorkee", branch: "Civil Engg.", rank: "AIR 1,876", year: "3rd Year", price: 399, rating: 4.8, reviews: 118, target: ["11th", "dropper"], bio: "Time-management coach. Made it from 60% mocks to top 2k in 8 months.", tags: ["Time Mgmt", "Mock Strategy"], slotsLeft: 1, gradient: "from-violet-500 to-fuchsia-500", initials: "SJ" },
  { id: 7, name: "Vikram Singh", college: "IIT Guwahati", branch: "CS & Engg.", rank: "AIR 712", year: "2nd Year", price: 549, rating: 4.9, reviews: 89, target: ["12th", "dropper"], bio: "Cracked it after one drop year. Knows exactly how to pace your prep.", tags: ["Drop Year", "Mental Game"], slotsLeft: 3, gradient: "from-sky-500 to-indigo-500", initials: "VS" },
  { id: 8, name: "Ishita Banerjee", college: "NIT Warangal", branch: "Computer Science", rank: "AIR 4,102", year: "Final Year", price: 299, rating: 4.7, reviews: 167, target: ["11th", "12th"], bio: "Affordable, friendly, no-BS guidance. Great for beginners feeling lost.", tags: ["Beginner-Friendly", "Affordable"], slotsLeft: 7, gradient: "from-rose-500 to-pink-500", initials: "IB" },
];

const TESTIMONIALS = [
  { name: "Arjun Mehta", role: "JEE 2024 — Selected at IIT Bombay", text: "I was confused after my first mock. One session with Aarav restructured my whole prep. Best ₹499 I've ever spent.", initials: "AM", color: "from-indigo-500 to-purple-500" },
  { name: "Saanvi Kapoor", role: "Class 12 — Allen, Kota", text: "My mentor literally told me which chapters I was wasting time on. Felt like having an older sibling who actually gets it.", initials: "SK", color: "from-pink-500 to-rose-500" },
  { name: "Devansh Rao", role: "Dropper — Now at IIT Delhi", text: "Drop year was lonely until I started talking to Priya didi every two weeks. The roadmap she gave me actually worked.", initials: "DR", color: "from-blue-500 to-cyan-500" },
  { name: "Tanvi Desai", role: "Class 11 — Mumbai", text: "I started in 11th and got a full plan for both years. No coaching ad nonsense — just real, honest advice.", initials: "TD", color: "from-emerald-500 to-teal-500" },
];

const GOALS = [
  { id: "11th", title: "Class 11 — Just Starting", subtitle: "Build a strong foundation from day one", icon: BookOpen, gradient: "from-blue-500 to-indigo-500" },
  { id: "12th", title: "Class 12 — Strategy Mode", subtitle: "Maximize your final year & boards", icon: Target, gradient: "from-indigo-500 to-purple-500" },
  { id: "dropper", title: "Drop Year — Going All In", subtitle: "Plan smarter, not just harder", icon: TrendingUp, gradient: "from-purple-500 to-pink-500" },
  { id: "last3", title: "Last 3 Months Push", subtitle: "Tactical revision & mock plan", icon: Flame, gradient: "from-orange-500 to-red-500" },
];

const FAQS = [
  { q: "How are mentors verified?", a: "Every mentor submits their JEE rank certificate and college ID. We verify each one personally — only ~12% of applicants make it through." },
  { q: "What happens after I book?", a: "You get instant confirmation, then the mentor's WhatsApp number. They reach out within 6 hours to confirm the slot and share a Google Meet link." },
  { q: "Can I get a refund?", a: "Yes — if your mentor doesn't show up or you're unsatisfied within the first 5 minutes, full refund, no questions." },
  { q: "How long is each session?", a: "Standard sessions are 45 minutes. Some mentors also offer 90-minute deep-dive sessions for ₹100–200 extra." },
  { q: "Is this just a coaching ad?", a: "No. We don't push any coaching. Mentors give you their honest strategy — sometimes that means telling you NOT to join a coaching." },
];

/* Generate next 7 days for slot picker */
const generateDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d,
      day: d.toLocaleDateString("en-US", { weekday: "short" }),
      num: d.getDate(),
      month: d.toLocaleDateString("en-US", { month: "short" }),
      label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : null,
    });
  }
  return days;
};

const TIME_SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "5:00 PM", "6:30 PM", "8:00 PM", "9:30 PM"];

/* ------------------------------------------------------------------ */
/*  REUSABLE UI                                                         */
/* ------------------------------------------------------------------ */
const Button = ({ children, variant = "primary", size = "md", className = "", icon: Icon, iconRight: IconRight, full, ...props }) => {
  const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl btn-press focus-ring transition-all duration-200";
  const sizes = { sm: "px-3.5 py-2 text-sm", md: "px-5 py-3 text-[15px]", lg: "px-6 py-3.5 text-base" };
  const variants = {
    primary: "text-white shadow-md hover:shadow-lg",
    secondary: "border hover:bg-[var(--bg-soft)]",
    ghost: "hover:bg-[var(--bg-soft)]",
    glass: "glass border hover:border-[var(--primary)]/40",
  };
  const style = variant === "primary" ? { background: "var(--grad)", boxShadow: "0 8px 20px -8px rgba(124,58,237,0.5)" } : variant === "secondary" || variant === "glass" ? { borderColor: "var(--border-strong)", color: "var(--text)" } : { color: "var(--text)" };
  return (
    <button {...props} style={style} className={`${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""} ${className}`}>
      {Icon && <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />}
      {children}
      {IconRight && <IconRight className="w-[18px] h-[18px]" strokeWidth={2.2} />}
    </button>
  );
};

const Badge = ({ children, tone = "default", icon: Icon }) => {
  const tones = {
    default: { bg: "var(--bg-soft)", color: "var(--text-muted)", border: "var(--border)" },
    primary: { bg: "var(--primary-soft)", color: "var(--primary)", border: "transparent" },
    success: { bg: "rgba(5,150,105,0.1)", color: "var(--success)", border: "transparent" },
    warn: { bg: "rgba(217,119,6,0.1)", color: "var(--warn)", border: "transparent" },
  };
  const s = tones[tone];
  return (
    <span style={{ background: s.bg, color: s.color, borderColor: s.border }} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border">
      {Icon && <Icon className="w-3 h-3" strokeWidth={2.5} />}
      {children}
    </span>
  );
};

const Stars = ({ value, size = 14 }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} fill={i <= Math.round(value) ? "#f59e0b" : "transparent"} stroke={i <= Math.round(value) ? "#f59e0b" : "var(--text-soft)"} className="" style={{ width: size, height: size }} strokeWidth={2} />
    ))}
  </div>
);

const Avatar = ({ initials, gradient, size = "md", ring }) => {
  const sizes = { sm: "w-9 h-9 text-xs", md: "w-12 h-12 text-sm", lg: "w-16 h-16 text-lg", xl: "w-20 h-20 text-xl" };
  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-bold text-white flex-shrink-0 ${ring ? "ring-2 ring-offset-2" : ""}`}
      style={ring ? { "--tw-ring-color": "var(--primary)", "--tw-ring-offset-color": "var(--bg)" } : {}}>
      {initials}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                              */
/* ------------------------------------------------------------------ */
const Navbar = ({ navigate, theme, setTheme, currentView }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "border-b" : ""}`}
      style={{ background: scrolled ? "var(--glass)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navigate("landing")} className="flex items-center gap-2 focus-ring rounded-lg">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--grad)" }}>
            <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-display font-extrabold text-lg tracking-tight" style={{ color: "var(--text)" }}>MentorIQ</span>
        </button>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <button onClick={() => navigate("landing")} className="px-3 py-2 rounded-lg hover:bg-[var(--bg-soft)] transition" style={{ color: "var(--text-muted)" }}>How it works</button>
          <button onClick={() => navigate("mentors")} className="px-3 py-2 rounded-lg hover:bg-[var(--bg-soft)] transition" style={{ color: "var(--text-muted)" }}>Mentors</button>
          <button className="px-3 py-2 rounded-lg hover:bg-[var(--bg-soft)] transition" style={{ color: "var(--text-muted)" }}>Pricing</button>
          <button className="px-3 py-2 rounded-lg hover:bg-[var(--bg-soft)] transition" style={{ color: "var(--text-muted)" }}>For Parents</button>
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[var(--bg-soft)] transition focus-ring border"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
            {theme === "light" ? <Moon className="w-[18px] h-[18px]" strokeWidth={2} /> : <Sun className="w-[18px] h-[18px]" strokeWidth={2} />}
          </button>
          <Button size="sm" onClick={() => navigate("mentors")} className="hidden sm:inline-flex">Book a Session</Button>
          <button className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[var(--bg-soft)] border focus-ring" style={{ borderColor: "var(--border)" }} onClick={() => setOpen(!open)}>
            {open ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t anim-fade-in" style={{ borderColor: "var(--border)", background: "var(--bg-elev)" }}>
          <div className="px-4 py-3 flex flex-col gap-1 text-sm">
            <button onClick={() => { navigate("landing"); setOpen(false); }} className="text-left px-3 py-2.5 rounded-lg hover:bg-[var(--bg-soft)]" style={{ color: "var(--text-muted)" }}>How it works</button>
            <button onClick={() => { navigate("mentors"); setOpen(false); }} className="text-left px-3 py-2.5 rounded-lg hover:bg-[var(--bg-soft)]" style={{ color: "var(--text-muted)" }}>Mentors</button>
            <button className="text-left px-3 py-2.5 rounded-lg hover:bg-[var(--bg-soft)]" style={{ color: "var(--text-muted)" }}>Pricing</button>
            <button className="text-left px-3 py-2.5 rounded-lg hover:bg-[var(--bg-soft)]" style={{ color: "var(--text-muted)" }}>For Parents</button>
            <Button size="md" full className="mt-2" onClick={() => { navigate("mentors"); setOpen(false); }}>Book a Session</Button>
          </div>
        </div>
      )}
    </header>
  );
};

/* ------------------------------------------------------------------ */
/*  LANDING PAGE                                                        */
/* ------------------------------------------------------------------ */
const Hero = ({ navigate }) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 mesh-bg pointer-events-none" />
    <div className="absolute inset-0 grain opacity-50 pointer-events-none mix-blend-overlay" />
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
      <div className="max-w-3xl">
        <div className="anim-fade-up" style={{ animationDelay: "0ms" }}>
          <Badge tone="primary" icon={Sparkles}>Trusted by 12,400+ JEE aspirants</Badge>
        </div>
        <h1 className="anim-fade-up mt-5 sm:mt-6 font-display font-extrabold tracking-tight text-[40px] leading-[1.05] sm:text-6xl lg:text-7xl" style={{ animationDelay: "80ms", color: "var(--text)" }}>
          Talk to{" "}
          <span className="font-serif italic font-normal gradient-text">IIT/NIT mentors.</span>
          <br />
          Get your JEE roadmap.
        </h1>
        <p className="anim-fade-up mt-5 sm:mt-6 text-base sm:text-xl max-w-2xl leading-relaxed" style={{ animationDelay: "160ms", color: "var(--text-muted)" }}>
          Personalized 1-on-1 guidance from students who actually cracked it. Honest strategy, your study plan, and clarity on what to do next — in 45 minutes.
        </p>
        <div className="anim-fade-up mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3" style={{ animationDelay: "240ms" }}>
          <Button size="lg" iconRight={ArrowRight} onClick={() => navigate("mentors")}>Book a Session</Button>
          <Button size="lg" variant="secondary" onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>See how it works</Button>
        </div>
        {/* Inline trust */}
        <div className="anim-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm" style={{ animationDelay: "320ms", color: "var(--text-muted)" }}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {MENTORS.slice(0, 4).map((m) => (
                <div key={m.id} className={`w-7 h-7 rounded-full bg-gradient-to-br ${m.gradient} ring-2 flex items-center justify-center text-[10px] font-bold text-white`} style={{ "--tw-ring-color": "var(--bg)" }}>
                  {m.initials}
                </div>
              ))}
            </div>
            <span><span className="font-semibold" style={{ color: "var(--text)" }}>200+</span> verified mentors</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Stars value={4.9} />
            <span><span className="font-semibold" style={{ color: "var(--text)" }}>4.9</span> from 8,200+ reviews</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" style={{ color: "var(--success)" }} strokeWidth={2.4} />
            <span>Money-back guarantee</span>
          </div>
        </div>
      </div>
      {/* Floating mentor card preview */}
      <div className="absolute right-6 lg:right-12 top-32 hidden lg:block anim-fade-up anim-float" style={{ animationDelay: "500ms" }}>
        <div className="rotate-3 p-5 rounded-2xl border w-72" style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-lg)" }}>
          <div className="flex items-center gap-3">
            <Avatar initials="AS" gradient="from-indigo-500 to-purple-500" size="md" />
            <div className="min-w-0">
              <div className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>Aarav Sharma</div>
              <div className="text-xs" style={{ color: "var(--text-muted)" }}>IIT Bombay · AIR 234</div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-1.5 text-xs">
            <Stars value={4.9} size={12} />
            <span style={{ color: "var(--text-muted)" }}>4.9 (128)</span>
          </div>
          <div className="mt-3 p-2.5 rounded-lg text-xs flex items-center gap-2" style={{ background: "var(--bg-soft)" }}>
            <Zap className="w-3.5 h-3.5" style={{ color: "var(--warn)" }} />
            <span style={{ color: "var(--text-muted)" }}>Only <span className="font-semibold" style={{ color: "var(--text)" }}>3 slots</span> left today</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustStrip = () => (
  <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--bg-elev)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
      {[
        { num: "200+", label: "Verified IIT/NIT mentors", icon: Users },
        { num: "12,400+", label: "Sessions completed", icon: MessageCircle },
        { num: "4.9★", label: "Avg. mentor rating", icon: Star },
        { num: "98%", label: "Would recommend a friend", icon: Heart },
      ].map((s) => (
        <div key={s.label} className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <s.icon className="w-4 h-4" style={{ color: "var(--primary)" }} strokeWidth={2.4} />
            <div className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight" style={{ color: "var(--text)" }}>{s.num}</div>
          </div>
          <div className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const Benefits = () => {
  const items = [
    { icon: Target, title: "Know exactly what to study", body: "Stop guessing. Get a chapter-by-chapter priority list based on YOUR mocks, target rank, and time left." },
    { icon: ShieldCheck, title: "Avoid common mistakes", body: "Most aspirants waste 6 months on the wrong things. Mentors who've been there will tell you what NOT to do." },
    { icon: TrendingUp, title: "Personal roadmap, not generic advice", body: "No copy-paste schedules. Every plan is built around your weak chapters, board %, and class hours." },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Badge tone="primary">Why MentorIQ</Badge>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            Coaching ads sell hope.<br />
            <span className="font-serif italic font-normal gradient-text">Mentors give clarity.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
            One honest conversation with someone 2 years ahead of you can save 6 months of confused effort.
          </p>
        </div>
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {items.map((it, i) => (
            <div key={it.title} className="p-6 sm:p-7 rounded-2xl border anim-fade-up hover:-translate-y-1 transition-transform"
              style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-sm)", animationDelay: `${i * 80}ms` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--primary-soft)", color: "var(--primary)" }}>
                <it.icon className="w-5 h-5" strokeWidth={2.4} />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight" style={{ color: "var(--text)" }}>{it.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = ({ navigate }) => {
  const steps = [
    { n: "01", title: "Choose your mentor", body: "Filter by college (IIT/NIT), rank, price, and your class. Read real reviews from past sessions.", icon: Users },
    { n: "02", title: "Pick a time slot", body: "See live availability. Book in 60 seconds. Most mentors confirm within 6 hours on WhatsApp.", icon: Calendar },
    { n: "03", title: "Get real guidance", body: "45 min on Google Meet. Bring your mocks & doubts. Walk out with a clear written roadmap.", icon: Sparkles },
  ];
  return (
    <section id="how-it-works" className="py-16 sm:py-24" style={{ background: "var(--bg-elev)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="primary">How it works</Badge>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            From confused to clear in <span className="font-serif italic font-normal gradient-text">3 steps</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative p-6 sm:p-7 rounded-2xl border anim-fade-up"
              style={{ background: "var(--bg)", borderColor: "var(--border)", boxShadow: "var(--shadow-sm)", animationDelay: `${i * 100}ms` }}>
              <div className="flex items-start justify-between mb-5">
                <div className="font-serif italic text-3xl sm:text-4xl gradient-text">{s.n}</div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--primary-soft)", color: "var(--primary)" }}>
                  <s.icon className="w-5 h-5" strokeWidth={2.4} />
                </div>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight" style={{ color: "var(--text)" }}>{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" iconRight={ArrowRight} onClick={() => navigate("mentors")}>Browse Mentors</Button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
        <div className="max-w-2xl">
          <Badge tone="primary">What students say</Badge>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            Real students. <span className="font-serif italic font-normal gradient-text">Real outcomes.</span>
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <Stars value={5} />
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>From 8,200+ post-session reviews</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} className="p-6 rounded-2xl border anim-fade-up"
            style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-sm)", animationDelay: `${i * 80}ms` }}>
            <Quote className="w-7 h-7 mb-3" style={{ color: "var(--primary)" }} strokeWidth={1.5} />
            <p className="text-[15px] leading-relaxed mb-5" style={{ color: "var(--text)" }}>"{t.text}"</p>
            <div className="flex items-center gap-3">
              <Avatar initials={t.initials} gradient={t.color} size="sm" />
              <div className="min-w-0">
                <div className="font-semibold text-sm truncate" style={{ color: "var(--text)" }}>{t.name}</div>
                <div className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 sm:py-24" style={{ background: "var(--bg-elev)" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Badge tone="primary">Common questions</Badge>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            Honest <span className="font-serif italic font-normal gradient-text">answers.</span>
          </h2>
        </div>
        <div className="mt-10 divide-y" style={{ borderColor: "var(--border)" }}>
          {FAQS.map((f, i) => (
            <div key={i} className="border-b" style={{ borderColor: "var(--border)" }}>
              <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left py-5 flex items-center justify-between gap-4 group">
                <span className="font-semibold text-[15px] sm:text-base" style={{ color: "var(--text)" }}>{f.q}</span>
                <ChevronDown className={`w-5 h-5 transition-transform flex-shrink-0 ${open === i ? "rotate-180" : ""}`} style={{ color: "var(--text-muted)" }} />
              </button>
              {open === i && (
                <div className="pb-5 text-[15px] leading-relaxed anim-fade-in" style={{ color: "var(--text-muted)" }}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = ({ navigate }) => (
  <section className="py-16 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl p-8 sm:p-16 text-center" style={{ background: "var(--grad)" }}>
        <div className="absolute inset-0 grain opacity-40 mix-blend-overlay" />
        <div className="relative">
          <h2 className="font-display font-extrabold tracking-tight text-3xl sm:text-5xl text-white">
            Your next two years can either be<br />
            <span className="font-serif italic font-normal">confusion or clarity.</span>
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl mx-auto">
            One conversation could change your entire prep. Sessions start at ₹299.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("mentors")} className="btn-press px-7 py-3.5 rounded-xl bg-white font-semibold text-[15px] hover:bg-white/95 transition flex items-center justify-center gap-2" style={{ color: "#4f46e5" }}>
              Book a Session <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </button>
            <button className="btn-press px-7 py-3.5 rounded-xl border border-white/30 text-white font-semibold text-[15px] hover:bg-white/10 transition">Talk to support</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t py-12" style={{ borderColor: "var(--border)" }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--grad)" }}>
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-extrabold text-lg tracking-tight" style={{ color: "var(--text)" }}>MentorIQ</span>
          </div>
          <p className="text-sm max-w-sm" style={{ color: "var(--text-muted)" }}>
            1:1 mentorship for JEE aspirants — from students who actually cracked it. Verified, honest, affordable.
          </p>
        </div>
        <div>
          <div className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>Product</div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <li><a href="#" className="hover:opacity-80">Browse Mentors</a></li>
            <li><a href="#" className="hover:opacity-80">How it works</a></li>
            <li><a href="#" className="hover:opacity-80">For Parents</a></li>
            <li><a href="#" className="hover:opacity-80">Become a Mentor</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>Support</div>
          <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
            <li><a href="#" className="hover:opacity-80">Refund policy</a></li>
            <li><a href="#" className="hover:opacity-80">Privacy</a></li>
            <li><a href="#" className="hover:opacity-80">Terms</a></li>
            <li><a href="#" className="hover:opacity-80">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ borderColor: "var(--border)", color: "var(--text-soft)" }}>
        <div>© 2026 MentorIQ Technologies Pvt. Ltd. · Made in Bengaluru ❤️</div>
        <div className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5" />
          <span>Secure payments by Razorpay</span>
        </div>
      </div>
    </div>
  </footer>
);

const LandingPage = ({ navigate }) => (
  <>
    <Hero navigate={navigate} />
    <TrustStrip />
    <Benefits />
    <HowItWorks navigate={navigate} />
    <Testimonials />
    <FAQ />
    <FinalCTA navigate={navigate} />
    <Footer />
  </>
);

/* ------------------------------------------------------------------ */
/*  MENTOR LIST PAGE                                                    */
/* ------------------------------------------------------------------ */
const MentorCard = ({ mentor, onBook }) => (
  <div className="p-5 sm:p-6 rounded-2xl border hover:-translate-y-1 transition-all duration-200 hover:shadow-lg flex flex-col"
    style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-sm)" }}>
    <div className="flex items-start gap-4">
      <Avatar initials={mentor.initials} gradient={mentor.gradient} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display font-bold text-base sm:text-lg truncate" style={{ color: "var(--text)" }}>{mentor.name}</h3>
            <div className="text-xs sm:text-sm truncate" style={{ color: "var(--text-muted)" }}>
              {mentor.college} · {mentor.branch}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1.5">
          <Badge tone="primary" icon={Award}>{mentor.rank}</Badge>
        </div>
      </div>
    </div>
    <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{mentor.bio}</p>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {mentor.tags.map((t) => <Badge key={t}>{t}</Badge>)}
    </div>
    <div className="mt-4 flex items-center justify-between text-sm">
      <div className="flex items-center gap-1.5">
        <Stars value={mentor.rating} />
        <span className="font-semibold" style={{ color: "var(--text)" }}>{mentor.rating}</span>
        <span style={{ color: "var(--text-muted)" }}>({mentor.reviews})</span>
      </div>
      {mentor.slotsLeft <= 3 && (
        <div className="flex items-center gap-1 text-xs font-semibold anim-pulse-soft" style={{ color: "var(--warn)" }}>
          <Zap className="w-3.5 h-3.5" fill="currentColor" />
          {mentor.slotsLeft} slot{mentor.slotsLeft > 1 ? "s" : ""} left
        </div>
      )}
    </div>
    <div className="mt-5 pt-5 border-t flex items-center justify-between gap-3" style={{ borderColor: "var(--border)" }}>
      <div>
        <div className="text-xs" style={{ color: "var(--text-muted)" }}>per 45-min session</div>
        <div className="font-display font-extrabold text-2xl flex items-baseline gap-0.5" style={{ color: "var(--text)" }}>
          <IndianRupee className="w-5 h-5" strokeWidth={2.5} />
          {mentor.price}
        </div>
      </div>
      <Button size="md" iconRight={ArrowRight} onClick={() => onBook(mentor)}>Book Now</Button>
    </div>
  </div>
);

const MentorsPage = ({ navigate, startBooking }) => {
  const [collegeFilter, setCollegeFilter] = useState("all"); // all | iit | nit
  const [targetFilter, setTargetFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("all"); // all | <400 | 400-500 | >500
  const [sort, setSort] = useState("popular");

  const filtered = useMemo(() => {
    let result = MENTORS.filter((m) => {
      if (collegeFilter === "iit" && !m.college.startsWith("IIT")) return false;
      if (collegeFilter === "nit" && !m.college.startsWith("NIT")) return false;
      if (targetFilter !== "all" && !m.target.includes(targetFilter)) return false;
      if (priceRange === "<400" && m.price >= 400) return false;
      if (priceRange === "400-500" && (m.price < 400 || m.price > 500)) return false;
      if (priceRange === ">500" && m.price <= 500) return false;
      return true;
    });
    if (sort === "rating") result = [...result].sort((a, b) => b.rating - a.rating);
    if (sort === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [collegeFilter, targetFilter, priceRange, sort]);

  const FilterChip = ({ active, onClick, children }) => (
    <button onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition btn-press whitespace-nowrap ${active ? "text-white" : ""}`}
      style={active
        ? { background: "var(--grad)", borderColor: "transparent" }
        : { background: "var(--bg-elev)", borderColor: "var(--border)", color: "var(--text-muted)" }}>
      {children}
    </button>
  );

  return (
    <div className="min-h-screen">
      <section className="border-b" style={{ borderColor: "var(--border)", background: "var(--bg-elev)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <Badge tone="primary" icon={Users}>200+ verified mentors</Badge>
          <h1 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            Find <span className="font-serif italic font-normal gradient-text">your mentor.</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
            Every mentor is JEE-verified. Filter by college, target, and budget. Book in 60 seconds.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-20 border-b" style={{ borderColor: "var(--border)", background: "var(--glass)", backdropFilter: "blur(16px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <SlidersHorizontal className="w-4 h-4 flex-shrink-0" style={{ color: "var(--text-muted)" }} />
            <span className="text-xs font-semibold mr-1 flex-shrink-0" style={{ color: "var(--text-muted)" }}>COLLEGE</span>
            <FilterChip active={collegeFilter === "all"} onClick={() => setCollegeFilter("all")}>All</FilterChip>
            <FilterChip active={collegeFilter === "iit"} onClick={() => setCollegeFilter("iit")}>IIT</FilterChip>
            <FilterChip active={collegeFilter === "nit"} onClick={() => setCollegeFilter("nit")}>NIT</FilterChip>
            <span className="w-px h-6 mx-1 flex-shrink-0" style={{ background: "var(--border)" }} />
            <span className="text-xs font-semibold mr-1 flex-shrink-0" style={{ color: "var(--text-muted)" }}>TARGET</span>
            <FilterChip active={targetFilter === "all"} onClick={() => setTargetFilter("all")}>All</FilterChip>
            <FilterChip active={targetFilter === "11th"} onClick={() => setTargetFilter("11th")}>Class 11</FilterChip>
            <FilterChip active={targetFilter === "12th"} onClick={() => setTargetFilter("12th")}>Class 12</FilterChip>
            <FilterChip active={targetFilter === "dropper"} onClick={() => setTargetFilter("dropper")}>Dropper</FilterChip>
            <span className="w-px h-6 mx-1 flex-shrink-0" style={{ background: "var(--border)" }} />
            <span className="text-xs font-semibold mr-1 flex-shrink-0" style={{ color: "var(--text-muted)" }}>PRICE</span>
            <FilterChip active={priceRange === "all"} onClick={() => setPriceRange("all")}>Any</FilterChip>
            <FilterChip active={priceRange === "<400"} onClick={() => setPriceRange("<400")}>Under ₹400</FilterChip>
            <FilterChip active={priceRange === "400-500"} onClick={() => setPriceRange("400-500")}>₹400–500</FilterChip>
            <FilterChip active={priceRange === ">500"} onClick={() => setPriceRange(">500")}>₹500+</FilterChip>
          </div>
        </div>
      </div>

      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>
              Showing <span className="font-semibold" style={{ color: "var(--text)" }}>{filtered.length}</span> mentor{filtered.length !== 1 ? "s" : ""}
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              className="text-sm font-semibold px-3 py-2 rounded-lg border focus-ring"
              style={{ background: "var(--bg-elev)", borderColor: "var(--border)", color: "var(--text)" }}>
              <option value="popular">Most popular</option>
              <option value="rating">Highest rated</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-lg font-semibold mb-2" style={{ color: "var(--text)" }}>No mentors match your filters</div>
              <div className="text-sm" style={{ color: "var(--text-muted)" }}>Try widening your search.</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filtered.map((m, i) => (
                <div key={m.id} className="anim-fade-up" style={{ animationDelay: `${Math.min(i * 50, 400)}ms` }}>
                  <MentorCard mentor={m} onBook={(mentor) => startBooking(mentor)} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  BOOKING FLOW                                                        */
/* ------------------------------------------------------------------ */
const Stepper = ({ current, steps }) => (
  <div className="flex items-center justify-center gap-2 sm:gap-3">
    {steps.map((label, i) => {
      const idx = i + 1;
      const active = idx === current;
      const done = idx < current;
      return (
        <React.Fragment key={label}>
          <div className="flex items-center gap-2">
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all`}
              style={{
                background: active || done ? "var(--grad)" : "var(--bg-soft)",
                color: active || done ? "white" : "var(--text-muted)",
                boxShadow: active ? "0 0 0 4px rgba(124,58,237,0.15)" : "none",
              }}>
              {done ? <CheckCircle2 className="w-4 h-4" /> : idx}
            </div>
            <span className={`hidden sm:inline text-sm font-semibold`} style={{ color: active ? "var(--text)" : "var(--text-muted)" }}>{label}</span>
          </div>
          {i < steps.length - 1 && <div className="w-6 sm:w-10 h-px" style={{ background: "var(--border-strong)" }} />}
        </React.Fragment>
      );
    })}
  </div>
);

const Step1Goal = ({ goal, setGoal, onNext }) => (
  <div className="anim-fade-up">
    <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-center" style={{ color: "var(--text)" }}>
      What's your <span className="font-serif italic font-normal gradient-text">situation?</span>
    </h2>
    <p className="mt-2 text-center text-sm sm:text-base max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
      We'll match you with mentors who specialize in your stage.
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
      {GOALS.map((g) => (
        <button key={g.id} onClick={() => setGoal(g.id)}
          className={`text-left p-5 rounded-2xl border-2 transition-all btn-press`}
          style={{
            background: goal === g.id ? "var(--primary-soft)" : "var(--bg-elev)",
            borderColor: goal === g.id ? "var(--primary)" : "var(--border)",
          }}>
          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${g.gradient} flex items-center justify-center mb-4`}>
            <g.icon className="w-5 h-5 text-white" strokeWidth={2.4} />
          </div>
          <div className="font-display font-bold text-base" style={{ color: "var(--text)" }}>{g.title}</div>
          <div className="mt-1 text-sm" style={{ color: "var(--text-muted)" }}>{g.subtitle}</div>
        </button>
      ))}
    </div>
    <div className="mt-8 flex justify-center">
      <Button size="lg" iconRight={ArrowRight} disabled={!goal} onClick={onNext}
        className={!goal ? "opacity-50 cursor-not-allowed" : ""}>Continue</Button>
    </div>
  </div>
);

const Step2Mentor = ({ goal, mentor, setMentor, onNext, onBack }) => {
  const filtered = goal === "last3"
    ? MENTORS.filter((m) => m.target.includes("12th") || m.target.includes("dropper"))
    : MENTORS.filter((m) => m.target.includes(goal));
  return (
    <div className="anim-fade-up">
      <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-center" style={{ color: "var(--text)" }}>
        Pick your <span className="font-serif italic font-normal gradient-text">mentor.</span>
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
        Hand-picked for your stage. All verified.
      </p>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {filtered.map((m) => (
          <button key={m.id} onClick={() => setMentor(m)}
            className="text-left p-5 rounded-2xl border-2 transition-all btn-press"
            style={{
              background: mentor?.id === m.id ? "var(--primary-soft)" : "var(--bg-elev)",
              borderColor: mentor?.id === m.id ? "var(--primary)" : "var(--border)",
            }}>
            <div className="flex items-start gap-3">
              <Avatar initials={m.initials} gradient={m.gradient} size="md" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-bold truncate" style={{ color: "var(--text)" }}>{m.name}</div>
                  <div className="font-display font-extrabold flex items-center" style={{ color: "var(--text)" }}>
                    <IndianRupee className="w-3.5 h-3.5" strokeWidth={2.5} />{m.price}
                  </div>
                </div>
                <div className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{m.college} · {m.rank}</div>
                <div className="mt-1.5 flex items-center gap-1.5">
                  <Stars value={m.rating} size={12} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{m.rating} ({m.reviews})</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-8 flex justify-between max-w-4xl mx-auto">
        <Button variant="ghost" icon={ChevronLeft} onClick={onBack}>Back</Button>
        <Button size="lg" iconRight={ArrowRight} disabled={!mentor} onClick={onNext}
          className={!mentor ? "opacity-50 cursor-not-allowed" : ""}>Continue</Button>
      </div>
    </div>
  );
};

const Step3Slot = ({ mentor, day, setDay, slot, setSlot, onNext, onBack }) => {
  const days = useMemo(() => generateDays(), []);
  // Random "taken" slots per day to feel real
  const takenSlots = useMemo(() => {
    const map = {};
    days.forEach((d, i) => {
      const seed = (mentor?.id || 1) * 7 + i;
      const taken = new Set();
      const skip = (seed * 31) % 8;
      taken.add(TIME_SLOTS[skip]);
      taken.add(TIME_SLOTS[(skip + 3) % 8]);
      if (i === 0) {
        // Today — most morning slots taken
        taken.add(TIME_SLOTS[0]);
        taken.add(TIME_SLOTS[1]);
      }
      map[i] = taken;
    });
    return map;
  }, [mentor, days]);

  return (
    <div className="anim-fade-up">
      <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-center" style={{ color: "var(--text)" }}>
        Pick a <span className="font-serif italic font-normal gradient-text">time slot.</span>
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
        45-minute session over Google Meet. All times in IST.
      </p>
      <div className="mt-8 max-w-3xl mx-auto">
        {/* Date selector */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-2">
          {days.map((d, i) => {
            const active = day === i;
            return (
              <button key={i} onClick={() => { setDay(i); setSlot(null); }}
                className="flex-shrink-0 p-3 rounded-xl border-2 transition-all btn-press min-w-[70px] sm:min-w-[80px] text-center"
                style={{
                  background: active ? "var(--primary-soft)" : "var(--bg-elev)",
                  borderColor: active ? "var(--primary)" : "var(--border)",
                }}>
                <div className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: active ? "var(--primary)" : "var(--text-muted)" }}>
                  {d.label || d.day}
                </div>
                <div className="font-display font-extrabold text-2xl mt-0.5" style={{ color: "var(--text)" }}>{d.num}</div>
                <div className="text-[10px]" style={{ color: "var(--text-muted)" }}>{d.month}</div>
              </button>
            );
          })}
        </div>
        {/* Slot grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {TIME_SLOTS.map((s) => {
            const taken = takenSlots[day]?.has(s);
            const active = slot === s;
            return (
              <button key={s} disabled={taken} onClick={() => setSlot(s)}
                className="relative p-3 sm:p-3.5 rounded-xl border-2 text-sm font-semibold transition-all btn-press disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  background: active ? "var(--grad)" : taken ? "var(--bg-soft)" : "var(--bg-elev)",
                  borderColor: active ? "transparent" : taken ? "var(--border)" : "var(--border-strong)",
                  color: active ? "white" : taken ? "var(--text-soft)" : "var(--text)",
                  textDecoration: taken ? "line-through" : "none",
                }}>
                {s}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex items-center gap-2 text-xs anim-pulse-soft" style={{ color: "var(--warn)" }}>
          <Flame className="w-3.5 h-3.5" fill="currentColor" />
          <span><span className="font-semibold">{mentor?.slotsLeft || 3} slot{(mentor?.slotsLeft || 3) > 1 ? "s" : ""}</span> left this week — booking moves fast on weekends.</span>
        </div>
      </div>
      <div className="mt-8 flex justify-between max-w-3xl mx-auto">
        <Button variant="ghost" icon={ChevronLeft} onClick={onBack}>Back</Button>
        <Button size="lg" iconRight={ArrowRight} disabled={!slot} onClick={onNext}
          className={!slot ? "opacity-50 cursor-not-allowed" : ""}>Continue to checkout</Button>
      </div>
    </div>
  );
};

const Step4Checkout = ({ mentor, goal, day, slot, name, setName, phone, setPhone, email, setEmail, notes, setNotes, onPay, onBack }) => {
  const days = useMemo(() => generateDays(), []);
  const dayObj = days[day];
  const valid = name.trim().length >= 2 && /^\d{10}$/.test(phone.replace(/\D/g, "")) && /\S+@\S+\.\S+/.test(email);
  const goalLabel = GOALS.find((g) => g.id === goal)?.title || "—";

  return (
    <div className="anim-fade-up">
      <h2 className="font-display font-extrabold text-2xl sm:text-4xl tracking-tight text-center" style={{ color: "var(--text)" }}>
        Almost <span className="font-serif italic font-normal gradient-text">there.</span>
      </h2>
      <p className="mt-2 text-center text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
        Confirm your details. We'll send the meeting link via WhatsApp.
      </p>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-6 max-w-5xl mx-auto">
        {/* Form */}
        <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl border space-y-4"
          style={{ background: "var(--bg-elev)", borderColor: "var(--border)" }}>
          <div className="font-semibold text-sm" style={{ color: "var(--text)" }}>Your details</div>
          <div>
            <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Arjun Mehta"
              className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none transition"
              style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>WhatsApp number</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 text-sm font-semibold"
                  style={{ background: "var(--bg-soft)", borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>+91</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="98765 43210" inputMode="numeric"
                  className="flex-1 min-w-0 px-4 py-3 rounded-r-xl border text-sm focus-ring outline-none transition"
                  style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" type="email"
                className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none transition"
                style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>What do you want to discuss? (optional)</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="e.g. Stuck on Organic Chem. Failed last 2 mocks. Need a 6-month plan."
              className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none transition resize-none"
              style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
          </div>
          <div className="pt-2 flex items-start gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <ShieldCheck className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "var(--success)" }} strokeWidth={2.4} />
            <span>Your number is shared only with your mentor. Full refund if you're unsatisfied within 5 minutes of the session.</span>
          </div>
        </div>
        {/* Summary */}
        <div className="lg:col-span-2">
          <div className="p-5 sm:p-6 rounded-2xl border sticky top-24"
            style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-md)" }}>
            <div className="font-semibold text-sm mb-4" style={{ color: "var(--text)" }}>Booking summary</div>
            <div className="flex items-center gap-3 pb-4 border-b" style={{ borderColor: "var(--border)" }}>
              <Avatar initials={mentor.initials} gradient={mentor.gradient} size="md" />
              <div className="min-w-0">
                <div className="font-bold text-sm truncate" style={{ color: "var(--text)" }}>{mentor.name}</div>
                <div className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{mentor.college} · {mentor.rank}</div>
              </div>
            </div>
            <div className="py-4 space-y-2.5 text-sm border-b" style={{ borderColor: "var(--border)" }}>
              <Row label="Goal" value={goalLabel} />
              <Row label="Date" value={`${dayObj.day}, ${dayObj.num} ${dayObj.month}`} />
              <Row label="Time" value={`${slot} (45 min)`} />
              <Row label="Mode" value="Google Meet" />
            </div>
            <div className="py-4 space-y-2 text-sm">
              <Row label="Session fee" value={`₹${mentor.price}`} />
              <Row label="Platform fee" value="₹0" muted />
              <Row label="GST" value="₹0" muted />
            </div>
            <div className="pt-3 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
              <div className="font-semibold" style={{ color: "var(--text)" }}>Total</div>
              <div className="font-display font-extrabold text-2xl flex items-baseline gap-0.5" style={{ color: "var(--text)" }}>
                <IndianRupee className="w-5 h-5" strokeWidth={2.5} />{mentor.price}
              </div>
            </div>
            <Button size="lg" full icon={Lock}
              disabled={!valid} onClick={onPay}
              className={`mt-5 ${!valid ? "opacity-50 cursor-not-allowed" : ""}`}>
              Pay Securely · ₹{mentor.price}
            </Button>
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs" style={{ color: "var(--text-soft)" }}>
              <Lock className="w-3 h-3" /> Secured by Razorpay · UPI, cards, netbanking
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-center max-w-5xl mx-auto">
        <Button variant="ghost" icon={ChevronLeft} onClick={onBack}>Back</Button>
      </div>
    </div>
  );
};

const Row = ({ label, value, muted }) => (
  <div className="flex items-center justify-between gap-3">
    <span style={{ color: "var(--text-muted)" }}>{label}</span>
    <span className={`text-right font-semibold ${muted ? "" : ""}`} style={{ color: muted ? "var(--text-muted)" : "var(--text)" }}>{value}</span>
  </div>
);

const BookingFlow = ({ initialMentor, onComplete, onCancel }) => {
  const [step, setStep] = useState(initialMentor ? 1 : 1);
  const [goal, setGoal] = useState("");
  const [mentor, setMentor] = useState(initialMentor || null);
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  // If mentor was passed from card, skip mentor selection by snapping to step 1 still
  // (user picks goal first, then either keeps or changes mentor)
  return (
    <div className="min-h-screen pb-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <button onClick={onCancel} className="text-sm font-semibold flex items-center gap-1.5 hover:opacity-80" style={{ color: "var(--text-muted)" }}>
            <ChevronLeft className="w-4 h-4" /> Exit
          </button>
          <Stepper current={step} steps={["Goal", "Mentor", "Time", "Pay"]} />
          <div className="w-12" />
        </div>
        {step === 1 && <Step1Goal goal={goal} setGoal={setGoal} onNext={() => setStep(2)} />}
        {step === 2 && <Step2Mentor goal={goal} mentor={mentor} setMentor={setMentor} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
        {step === 3 && <Step3Slot mentor={mentor} day={day} setDay={setDay} slot={slot} setSlot={setSlot} onNext={() => setStep(4)} onBack={() => setStep(2)} />}
        {step === 4 && <Step4Checkout mentor={mentor} goal={goal} day={day} slot={slot}
          name={name} setName={setName} phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail} notes={notes} setNotes={setNotes}
          onPay={() => onComplete({ mentor, goal, day, slot, name, phone, email, notes })}
          onBack={() => setStep(3)} />}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  PAYMENT (Razorpay-style mock)                                       */
/* ------------------------------------------------------------------ */
const PaymentScreen = ({ booking, onSuccess, onFailure, onBack }) => {
  const [tab, setTab] = useState("upi"); // upi | card | netbank
  const [processing, setProcessing] = useState(false);
  const [upiId, setUpiId] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [error, setError] = useState("");

  const formatCard = (v) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const formatExp = (v) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length >= 3 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const submit = () => {
    setError("");
    if (tab === "upi" && !/^[\w.-]+@[\w]+$/.test(upiId)) {
      setError("Enter a valid UPI ID (e.g. yourname@upi)"); return;
    }
    if (tab === "card") {
      if (cardNum.replace(/\s/g, "").length !== 16) { setError("Enter a valid 16-digit card number"); return; }
      if (cardExp.length !== 5) { setError("Enter expiry as MM/YY"); return; }
      if (cardCvv.length < 3) { setError("Enter the CVV"); return; }
    }
    setProcessing(true);
    // Simulate Razorpay round-trip. To test failure, use UPI = "fail@upi"
    setTimeout(() => {
      const shouldFail = upiId === "fail@upi";
      setProcessing(false);
      if (shouldFail) onFailure();
      else onSuccess();
    }, 2200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 anim-fade-in" style={{ background: "rgba(0,0,0,0.4)" }}>
      <div className="w-full max-w-md rounded-3xl border anim-scale-in overflow-hidden"
        style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-lg)" }}>
        {/* Header */}
        <div className="p-5 border-b flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--grad)" }}>
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-bold text-sm" style={{ color: "var(--text)" }}>MentorIQ</div>
              <div className="text-[10px] flex items-center gap-1" style={{ color: "var(--text-muted)" }}>
                <Lock className="w-2.5 h-2.5" /> Secured by Razorpay
              </div>
            </div>
          </div>
          <button onClick={onBack} disabled={processing} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-[var(--bg-soft)] disabled:opacity-40">
            <X className="w-4 h-4" style={{ color: "var(--text-muted)" }} />
          </button>
        </div>
        {/* Amount */}
        <div className="p-5" style={{ background: "var(--bg-soft)" }}>
          <div className="text-xs" style={{ color: "var(--text-muted)" }}>Paying to MentorIQ</div>
          <div className="mt-1 font-display font-extrabold text-3xl flex items-baseline" style={{ color: "var(--text)" }}>
            <IndianRupee className="w-6 h-6" strokeWidth={2.5} />{booking.mentor.price}.00
          </div>
          <div className="mt-1 text-xs truncate" style={{ color: "var(--text-muted)" }}>
            Session with {booking.mentor.name} · {booking.slot}
          </div>
        </div>
        {/* Tabs */}
        <div className="p-5">
          <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ background: "var(--bg-soft)" }}>
            {[
              { id: "upi", label: "UPI", icon: Smartphone },
              { id: "card", label: "Card", icon: CreditCard },
              { id: "netbank", label: "Netbanking", icon: Shield },
            ].map((t) => (
              <button key={t.id} onClick={() => { setTab(t.id); setError(""); }}
                className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition`}
                style={tab === t.id
                  ? { background: "var(--bg-elev)", color: "var(--text)", boxShadow: "var(--shadow-sm)" }
                  : { color: "var(--text-muted)" }}>
                <t.icon className="w-3.5 h-3.5" strokeWidth={2.4} />{t.label}
              </button>
            ))}
          </div>

          {tab === "upi" && (
            <div className="space-y-3 anim-fade-in">
              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>UPI ID</label>
                <input value={upiId} onChange={(e) => setUpiId(e.target.value)} placeholder="yourname@upi" disabled={processing}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none"
                  style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
              </div>
              <div className="flex flex-wrap gap-2">
                {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                  <button key={app} disabled={processing} className="px-3 py-1.5 rounded-lg border text-xs font-semibold hover:bg-[var(--bg-soft)] btn-press disabled:opacity-50"
                    style={{ borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>{app}</button>
                ))}
              </div>
            </div>
          )}

          {tab === "card" && (
            <div className="space-y-3 anim-fade-in">
              <div>
                <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>Card number</label>
                <input value={cardNum} onChange={(e) => setCardNum(formatCard(e.target.value))} placeholder="1234 5678 9012 3456" inputMode="numeric" disabled={processing}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none"
                  style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>Expiry</label>
                  <input value={cardExp} onChange={(e) => setCardExp(formatExp(e.target.value))} placeholder="MM/YY" inputMode="numeric" disabled={processing}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none"
                    style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
                </div>
                <div>
                  <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>CVV</label>
                  <input value={cardCvv} onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="123" inputMode="numeric" disabled={processing}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none"
                    style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }} />
                </div>
              </div>
            </div>
          )}

          {tab === "netbank" && (
            <div className="anim-fade-in">
              <label className="text-xs font-semibold mb-1.5 block" style={{ color: "var(--text-muted)" }}>Select bank</label>
              <select disabled={processing}
                className="w-full px-4 py-3 rounded-xl border text-sm focus-ring outline-none"
                style={{ background: "var(--bg)", borderColor: "var(--border-strong)", color: "var(--text)" }}>
                <option>HDFC Bank</option><option>ICICI Bank</option><option>SBI</option><option>Axis Bank</option><option>Kotak Mahindra</option>
              </select>
            </div>
          )}

          {error && <div className="mt-3 p-3 rounded-lg text-xs font-semibold anim-fade-in" style={{ background: "rgba(220,38,38,0.1)", color: "var(--danger)" }}>{error}</div>}

          <Button size="lg" full className="mt-5" onClick={submit} disabled={processing}>
            {processing ? (<><Loader2 className="w-4 h-4" style={{ animation: "spin-slow 0.8s linear infinite" }} /> Processing…</>) : (<>Pay ₹{booking.mentor.price}</>)}
          </Button>
          <div className="mt-3 text-[11px] text-center" style={{ color: "var(--text-soft)" }}>
            Tip: Enter <span className="font-mono font-semibold">fail@upi</span> to test failure handling
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentFailedScreen = ({ onRetry, onCancel }) => (
  <div className="min-h-screen flex items-center justify-center p-4 anim-fade-in">
    <div className="max-w-md w-full p-8 rounded-3xl border text-center anim-scale-in"
      style={{ background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-lg)" }}>
      <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-5"
        style={{ background: "rgba(220,38,38,0.1)", color: "var(--danger)" }}>
        <X className="w-8 h-8" strokeWidth={2.5} />
      </div>
      <h2 className="font-display font-extrabold text-2xl tracking-tight" style={{ color: "var(--text)" }}>Payment failed</h2>
      <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Don't worry — no money was deducted. Please try again.</p>
      <div className="mt-6 flex gap-3 justify-center">
        <Button variant="secondary" onClick={onCancel}>Cancel</Button>
        <Button onClick={onRetry}>Try again</Button>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  CONFIRMATION                                                        */
/* ------------------------------------------------------------------ */
const ConfirmationPage = ({ booking, navigate }) => {
  const days = useMemo(() => generateDays(), []);
  const dayObj = days[booking.day];
  const bookingId = useMemo(() => "MIQ" + Math.floor(Math.random() * 9_000_000 + 1_000_000), []);
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center anim-fade-up">
          <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 anim-scale-in"
            style={{ background: "var(--grad)", boxShadow: "0 0 0 8px rgba(124,58,237,0.15)" }}>
            <CheckCircle2 className="w-10 h-10 text-white" strokeWidth={2.4} />
          </div>
          <Badge tone="success" icon={PartyPopper}>Booking confirmed</Badge>
          <h1 className="mt-5 font-display font-extrabold tracking-tight text-3xl sm:text-5xl" style={{ color: "var(--text)" }}>
            You're all <span className="font-serif italic font-normal gradient-text">set, {booking.name.split(" ")[0]}.</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
            Your mentor will reach out on WhatsApp within 6 hours to confirm and share the meeting link.
          </p>
        </div>

        <div className="mt-10 p-5 sm:p-7 rounded-2xl border anim-fade-up" style={{ animationDelay: "200ms", background: "var(--bg-elev)", borderColor: "var(--border)", boxShadow: "var(--shadow-md)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>Booking ID</div>
              <div className="font-mono text-sm font-bold mt-0.5" style={{ color: "var(--text)" }}>{bookingId}</div>
            </div>
            <Badge tone="success" icon={CheckCircle2}>Paid</Badge>
          </div>
          <div className="flex items-center gap-4 pb-5 border-b" style={{ borderColor: "var(--border)" }}>
            <Avatar initials={booking.mentor.initials} gradient={booking.mentor.gradient} size="lg" />
            <div className="min-w-0">
              <div className="font-display font-bold text-lg truncate" style={{ color: "var(--text)" }}>{booking.mentor.name}</div>
              <div className="text-sm truncate" style={{ color: "var(--text-muted)" }}>{booking.mentor.college} · {booking.mentor.rank}</div>
              <div className="mt-1 flex items-center gap-1.5">
                <Stars value={booking.mentor.rating} size={12} />
                <span className="text-xs font-semibold" style={{ color: "var(--text-muted)" }}>{booking.mentor.rating}</span>
              </div>
            </div>
          </div>
          <div className="py-5 grid grid-cols-2 gap-4 text-sm">
            <Field icon={Calendar} label="Date" value={`${dayObj.day}, ${dayObj.num} ${dayObj.month}`} />
            <Field icon={Clock} label="Time" value={`${booking.slot} (45 min)`} />
            <Field icon={MessageCircle} label="Mode" value="Google Meet" />
            <Field icon={Phone} label="WhatsApp" value={`+91 ${booking.phone}`} />
          </div>
          <div className="pt-5 border-t" style={{ borderColor: "var(--border)" }}>
            <div className="font-semibold text-sm mb-3" style={{ color: "var(--text)" }}>What happens next</div>
            <ol className="space-y-2.5 text-sm" style={{ color: "var(--text-muted)" }}>
              <NextStep n="1" text="Your mentor will message you on WhatsApp within 6 hours to confirm." />
              <NextStep n="2" text="You'll get a Google Meet link 30 mins before the session." />
              <NextStep n="3" text="Bring your latest mock score, doubts, and any specific questions." />
              <NextStep n="4" text="After the session, you'll get a written roadmap from your mentor." />
            </ol>
          </div>
        </div>

        <div className="mt-8 p-5 rounded-2xl border-2 border-dashed text-sm anim-fade-up" style={{ animationDelay: "350ms", borderColor: "var(--border-strong)", color: "var(--text-muted)" }}>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "var(--success)" }} strokeWidth={2.4} />
            <div>
              <div className="font-semibold" style={{ color: "var(--text)" }}>Money-back guarantee</div>
              <div className="mt-0.5">Not satisfied within the first 5 minutes of your session? Full refund, no questions asked. Contact us at <span className="font-semibold" style={{ color: "var(--text)" }}>support@mentoriq.in</span>.</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center anim-fade-up" style={{ animationDelay: "450ms" }}>
          <Button variant="secondary" onClick={() => navigate("landing")}>Back to home</Button>
          <Button onClick={() => navigate("mentors")} iconRight={ArrowRight}>Book another session</Button>
        </div>
      </div>
    </div>
  );
};

const Field = ({ icon: Icon, label, value }) => (
  <div>
    <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
      <Icon className="w-3.5 h-3.5" strokeWidth={2.4} />{label}
    </div>
    <div className="mt-1 font-semibold text-[15px] truncate" style={{ color: "var(--text)" }}>{value}</div>
  </div>
);

const NextStep = ({ n, text }) => (
  <li className="flex items-start gap-3">
    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: "var(--primary-soft)", color: "var(--primary)" }}>{n}</span>
    <span>{text}</span>
  </li>
);

/* ------------------------------------------------------------------ */
/*  STICKY MOBILE CTA                                                   */
/* ------------------------------------------------------------------ */
const StickyMobileCTA = ({ onClick, view }) => {
  if (view !== "landing" && view !== "mentors") return null;
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 p-3 border-t glass anim-fade-up"
      style={{ borderColor: "var(--border)" }}>
      <Button full size="lg" onClick={onClick} iconRight={ArrowRight}>
        Book a Session — From ₹299
      </Button>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  MAIN APP                                                            */
/* ------------------------------------------------------------------ */
export default function App() {
  const [theme, setTheme] = useState("light");
  const [view, setView] = useState("landing"); // landing | mentors | booking | payment | failed | confirmation
  const [bookingDraft, setBookingDraft] = useState(null);
  const [completedBooking, setCompletedBooking] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [view]);

  const navigate = (v) => setView(v);

  const startBooking = (mentor) => {
    setBookingDraft({ initialMentor: mentor });
    setView("booking");
  };

  const onBookingComplete = (data) => {
    setCompletedBooking(data);
    setView("payment");
  };

  const onPaymentSuccess = () => setView("confirmation");
  const onPaymentFailure = () => setView("failed");

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)", color: "var(--text)" }}>
      <ThemeStyles />
      {(view === "landing" || view === "mentors") && (
        <Navbar navigate={navigate} theme={theme} setTheme={setTheme} currentView={view} />
      )}

      {view === "landing" && <div className="pb-20 md:pb-0"><LandingPage navigate={navigate} /></div>}
      {view === "mentors" && <div className="pb-20 md:pb-0"><MentorsPage navigate={navigate} startBooking={startBooking} /></div>}
      {view === "booking" && (
        <BookingFlow
          initialMentor={bookingDraft?.initialMentor}
          onComplete={onBookingComplete}
          onCancel={() => setView("mentors")}
        />
      )}
      {view === "payment" && completedBooking && (
        <div className="fixed inset-0 z-50" style={{ background: "var(--bg)" }}>
          <PaymentScreen booking={completedBooking} onSuccess={onPaymentSuccess} onFailure={onPaymentFailure} onBack={() => setView("booking")} />
        </div>
      )}
      {view === "failed" && completedBooking && (
        <PaymentFailedScreen onRetry={() => setView("payment")} onCancel={() => setView("booking")} />
      )}
      {view === "confirmation" && completedBooking && (
        <ConfirmationPage booking={completedBooking} navigate={navigate} />
      )}

      <StickyMobileCTA onClick={() => setView("mentors")} view={view} />
    </div>
  );
}
