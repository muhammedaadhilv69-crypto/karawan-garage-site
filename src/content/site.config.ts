// Client-specific content for the Karawan Garage concept.
// Business details are based on publicly listed information and should be
// confirmed with the business before this concept is published.

import type { Locale } from "@/lib/i18n";

type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export const site = {
  // Replace this placeholder with the approved production domain before launch.
  url: "https://example.com",
  timezone: "Asia/Bahrain",

  // WhatsApp availability has not been confirmed. Keep this disabled for now.
  whatsapp: "",
  phone: "+973 1778 5665",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Karawan+Garage+Salmabad+Bahrain",
  instagram: "",

  colors: {
    primary: "#111820",
    accent: "#E9A23B",
    ink: "#17212B",
    paper: "#F5F3EE",
    mist: "#D9D8D1",
  },

  // No verified workshop photography is available in this concept yet.
  gallery: [],

  // Public listings agree on Saturday–Thursday and Friday closure, but differ
  // on the midday break and exact closing time. Avoid publishing exact hours.
  hours: [] as { day: Day; open: string | null; close: string | null }[],
};

export type Copy = {
  name: string;
  tagline: string;
  description: string;
  address: string;
  cta: string;
  call: string;
  instagram: string;
  whatsappMessage: string;
  switchLabel: string;
  mapsLabel: string;
  navigationLabel: string;
  hero: {
    eyebrow: string;
    since: string;
    craftLabel: string;
    craftHeadline: string;
    establishedLabel: string;
    heritageText: string;
  };
  eyebrows: {
    services: string;
    hours: string;
    contact: string;
  };
  footer: {
    locationLine: string;
    rightsReserved: string;
  };
  seo: {
    keywords: string[];
    structuredAddress: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
    };
  };
  sections: {
    services: string;
    gallery: string;
    testimonials: string;
    hours: string;
    hoursNote: string;
    findUs: string;
    contact: string;
    contactText: string;
  };
  status: { open: string; opensToday: string; closedToday: string; closedNow: string };
  time: { am: string; pm: string; to: string; closed: string };
  days: Record<Day, string>;
  services: { title: string; description: string; price: string }[];
  galleryAlts: string[];
  testimonials: { quote: string; name: string }[];
};

const en: Copy = {
  name: "Karawan Garage",
  tagline: "Bodywork, paint and modifications — serving Bahrain since 1959.",
  description:
    "Karawan Garage is a Bahrain automotive workshop established in 1959, offering general body denting and painting, vehicle modifications and fibreglass modifications in Salmabad.",
  address: "Workshop 4, Building D-378, Road 1205, Block 712, Salmabad, Bahrain",
  cta: "Call the workshop",
  call: "Call",
  instagram: "Instagram",
  whatsappMessage: "Hello Karawan Garage, I'd like to enquire about your services.",
  switchLabel: "العربية",
  mapsLabel: "Get directions",
  navigationLabel: "Main navigation",
  hero: {
    eyebrow: "Bahrain · Automotive specialists",
    since: "Since 1959.",
    craftLabel: "Workshop craft",
    craftHeadline: "Built on experience.",
    establishedLabel: "Established",
    heritageText: "A long-standing name in Bahrain automotive bodywork.",
  },
  eyebrows: {
    services: "What we do",
    hours: "Plan your visit",
    contact: "Get in touch",
  },
  footer: {
    locationLine: "Bahrain · Est. 1959",
    rightsReserved: "All rights reserved.",
  },
  seo: {
    keywords: [
      "Karawan Garage",
      "car garage Bahrain",
      "auto body repair Bahrain",
      "car denting Salmabad",
      "car painting Bahrain",
      "vehicle modifications Bahrain",
      "fibreglass modifications Bahrain",
    ],
    structuredAddress: {
      streetAddress: "Workshop 4, Building D-378, Road 1205, Block 712",
      addressLocality: "Salmabad",
      addressRegion: "Southern Governorate",
      addressCountry: "BH",
    },
  },
  sections: {
    services: "Workshop services",
    gallery: "Selected work",
    testimonials: "Customer feedback",
    hours: "Visiting information",
    hoursNote:
      "Listed business hours are Saturday to Thursday, with Friday closed. Timings may include a midday break and can change — please call the workshop to confirm before visiting.",
    findUs: "Find the workshop",
    contact: "Let's talk about your vehicle",
    contactText:
      "For bodywork, paint or modification enquiries, call the workshop directly. The team can advise on the next step and workshop availability.",
  },
  status: {
    open: "Open now, closes at {time}",
    opensToday: "Closed, opens today at {time}",
    closedToday: "Closed today",
    closedNow: "Closed for today",
  },
  time: { am: "AM", pm: "PM", to: "to", closed: "Closed" },
  days: {
    Sat: "Saturday",
    Sun: "Sunday",
    Mon: "Monday",
    Tue: "Tuesday",
    Wed: "Wednesday",
    Thu: "Thursday",
    Fri: "Friday",
  },
  services: [
    {
      title: "Body denting and repair",
      description: "General vehicle bodywork, denting and repair for a range of cars.",
      price: "",
    },
    {
      title: "Automotive painting",
      description:
        "Vehicle paintwork and refinishing. Spies Hecker products are referenced in the workshop's public business description.",
      price: "",
    },
    {
      title: "Vehicle modifications",
      description: "Automotive modification work tailored to the vehicle and requested finish.",
      price: "",
    },
    {
      title: "Fibreglass modifications",
      description: "Fibreglass modification work as listed in the workshop's service profile.",
      price: "",
    },
  ],
  galleryAlts: [],
  // No customer testimonials have been supplied or verified.
  testimonials: [],
};

const ar: Copy = {
  name: "كراج كروان",
  tagline: "أعمال الهيكل والطلاء والتعديلات — نخدم البحرين منذ عام 1959.",
  description:
    "كراج كروان ورشة سيارات في البحرين تأسست عام 1959، وتقدم أعمال سمكرة هياكل السيارات والطلاء وتعديلات المركبات والألياف الزجاجية في سلماباد.",
  address: "ورشة 4، مبنى D-378، طريق 1205، مجمع 712، سلماباد، البحرين",
  cta: "اتصل بالورشة",
  call: "اتصل",
  instagram: "إنستغرام",
  whatsappMessage: "مرحباً كراج كروان، أود الاستفسار عن خدماتكم.",
  switchLabel: "English",
  mapsLabel: "احصل على الاتجاهات",
  navigationLabel: "التنقل الرئيسي",
  hero: {
    eyebrow: "البحرين · متخصصون في صيانة السيارات",
    since: "منذ عام 1959.",
    craftLabel: "خبرة في أعمال الورش",
    craftHeadline: "خبرة تصنع الفرق.",
    establishedLabel: "تأسس عام",
    heritageText: "اسم عريق في مجال هياكل السيارات في البحرين.",
  },
  eyebrows: {
    services: "ماذا نقدم",
    hours: "خطط لزيارتك",
    contact: "تواصل معنا",
  },
  footer: {
    locationLine: "البحرين · تأسس عام 1959",
    rightsReserved: "جميع الحقوق محفوظة.",
  },
  seo: {
    keywords: [
      "كراج كروان",
      "كراج سيارات البحرين",
      "إصلاح هياكل السيارات البحرين",
      "سمكرة سيارات سلماباد",
      "صبغ سيارات البحرين",
      "تعديل سيارات البحرين",
      "تعديلات الألياف الزجاجية البحرين",
    ],
    structuredAddress: {
      streetAddress: "ورشة 4، مبنى D-378، طريق 1205، مجمع 712",
      addressLocality: "سلماباد",
      addressRegion: "المحافظة الجنوبية",
      addressCountry: "BH",
    },
  },
  sections: {
    services: "خدمات الورشة",
    gallery: "من أعمالنا",
    testimonials: "آراء العملاء",
    hours: "معلومات الزيارة",
    hoursNote:
      "تشير بيانات النشاط المنشورة إلى أن أيام العمل من السبت إلى الخميس، والجمعة مغلق. قد تتضمن المواعيد استراحة منتصف اليوم وقد تتغير؛ يرجى الاتصال بالورشة للتأكد قبل الزيارة.",
    findUs: "موقع الورشة",
    contact: "لنتحدث عن سيارتك",
    contactText:
      "للاستفسار عن أعمال الهيكل أو الطلاء أو التعديلات، يرجى الاتصال بالورشة مباشرة. يمكن للفريق إرشادك إلى الخطوة التالية ومواعيد استقبال المركبات.",
  },
  status: {
    open: "مفتوح الآن، يغلق في {time}",
    opensToday: "مغلق الآن، يفتح اليوم في {time}",
    closedToday: "مغلق اليوم",
    closedNow: "مغلق لهذا اليوم",
  },
  time: { am: "ص", pm: "م", to: "إلى", closed: "مغلق" },
  days: {
    Sat: "السبت",
    Sun: "الأحد",
    Mon: "الاثنين",
    Tue: "الثلاثاء",
    Wed: "الأربعاء",
    Thu: "الخميس",
    Fri: "الجمعة",
  },
  services: [
    {
      title: "سمكرة وإصلاح الهيكل",
      description: "أعمال هياكل السيارات والسمكرة والإصلاح لمختلف أنواع المركبات.",
      price: "",
    },
    {
      title: "طلاء السيارات",
      description:
        "أعمال طلاء وتجديد المركبات. وتذكر معلومات الورشة المنشورة منتجات Spies Hecker ضمن وصف النشاط.",
      price: "",
    },
    {
      title: "تعديلات المركبات",
      description: "أعمال تعديل السيارات بما يتناسب مع المركبة والنتيجة المطلوبة.",
      price: "",
    },
    {
      title: "تعديلات الألياف الزجاجية",
      description: "أعمال تعديل الألياف الزجاجية كما وردت في ملف خدمات الورشة المنشور.",
      price: "",
    },
  ],
  galleryAlts: [],
  testimonials: [],
};

export const copy: Record<Locale, Copy> = { en, ar };

export const telLink = `tel:${site.phone.replace(/[^\\d+]/g, "")}`;
export const whatsappLink = (t: Copy) =>
  site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`
    : telLink;
