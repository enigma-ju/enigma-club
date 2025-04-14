
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Vision from "../components/Vision";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Members } from "@/components/Members";
import { Faq } from "@/components/Faq";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-enigma-950">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      {/* <Members /> */}
      <Vision />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
