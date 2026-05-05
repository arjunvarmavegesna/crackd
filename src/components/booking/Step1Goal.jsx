// Step 1: Goal selection with 4 option cards
import { ArrowRight } from "lucide-react";
import { GOALS } from "../../data/constants";
import Button from "../ui/Button";

export default function Step1Goal({ goal, setGoal, onNext }) {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>
        What's your current situation?
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
        This helps us match you with the right mentor for your stage.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {GOALS.map((g) => (
          <button
            key={g.id}
            onClick={() => setGoal(g.id)}
            className={`p-5 rounded-2xl border text-left transition-all duration-200 hover:scale-[1.02] ${
              goal === g.id
                ? "border-indigo-500 shadow-lg shadow-indigo-500/20"
                : "hover:border-indigo-500/40"
            }`}
            style={{
              background: goal === g.id ? "rgba(79,70,229,0.1)" : "var(--surface)",
              borderColor: goal === g.id ? "#6366f1" : "var(--border)",
            }}
          >
            <div className="text-2xl mb-2">{g.icon}</div>
            <h3 className="font-bold text-base mb-1" style={{ color: "var(--fg)" }}>{g.label}</h3>
            <p className="text-xs" style={{ color: "var(--fg-muted)" }}>{g.desc}</p>
          </button>
        ))}
      </div>

      <Button onClick={onNext} disabled={!goal} size="lg" className="w-full sm:w-auto group">
        Continue
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
