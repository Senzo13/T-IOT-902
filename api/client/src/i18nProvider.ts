import polyglotI18nProvider from "ra-i18n-polyglot";
import englishMessages from "./i18n/en";
import frenchMessages from "./i18n/fr"; // Import French messages synchronously

// Define the messages object with synchronous imports
const messages: { [key: string]: any } = {
  fr: frenchMessages, // Use the synchronously imported French messages
  en: englishMessages,
};

// Define the i18nProvider with synchronous message loading
const i18nProvider = polyglotI18nProvider(
  (locale: string) => messages[locale] || englishMessages,
  "fr", // Set the default locale to French
  [
    { locale: "en", name: "English" },
    { locale: "fr", name: "Français" },
  ]
);

export default i18nProvider;
