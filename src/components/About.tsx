export const About = () => {
  return (
    <section id="about" className="py-20 bg-coffee">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-coffee-cream">О нас</h2>
            <p className="text-coffee-cream/90 text-lg">
              BUT FIRST COFFEE - это уютная кофейня в самом сердце Черкизово. Мы
              создаем особенную атмосферу, где каждый гость может насладиться
              превосходным кофе и свежей выпечкой.
            </p>
            <p className="text-coffee-cream/90 text-lg">
              Наша команда профессиональных бариста готовит кофе из
              свежеобжаренных зерен, а кондитеры каждый день создают
              восхитительные десерты.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/lovable-uploads/16e60488-0995-4daa-8877-5ed03fd4d87f.png"
              alt="Интерьер кофейни"
              className="rounded-lg w-full h-64 object-cover transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            />
            <img
              src="/lovable-uploads/9e9e9602-2164-4786-bdf1-61a1eae2efe9.png"
              alt="Кофе"
              className="rounded-lg w-full h-64 object-cover transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};