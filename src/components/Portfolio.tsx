"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "Commercial Tower MEP",
    titleAr: "أعمال ميكانيكا برج تجاري",
    category: "MEP",
    categoryAr: "ميكانيكا وكهرباء",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Villa Compound AMC",
    titleAr: "عقد صيانة مجمع فلل",
    category: "AMC",
    categoryAr: "عقود صيانة",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    title: "Warehouse HVAC Retrofit",
    titleAr: "تجديد تكييف مستودع",
    category: "HVAC",
    categoryAr: "تكييف",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
  },
  {
    title: "Office Fit-Out — West Bay",
    titleAr: "تشطيب مكاتب — الخليج الغربي",
    category: "Fit-Out",
    categoryAr: "تشطيبات",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    title: "Steel Fabrication — Ras Laffan",
    titleAr: "تصنيع معادن — رأس لفان",
    category: "Fabrication",
    categoryAr: "تصنيع",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
  },
  {
    title: "School Electrical Overhaul",
    titleAr: "تجديد كهرباء مدرسة",
    category: "Electrical",
    categoryAr: "كهرباء",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

interface PortfolioProps {
  lang: "en" | "ar";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="portfolio" style={{ background: "var(--jet)", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      <div className="geo-grid" />

      {/* Grid content — z-index 2 */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          style={{ textAlign: isAr ? "right" : "left", marginBottom: "3.5rem" }}
        >
          <span className="section-label" style={{ flexDirection: isAr ? "row-reverse" : "row" }}>
            {isAr ? "أعمالنا" : "Our Portfolio"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            {isAr ? "مشاريع مُسلَّمة بدقة" : "Projects Delivered with"}
            <br />
            <span className="text-gold-grad">{isAr ? "في كل أنحاء قطر" : "Precision Across Qatar"}</span>
          </h2>
          <span className="gold-divider" style={{ marginLeft: isAr ? "auto" : 0 }} />
        </motion.div>

        {/* 3-column image grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3px",
        }}>
          {projects.map((proj, i) => (
          <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="portfolio-card"
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.img}
                alt={proj.title}
                loading="lazy"
              />

              {/* Always-visible gradient overlay */}
              <div className="overlay" />

              {/* Always-visible card content pinned to bottom */}
              <div className="card-content" style={{ textAlign: isAr ? "right" : "left" }}>
                <span className="category-tag">
                  {isAr ? proj.categoryAr : proj.category}
                </span>
                <p className="card-title">
                  {isAr ? proj.titleAr : proj.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ textAlign: "center", marginTop: "3rem" }}
        >
          <p style={{ color: "var(--muted)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            {isAr ? "٢٠٠+ مشروع مكتمل في مختلف أنحاء قطر" : "200+ completed projects across Qatar's commercial and residential sectors"}
          </p>
          <button className="btn-ghost">
            {isAr ? "عرض جميع المشاريع" : "View All Projects"} →
          </button>
        </motion.div>
      </div>

      <style>{`
        /* ── Card container ── */
        .portfolio-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          height: 260px;
        }

        /* ── Image ── */
        .portfolio-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        /* ── Overlay — always visible, bottom-up gradient ── */
        .portfolio-card .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10,10,10,0.05) 0%,
            rgba(10,10,10,0.25) 40%,
            rgba(10,10,10,0.75) 75%,
            rgba(10,10,10,0.92) 100%
          );
          mix-blend-mode: multiply;
          opacity: 1;
          transition: opacity 0.4s ease;
        }

        /* ── Card content — always visible at bottom ── */
        .portfolio-card .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          transform: translateY(0);
          opacity: 1;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }

        /* ── Category tag ── */
        .portfolio-card .category-tag {
          display: inline-block;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #C9A84C;
          border: 0.5px solid rgba(201,168,76,0.5);
          padding: 2px 8px;
          border-radius: 20px;
          margin-bottom: 6px;
        }

        /* ── Card title ── */
        .portfolio-card .card-title {
          font-size: 14px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.4;
          margin: 0;
        }

        /* ── Hover: deepen overlay + zoom image + lift content ── */
        .portfolio-card:hover .overlay {
          background: linear-gradient(
            to bottom,
            rgba(10,10,10,0.10) 0%,
            rgba(10,10,10,0.35) 35%,
            rgba(10,10,10,0.85) 70%,
            rgba(10,10,10,0.97) 100%
          );
        }
        .portfolio-card:hover img {
          transform: scale(1.04);
        }
        .portfolio-card:hover .card-content {
          transform: translateY(-4px);
        }

        /* ── Mobile: single column ── */
        @media (max-width: 768px) {
          #portfolio .pf-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
