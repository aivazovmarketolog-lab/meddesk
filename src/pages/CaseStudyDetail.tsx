import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, CheckCircle2 } from "lucide-react";
import { caseStudies, categoryLabels } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) {
    return (
      <main className="pt-24 pb-16 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Link to="/cases" className="text-primary font-medium">← Back to cases</Link>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Link to="/cases" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 text-sm">
          <ArrowLeft className="w-4 h-4" /> Назад ко всем кейсам
        </Link>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div
            className="w-full h-56 md:h-72 rounded-2xl mb-8 flex items-end p-8"
            style={{ background: study.coverColor }}
          >
            <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium">
              {categoryLabels[study.category]}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 leading-snug">{study.title}</h1>
          <p className="text-muted-foreground mb-8">{study.client}</p>

          {/* Результаты */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {study.results.map((r) => (
              <div key={r.label} className="glass-card p-5 text-center">
                <p className="text-2xl font-bold text-primary mb-1">{r.value}</p>
                <p className="text-xs text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Goal */}
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold mb-3">Goal</h3>
              <p className="text-muted-foreground text-sm">{study.goal}</p>
            </div>

            {/* Сроки */}
            <div className="glass-card p-6">
              <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Сроки
              </h3>
              <p className="text-muted-foreground text-sm">{study.timeline}</p>
            </div>
          </div>

          {/* Сложности */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-display text-lg font-semibold mb-4">Сложности</h3>
            <ul className="space-y-2">
              {study.challenges.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">•</span> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* What was done */}
          <div className="glass-card p-6 mb-8">
            <h3 className="font-display text-lg font-semibold mb-4">Что сделали</h3>
            <ul className="space-y-2">
              {study.whatWasDone.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /> {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Инструменты */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-semibold mb-4">Инструменты Used</h3>
            <div className="flex flex-wrap gap-2">
              {study.tools.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {study.testimonial && (
            <div className="glass-card-elevated p-8 text-center">
              <p className="font-display text-lg italic mb-2">"{study.testimonial}"</p>
              <p className="text-sm text-muted-foreground">— {study.client}</p>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
};

export default CaseStudyDetail;
