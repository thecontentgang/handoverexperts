
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import Inspection from "./sections/Inspection";
import WhyChooseUsSection from "./sections/WhyChooseUs";
import ResultsSection from "./sections/Results";
import ContactFooterSection from "./sections/ContactFooter";
import FloatingContactButton from "./components/FloatingBar";
import WhenToInspectSection from "./sections/WhenToInspectSection";
import AreasWeServeSection from "./sections/AreasWeServeSection";
import FAQSection from "./sections/FAQSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ThankYouPage from "./components/ThankYouPage";

const App = () => {
  if (window.location.pathname === "/thank-you") {
    return <ThankYouPage />;
  }

  return (
    <main>
      <FloatingContactButton />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhenToInspectSection />
      <Inspection />
      <AreasWeServeSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <ResultsSection />
      <FAQSection />
      <ContactFooterSection />
    </main>
  )
}

export default App