// Step indicator for the 4-step booking flow
const STEPS = ["Goal", "Mentor", "Time Slot", "Checkout"];

export default function Stepper({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEPS.map((label, i) => {
        const step = i + 1;
        const done = step < currentStep;
        const active = step === currentStep;
        return (
          <div key={i} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  done
                    ? "bg-emerald-500 text-white"
                    : active
                    ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30"
                    : "text-[var(--fg-muted)] border border-[var(--border)]"
                }`}
                style={!done && !active ? { background: "var(--surface-2)" } : {}}
              >
                {done ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                ) : step}
              </div>
              <span
                className={`text-xs mt-1.5 font-medium hidden sm:block whitespace-nowrap ${
                  active ? "text-indigo-400" : "text-[var(--fg-muted)]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`w-12 sm:w-20 h-px mx-2 mt-[-10px] sm:mt-[-10px] transition-all duration-300 ${
                  done ? "bg-emerald-500" : "bg-[var(--border)]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
