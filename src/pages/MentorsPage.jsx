// Mentors listing page with filters, sort, and search
import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { mentors } from "../data/mentors";
import MentorCard from "../components/mentors/MentorCard";
import FilterChip from "../components/mentors/FilterChip";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";

const TYPE_FILTERS = ["All", "IIT", "NIT"];
const TARGET_FILTERS = ["All students", "Class 11", "Class 12", "Dropper", "Last 3 months"];
const PRICE_FILTERS = ["Any price", "Under ₹350", "₹350-₹499", "₹500+"];
const SORT_OPTIONS = ["Top Rated", "Price: Low to High", "Price: High to Low", "Most Reviews"];

function applyFilters(list, { typeF, targetF, priceF, sort, search }) {
  let out = [...list];
  if (typeF !== "All") out = out.filter((m) => m.type === typeF);
  if (targetF !== "All students") out = out.filter((m) => m.target.some((t) => t.toLowerCase().includes(targetF.split(" ")[0].toLowerCase())));
  if (priceF === "Under ₹350") out = out.filter((m) => m.price < 350);
  else if (priceF === "₹350-₹499") out = out.filter((m) => m.price >= 350 && m.price < 500);
  else if (priceF === "₹500+") out = out.filter((m) => m.price >= 500);
  if (search) {
    const q = search.toLowerCase();
    out = out.filter((m) =>
      m.name.toLowerCase().includes(q) ||
      m.college.toLowerCase().includes(q) ||
      m.branch.toLowerCase().includes(q) ||
      m.tags.some((t) => t.toLowerCase().includes(q))
    );
  }
  if (sort === "Price: Low to High") out.sort((a, b) => a.price - b.price);
  else if (sort === "Price: High to Low") out.sort((a, b) => b.price - a.price);
  else if (sort === "Most Reviews") out.sort((a, b) => b.reviews - a.reviews);
  else out.sort((a, b) => b.rating - a.rating);
  return out;
}

export default function MentorsPage({ setView, onBookMentor }) {
  const [typeF, setTypeF] = useState("All");
  const [targetF, setTargetF] = useState("All students");
  const [priceF, setPriceF] = useState("Any price");
  const [sort, setSort] = useState("Top Rated");
  const [search, setSearch] = useState("");

  const filtered = applyFilters(mentors, { typeF, targetF, priceF, sort, search });

  return (
    <>
      <main className="min-h-screen pt-24 pb-28 px-4 mesh-bg">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-up">
            <h1 className="text-3xl font-extrabold mb-2" style={{ color: "var(--fg)" }}>
              Find your mentor
            </h1>
            <p style={{ color: "var(--fg-muted)" }}>
              {filtered.length} verified IIT/NIT mentors available
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-up-d1">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--fg-muted)" }} />
              <input
                type="text"
                placeholder="Search by name, college, or subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none focus:border-indigo-500 transition-all"
                style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-3 rounded-xl border text-sm outline-none transition-all cursor-pointer"
              style={{ background: "var(--surface)", borderColor: "var(--border)", color: "var(--fg)" }}
            >
              {SORT_OPTIONS.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Filters */}
          <div className="space-y-3 mb-8 animate-fade-up-d1">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
              {TYPE_FILTERS.map((f) => (
                <FilterChip key={f} label={f} active={typeF === f} onClick={() => setTypeF(f)} />
              ))}
              <span className="w-px mx-1 h-8 self-center" style={{ background: "var(--border)" }} />
              {TARGET_FILTERS.map((f) => (
                <FilterChip key={f} label={f} active={targetF === f} onClick={() => setTargetF(f)} />
              ))}
              <span className="w-px mx-1 h-8 self-center" style={{ background: "var(--border)" }} />
              {PRICE_FILTERS.map((f) => (
                <FilterChip key={f} label={f} active={priceF === f} onClick={() => setPriceF(f)} />
              ))}
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((m, i) => (
                <div key={m.id} className={`animate-fade-up`} style={{ animationDelay: `${i * 0.05}s` }}>
                  <MentorCard mentor={m} onBook={onBookMentor} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg font-bold mb-2" style={{ color: "var(--fg)" }}>No mentors found</p>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <StickyMobileCTA setView={setView} />
    </>
  );
}
