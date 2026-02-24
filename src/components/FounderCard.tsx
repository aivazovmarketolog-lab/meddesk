import { Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import type { Founder } from "@/data/founders";

const iconMap: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Twitter: Twitter,
};

const FounderCard = ({ founder, index = 0 }: { founder: Founder; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="glass-card-elevated p-8"
  >
    <div
      className="w-24 h-24 rounded-full mb-6 flex items-center justify-center text-3xl font-display font-bold text-primary-foreground"
      style={{ background: founder.avatarGradient }}
    >
      {founder.name.split(" ").map((n) => n[0]).join("")}
    </div>
    <h3 className="font-display text-xl font-semibold mb-1">{founder.name}</h3>
    <p className="text-sm text-primary font-medium mb-4">{founder.role}</p>
    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{founder.story}</p>
    <div className="mb-6">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Expertise</h4>
      <ul className="space-y-1.5">
        {founder.expertise.map((e) => (
          <li key={e} className="text-sm text-foreground flex items-start gap-2">
            <span className="text-primary mt-0.5">•</span> {e}
          </li>
        ))}
      </ul>
    </div>
    <div className="flex gap-3">
      {founder.socials.map((s) => {
        const Icon = iconMap[s.platform] || Linkedin;
        return (
          <a
            key={s.platform}
            href={s.url}
            className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            aria-label={s.platform}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  </motion.div>
);

export default FounderCard;
