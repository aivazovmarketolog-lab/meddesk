import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const DOCS = {
  privacyPolicy: {
    title: "Политика обработки персональных данных",
    // /preview обычно открывает публичный просмотр Google Docs в iframe.
    url: "https://docs.google.com/document/d/1cySF6DRWYjKnzpa1QqsmKLqv8euSk_Sd8vCC5lk3QLw/preview",
  },
  consentPersonal: {
    title: "Согласие на обработку персональных данных",
    url: "https://docs.google.com/document/d/1S1ATxsbPZr6q2oyVD2wy2LfrzBkICcus2ohURQYE9x0/preview",
  },
  consentAds: {
    title: "Согласие на рекламную рассылку",
    url: "https://docs.google.com/document/d/1DFSUyfEL70Mm1bFExMzVwT5QClT217S2U7n1TFJENrM/preview",
  },
} as const;

type TelegramPayload = { name: string; email: string; phone: string; message: string };

async function sendToTelegram(payload: TelegramPayload) {
  const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

  if (!token || !chatId) {
    throw new Error(
      "Не настроены переменные окружения Telegram (VITE_TELEGRAM_BOT_TOKEN и VITE_TELEGRAM_CHAT_ID).",
    );
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `Имя: ${payload.name}`,
    `Email: ${payload.email}`,
    `Телефон: ${payload.phone || "—"}`,
    "",
    "Сообщение:",
    payload.message,
    "",
    `Страница: ${window.location.href}`,
    `Время: ${new Date().toLocaleString("ru-RU")}`,
  ].join("\n");

  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Telegram API error: ${res.status} ${res.statusText}${body ? ` — ${body}` : ""}`);
  }
}

const Contacts = () => {
  const [formData, setFormData] = useState<TelegramPayload>({ name: "", email: "", phone: "", message: "" });
  const [consentMain, setConsentMain] = useState(false);
  const [consentPolicy, setConsentPolicy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const [openDoc, setOpenDoc] = useState<null | keyof typeof DOCS>(null);
  const activeDoc = useMemo(() => (openDoc ? DOCS[openDoc] : null), [openDoc]);

  const contact = {
    phoneRaw: "89289892771",
    phoneE164: "+79289892771",
    email: "torog4567.miterin@yandex.ru",
    office: "Республика Дагестан г.Махачкала",
    whatsappUrl: "https://wa.me/79289892771",
    telegramUrl: "https://t.me/89289892771",
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Контакты</h1>
          <p className="text-muted-foreground text-lg max-w-xl">Готовы расти? Напишите нам — удобным способом ниже.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card-elevated p-8 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              setError(null);

              if (!consentMain || !consentPolicy) {
                setError("Подтвердите свое согласие с условиями");
                return;
              }

              try {
                setIsSending(true);
                await sendToTelegram(formData);
                setFormData({ name: "", email: "", phone: "", message: "" });
                setConsentMain(false);
                setConsentPolicy(false);
                setError(null);
                alert("Спасибо! Заявка отправлена.");
              } catch (err) {
                const message = err instanceof Error ? err.message : "Не удалось отправить заявку.";
                setError(message);
              } finally {
                setIsSending(false);
              }
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Имя</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                  placeholder="Ваше имя"
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
                  placeholder="example@domain.ru"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Телефон (необязательно)</label>
              <input
                type="tel"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm"
                placeholder="+7 928 989-27-71"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">Сообщение</label>
              <textarea
                required
                maxLength={1000}
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all text-sm resize-none"
                placeholder="Опишите задачу, сроки и желаемый результат..."
              />
            </div>

            {/* Consents */}
            <div className="space-y-3">
              <label className="flex items-start gap-3 text-sm leading-snug select-none">
                <input
                  type="checkbox"
                  checked={consentMain}
                  onChange={(e) => setConsentMain(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border"
                />
                <span>
                  Даю согласие на обработку персональных данных и согласие на рекламную рассылку ({" "}
                  <button
                    type="button"
                    onClick={() => setOpenDoc("consentPersonal")}
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    согласие на обработку персональных данных
                  </button>
                  {" "}и{" "}
                  <button
                    type="button"
                    onClick={() => setOpenDoc("consentAds")}
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    согласие на рекламную рассылку
                  </button>
                  ).
                </span>
              </label>

              <label className="flex items-start gap-3 text-sm leading-snug select-none">
                <input
                  type="checkbox"
                  checked={consentPolicy}
                  onChange={(e) => setConsentPolicy(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-border"
                />
                <span>
                  Ознакомлен с{" "}
                  <button
                    type="button"
                    onClick={() => setOpenDoc("privacyPolicy")}
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Политикой обработки персональных данных
                  </button>
                  .
                </span>
              </label>
            </div>

            {error ? <p className="text-sm text-destructive">{error}</p> : null}

            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            >
              <Send className="w-4 h-4" /> {isSending ? "Отправляем..." : "Отправить"}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Почта</h3>
                <a href={`mailto:${contact.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Телефон</h3>
                <a href={`tel:${contact.phoneE164}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {contact.phoneRaw}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Офис</h3>
                <p className="text-sm text-muted-foreground">{contact.office}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href={contact.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors"
              >
                <Send className="w-4 h-4" /> Телеграм
              </a>
            </div>

            {/* Map placeholder */}
            <div className="glass-card overflow-hidden h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm">Карта</p>
                <p className="text-xs">Замените блок на iframe Google Maps</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Documents modal */}
      <Dialog open={openDoc !== null} onOpenChange={(v) => !v && setOpenDoc(null)}>
        <DialogContent className="max-w-5xl h-[80vh]">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between gap-3 pr-8">
              <span>{activeDoc?.title ?? "Документ"}</span>
              {activeDoc?.url ? (
                <a
                  href={activeDoc.url.replace("/preview", "/edit")}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm inline-flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  Открыть в новой вкладке <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </DialogTitle>
          </DialogHeader>

          {activeDoc?.url ? (
            <div className="w-full h-[calc(80vh-88px)] rounded-md overflow-hidden border">
              <iframe title={activeDoc.title} src={activeDoc.url} className="w-full h-full" />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Contacts;
