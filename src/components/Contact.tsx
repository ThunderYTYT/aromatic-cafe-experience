export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-coffee-cream text-center mb-12">
          Контакты
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 text-coffee-cream">
              <div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p>дп Черкизово, Аптекарский переулок 1Б</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Время работы</h3>
                <p>Ежедневно с 09:00 до 21:00</p>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.728952%2C56.008751&mode=search&oid=182471357796&ol=biz&z=17"
                width="100%"
                height="100%"
                frameBorder="0"
                title="BUT FIRST COFFEE на карте"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};