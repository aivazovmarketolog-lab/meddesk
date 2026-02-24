import { useState } from "react";
import { motion } from "framer-motion";
import { caseStudies, categoryLabels, type CaseStudyCategory } from "@/data/caseStudies";
import CaseStudyCard from "@/components/CaseStudyCard";

const allCategories: CaseStudyCategory[] = [
  "medical", "restaurants", "shopping", "transport", "bloggers", "electronics", "flowers",
];

const CaseStudiesPage = () => {
  const [active, setActive] = useState<CaseStudyCategory | "all">("all");
  const filtered = active === "all" ? caseStudies : caseStudies.filter((c) => c.category === active);

  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Кейсы</h1>
          <p className="text-muted-foreground text-lg max-w-xl">
            Посмотрите, как мы помогаем бизнесам в разных нишах получать измеримый рост благодаря стратегическому SMM.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setActive("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === "all" ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
          >
            Все ({caseStudies.length})
          </button>
          {allCategories.map((c) => {
            const count = caseStudies.filter((s) => s.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === c ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {categoryLabels[c]} ({count})
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            В этой категории кейсы пока не найдены.
          </div>
        )}
      </section>
    </main>
  );
};

export default CaseStudiesPage;
