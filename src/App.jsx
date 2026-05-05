// Root app — manages global view state and theme, renders the active page
import { useState, useEffect } from "react";
import ThemeStyles from "./components/layout/ThemeStyles";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./pages/LandingPage";
import MentorsPage from "./pages/MentorsPage";
import BookingFlow from "./pages/BookingFlow";
import ConfirmationPage from "./components/confirmation/ConfirmationPage";

export default function App() {
  const [view, setView] = useState("landing");
  const [theme, setTheme] = useState("dark");
  const [bookingMentor, setBookingMentor] = useState(null);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const handleBookMentor = (mentor) => {
    setBookingMentor(mentor);
    setView("booking");
  };

  const handleSetView = (v) => {
    setView(v);
    if (v !== "booking") setBookingMentor(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirm = (booking) => {
    setConfirmedBooking(booking);
    setView("confirmation");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div data-theme={theme}>
      <ThemeStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} view={view} setView={handleSetView} />

      {view === "landing" && <LandingPage setView={handleSetView} />}

      {view === "mentors" && (
        <MentorsPage setView={handleSetView} onBookMentor={handleBookMentor} />
      )}

      {view === "booking" && (
        <BookingFlow
          initialMentor={bookingMentor}
          setView={handleSetView}
          onConfirm={handleConfirm}
        />
      )}

      {view === "confirmation" && confirmedBooking && (
        <ConfirmationPage
          mentor={confirmedBooking.mentor}
          selectedDay={confirmedBooking.selectedDay}
          selectedTime={confirmedBooking.selectedTime}
          bookingForm={confirmedBooking.bookingForm}
          setView={handleSetView}
        />
      )}
    </div>
  );
}
