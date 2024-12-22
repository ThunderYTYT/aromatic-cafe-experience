import { Button } from "./ui/button";
import { Snowflake } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-coffee-dark text-coffee-cream flex items-center">
      <div className="absolute top-0 left-0 w-full h-full">
        <Snowflake className="absolute animate-fade-in text-coffee-cream/20 w-8 h-8" style={{ top: '10%', left: '10%', animation: 'fall 10s linear infinite' }} />
        <Snowflake className="absolute animate-fade-in text-coffee-cream/20 w-6 h-6" style={{ top: '5%', left: '30%', animation: 'fall 15s linear infinite' }} />
        <Snowflake className="absolute animate-fade-in text-coffee-cream/20 w-7 h-7" style={{ top: '15%', right: '20%', animation: 'fall 12s linear infinite' }} />
      </div>
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b3b37a60-6bbc-4823-8aa2-3ed0b5e4a6d3.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-coffee-dark/90 via-coffee-dark/70 to-coffee-dark/90 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coffee-cream via-coffee-light to-coffee-cream bg-clip-text text-transparent">
            BUT FIRST COFFEE
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-coffee-cream/90">
            Уютная кофейня в Черкизово, где каждая чашка кофе - это момент наслаждения
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('menu')}
            >
              Посмотреть меню
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('about')}
            >
              О нас
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};