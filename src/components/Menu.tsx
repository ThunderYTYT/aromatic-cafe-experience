import { useState } from "react";
import { Card } from "./ui/card";
import { Coffee, Snowflake } from "lucide-react";
import { Button } from "./ui/button";

interface MenuItem {
  id: number;
  name: string;
  sizes: {
    size: string;
    price: number;
  }[];
  description?: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Эспрессо",
    sizes: [{ size: "200мл", price: 130 }],
  },
  {
    id: 2,
    name: "Американо",
    sizes: [
      { size: "200мл", price: 150 },
      { size: "300мл", price: 170 },
      { size: "400мл", price: 190 },
    ],
  },
  {
    id: 3,
    name: "Капучино",
    sizes: [
      { size: "200мл", price: 170 },
      { size: "300мл", price: 195 },
      { size: "400мл", price: 215 },
    ],
  },
  {
    id: 4,
    name: "Латте",
    sizes: [
      { size: "300мл", price: 195 },
      { size: "400мл", price: 215 },
    ],
  },
  {
    id: 5,
    name: "Раф",
    sizes: [
      { size: "300мл", price: 200 },
      { size: "400мл", price: 225 },
    ],
  },
  {
    id: 6,
    name: "Латте Карамель/Ваниль",
    sizes: [
      { size: "300мл", price: 210 },
      { size: "400мл", price: 230 },
    ],
  },
  {
    id: 7,
    name: "Латте Мокко/Бельгийская вафля",
    sizes: [
      { size: "300мл", price: 215 },
      { size: "400мл", price: 235 },
    ],
  },
  {
    id: 8,
    name: "Раф Рафаэло/Черничный",
    sizes: [
      { size: "300мл", price: 220 },
      { size: "400мл", price: 240 },
    ],
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-coffee-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Snowflake className="absolute animate-fade-in text-coffee-cream/10 w-8 h-8" style={{ top: '5%', left: '15%', animation: 'fall 13s linear infinite' }} />
        <Snowflake className="absolute animate-fade-in text-coffee-cream/10 w-6 h-6" style={{ top: '10%', right: '25%', animation: 'fall 17s linear infinite' }} />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          Наше меню
          <div className="absolute -top-1 -right-1 w-full h-full bg-gradient-to-r from-transparent via-coffee-cream/5 to-transparent" style={{ transform: 'skewY(-3deg)' }}></div>
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light hover-glow"
          >
            <Coffee className="mr-2" />
            Кофе
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="menu-card bg-coffee/10 border-coffee-light text-coffee-cream p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-coffee-cream">{item.name}</h3>
              <div className="space-y-4">
                {item.sizes.map((sizeOption) => (
                  <div
                    key={`${item.id}-${sizeOption.size}`}
                    className="flex justify-between items-center hover:bg-coffee/20 p-2 rounded-lg transition-all duration-300"
                  >
                    <span className="text-coffee-cream/80">
                      {sizeOption.size}
                    </span>
                    <span className="text-lg font-bold">
                      {sizeOption.price} ₽
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};