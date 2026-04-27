import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brand: {
        name: 'De Pamiri!',
        label: 'Travel',
        homeAria: 'Open De Pamiri Travel home',
      },
      nav: {
        menu: 'Open menu',
        close: 'Close menu',
        language: 'Change language',
        languages: {
          en: 'EN',
          ru: 'RU',
        },
        links: {
          home: 'Home',
          store: 'Store',
          sights: 'Sights',
          currency: 'Currency',
          contacts: 'Contacts',
        },
      },
      hero: {
        badge: 'Discover Tajikistan',
        title: 'Explore the sights of the Pamir',
        subtitle: 'A place where nature and adventure unite',
        cta: 'Book now',
        imageAlt: 'Sunlit Tajik mountain valley with a river winding through the Pamir landscape',
      },
      store: {
        badge: 'Cultural Store',
        title: 'De Pamiri Handicraft: The Soul of Pamir in Every Stitch',
        description:
          'Bring home handpicked pieces of Pamiri craft, mountain hospitality, and the quiet beauty of Tajik tradition.',
        addressLabel: 'Store address',
        address: '📍 A.Davron 22, Khorog Central Park, GBAO, Tajikistan',
        mapTitle: 'De Pamiri Handicraft store location map',
        galleryAlt: 'De Pamiri Handicraft store slide',
        gallerySlideLabel: 'Show store gallery slide',
        products: [
          {
            name: 'Pamiri Textile Sets',
            description: 'Soft patterns inspired by mountain homes and family celebrations.',
          },
          {
            name: 'Handmade Souvenirs',
            description: 'Small keepsakes shaped by local makers and regional stories.',
          },
          {
            name: 'Traditional Accessories',
            description: 'Minimal pieces with color, texture, and a strong sense of place.',
          },
          {
            name: 'Tea and Mountain Gifts',
            description: 'Warm gifts for travelers who want to carry Pamir hospitality onward.',
          },
        ],
      },
      sights: {
        badge: 'Must Visit',
        title: 'Choose your adventure',
        cards: [
          {
            title: 'Pamir Highway',
            description: 'A legendary high-altitude road through open valleys and dramatic passes.',
          },
          {
            title: 'Lake Yashikul',
            description: 'A peaceful alpine lake framed by mineral colors and wide mountain silence.',
          },
          {
            title: 'Wakhan Valley',
            description: 'Ancient forts, warm springs, and sweeping views across the Panj River.',
          },
          {
            title: 'Jizew Valley',
            description: 'A slow village walk into clear water, stone paths, and green terraces.',
          },
          {
            title: 'Panj River',
            description: 'A scenic route where borderland cliffs meet bright river bends.',
          },
          {
            title: 'High Pamir Plateau',
            description: 'Remote horizons, crisp light, and the unforgettable scale of Central Asia.',
          },
        ],
      },
      currency: {
        badge: 'Live Rates',
        title: 'Current Exchange Rates',
        subtitle: 'Live rates updated daily for planning your Pamir trip',
        rates: [
          {
            flag: '🇺🇸',
            pair: 'USD / TJS',
            rate: '10.95',
          },
          {
            flag: '🇪🇺',
            pair: 'EUR / TJS',
            rate: '11.76',
          },
          {
            flag: '🇷🇺',
            pair: 'RUB / TJS',
            rate: '0.12',
          },
        ],
        tipIcon: '💡',
        tip: 'Carry some cash for remote routes; card payments are easier in Dushanbe and Khorog.',
      },
      contacts: {
        badge: 'Contacts',
        title: 'Plan the route with us',
        subtitle: 'Tell us where you want to go and we will help shape a calm, memorable Pamir journey.',
        travelPanelTitle: 'Travel desk',
        storePanelTitle: 'Store and culture',
        phoneLabel: 'Phone',
        emailLabel: 'Email',
        whatsappLabel: 'WhatsApp',
        addressLabel: 'Address',
        phone: '+992 93 000 00 00',
        storePhone: '+992 98 000 00 00',
        email: 'depamiritravel@gmail.com',
        storeEmail: 'badakhshanca@gmail.com',
        whatsappText: 'Message us on WhatsApp',
        address: 'Khorog, Tajikistan',
        socialsTitle: 'Social channels',
        instagram: 'Instagram',
        facebook: 'Facebook',
        youtube: 'YouTube',
        formTitle: 'Send a request',
        formName: 'Full name',
        formEmail: 'Email address',
        formMessage: 'Message',
        formNamePlaceholder: 'Your name',
        formEmailPlaceholder: 'you@example.com',
        formMessagePlaceholder: 'Dates, route ideas, group size',
        submit: 'Send message',
        submitted: 'Thank you. We will reply soon.',
      },
      footer: {
        copyright: '© 2026 De Pamiri Travel. All rights reserved.',
      },
      backToTop: {
        label: 'Back to top',
      },
    },
  },
  ru: {
    translation: {
      brand: {
        name: 'De Pamiri!',
        label: 'Travel',
        homeAria: 'Открыть главную De Pamiri Travel',
      },
      nav: {
        menu: 'Открыть меню',
        close: 'Закрыть меню',
        language: 'Сменить язык',
        languages: {
          en: 'EN',
          ru: 'RU',
        },
        links: {
          home: 'Главная',
          store: 'Магазин',
          sights: 'Места',
          currency: 'Валюта',
          contacts: 'Контакты',
        },
      },
      hero: {
        badge: 'Откройте Таджикистан',
        title: 'Исследуйте достопримечательности Памира',
        subtitle: 'Место, где природа и приключения становятся единым целым',
        cta: 'Забронировать',
        imageAlt: 'Солнечная горная долина Таджикистана с рекой среди памирского пейзажа',
      },
      store: {
        badge: 'Культурный магазин',
        title: 'De Pamiri Handicraft: Душа Памира в каждом стежке',
        description:
          'Увезите с собой отобранные изделия памирского ремесла, горное гостеприимство и спокойную красоту традиций Таджикистана.',
        addressLabel: 'Адрес магазина',
        address: '📍 Э.Даврон 22, Центральный парк Хорога, ГБАО, Таджикистан',
        mapTitle: 'Карта расположения магазина De Pamiri Handicraft',
        galleryAlt: 'Слайд магазина De Pamiri Handicraft',
        gallerySlideLabel: 'Показать слайд галереи магазина',
        products: [
          {
            name: 'Памирские текстильные наборы',
            description: 'Мягкие узоры, вдохновленные горными домами и семейными праздниками.',
          },
          {
            name: 'Ручные сувениры',
            description: 'Небольшие памятные вещи от местных мастеров с региональными историями.',
          },
          {
            name: 'Традиционные аксессуары',
            description: 'Лаконичные изделия с цветом, фактурой и сильным чувством места.',
          },
          {
            name: 'Чай и горные подарки',
            description: 'Теплые подарки для тех, кто хочет увезти памирское гостеприимство с собой.',
          },
        ],
      },
      sights: {
        badge: 'Обязательно увидеть',
        title: 'Выберите свое приключение',
        cards: [
          {
            title: 'Памирский тракт',
            description: 'Легендарная высокогорная дорога через открытые долины и драматичные перевалы.',
          },
          {
            title: 'Озеро Яшилькуль',
            description: 'Спокойное альпийское озеро в минеральных оттенках и широкой горной тишине.',
          },
          {
            title: 'Ваханская долина',
            description: 'Древние крепости, горячие источники и просторные виды над рекой Пяндж.',
          },
          {
            title: 'Долина Джизев',
            description: 'Медленная деревенская прогулка к чистой воде, каменным тропам и зеленым террасам.',
          },
          {
            title: 'Река Пяндж',
            description: 'Живописный маршрут, где приграничные скалы встречают яркие изгибы реки.',
          },
          {
            title: 'Высокое плато Памира',
            description: 'Далекие горизонты, прозрачный свет и незабываемый масштаб Центральной Азии.',
          },
        ],
      },
      currency: {
        badge: 'Актуальные курсы',
        title: 'Текущие курсы валют',
        subtitle: 'Актуальные курсы, обновляемые ежедневно, для планирования поездки на Памир',
        rates: [
          {
            flag: '🇺🇸',
            pair: 'USD / TJS',
            rate: '10.95',
          },
          {
            flag: '🇪🇺',
            pair: 'EUR / TJS',
            rate: '11.76',
          },
          {
            flag: '🇷🇺',
            pair: 'RUB / TJS',
            rate: '0.12',
          },
        ],
        tipIcon: '💡',
        tip: 'Возьмите наличные для удаленных маршрутов; карты удобнее использовать в Душанбе и Хороге.',
      },
      contacts: {
        badge: 'Контакты',
        title: 'Спланируйте маршрут с нами',
        subtitle: 'Расскажите, куда хотите отправиться, и мы поможем собрать спокойное и запоминающееся путешествие по Памиру.',
        travelPanelTitle: 'Туристический отдел',
        storePanelTitle: 'Магазин и культура',
        phoneLabel: 'Телефон',
        emailLabel: 'Email',
        whatsappLabel: 'WhatsApp',
        addressLabel: 'Адрес',
        phone: '+992 93 000 00 00',
        storePhone: '+992 98 000 00 00',
        email: 'depamiritravel@gmail.com',
        storeEmail: 'badakhshanca@gmail.com',
        whatsappText: 'Написать в WhatsApp',
        address: 'Хорог, Таджикистан',
        socialsTitle: 'Социальные сети',
        instagram: 'Instagram',
        facebook: 'Facebook',
        youtube: 'YouTube',
        formTitle: 'Отправить запрос',
        formName: 'Полное имя',
        formEmail: 'Email',
        formMessage: 'Сообщение',
        formNamePlaceholder: 'Ваше имя',
        formEmailPlaceholder: 'you@example.com',
        formMessagePlaceholder: 'Даты, маршрут, размер группы',
        submit: 'Отправить сообщение',
        submitted: 'Спасибо. Мы скоро ответим.',
      },
      footer: {
        copyright: '© 2026 De Pamiri Travel. Все права защищены.',
      },
      backToTop: {
        label: 'Наверх',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('dePamiriLanguage') || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
