import { motion } from "framer-motion";
import { founders } from "@/data/founders";
import FounderCard from "@/components/FounderCard";

const About = () => (
  <main className="pt-24 pb-16">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">О MRKTO</h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-6">
          MRKTO основано в 2020 году из простой идеи: каждому бизнесу нужен доступ к сильному SMM, который дает измеримые результаты, а не «красивые цифры».
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Мы помогли более чем 50 компаниям в 7 нишах вырастить присутствие в соцсетях, получать качественные лиды и увеличивать выручку. Мы соединяем креативный сторителлинг и стратегию на основе данных — чтобы каждый вложенный рубль работал эффективнее.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-3xl font-bold mb-10">Основатели</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {founders.map((f, i) => (
            <FounderCard key={f.id} founder={f} index={i} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 max-w-3xl"
      >
        <h2 className="font-display text-3xl font-bold mb-8">Наши ценности</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Результат прежде всего", desc: "Мы оцениваем успех по тому, что важно бизнесу: заявки, продажи и прибыль — а не только лайки и подписки." },
            { title: "Полная прозрачность", desc: "Понятная отчетность, честная коммуникация, никаких скрытых платежей." },
            { title: "Креатив на уровне", desc: "Каждая единица контента показывает ваш бренд с лучшей стороны." },
            { title: "Постоянный рост", desc: "Мы постоянно учимся, тестируем гипотезы и оптимизируем кампании ради лучшего результата." },
          ].map((v) => (
            <div key={v.title} className="glass-card p-6">
              <h3 className="font-semibold mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </main>
);

export default About;
