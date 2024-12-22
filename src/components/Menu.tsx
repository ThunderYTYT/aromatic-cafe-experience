import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Coffee, Cake } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  category: "coffee" | "dessert";
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Капучино",
    price: 180,
    description: "Классический капучино с нежной молочной пенкой",
    category: "coffee",
  },
  {
    id: 2,
    name: "Латте",
    price: 200,
    description: "Мягкий кофейный напиток с большим количеством молока",
    category: "coffee",
  },
  {
    id: 3,
    name: "Чизкейк",
    price: 250,
    description: "Нежный чизкейк с ягодным соусом",
    category: "dessert",
  },
  {
    id: 4,
    name: "Круассан",
    price: 180,
    description: "Свежевыпеченный круассан с маслом",
    category: "dessert",
  },
];

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<"coffee" | "dessert">("coffee");
  const { toast } = useToast();

  const addToCart = (item: MenuItem) => {
    toast({
      title: "Добавлено в корзину",
      description: `${item.name} добавлен в корзину`,
    });
  };

  return (
    <section id="menu" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-cream text-center mb-12">
          Наше меню
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeCategory === "coffee" ? "default" : "outline"}
            onClick={() => setActiveCategory("coffee")}
            className={`${
              activeCategory === "coffee"
                ? "bg-coffee-cream text-coffee-dark"
                : "border-coffee-cream text-coffee-cream"
            } hover:bg-coffee-light`}
          >
            <Coffee className="mr-2" />
            Кофе
          </Button>
          <Button
            variant={activeCategory === "dessert" ? "default" : "outline"}
            onClick={() => setActiveCategory("dessert")}
            className={`${
              activeCategory === "dessert"
                ? "bg-coffee-cream text-coffee-dark"
                : "border-coffee-cream text-coffee-cream"
            } hover:bg-coffee-light`}
          >
            <Cake className="mr-2" />
            Десерты
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item) => (
              <Card
                key={item.id}
                className="bg-coffee/10 border-coffee-light text-coffee-cream p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-coffee-cream/80 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{item.price} ₽</span>
                  <Button
                    onClick={() => addToCart(item)}
                    className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light"
                  >
                    В корзину
                  </Button>
                </div>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};