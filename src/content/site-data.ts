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
  title: "Видеограф & Монтажер",
  description:
    "Premium cinematic portfolio for modern videography, editing, color, and social-first campaigns.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
  email: process.env.CONTACT_EMAIL || "pashkadrone@gmail.com",
  instagram: "https://www.instagram.com/pas_hochek/",
  telegram: "https://t.me/PASHKADRONE",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || ""
};

export const categories = [
  "Commercials",
  "Reels",
  "Color Grading",
  "Music Video",
  "Motion Design"
] as const;

export const projects: ProjectItem[] = [
  {
    id: "spec-reel-2026",
    title: "Spec Reel 2026",
    description:
      "Fast social-first edit with premium pacing, bold contrast, and a glossy luxury finish.",
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
      "Short brand film focused on texture, product rhythm, and upscale nighttime atmosphere.",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.instagram.com/reel/C4kB7sYI-example/",
    platform: "instagram",
    category: "Commercials",
    featured: true
  },
  {
    id: "fashion-contrast",
    title: "Fashion Contrast",
    description:
      "Color-led fashion reel with tight cuts, sculpted blacks, and premium movement.",
    thumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.instagram.com/reel/C4kB7sYI-fashion/",
    platform: "instagram",
    category: "Color Grading"
  },
  {
    id: "tempo-cut",
    title: "Tempo Cut",
    description:
      "Music-driven edit designed around punchy transitions and clean visual escalation.",
    thumbnail:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
    category: "Music Video"
  },
  {
    id: "launch-sequence",
    title: "Launch Sequence",
    description:
      "Product launch piece with sleek text beats and restrained motion design accents.",
    thumbnail:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    platform: "youtube",
    category: "Motion Design"
  }
];

export const services = [
  "Video Editing",
  "Color Grading",
  "Reels & Social Cuts",
  "Commercial Campaigns",
  "Motion Design"
];

export const testimonials = [
  {
    quote:
      "He makes branded edits feel cinematic without losing performance focus.",
    author: "Mila V., Creative Producer"
  },
  {
    quote:
      "Fast turnaround, exceptional pacing, and tasteful color every single time.",
    author: "Anton K., Founder"
  },
  {
    quote:
      "The final reel looked expensive, sharp, and immediately publish-ready.",
    author: "Elena R., Marketing Lead"
  }
];
