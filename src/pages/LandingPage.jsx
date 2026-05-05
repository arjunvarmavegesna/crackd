// Landing page — assembles all landing section components
import Hero from "../components/landing/Hero";
import TrustStrip from "../components/landing/TrustStrip";
import Benefits from "../components/landing/Benefits";
import HowItWorks from "../components/landing/HowItWorks";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import FinalCTA from "../components/landing/FinalCTA";
import Footer from "../components/layout/Footer";
import StickyMobileCTA from "../components/layout/StickyMobileCTA";

export default function LandingPage({ setView }) {
  return (
    <>
      <Hero setView={setView} />
      <TrustStrip />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA setView={setView} />
      <Footer />
      <StickyMobileCTA setView={setView} />
    </>
  );
}
