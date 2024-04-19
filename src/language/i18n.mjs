import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      destinations: "destinations",
      hotels: "hotels",
      flights: "flights",
      bookings: "bookings",
      //   home page words
      homeSubtitle: "BEST DESTINATIONS AROUND THE WORLD",
      homeTitle: "Travel, enjoy and live a new and full life",
      homeBottomSubtitle:
        "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
      homeBottomFind: "Find out more",
      homeIconPlay: "Play demo",
    },
  },
  ru: {
    translation: {
      destinations: "направления",
      hotels: "отели",
      flights: "полеты",
      bookings: "заказы",
      homeSubtitle: "ЛУЧШИЕ НАПРАВЛЕНИЯ ПО ВСЕМУ МИРУ",
      homeTitle:
        "Путешествуйте, наслаждайтесь и живите новой и полноценной жизнью",
      homeBottomSubtitle:
        "Построенная калитка уже не восхищает, а само тщеславие Бартона в ней творится. Предпочитали спортсмены, это увлекательное слушание. Ворота парка продаются на запад.",
      homeBottomFind: "Узнать больше",
      homeIconPlay: "Играть демо",
      //   we boffer best services
      servicesTitle: "мы предлагаем лучшие услуги",
    },
  },
  tm: {
    translation: {
      destinations: "barmaly ýerler",
      hotels: "myhmanhanalar",
      flights: "uçuşlar",
      bookings: "bronlamak",
      homeSubtitle: "DÜNLD .DE IEST GOWY GÖRNÜŞLER",
      homeTitle: "Syýahat ediň, lezzet alyň we täze we doly durmuşda ýaşaň",
      homeBottomSubtitle:
        "Gurlan wiket, bartonyň biderekliginiň özüne haýran galýar. Sportçylary has gowy görýärdi, diňlemek bilen meşgullandy. Seýilgäh derwezesi satýarGünbatar üçin kyn.",
      homeBottomFind: "Has giňişleýin maglumat",
      homeIconPlay: "Demo oýna",
      servicesTitle: " Biz iň gowy hyzmatlary hödürleýäris",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
