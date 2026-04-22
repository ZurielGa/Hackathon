import { I18n } from 'i18n-js';

const i18n = new I18n({
  en: {
    welcome: "Welcome to GastroLens 🌮",
    subtitle: "Answer questions to get recommendations",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    desserts: "Desserts",   
    snacks: "Snacks",   
    language: "Language"
  },
  es: {
    welcome: "Bienvenido a GastroLens 🌮",
    subtitle: "Responde preguntas para obtener recomendaciones",
    breakfast: "Desayuno",
    lunch: "Comida",
    dinner: "Cena",
    desserts: "Postres",
    snacks: "Antojitos",
    language: "Idioma"
  }
});

i18n.locale = 'es';
i18n.enableFallback = true; 
export default i18n;