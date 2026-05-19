"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "AZMAT QATAR has been managing our 12-floor commercial tower in West Bay for over 3 years. Their AMC team is the most responsive we've ever worked with — issues resolved before tenants even notice.",
    quoteAr: "تتولى أزمت قطر إدارة برجنا التجاري المؤلف من 12 طابقاً في الخليج الغربي منذ أكثر من 3 سنوات. فريق عقود الصيانة لديهم هو الأكثر استجابةً من بين كل من عملنا معهم.",
    name: "MOHAMMED AL-KHALID",
    nameAr: "محمد الخالد",
    role: "Facility Director · West Bay Holdings",
    roleAr: "مدير المرافق · هولدينجز الخليج الغربي",
  },
  {
    quote: "The MEP installation on our warehouse complex in the Industrial Area was completed ahead of schedule. Professional team, quality materials, fully compliant with Qatar standards.",
    quoteAr: "اكتمل تركيب أنظمة الميكانيكا والكهرباء في مجمع مستودعاتنا بالمنطقة الصناعية قبل الموعد المحدد. فريق محترف ومواد عالية الجودة ومتوافق تماماً مع المعايير القطرية.",
    name: "PRIYA NAIR",
    nameAr: "بريا نير",
    role: "Operations Manager · Gulf Industrial Co.",
    roleAr: "مدير العمليات · شركة الخليج الصناعية",
  },
  {
    quote: "We've tried three facility companies before AZMAT QATAR. The difference is clear — structured reporting, proactive preventive maintenance, and a team that genuinely cares about the property.",
    quoteAr: "جربنا ثلاث شركات لإدارة المرافق قبل أزمت قطر. الفرق واضح: تقارير منظمة وصيانة وقائية استباقية وفريق يهتم حقاً بالعقار.",
    name: "SARAH THOMPSON",
    nameAr: "سارة تومسون",
    role: "Property Manager · Doha Compound Estates",
    roleAr: "مديرة العقارات · دوحة كومباوند إيستيتس",
  },
];

interface TestimonialsProps {
  lang: "en" | "ar";
}

export default function Testimonials({ lang }: TestimonialsProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{ background: "var(--jet)", padding: "80px 0", position: "relative", overflow: "hidden", direction: isAr ? "rtl" : "ltr" }}
    >
      {/* Gold top rule */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)" }} />
      {/* Gold bottom rule */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)" }} />

      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 2rem" }}>
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            {isAr ? "آراء عملائنا" : "Client Testimonials"}
          </span>
        </motion.div>

        {/* Editorial quote carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              style={{ textAlign: "center" }}
            >
              {/* Large decorative gold quotation mark */}
              <div style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "80px",
                lineHeight: 1,
                color: "#C9A84C",
                marginBottom: "0.25rem",
                userSelect: "none",
                letterSpacing: "-0.05em",
              }}>
                &ldquo;
              </div>

              {/* Quote text */}
              <p style={{
                color: "#fff",
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                fontWeight: 300,
                lineHeight: 1.8,
                maxWidth: 680,
                margin: "0 auto 2rem",
                fontStyle: "normal",
                letterSpacing: "0.01em",
              }}>
                {isAr ? t.quoteAr : t.quote}
              </p>

              {/* Gold divider rule */}
              <div style={{
                width: 40,
                height: 2,
                background: "#C9A84C",
                margin: "0 auto 1.5rem",
              }} />

              {/* Attribution */}
              <p style={{
                color: "#C9A84C",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                — {isAr ? t.nameAr : t.name}, {isAr ? t.roleAr : t.role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Minimal arrow navigation — centered, no dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3rem" }}>
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", lineHeight: 0 }}
            >
              <svg
                width="20" height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.2s", transform: isAr ? "rotate(180deg)" : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.stroke = "#E0B96A")}
                onMouseLeave={(e) => (e.currentTarget.style.stroke = "#C9A84C")}
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Counter */}
            <span style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.15em", alignSelf: "center" }}>
              {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "0.25rem", lineHeight: 0 }}
            >
              <svg
                width="20" height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.2s", transform: isAr ? "rotate(180deg)" : "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.stroke = "#E0B96A")}
                onMouseLeave={(e) => (e.currentTarget.style.stroke = "#C9A84C")}
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
