import { AppContent } from './types';
import { 
  Waves, Users, Lightbulb, Zap, 
  Sun, BookOpen, Film, Video, Feather, Gem, Infinity,
  Facebook, Instagram, MessageCircle
} from 'lucide-react';
import React from 'react';

export const WHATSAPP_LINK = "https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc";

// Icon mapping helper
export const ICON_MAP: Record<string, any> = {
  Waves, Users, Lightbulb, Zap, 
  Sun, BookOpen, Film, Video, Feather, Gem, Infinity,
  Facebook, Instagram, MessageCircle
};

export const CONTENT: AppContent = {
  hero: {
    badge: "מרחבי התקשור הדיגיטליים",
    title: "תקשור היא לא יכולת על טבעית",
    subtitle: "היא מיומנות",
    description: "הצטרפי למסע של 9 מפגשים מעשיים.\nלגלות איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.",
    cta: "אני רוצה להצטרף למפגש הראשון במתנה",
    features: [
      { icon: "Star", text: "תרגול מעשי" },
      { icon: "Star", text: "9 מפגשים" },
      { icon: "Star", text: "ליווי צמוד" }
    ]
  },
  journey: {
    title: "איך זה עובד?",
    description: [
      "המסע כולל 9 מפגשים. בכל מפגש מתקיים תרגול מעשי. שוב ושוב.",
      "ההתקדמות במרחב מתרחשת דרך ניסיון חי."
    ],
    items: [
      {
        id: "j1",
        step: "01",
        title: "גלי מוח איטיים",
        text: "בכל מפגש את תכנסי למצב תודעתי עמוק של גלי מוח איטיים, המאפשרים גישה לתדרים גבוהים יותר.",
        icon: React.createElement(Waves)
      },
      {
        id: "j2",
        step: "02",
        title: "תרגול עם שותפה",
        text: "תקבלי מסרים, תעבירי מסרים ותלמדי לזהות אנרגיות בזמן אמת דרך עבודה מעשית בזוגות.",
        icon: React.createElement(Users)
      },
      {
        id: "j3",
        step: "03",
        title: "ידיעה פנימית",
        text: "תגלי איך האינטואיציה והידיעה הפנימית הופכות להיות ברורות, יציבות ופשוטות ליישום.",
        icon: React.createElement(Lightbulb)
      },
      {
        id: "j4",
        step: "04",
        title: "להרגיש שזה אמיתי",
        text: "אין צורך 'להאמין' - ברגע שזה קורה, את פשוט מרגישה את האמת בגוף ובנשמה.",
        icon: React.createElement(Zap)
      }
    ]
  },
  zoom: {
    title: "מרחבי התקשור הדיגיטליים",
    subtitle: "(ZOOM)",
    content: [
      "הקשבה אמיתית היא מיומנות. שפה של הנשמה.",
      "וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.",
      "מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים.",
      "זהו מרחב שנבנה כדי לאפשר לך להתקדם בלי קשר לאיפה את נמצאת בעולם."
    ],
    bullets: [
      "עם קבוצה תומכת, עם הדרכה עדינה",
      "עם תרגול שמייצר שינוי אמיתי. בכל מפגש יש תרגול מעשי. פנים אל פנים בזום",
      "רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני"
    ],
    quote: "כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן."
  },
  audience: {
    title: "למי המסע הזה מתאים?",
    items: [
      "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
      "למי שמטפלת ורוצה להרחיב את סל הכלים שלה ולשפר את יכולת הטיפול שלה",
      "למי שרוצה להיות מתקשרת ולקבל אנשים לתקשורים אישים",
      "למי ששואלת שאלות פנימיות ומחפשת בהירות",
      "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
      "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו"
    ]
  },
  bonuses: {
    title: "בונוסים למסלול המלא",
    subtitle: "של הכשרת תקשור",
    description: ["מעטפת שלמה לתמיכה בהתפתחות הרוחנית שלך"],
    items: [
      { id: "b1", text: "קורס דיגיטלי מוקלט - 12 הדרכים - קורס תקשור", icon: React.createElement(Sun) },
      { id: "b2", text: "קורס דיגיטלי - קריאה בקלפים", icon: React.createElement(BookOpen) },
      { id: "b3", text: "הקלטות של מאחורי הקלעים של קריאה בקלפים", icon: React.createElement(Film) },
      { id: "b4", text: "הקלטות של כל שיעור", icon: React.createElement(Video) },
      { id: "b5", text: "קורס של הכשרת התקשור - תוכן שמתעדכן", icon: React.createElement(Feather) },
      { id: "b6", text: "פידבאק ומשוב עם כלים אישי בלייב לגבי היכולת תקשור שלך", icon: React.createElement(Gem) },
      { id: "b7", text: "בכל מפגש את מקבלת תקשור ונותנת תקשור", icon: React.createElement(Infinity) },
      { id: "b8", text: "ליווי בקבוצת וואצפ קבוצתית לאורך כל המסע", icon: React.createElement(Users) }
    ]
  },
  footer: {
    rights: "© כל הזכויות שמורות - מסע התקשור",
    madeWith: "נבנה באהבה",
    social: [
      { icon: React.createElement(Facebook), link: "#", label: "Facebook" },
      { icon: React.createElement(Instagram), link: "#", label: "Instagram" },
      { icon: React.createElement(MessageCircle), link: WHATSAPP_LINK, label: "WhatsApp" }
    ],
    legal: [
      { text: "מדיניות פרטיות", link: "#" },
      { text: "תנאי שימוש", link: "#" }
    ]
  }
};