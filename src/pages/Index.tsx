import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Target, Zap, Users, Star, ChevronDown, Send, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { caseStudies, categoryLabels, type CaseStudyCategory } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { founders } from "@/data/founders";
import CaseStudyCard from "@/components/CaseStudyCard";
import FounderCard from "@/components/FounderCard";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" as const },
  transition: { duration: 0.6 },
};

const services = [
  { icon: Target, title: "Стратегия и планирование", desc: "Стратегии SMM на основе данных — под вашу нишу и цели." },
  { icon: Zap, title: "Создание контента", desc: "Визуалы, видео и тексты, которые цепляют и повышают вовлеченность." },
  { icon: BarChart3, title: "Платная реклама", desc: "Кампании с высоким ROAS в Meta, TikTok, LinkedIn и Google." },
  { icon: Users, title: "Комьюнити‑менеджмент", desc: "Формируем лояльное сообщество вокруг бренда — 24/7." },
];

const faqs = [
  { q: "Когда появятся результаты?", a: "У большинства клиентов заметные улучшения появляются через 4–8 недель. Сильный рост обычно проявляется на горизонте 3–6 месяцев по мере оптимизации стратегии." },
  { q: "С какими нишами вы работаете?", a: "Работаем с медициной, ресторанами, ритейлом, транспортом, блогерами, электроникой и цветочными магазинами — и при этом легко адаптируемся под любую нишу." },
  { q: "Как вы измеряете эффективность?", a: "Отслеживаем KPI, важные именно для вашего бизнеса: лиды, продажи, вовлеченность, рост аудитории, ROAS и дополнительные метрики под ваши цели." },
  { q: "Можно ли собрать индивидуальный пакет?", a: "Да. В “Подборе пакета” вы выбираете нишу, цели, инструменты и уровень поддержки — и получаете персональный план." },
  { q: "Какова минимальная длительность контракта?", a: "Мы рекомендуем минимальный срок контракта в 3 месяца для достижения значимых результатов, но для существующих клиентов доступны условия помесячной оплаты." },
];

const whyUs = [
  { title: "Экспертиза отрасли", desc: "Глубокие знания в более чем 7 вертикалях и проверенные практические методики." },
  { title: "Основано на данных", desc: "Каждое решение поддержано аналитикой, каждая кампания оптимизирована для ROI (окупаемость инвестиций)." },
  { title: "Прозрачная отчетность", desc: "Понятные панели и регулярные отчёты — вы всегда знаете, что происходит." },
  { title: "Выделенная команда", desc: "Опытный стратег и творческая команда, закреплённая за вашим проектом." },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory | "all">("all");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const featured = caseStudies.filter((c) => c.featured);
  const filteredCases = activeCategory === "all" ? featured : featured.filter((c) => c.category === activeCategory);
  const categories = Array.from(new Set(featured.map((c) => c.category)));

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Фоновое изображение" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/30" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Соцсети, которые <span className="text-gradient">дают рост</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Мы помогаем бизнесам во многих отраслях строить мощное присутствие в социальных сетях, что даёт реальные и измеримые результаты.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold transition-all hover:opacity-90"
              >
                Получить предложение <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/cases"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-foreground/20 text-foreground font-semibold hover:bg-secondary transition-all"
              >
                Посмотреть кейсы
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
          <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Чем мы занимаемся</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Полный спектр услуг SMM, разработанных для роста вашего бизнеса.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Избранные кейсы</h2>
              <p className="text-muted-foreground">Реальные результаты для реальных бизнесов.</p>
            </div>
            <Link to="/cases" className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all text-sm">
              Посмотреть все кейсы <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
            >
              Все
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {categoryLabels[c]}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCases.map((study, i) => (
              <CaseStudyCard key={study.id} study={study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Package Teaser */}
          <section className="py-24 gradient-warm">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Создайте идеальный пакет</h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Используйте наш интерактивный конфигуратор, чтобы выбрать отрасль, цели, инструменты и уровень поддержки — получите мгновенную оценку.
            </p>
            <Link
              to="/packages"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all"
            >
              Попробовать конструктор пакета <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Почему MRKTO</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Что отличает нас от других агентств.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Preview */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Знакомьтесь с основателями</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Люди, стоящие за успехом MRKTO.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f, i) => (
              <FounderCard key={f.id} founder={f} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/about" className="text-primary font-semibold flex items-center justify-center gap-1 hover:gap-2 transition-all text-sm">
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов MRKTO</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Вопросы и ответы</h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Давайте поговорим</h2>
              <p className="text-muted-foreground">Готовы расти? Оставьте сообщение или свяжитесь с нами напрямую.</p>
            </motion.div>
          <motion.form
            {...fadeUp}
            className="glass-card-elevated p-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              const msg = encodeURIComponent(`Hi! I'm ${formData.name}. ${formData.message}`);
              window.open(`https://wa.me/?text=${msg}`, "_blank");
            }}
          >
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input
                type="text"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
            <label className="block text-sm font-medium mb-1.5">Электронная почта</label>
              <input
                type="email"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
              <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Отправить сообщение
            </button>
          </motion.form>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
              <Send className="w-4 h-4" /> Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
