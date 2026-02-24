/**
 * EDITABLE: Case studies data.
 * Founders can add new case studies by copying an existing entry and modifying the fields.
 */

export type CaseStudyCategory =
  | "medical"
  | "restaurants"
  | "shopping"
  | "transport"
  | "bloggers"
  | "electronics"
  | "flowers";

export const categoryLabels: Record<CaseStudyCategory, string> = {
  medical: "Медицинские центры и врачи",
  restaurants: "Рестораны и кафе",
  shopping: "Торговые центры",
  transport: "Транспортные компании",
  bloggers: "Блогеры",
  electronics: "Магазины электроники",
  flowers: "Цветочные магазины",
};

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: CaseStudyCategory;
  coverColor: string; // gradient for placeholder
  goal: string;
  challenges: string[];
  whatWasDone: string[];
  tools: string[];
  timeline: string;
  results: { label: string; value: string }[];
  testimonial?: string;
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "medcenter-tselitel",
    title: "Увеличение прибыли из Instagram с 300 000 до 5 000 000 за 3 месяца",
    client: "Медицинский центр «Целитель»",
    category: "medical",
    // Можно заменить на любую картинку в /public и указать здесь: url('имя-файла') center/cover no-repeat
    coverColor: "url('/meddesk/case-tselitel.png') center/cover no-repeat",
    goal: "Увеличение записей с Instagram на 200% в течение 6 месяцев",
    challenges: [
      "Слабое присутствие в социальных сетях на конкурентном рынке",
      "Слабый контент, не привлекающий внимание",
      "Строгие правила рекламы в сфере здравоохранения",
    ],
    whatWasDone: [
      "Построена контент-стратегия вокруг опыта врачей и историй пациентов",
      "Запущены целевые рекламные кампании в Instagram и Facebook",
      "Интегрирован CTA онлайн-бронирования в каждом посте",
      "Созданы образовательные ролики и карусели",
      "Проработан визуал и подача роликов",
    ],
    tools: ["Реклама в Instagram", "Реклама в блогеры", "Контент-стратегия", "Аналитика"],
    timeline: "Октябрь 2018 — Июнь 2021 (2 года и 9 месяцев)",
    results: [
      { label: "Увеличение записей", value: "+566,67%" },
      { label: "Рост подписчиков", value: "+18 900" },
      { label: "Стоимость за лид", value: "-56%" },
      { label: "Уровень вовлеченности", value: "4,3%" },
    ],
    testimonial: "СЕКТА полностью изменила наше цифровое присутствие.",
    featured: true,
  },
  {
    id: "medcenter-profimed",
    title: "Увеличение клиентской базы на 30% за 4 месяца",
    client: "Многопрофильный медицинский центр «Профимед»",
    category: "medical",
    coverColor: "url('/meddesk/case-profimed.png') center/cover no-repeat",
    goal: "Привлечение живого трафика с Instagram в течение 6 месяцев",
    challenges: [
      "Слабое присутствие в социальных сетях на конкурентном рынке",
      "Отсутствие четкого позиционирования",
      "Строгие правила рекламы в сфере здравоохранения",
    ],
    whatWasDone: [
      "Построена контент-стратегия вокруг опыта врачей и историй пациентов",
      "Запущены целевые рекламные кампании у блогеров",
      "Проработан путь клиента и упрощено взаимодействие на каждом этапе",
      "Созданы образовательные ролики и карусели",
      "Проработан визуал и подача роликов",
      "Внедрены новые продукты (услуги) на рынок",
    ],
    tools: [
      "Улучшенный визуал",
      "Реклама у блогеров",
      "Контент-стратегия",
      "Аналитика",
      "Внедрение новых продуктов",
    ],
    timeline: "Декабрь 2021 — Март 2026 (4 года и 3 месяца)",
    results: [
      { label: "Увеличение записей", value: "+145,27%" },
      { label: "Рост подписчиков", value: "+5 900" },
      { label: "Стоимость за лид", value: "-16%" },
      { label: "Уровень вовлеченности", value: "2,3%" },
    ],
    featured: true,
  },
  {
    id: "medcenter-imc",
    title: "Увеличение вовлеченности на 120% за 2 месяца",
    client: "Медицинский центр для детей и взрослых IMC",
    category: "medical",
    coverColor: "url('/meddesk/case-imc.png') center/cover no-repeat",
    goal:
      "Получение лояльной аудитории через экспертный контент и улучшение уровня съемки в роликах в течение 3х месяцев",
    challenges: [
      "Слабый визуал в социальных сетях на конкурентном рынке",
      "Отсутствие четкого позиционирования",
      "Строгие правила рекламы в сфере здравоохранения",
      "Повышение лояльности целевой аудитории",
    ],
    whatWasDone: [
      "Построена контент-стратегия вокруг опыта врачей и историй пациентов",
      "Запуск целевой рекламы у блогеров",
      "Проработан путь клиента и облегчено его взаимодействие на каждом этапе",
      "Созданы образовательные ролики и карусели",
      "Проработан визуал и подача роликов",
    ],
    tools: [
      "Улучшенный визуал",
      "Реклама у блогеров",
      "Контент-стратегия",
      "Аналитика",
      "Внедрение новых визуальных решений",
    ],
    timeline: "Февраль 2024 — Апрель 2024",
    results: [
      { label: "Увеличение записей", value: "+75,5%" },
      { label: "Рост подписчиков", value: "+5 900" },
      { label: "Стоимость за лид", value: "-29%" },
      { label: "Уровень вовлеченности", value: "3,5%" },
    ],
    featured: true,
  },
  {
    id: "bookstore-arbat-media",
    title: "Увеличение вовлеченности на 300% за 2 месяца",
    client: "Книжный магазин Arbat media",
    category: "shopping",
    coverColor: "url('/meddesk/case-arbat-media.png') center/cover no-repeat",
    goal: "Оживить контент, заполнить рубриками, увеличение охвата, редизайн страницы",
    challenges: [
      "Слабый визуал в социальных сетях на конкурентном рынке",
      "Отсутствие четкого позиционирования",
      "Неинтересный контент, не живой",
      "Отсутствие работы с блогерами",
    ],
    whatWasDone: [
      "Полный редизайн: шрифтовые пары, цветокоррекция",
      "Запуск новых форматов контента (опросы, творческие ролики, развлекательно‑интеллектуальные ролики)",
      "Подключение блогеров и запуск коллабораций со смежными брендами",
      "Запуск конкурсов и акций",
    ],
    tools: [
      "Улучшенный визуал",
      "Реклама у блогеров",
      "Контент-стратегия",
      "Аналитика",
      "Внедрение новых визуальных решений",
      "Коллаборации",
    ],
    timeline: "Май 2024 — Октябрь 2025 (1 год 5 месяцев)",
    results: [
      { label: "Увеличение вовлеченности", value: "+93%" },
      { label: "Рост подписчиков", value: "+1 320" },
      { label: "Стоимость за лид", value: "-12%" },
      { label: "Уровень вовлеченности", value: "3,5%" },
    ],
    featured: false,
  },
  {
    id: "medcenter-dana-medical",
    title: "Увеличение вовлеченности на 300% за 2 месяца",
    client: "Медицинский центр Dana Medical",
    category: "medical",
    coverColor: "url('/meddesk/case-dana-medical.png') center/cover no-repeat",
    goal:
      "Оживить контент, заполнить рубриками, увеличить охват, сделать редизайн страницы и получить лояльную аудиторию через экспертный контент и улучшение уровня съемки в роликах в течение 3 месяцев",
    challenges: [
      "Слабый визуал в социальных сетях на конкурентном рынке",
      "Отсутствие четкого позиционирования",
      "Неинтересный контент, слабый экспертный контент",
      "Строгие правила рекламы в сфере здравоохранения",
    ],
    whatWasDone: [
      "Построена контент-стратегия вокруг опыта врачей и историй пациентов",
      "Запущены целевые рекламные размещения у блогеров",
      "Проработан путь клиента и упрощено взаимодействие на каждом этапе",
      "Созданы образовательные ролики и карусели",
      "Проработаны визуал и подача роликов",
      "Внедрение новых продуктов (услуг) на рынок",
    ],
    tools: [
      "Улучшенный визуал",
      "Реклама у блогеров",
      "Контент-стратегия",
      "Аналитика",
      "Внедрение новых продуктов",
    ],
    timeline: "Июнь 2025 — Август 2025 (3 месяца)",
    results: [
      { label: "Рост вовлеченности", value: "+130%" },
      { label: "Рост подписчиков", value: "+1 500" },
      { label: "Стоимость за лид", value: "-32%" },
      { label: "Уровень вовлеченности", value: "2,5%" },
    ],
    featured: false,
  },
  {
    id: "electronics-techzone",
    title: "Продажи из соцсетей для TechZone",
    client: "TechZone Electronics",
    category: "electronics",
    coverColor: "linear-gradient(135deg, hsl(200, 50%, 80%), hsl(180, 40%, 75%))",
    goal: "Увеличить онлайн‑продажи через соцсети",
    challenges: [
      "High competition from major retailers",
      "Low brand awareness online",
      "Complex product range",
    ],
    whatWasDone: [
      "Product showcase content strategy",
      "Shopping-enabled Instagram posts",
      "Review and unboxing video series",
      "Retargeting ad campaigns",
    ],
    tools: ["Instagram Shopping", "Facebook Ads", "YouTube", "Retargeting", "Product Photography"],
    timeline: "6 months",
    results: [
      { label: "Online Sales", value: "+220%" },
      { label: "ROAS", value: "5.8x" },
      { label: "Social Followers", value: "+15K" },
      { label: "Avg Order Value", value: "+35%" },
    ],
    featured: false,
  },
  {
    id: "flowers-bloom",
    title: "Сезонная кампания Bloom & Petals",
    client: "Bloom & Petals",
    category: "flowers",
    coverColor: "linear-gradient(135deg, hsl(340, 60%, 85%), hsl(30, 50%, 85%))",
    goal: "Максимизировать продажи и подписки в сезон праздников",
    challenges: [
      "Highly seasonal business",
      "Strong local competition",
      "Need for consistent year-round revenue",
    ],
    whatWasDone: [
      "Seasonal campaign strategy",
      "Subscription service launch on social",
      "UGC campaign with customer photos",
      "Pinterest strategy for wedding market",
    ],
    tools: ["Instagram", "Pinterest", "UGC Campaigns", "Email Marketing", "Seasonal Ads"],
    timeline: "4 months",
    results: [
      { label: "Holiday Sales", value: "+290%" },
      { label: "Subscriptions", value: "+150" },
      { label: "Instagram Growth", value: "+6.5K" },
      { label: "Repeat Customers", value: "+45%" },
    ],
    featured: true,
  },
];
