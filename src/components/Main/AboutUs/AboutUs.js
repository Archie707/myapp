import React from 'react';
import './AboutUs.scss';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about">
      <h2>Jak to wszystko się zaczęło?</h2>
      <div className="about-container">
        <div className="about-img-box" />
        <div className="about-content">
          <p className="blockquote">
            "Historia naszej restauracji fast food zaczyna się od prostego marzenia o stworzeniu miejsca, gdzie każdy może cieszyć się szybkim, ale zdrowym i pysznym jedzeniem. W obecnych czasach, kiedy życie toczy się w błyskawicznym tempie, a ludzie coraz bardziej cenią sobie swój czas, zauważyliśmy lukę na rynku. Chcieliśmy oferować coś więcej niż tylko tradycyjne fast foody; nasz cel to połączenie szybkości z jakością i smakiem."
          </p>
          <p className="text-content">
            Współzałożyciele, trójka przyjaciół z długoletnim doświadczeniem w gastronomii i pasją do gotowania, postanowili połączyć siły. Każdy z nich wnosił coś wyjątkowego: kreatywność, umiejętności zarządzania oraz wiedzę o zdrowym żywieniu. Razem stworzyli koncepcję, która miała zmienić postrzeganie fast foodów.

            "Rozpoczęli od przeprowadzenia badań rynku, aby zrozumieć, czego klienci oczekują od idealnego posiłku 'na szybko'. W odpowiedzi na te oczekiwania, zaprojektowali menu, które łączyło lokalne składniki z międzynarodowymi smakami, tworząc unikalne dania, które można było szybko przygotować, nie tracąc przy tym na jakości.

            Kluczowym momentem było znalezienie idealnej lokalizacji. Chcieli miejsca, które będzie łatwo dostępne zarówno dla pieszych, jak i kierowców, a także blisko centrów biznesowych i akademickich. Po miesiącach poszukiwań znaleźli idealny lokal na obrzeżach ruchliwej dzielnicy, z dużym potencjałem na przyciągnięcie różnorodnych grup klientów.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
