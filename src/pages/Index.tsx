import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CodingActivity from "@/components/CodingActivity";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <CodingActivity />
      <Experience />
      <Footer />
    </div>
  );
};

export default Index;
