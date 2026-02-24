import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";
import { categoryLabels } from "@/data/caseStudies";

interface Props {
  study: CaseStudy;
  index?: number;
}

const CaseStudyCard = ({ study, index = 0 }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link
      to={`/cases/${study.id}`}
      className="group block glass-card overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      <div
        className="h-48 w-full flex items-end p-6"
        style={{ background: study.coverColor }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-medium text-foreground">
          {categoryLabels[study.category]}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-snug">
          {study.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{study.client}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.results.slice(0, 2).map((r) => (
            <span key={r.label} className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
              {r.label}: {r.value}
            </span>
          ))}
        </div>
        <div className="flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
          View case study <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  </motion.div>
);

export default CaseStudyCard;
