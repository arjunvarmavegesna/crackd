// Step 2: Mentor selection within the booking flow (filtered by goal)
import { ArrowRight } from "lucide-react";
import { mentors } from "../../data/mentors";
import MentorCard from "../mentors/MentorCard";
import Button from "../ui/Button";

const goalMap = {
  class11: "Class 11",
  class12: "Class 12",
  dropper: "Dropper",
  last3: "Last 3 months",
};

export default function Step2Mentor({ goal, selectedMentor, setSelectedMentor, onNext, onBack }) {
  const goalLabel = goalMap[goal];
  const filtered = mentors.filter((m) => m.target.some((t) => t.toLowerCase().includes(goalLabel?.toLowerCase().split(" ")[0] ?? "")));
  const list = filtered.length > 0 ? filtered : mentors;

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>
        Choose your mentor
      </h2>
      <p className="text-sm mb-8" style={{ color: "var(--fg-muted)" }}>
        Showing mentors who specialise in <strong style={{ color: "var(--fg)" }}>{goalLabel}</strong>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {list.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMentor(m)}
            className="text-left"
          >
            <div className={`rounded-2xl transition-all duration-200 ${
              selectedMentor?.id === m.id
                ? "ring-2 ring-indigo-500 scale-[1.01]"
                : "hover:scale-[1.01]"
            }`}>
              <MentorCard mentor={m} onBook={() => setSelectedMentor(m)} />
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={onBack} size="lg">
          Back
        </Button>
        <Button onClick={onNext} disabled={!selectedMentor} size="lg" className="group">
          Continue with {selectedMentor?.name.split(" ")[0] || "Mentor"}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}
