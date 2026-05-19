"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Inline SVG stroke icons — no fill, no box, stroke only
const IconMEP = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
  </svg>
);
const IconElectrical = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const IconAMC = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const IconFabrication = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const IconCarpentry = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>
  </svg>
);
const IconBuilding = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </svg>
);
const IconSupplies = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="svc-icon">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><path d="M16 5H8l-1 5h10z"/><rect x="9" y="10" width="6" height="4"/>
  </svg>
);

const services = [
  {
    Icon: IconMEP,
    title: "MEP Services & HVAC",
    titleAr: "خدمات الميكانيكا والكهرباء والسباكة وأنظمة التكييف",
    desc: "Comprehensive mechanical, electrical, plumbing, and HVAC installation, commissioning, and maintenance for commercial and industrial facilities.",
    descAr: "خدمات شاملة للميكانيكا والكهرباء والسباكة وأنظمة التكييف بما يشمل التركيب والتشغيل والصيانة.",
  },
  {
    Icon: IconElectrical,
    title: "Electrical & Plumbing Works",
    titleAr: "أعمال الكهرباء والسباكة",
    desc: "High-standard electrical wiring, panels, plumbing systems, and drainage solutions compliant with Qatar's Civil Defence regulations.",
    descAr: "أعمال كهربائية وسباكة عالية الجودة وفق معايير الدفاع المدني القطري.",
  },
  {
    Icon: IconAMC,
    title: "Annual Maintenance Contracts",
    titleAr: "عقود الصيانة السنوية",
    desc: "Tailored AMC packages for buildings, villas, and commercial properties. Scheduled preventive maintenance with emergency call-out priority.",
    descAr: "عقود صيانة سنوية مخصصة للمباني والفلل والعقارات التجارية مع صيانة وقائية منتظمة.",
  },
  {
    Icon: IconFabrication,
    title: "Steel & Metal Fabrication",
    titleAr: "تصنيع الحديد والمعادن",
    desc: "Precision steel structures, handrails, gates, cladding, and custom metal fabrication for construction and industrial projects across Qatar.",
    descAr: "تصنيع دقيق للهياكل الفولاذية والدرابزينات والبوابات والتغليف للمشاريع الإنشائية في قطر.",
  },
  {
    Icon: IconCarpentry,
    title: "Carpentry & Interior Fit-Out",
    titleAr: "النجارة والتشطيبات الداخلية",
    desc: "Custom joinery, furniture, partitioning, ceiling works, and complete interior fit-out for offices, retail, and hospitality spaces.",
    descAr: "نجارة مخصصة وتشطيبات داخلية شاملة للمكاتب والمحلات التجارية والفنادق.",
  },
  {
    Icon: IconBuilding,
    title: "Building Maintenance Services",
    titleAr: "خدمات صيانة المباني",
    desc: "Holistic building maintenance — civil repairs, painting, waterproofing, façade cleaning, and general upkeep for all property types.",
    descAr: "صيانة شاملة للمباني تشمل الإصلاحات المدنية والطلاء والعزل المائي وتنظيف الواجهات.",
  },
  {
    Icon: IconSupplies,
    title: "Trading & Industrial Supplies",
    titleAr: "التجارة والمستلزمات الصناعية",
    desc: "Supply of MEP materials, safety equipment, construction consumables, and industrial hardware from verified manufacturers.",
    descAr: "توريد مواد الميكانيكا والكهرباء والسباكة ومعدات السلامة والمستلزمات الصناعية من مصنّعين معتمدين.",
  },
];

interface ServicesProps {
  lang: "en" | "ar";
}

export default function Services({ lang }: ServicesProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" style={{ background: "var(--jet)", padding: "7rem 0", position: "relative" }}>
      <div className="geo-grid" />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          style={{ textAlign: isAr ? "right" : "left", marginBottom: "4rem" }}
        >
          <span className="section-label" style={{ flexDirection: isAr ? "row-reverse" : "row" }}>
            {isAr ? "خدماتنا" : "Our Services"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            {isAr ? "حلول شاملة لإدارة" : "Comprehensive Facility"}
            <br />
            <span className="text-gold-grad">{isAr ? "المرافق والبنية التحتية" : "Management Solutions"}</span>
          </h2>
          <span className="gold-divider" style={{ marginLeft: isAr ? "auto" : 0, marginRight: isAr ? 0 : "auto" }} />
          <p style={{ maxWidth: 560, color: "var(--muted)", lineHeight: 1.7, marginTop: "0.75rem", marginLeft: isAr ? "auto" : 0 }}>
            {isAr
              ? "نقدم طيفاً متكاملاً من خدمات الصيانة والتركيب والتوريد للمشاريع التجارية والصناعية والسكنية في جميع أنحاء قطر."
              : "From MEP engineering to building maintenance — we deliver a full spectrum of facility management services to commercial, industrial, and residential clients across Qatar."}
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5px" }}>
          {services.map(({ Icon, title, titleAr, desc, descAr }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="service-card"
              style={{ textAlign: isAr ? "right" : "left" }}
            >
              {/* Floating stroke icon — no box, no background */}
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
              <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                {isAr ? descAr : desc}
              </p>
              <button
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: "0.4rem",
                  color: "var(--gold)", fontSize: "0.78rem", fontWeight: 600,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  fontFamily: "inherit",
                  flexDirection: isAr ? "row-reverse" : "row",
                  marginLeft: isAr ? "auto" : 0,
                  transition: "gap 0.3s",
                  padding: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget.style.gap = "0.75rem"); }}
                onMouseLeave={(e) => { (e.currentTarget.style.gap = "0.4rem"); }}
              >
                {isAr ? "اعرف المزيد" : "Learn More"}
                <ArrowRight size={13} strokeWidth={2.5} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-icon { transition: stroke 0.2s ease; }
        .service-card:hover .svc-icon { stroke: #E0B96A; }
      `}</style>
    </section>
  );
}
