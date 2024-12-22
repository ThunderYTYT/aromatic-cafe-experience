import { Button } from "./ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    author: "Анастасия Б.",
    rating: 5,
    text: "Очень уютное место! Вкусный кофе, приятная атмосфера. Всегда свежая выпечка и десерты. Отдельное спасибо персоналу за внимательность и доброжелательность!",
    date: "январь 2024"
  },
  {
    author: "Екатерина К.",
    rating: 5,
    text: "Прекрасная кофейня! Кофе очень вкусный, особенно раф. Приятный интерьер, вежливый персонал. Рекомендую!",
    date: "декабрь 2023"
  },
  {
    author: "Михаил С.",
    rating: 5,
    text: "Отличное место! Вкусный кофе, уютная атмосфера. Всегда приятно заходить сюда по пути на работу.",
    date: "ноябрь 2023"
  }
];

export const Reviews = () => {
  const openYandexReviews = () => {
    window.open('https://yandex.ru/maps/org/but_first_coffee/182471357796/reviews/?ll=37.807512%2C55.963143&tab=reviews&z=17.05', '_blank');
  };

  return (
    <section className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-cream text-center mb-12">
          Отзывы
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-coffee/10 p-6 rounded-lg border border-coffee-light hover:border-coffee-cream transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-coffee-cream font-semibold">{review.author}</h3>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
              <p className="text-coffee-cream/90 mb-4">{review.text}</p>
              <p className="text-coffee-cream/70 text-sm">{review.date}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            onClick={openYandexReviews}
            className="bg-coffee-cream text-coffee-dark hover:bg-coffee-light"
          >
            Смотреть все отзывы
          </Button>
        </div>
      </div>
    </section>
  );
};