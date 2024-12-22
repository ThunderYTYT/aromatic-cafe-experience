import { useState } from "react";
import { Card } from "./ui/card";
import { Coffee } from "lucide-react";
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
    <section id="menu" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-cream text-center mb-12">
          Наше меню
        </h2>

        <div className="flex justify-center gap-4 mb-12">
          <Button
            className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light"
          >
            <Coffee className="mr-2" />
            Кофе
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="bg-coffee/10 border-coffee-light text-coffee-cream p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
              <div className="space-y-4">
                {item.sizes.map((sizeOption) => (
                  <div
                    key={`${item.id}-${sizeOption.size}`}
                    className="flex justify-between items-center"
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