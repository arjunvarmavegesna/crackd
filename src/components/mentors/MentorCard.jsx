// Individual mentor card with scarcity badge and booking CTA
import { Shield } from "lucide-react";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import Stars from "../ui/Stars";
import Button from "../ui/Button";

export default function MentorCard({ mentor, onBook }) {
  const urgent = mentor.slotsLeft <= 2;

  return (
    <div className="glass-card rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <Avatar initials={mentor.initials} gradient={mentor.gradient} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-bold text-base leading-tight" style={{ color: "var(--fg)" }}>
                {mentor.name}
              </h3>
              <p className="text-xs mt-0.5" style={{ color: "var(--fg-muted)" }}>
                {mentor.college} · {mentor.branch}
              </p>
            </div>
            <Badge tone={mentor.type === "IIT" ? "primary" : "success"}>
              {mentor.type}
            </Badge>
          </div>

          <div className="flex items-center gap-1.5 mt-1.5">
            <Stars rating={mentor.rating} />
            <span className="text-xs font-semibold" style={{ color: "var(--fg)" }}>
              {mentor.rating}
            </span>
            <span className="text-xs" style={{ color: "var(--fg-muted)" }}>
              ({mentor.reviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
          AIR {mentor.rank.toLocaleString()}
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
          {mentor.year}
        </span>
        {urgent && (
          <Badge tone="warn" pulse>
            Only {mentor.slotsLeft} slots left
          </Badge>
        )}
      </div>

      {/* Bio */}
      <p className="text-sm leading-relaxed mb-4 flex-1 line-clamp-3" style={{ color: "var(--fg-muted)" }}>
        {mentor.bio}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {mentor.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full"
            style={{ background: "var(--surface-2)", color: "var(--fg-muted)" }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--border)" }}>
        <div>
          <span className="text-xl font-extrabold" style={{ color: "var(--fg)" }}>₹{mentor.price}</span>
          <span className="text-xs block" style={{ color: "var(--fg-muted)" }}>per 45-min session</span>
        </div>
        <Button onClick={() => onBook(mentor)} size="sm">
          Book Now
        </Button>
      </div>

      {/* Guarantee */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <Shield className="w-3 h-3 text-emerald-400" />
        <span className="text-xs text-emerald-400">Money-back guarantee</span>
      </div>
    </div>
  );
}
