
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import Inspection from "./sections/Inspection";
import WhyChooseUsSection from "./sections/WhyChooseUs";
import ResultsSection from "./sections/Results";
import ContactFooterSection from "./sections/ContactFooter";
import FloatingContactButton from "./components/FloatingBar";
const App = () => {
  return (
    <main>
      <FloatingContactButton />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Inspection />
      <WhyChooseUsSection />
      <ResultsSection />
      <ContactFooterSection />
    </main>
  )
}

export default App