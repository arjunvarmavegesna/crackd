// Step 3: Date and time slot picker
import { ArrowRight } from "lucide-react";
import { generateDays, TIME_SLOTS, TAKEN_SLOTS } from "../../data/constants";
import Button from "../ui/Button";

const days = generateDays();

export default function Step3Slot({ selectedDay, setSelectedDay, selectedTime, setSelectedTime, onNext, onBack }) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>
        Pick a date & time
      </h2>
      <p className="text-sm mb-6" style={{ color: "var(--fg-muted)" }}>
        All times are in IST. Session duration: 45 minutes.
      </p>

      {/* Day scroll */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--fg-muted)" }}>Select a date</h3>
        <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
          {days.map((d) => (
            <button
              key={d.full}
              onClick={() => setSelectedDay(d.full)}
              className={`flex-shrink-0 w-16 py-3 rounded-2xl border flex flex-col items-center transition-all duration-200 ${
                selectedDay === d.full
                  ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                  : "hover:border-indigo-500/40"
              }`}
              style={{
                background: selectedDay === d.full ? "rgba(79,70,229,0.12)" : "var(--surface)",
                borderColor: selectedDay === d.full ? "#6366f1" : "var(--border)",
              }}
            >
              <span className="text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>{d.day}</span>
              <span className="text-xl font-extrabold mt-0.5" style={{
                color: selectedDay === d.full ? "#818cf8" : "var(--fg)"
              }}>{d.date}</span>
              <span className="text-xs" style={{ color: "var(--fg-muted)" }}>{d.month}</span>
              {d.isToday && (
                <span className="text-[10px] font-semibold text-indigo-400 mt-0.5">Today</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Time slots */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-3" style={{ color: "var(--fg-muted)" }}>Select a time</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIME_SLOTS.map((t) => {
            const taken = TAKEN_SLOTS.includes(t);
            const active = selectedTime === t;
            return (
              <button
                key={t}
                onClick={() => !taken && setSelectedTime(t)}
                disabled={taken}
                className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all duration-200 ${
                  taken
                    ? "opacity-40 cursor-not-allowed line-through"
                    : active
                    ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                    : "hover:border-indigo-500/40 hover:scale-[1.02]"
                }`}
                style={{
                  background: active ? "rgba(79,70,229,0.12)" : "var(--surface)",
                  borderColor: active ? "#6366f1" : "var(--border)",
                  color: active ? "#818cf8" : taken ? "var(--fg-muted)" : "var(--fg)",
                }}
              >
                {t}
                {taken && <span className="block text-[10px] font-normal mt-0.5">Taken</span>}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack} size="lg">Back</Button>
        <Button
          onClick={onNext}
          disabled={!selectedDay || !selectedTime}
          size="lg"
          className="group"
        >
          Continue
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
