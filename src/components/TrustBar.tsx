"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TrustBarProps {
  lang: "en" | "ar";
}

// ── Stats strip — static, always visible ──────────────────────────────────
const STATS = [
  { num: "5+",   label: "Years in Qatar",       labelAr: "سنوات في قطر" },
  { num: "200+", label: "Projects Completed",   labelAr: "مشاريع منجزة" },
  { num: "50+",  label: "Active Clients",       labelAr: "عملاء نشطون" },
  { num: "24/7", label: "Emergency Response",   labelAr: "استجابة طوارئ" },
];

// ── Marquee track — scrolling trust signals ───────────────────────────────
const MARQUEE_ITEMS = [
  { dot: true,  label: "AMC Specialists",              labelAr: "متخصصو عقود الصيانة" },
  { dot: true,  label: "MEP Certified",                labelAr: "معتمدون في الميكانيكا والكهرباء" },
  { dot: true,  label: "Doha-Based Team",              labelAr: "فريق مقره الدوحة" },
  { dot: true,  label: "HVAC Experts",                 labelAr: "خبراء أنظمة التكييف" },
  { dot: true,  label: "Qatar Vision 2030 Aligned",    labelAr: "متوافق مع رؤية قطر ٢٠٣٠" },
  { dot: true,  label: "Civil Defence Compliant",      labelAr: "متوافق مع الدفاع المدني" },
  { dot: true,  label: "Licensed & Insured",           labelAr: "مرخّص ومؤمَّن" },
  { dot: true,  label: "Steel Fabrication Specialists",labelAr: "متخصصو تصنيع المعادن" },
];

export default function TrustBar({ lang }: TrustBarProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      style={{ background: "var(--charcoal)", position: "relative" }}
    >
      {/* ── STATS STRIP — static flex row ─────────────────────────────────
          Completely separate from the marquee — never nested together.
          border-bottom creates the visual divider between the two zones.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="stats-strip">
        {STATS.map((s) => (
          <div key={s.num} className="stats-item">
            <span className="stats-num">{s.num}</span>
            <span className="stats-label">{isAr ? s.labelAr : s.label}</span>
          </div>
        ))}
      </div>

      {/* ── MARQUEE — scrolling trust signals ─────────────────────────────
          Completely separate from the stats strip above.
          Uses CSS animation `marquee` on a max-content track duplicated once.
      ─────────────────────────────────────────────────────────────────── */}
      <div className="marquee-wrap" aria-hidden="true">
        {/* Gradient fade masks */}
        <div className="marquee-fade marquee-fade--left" />
        <div className="marquee-fade marquee-fade--right" />

        {/* Scrolling track — duplicated once for seamless loop */}
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {isAr ? item.labelAr : item.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── Scoped styles ──────────────────────────────────────────────── */}
      <style>{`
        /* Stats strip */
        .stats-strip {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: nowrap;
          padding: 16px 24px;
          border-bottom: 0.5px solid rgba(201,168,76,0.2);
        }
        .stats-item {
          display: flex;
          align-items: baseline;
          gap: 0.45rem;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .stats-num {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1;
          background: linear-gradient(135deg, #C9A84C 0%, #E0B96A 50%, #C9A84C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stats-label {
          font-size: 0.78rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        /* Marquee wrapper — separate block below stats strip */
        .marquee-wrap {
          position: relative;
          overflow: hidden;
          width: 100%;
          border-top: 0.5px solid rgba(201,168,76,0.15);
          padding: 12px 0;
        }

        /* Gradient fade masks */
        .marquee-fade {
          position: absolute;
          top: 0; bottom: 0;
          width: 100px;
          pointer-events: none;
          z-index: 2;
        }
        .marquee-fade--left  { left: 0;  background: linear-gradient(to right, var(--charcoal), transparent); }
        .marquee-fade--right { right: 0; background: linear-gradient(to left,  var(--charcoal), transparent); }

        /* Scrolling track — max-content width, animated */
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 3rem;
          animation: marqueeScroll 28s linear infinite;
          /* Pause on hover for accessibility */
        }
        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        /* Single marquee item */
        .marquee-item {
          display: flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          letter-spacing: 0.06em;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .marquee-dot {
          width: 5px;
          height: 5px;
          background: #C9A84C;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* Marquee keyframe — translateX(-50%) scrolls exactly one copy width */
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .stats-strip {
            flex-wrap: wrap;
            gap: 0.5rem 1rem;
          }
          .stats-num  { font-size: 1.1rem; }
          .stats-label { font-size: 0.68rem; }
          .marquee-track { animation-duration: 18s; }
          .marquee-item  { font-size: 0.72rem; }
        }
      `}</style>
    </motion.section>
  );
}
