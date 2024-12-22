import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Menu } from "@/components/Menu";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Reviews } from "@/components/Reviews";

const Index = () => {
  return (
    <div className="min-h-screen bg-coffee-dark">
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Reviews />
      <Contact />
    </div>
  );
};

export default Index;