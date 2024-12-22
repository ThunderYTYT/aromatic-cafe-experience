import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Меню", href: "#menu" },
    { title: "О нас", href: "#about" },
    { title: "Контакты", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-coffee-dark/90 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-coffee-cream text-2xl font-bold">
          BUT FIRST COFFEE
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-coffee-cream hover:text-coffee-light transition-colors duration-300"
            >
              {item.title}
            </a>
          ))}
          <Button
            variant="outline"
            className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark"
          >
            Заказать
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-coffee-cream"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-coffee-dark/90 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-coffee-cream hover:text-coffee-light transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-coffee-cream text-coffee-cream hover:bg-coffee-cream hover:text-coffee-dark w-full"
            >
              Заказать
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};