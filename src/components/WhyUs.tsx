"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Floating stroke-only SVG icons — no fills, no boxes
const IconAward = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);
const IconClock = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const IconContract = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);
const IconMapPin = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="why-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const reasons = [
  {
    Icon: IconAward,
    title: "Certified MEP Specialists",
    titleAr: "متخصصون معتمدون",
    desc: "Our engineers and technicians hold recognized industry certifications and are fully compliant with Qatar Civil Defence and Ministry standards.",
    descAr: "مهندسونا وفنيونا حاصلون على شهادات صناعية معتمدة ومتوافقون مع معايير الدفاع المدني القطري.",
  },
  {
    Icon: IconClock,
    title: "24/7 Emergency Support",
    titleAr: "دعم طوارئ على مدار الساعة",
    desc: "Round-the-clock emergency response team to address critical failures and urgent maintenance requests with zero downtime priority.",
    descAr: "فريق استجابة طوارئ يعمل على مدار الساعة لمعالجة الأعطال الحرجة وطلبات الصيانة العاجلة.",
  },
  {
    Icon: IconContract,
    title: "Tailored AMC Packages",
    titleAr: "عقود صيانة مخصصة",
    desc: "No one-size-fits-all. Each AMC contract is structured around the specific requirements, scale, and budget of your facility.",
    descAr: "لا حل واحد للجميع — كل عقد صيانة يُصمَّم وفق متطلبات منشأتك وحجمها وميزانيتها.",
  },
  {
    Icon: IconMapPin,
    title: "Qatar-Based Operations",
    titleAr: "عمليات مقرها قطر",
    desc: "Fully established in Doha with local teams, licensed operations, and deep knowledge of Qatar's regulatory and construction landscape.",
    descAr: "مؤسسة محلية راسخة في الدوحة بفرق عمل قطرية ومعرفة عميقة بالبيئة التنظيمية والإنشائية في قطر.",
  },
];

interface WhyUsProps {
  lang: "en" | "ar";
}

export default function WhyUs({ lang }: WhyUsProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "var(--charcoal)", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          style={{ textAlign: "center", marginBottom: "4.5rem" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            {isAr ? "لماذا أزمت قطر" : "Why Choose Us"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            {isAr ? "الشراكة التي تبنيها على" : "The Partnership Built on"}
            <br />
            <span className="text-gold-grad">{isAr ? "الثقة والكفاءة" : "Trust & Competence"}</span>
          </h2>
          <span className="gold-divider gold-divider-center" />
        </motion.div>

        {/* 4-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "2rem" }}>
          {reasons.map(({ Icon, title, titleAr, desc, descAr }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
              style={{ textAlign: isAr ? "right" : "left" }}
              className="why-card"
            >
              {/* Floating stroke icon — no box */}
              <div style={{
                marginBottom: "1.25rem",
                display: "flex",
                justifyContent: isAr ? "flex-end" : "flex-start",
              }}>
                <Icon />
              </div>

              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                {isAr ? titleAr : title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7 }}>
                {isAr ? descAr : desc}
              </p>
            </motion.div>
          ))}
        </div>

        <style>{`
          .why-icon { transition: stroke 0.2s ease; }
          .why-card:hover .why-icon { stroke: #E0B96A; }
        `}</style>

        {/* Qatar Vision 2030 callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          style={{
            marginTop: "5rem",
            background: "var(--charcoal-2)",
            border: "1px solid rgba(201,168,76,0.2)",
            padding: "2.5rem 3rem",
            display: "grid", gridTemplateColumns: "1fr auto",
            alignItems: "center", gap: "2rem",
          }}
        >
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <span className="section-label" style={{ flexDirection: isAr ? "row-reverse" : "row" }}>
              {isAr ? "رؤية قطر ٢٠٣٠" : "Qatar Vision 2030"}
            </span>
            <h3 style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontWeight: 600, color: "#fff", marginBottom: "0.75rem" }}>
              {isAr ? "شريكك في بناء قطر المستدامة" : "Your Partner in Sustainable Qatar Development"}
            </h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.65, fontSize: "0.9rem", maxWidth: 600, marginLeft: isAr ? "auto" : 0 }}>
              {isAr
                ? "تتوافق أزمت قطر مع أهداف رؤية قطر الوطنية ٢٠٣٠ من خلال التزامنا بالمعايير العالية لإدارة المرافق، والكفاءة في استخدام الطاقة، والممارسات المستدامة في جميع أعمالنا."
                : "AZMAT QATAR aligns with Qatar National Vision 2030 by upholding the highest standards of facility management, energy efficiency, and sustainable practices across all our operations — contributing to Qatar's built environment legacy."}
            </p>
          </div>
          <div style={{
            width: 80, height: 80,
            background: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)",
            border: "1px solid rgba(201,168,76,0.3)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "2rem", flexShrink: 0,
          }}>
            🇶🇦
          </div>
        </motion.div>
      </div>
    </section>
  );
}
