export interface Founder {
  id: string;
  name: string;
  role: string;
  story: string;
  expertise: string[];
  socials: { platform: string; url: string }[];
  avatarGradient: string;
}

export const founders: Founder[] = [
  {
    id: "alex",
    name: "Alex Rivera",
    role: "Сооснователь и креативный директор",
    story: "Более 10 лет в digital‑маркетинге: Алекс вела кампании и для крупных брендов, и для стартапов. Ее сильная сторона — превращать сложные истории бренда в контент, который останавливает скролл и приносит бизнес‑результат.",
    expertise: [
      "Креативная стратегия и идентичность бренда",
      "Продакшн контента и арт‑дирекшн",
      "Инфлюенс‑ и партнерский маркетинг",
      "Тренды соцсетей и инновации",
    ],
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Twitter", url: "#" },
    ],
    avatarGradient: "linear-gradient(135deg, hsl(15, 55%, 60%), hsl(340, 50%, 70%))",
  },
  {
    id: "jordan",
    name: "Jordan Kim",
    role: "Сооснователь и стратег по росту",
    story: "Джордан сочетает мышление на основе данных и креатив. После масштабирования трех e‑commerce брендов до выручки $10M+ он соосновал MRKTO, чтобы помогать компаниям любого размера раскрывать потенциал SMM.",
    expertise: [
      "Перформанс‑маркетинг и оптимизация ROAS",
      "Аналитика и атрибуция",
      "Платная реклама (Meta, TikTok, LinkedIn)",
      "Автоматизация маркетинга и интеграции CRM",
    ],
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" },
      { platform: "Instagram", url: "#" },
    ],
    avatarGradient: "linear-gradient(135deg, hsl(200, 40%, 60%), hsl(230, 50%, 65%))",
  },
];
