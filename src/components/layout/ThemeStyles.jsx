// Global CSS variables, font imports, and animation keyframes
export default function ThemeStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Instrument+Serif:ital@0;1&display=swap');

      *, *::before, *::after { box-sizing: border-box; }

      [data-theme="light"] {
        --bg: #f8f7ff;
        --bg-2: #ffffff;
        --surface: #f1f0ff;
        --surface-2: #e8e6ff;
        --border: rgba(79,70,229,0.15);
        --fg: #0f0e17;
        --fg-muted: #6b7280;
        --grad: linear-gradient(135deg, #4f46e5, #7c3aed, #2563eb);
        --card-bg: rgba(255,255,255,0.8);
        --nav-bg: rgba(248,247,255,0.8);
        --shadow: 0 4px 40px rgba(79,70,229,0.12);
      }

      [data-theme="dark"] {
        --bg: #0a0a0f;
        --bg-2: #111118;
        --surface: #16161f;
        --surface-2: #1e1e2a;
        --border: rgba(255,255,255,0.08);
        --fg: #f0eeff;
        --fg-muted: #8b8fa8;
        --grad: linear-gradient(135deg, #4f46e5, #7c3aed, #2563eb);
        --card-bg: rgba(22,22,31,0.8);
        --nav-bg: rgba(10,10,15,0.8);
        --shadow: 0 4px 40px rgba(0,0,0,0.4);
      }

      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        background: var(--bg);
        color: var(--fg);
        transition: background 0.3s, color 0.3s;
        margin: 0;
      }

      .font-serif-italic {
        font-family: 'Instrument Serif', serif;
        font-style: italic;
      }

      .grad-text {
        background: var(--grad);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .mesh-bg {
        background:
          radial-gradient(ellipse 80% 50% at 20% 0%, rgba(79,70,229,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(124,58,237,0.1) 0%, transparent 60%),
          var(--bg);
      }

      .grain {
        position: relative;
      }
      .grain::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 0;
        border-radius: inherit;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
      }
      @keyframes shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }

      .animate-fade-up { animation: fadeUp 0.6s ease both; }
      .animate-fade-up-d1 { animation: fadeUp 0.6s 0.1s ease both; }
      .animate-fade-up-d2 { animation: fadeUp 0.6s 0.2s ease both; }
      .animate-fade-up-d3 { animation: fadeUp 0.6s 0.3s ease both; }
      .animate-fade-up-d4 { animation: fadeUp 0.6s 0.4s ease both; }
      .animate-float { animation: float 4s ease-in-out infinite; }
      .animate-fade-in { animation: fadeIn 0.4s ease both; }

      .glass-card {
        background: var(--card-bg);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid var(--border);
        box-shadow: var(--shadow);
      }

      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  );
}
