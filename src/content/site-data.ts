export type ProjectPlatform = "youtube" | "instagram";

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  platform: ProjectPlatform;
  category: string;
  featured?: boolean;
};

export const siteConfig = {
  name: "APVIDEO",
  title: "Видеограф и видеомонтажёр",
  description:
    "Коммерческие ролики, reels, цвет и визуальные истории с дорогой подачей.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  email: process.env.CONTACT_EMAIL || "pashkadrone@gmail.com",
  instagram: "https://www.instagram.com/pas_hochek/",
  telegram: "https://t.me/PASHKADRONE",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
};

export const categories = [
  "Коммерция",
  "Reels",
  "Цветокоррекция",
  "Музыкальные видео",
  "Моушн-дизайн"
] as const;

export const projects: ProjectItem[] = [
  {
    id: "spec-reel-2026",
    title: "Spec Reel 2026",
    description:
      "Динамичный короткий монтаж с премиальным ритмом, контрастной картинкой и акцентом на дорогую визуальную подачу.",
    thumbnail: "https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
    category: "Reels",
    featured: true
  },
  {
    id: "midnight-commercial",
    title: "Midnight Commercial",
    description:
      "Короткий коммерческий ролик с акцентом на фактуру, ритм продукта и атмосферу ночной luxury-съёмки.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.instagram.com/reel/C4kB7sYI-example/",
    platform: "instagram",
    category: "Коммерция",
    featured: true
  },
  {
    id: "Эмбрио",
    title: "Реклама",
    description:
      "Реклама репродуционного центра Эмбрио",
    thumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.instagram.com/reel/DMxRNdUtRRI/",
    platform: "instagram",
    category: "Коммерция"
  },
  {
    id: "tempo-cut",
    title: "Tempo Cut",
    description:
      "Музыкальный монтаж, построенный на точном темпе, резких акцентах и чистой визуальной эскалации.",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
    category: "Музыкальные видео"
  },
  {
    id: "launch-sequence",
    title: "Launch Sequence",
    description:
      "Имиджевый запуск продукта с чистой графикой, выверенными акцентами и сдержанным моушн-дизайном.",
    thumbnail:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
    category: "Моушн-дизайн"
  }
];

export const services = [
  "Видеомонтаж",
  "Цветокоррекция",
  "Reels и короткие форматы",
  "Коммерческие ролики",
  "Моушн-дизайн"
];
