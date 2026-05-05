export const GOALS = [
  {
    id: "class11",
    label: "Class 11",
    icon: "📚",
    desc: "Build a strong foundation from day one",
  },
  {
    id: "class12",
    label: "Class 12",
    icon: "🎯",
    desc: "Balance boards + JEE and maximise score",
  },
  {
    id: "dropper",
    label: "Dropper Year",
    icon: "🔄",
    desc: "Strategise your gap year for maximum ROI",
  },
  {
    id: "last3",
    label: "Last 3 Months",
    icon: "⚡",
    desc: "Final sprint — revision & mock strategy",
  },
];

export const FAQS = [
  {
    q: "How is Crackd different from YouTube or coaching?",
    a: "YouTube gives generic advice. Coaching is one-size-fits-all. Crackd gives you a verified IIT/NIT mentor who looks at YOUR specific situation — your weak topics, your schedule, your mock scores — and gives you a personalised plan in 45 minutes.",
  },
  {
    q: "Are the mentors verified?",
    a: "Yes. Every mentor on Crackd has been verified with their JEE scorecard and college ID. We vet for communication skills and mentoring ability before onboarding. You only get the best.",
  },
  {
    q: "What if I don't find the session useful?",
    a: "We offer a full refund within 24 hours if you're not satisfied. No questions asked. We're confident in our mentor quality — that's why we can offer this guarantee.",
  },
  {
    q: "Is the session on video call?",
    a: "Yes, sessions happen over Google Meet or Zoom. You get a calendar invite with the link after booking. Screen sharing is available so mentors can review your notes or mock papers.",
  },
  {
    q: "Can I book multiple sessions?",
    a: "Absolutely. Many students book monthly check-in sessions with their mentor. Once you've had your first session, you can directly message your mentor on WhatsApp to book the next one.",
  },
  {
    q: "How quickly can I get a session?",
    a: "Most mentors have slots available within 24–48 hours. You can see live availability while booking. For urgent help, filter by mentors with slots today.",
  },
];

export const TIME_SLOTS = [
  "7:00 AM",
  "9:00 AM",
  "11:00 AM",
  "2:00 PM",
  "4:00 PM",
  "6:00 PM",
  "8:00 PM",
  "9:30 PM",
];

export function generateDays() {
  const days = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({
      date: d.getDate(),
      day: dayNames[d.getDay()],
      month: monthNames[d.getMonth()],
      full: d.toISOString().split("T")[0],
      isToday: i === 0,
    });
  }
  return days;
}

export const TAKEN_SLOTS = ["9:00 AM", "4:00 PM", "9:30 PM"];
