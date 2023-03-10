import { Card } from './../features/cards/cardsSlice';
export const meals: Card[] = [
  {
    id: "123",
    category: "breakfast",
    name: "בוקר ליחיד",
    description:
      "ביצים לבחירה, סלט אישי קצוץ / עלים, לחם לבחירה: פוקאצ'ה / לחם דגנים / לחם לבן, בליווי סט מטבלים: פטה בשמן זית וזעתר, גבינת שמנת, סלט טונה במיונז, טחינה, ממרח חצילים שרופים, סלט אבוקדו, ריבת הבית, חמאה ומיני מוזלי, מוגש עם שתייה קלה וחמה.",
    price: 62,
    vegan: false,
    vegetarian: false,
  },
  {
    id: "456",
    category: "breakfast",
    name: "בוקר זוגי",
    description:
      "ביצים לבחירה, סלט אישי קצוץ / עלים, לחם לבחירה: פוקאצ'ה / לחם דגנים / לחם לבן בליווי סט מטבלים: פטה בשמן זית וזעתר, גבינת שמנת, סלט טונה במיונז, טחינה, ממרח חצילים שרופים, לאבנה עם שמן זית וזעתר, סלט אבוקדו, פסטו, ריבת הבית, חמאה ומיני מוזלי, מוגש עם שתייה קלה וחמה לכל סועד.",
    price: 115,
    vegan: false,
    vegetarian: true,
  },
];