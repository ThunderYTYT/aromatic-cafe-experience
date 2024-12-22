import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-coffee-dark text-coffee-cream flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/b3b37a60-6bbc-4823-8aa2-3ed0b5e4a6d3.png')",
        }}
      >
        <div className="absolute inset-0 bg-coffee-dark/70" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            BUT FIRST COFFEE
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Уютная кофейня в Черкизово, где каждая чашка кофе - это момент наслаждения
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light"
              onClick={() => scrollToSection('menu')}
            >
              Посмотреть меню
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark"
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