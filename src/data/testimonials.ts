export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Sarah Chen",
    role: "Директор",
    company: "Aurora Medical Center",
    text: "MRKTO полностью пересобрали нашу стратегию привлечения пациентов. Уже через несколько месяцев онлайн‑записей стало в 3 раза больше. Их экспертиза в медицинском маркетинге — сильнейшая.",
    rating: 5,
  },
  {
    id: "2",
    name: "Marco Bellini",
    role: "Владелец",
    company: "Sakura Bistro",
    text: "С нуля до полной посадки на выходных. Команда отлично почувствовала бренд и сделала контент, который действительно «зашел» аудитории. Результаты — супер.",
    rating: 5,
  },
  {
    id: "3",
    name: "Lisa Park",
    role: "Директор по маркетингу",
    company: "Grand Plaza Mall",
    text: "Управлять брендами 50+ арендаторов сложно, но MRKTO выстроили процесс без боли. Трафик вырос на 65%, а удовлетворенность арендаторов — на максимуме.",
    rating: 5,
  },
  {
    id: "4",
    name: "James Wright",
    role: "CEO",
    company: "SpeedLine Logistics",
    text: "B2B в соцсетях казался невозможным, пока мы не начали работать с MRKTO. Только через LinkedIn получили более 180 квалифицированных лидов.",
    rating: 5,
  },
];
