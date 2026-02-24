import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Send, MessageCircle } from "lucide-react";
import { industries, goals, tools, supportLevels, calculatePackage } from "@/data/services";

const steps = ["Ниша", "Цели", "Инструменты", "Поддержка", "Итог"];

const PackageBuilder = () => {
  const [step, setStep] = useState(0);
  const [selectedНиша, setSelectedНиша] = useState("");
  const [selectedЦели, setSelectedЦели] = useState<string[]>([]);
  const [selectedИнструменты, setSelectedИнструменты] = useState<string[]>([]);
  const [selectedПоддержка, setSelectedПоддержка] = useState("standard");

  const canДалее = () => {
    if (step === 0) return !!selectedНиша;
    if (step === 1) return selectedЦели.length > 0;
    if (step === 2) return selectedИнструменты.length > 0;
    return true;
  };

  const pkg = calculatePackage(selectedИнструменты, selectedПоддержка);

  const toggleGoal = (id: string) =>
    setSelectedЦели((prev) => prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]);

  const toggleTool = (id: string) =>
    setSelectedИнструменты((prev) => prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]);

  const sendToWhatsApp = () => {
    const industry = industries.find((i) => i.id === selectedНиша)?.label || "";
    const goalLabels = goals.filter((g) => selectedЦели.includes(g.id)).map((g) => g.label).join(", ");
    const toolLabels = pkg.tools.map((t) => t.label).join(", ");
    const msg = encodeURIComponent(
      `Здравствуйте! Хочу обсудить пакет:\n\nНиша: ${industry}\nЦели: ${goalLabels}\nИнструменты: ${toolLabels}\nПоддержка: ${pkg.support.label}\nБюджет: ${pkg.priceRange}/мес\nСроки: ${pkg.timeline}`
    );
    window.open(`https://wa.me/?text=${msg}`, "_blank");
  };

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Подбор пакета</h1>
          <p className="text-muted-foreground text-lg mb-10">
            Configure your perfect social media marketing package in a few steps.
          </p>
        </месtion.div>

        {/* Progress */}
        <div className="flex items-center gap-1 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-1 flex-1">
              <div className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-6">Step {step + 1} of 5 — {steps[step]}</p>

        <AnimatePresence mode="wait">
          {/* Step 0: Ниша */}
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold mb-6">Choose Your Ниша</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedНиша(ind.id)}
                    className={`glass-card p-5 text-left flex items-center gap-4 transition-all ${selectedНиша === ind.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-secondary"}`}
                  >
                    <span className="text-2xl">{ind.icon}</span>
                    <span className="font-medium text-sm">{ind.label}</span>
                  </button>
                ))}
              </div>
            </месtion.div>
          )}

          {/* Step 1: Цели */}
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold mb-6">Select Your Цели</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => toggleGoal(goal.id)}
                    className={`glass-card p-5 text-left transition-all ${selectedЦели.includes(goal.id) ? "ring-2 ring-primary bg-primary/5" : "hover:bg-secondary"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">{goal.label}</span>
                      {selectedЦели.includes(goal.id) && <Check className="w-4 h-4 text-primary" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{goal.description}</p>
                  </button>
                ))}
              </div>
            </месtion.div>
          )}

          {/* Step 2: Инструменты */}
          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl font-semibold mb-6">Choose Your Инструменты & Services</h2>
              <div className="space-y-2">
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => toggleTool(tool.id)}
                    className={`w-full glass-card p-4 text-left flex items-center justify-between transition-all ${selectedИнструменты.includes(tool.id) ? "ring-2 ring-primary bg-primary/5" : "hover:bg-secondary"}`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{tool.label}</span>
                        {selectedИнструменты.includes(tool.id) && <Check className="w-4 h-4 text-primary" />}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{tool.description}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary ml-4">${tool.price}/мес</span>
                  </button>
                ))}
              </div>
            </месtion.div>
          )}

          {/* Step 3: Поддержка */}
          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl font-semibold mb-6">Choose Поддержка Level</h2>
              <div className="space-y-3">
                {supportLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedПоддержка(level.id)}
                    className={`w-full glass-card p-6 text-left transition-all ${selectedПоддержка === level.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-secondary"}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{level.label}</h3>
                      <span className="text-sm text-muted-foreground">{level.multiplier}x base</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.features.map((f) => (
                        <span key={f} className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">{f}</span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </месtion.div>
          )}

          {/* Step 4: Итог */}
          {step === 4 && (
            <motion.div key="s4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="font-display text-2xl font-semibold mb-6">Your Package Итог</h2>
              <div className="glass-card-elevated p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Ниша</h4>
                  <p className="font-medium">{industries.find((i) => i.id === selectedНиша)?.label}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Цели</h4>
                  <div className="flex flex-wrap gap-2">
                    {goals.filter((g) => selectedЦели.includes(g.id)).map((g) => (
                      <span key={g.id} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{g.label}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Инструменты & Services ({pkg.tools.length})</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.tools.map((t) => (
                      <span key={t.id} className="px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium">{t.label}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Поддержка Level</h4>
                  <p className="font-medium">{pkg.support.label}</p>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground text-sm">Estimated Monthly Price</span>
                    <span className="font-display text-2xl font-bold text-primary">{pkg.priceRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Setup Timeline</span>
                    <span className="font-semibold">{pkg.timeline}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={sendToWhatsApp}
                    className="flex-1 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" /> Отправить в WhatsApp
                  </button>
                  <a
                    href="#"
                    className="flex-1 py-3.5 rounded-full border-2 border-foreground/20 font-semibold hover:bg-secondary transition-all flex items-center justify-center gap-2 text-foreground"
                  >
                    <Send className="w-4 h-4" /> Send to Telegram
                  </a>
                </div>
              </div>
            </месtion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-10">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Назад
          </button>
          {step < 4 && (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canДалее()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90 transition-all"
            >
              Далее <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </main>
  );
};

export default PackageBuilder;
