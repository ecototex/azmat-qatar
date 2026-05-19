"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Home, Warehouse, Briefcase, GraduationCap, Users } from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Commercial Buildings",
    titleAr: "المباني التجارية",
    desc: "End-to-end facility management for office towers, retail centers, and mixed-use developments across Doha.",
    descAr: "إدارة متكاملة للمرافق لأبراج المكاتب والمراكز التجارية والمجمعات متعددة الاستخدام في الدوحة.",
    tag: "COMMERCIAL",
    tagAr: "تجاري",
  },
  {
    icon: Home,
    title: "Villas & Residences",
    titleAr: "الفلل والمساكن",
    desc: "Bespoke maintenance programs for private villas, compound housing, and luxury residences with white-glove service.",
    descAr: "برامج صيانة مخصصة للفلل الخاصة والمجمعات السكنية والمساكن الفاخرة.",
    tag: "RESIDENTIAL",
    tagAr: "سكني",
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    titleAr: "المستودعات والخدمات اللوجستية",
    desc: "Industrial maintenance, MEP upkeep, and infrastructure management for warehouses and logistics facilities.",
    descAr: "صيانة صناعية وإدارة البنية التحتية للمستودعات ومرافق الخدمات اللوجستية.",
    tag: "INDUSTRIAL",
    tagAr: "صناعي",
  },
  {
    icon: Briefcase,
    title: "Offices & Corporate Campuses",
    titleAr: "المكاتب والمجمعات الشركاتية",
    desc: "Comprehensive FM services for office environments — HVAC, electrical, cleaning, and preventive maintenance.",
    descAr: "خدمات إدارة المرافق الشاملة لبيئات العمل: تكييف وكهرباء وصيانة وقائية.",
    tag: "CORPORATE",
    tagAr: "شركات",
  },
  {
    icon: GraduationCap,
    title: "Schools & Educational Facilities",
    titleAr: "المدارس والمؤسسات التعليمية",
    desc: "Safe, compliant, and uninterrupted facility operations for schools, universities, and training centers.",
    descAr: "عمليات مرافق آمنة ومتوافقة ومستمرة للمدارس والجامعات ومراكز التدريب.",
    tag: "EDUCATION",
    tagAr: "تعليم",
  },
  {
    icon: Users,
    title: "Residential Projects",
    titleAr: "المشاريع السكنية",
    desc: "Large-scale residential complex management including common areas, utilities, and emergency response.",
    descAr: "إدارة المجمعات السكنية الكبيرة شاملةً المناطق المشتركة والمرافق والاستجابة للطوارئ.",
    tag: "RESIDENTIAL",
    tagAr: "سكني",
  },
];

interface WhoWeServeProps {
  lang: "en" | "ar";
}

export default function WhoWeServe({ lang }: WhoWeServeProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const videoRef = useRef<HTMLVideoElement>(null);

  // Play video when section scrolls into view.
  // Explicit play() call is required — browsers block autoPlay on off-screen elements.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay blocked by strict browser policy — silently ignore
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="who-we-serve"
      style={{ position: "relative", padding: "7rem 0", overflow: "hidden", background: "#0f0f0f" }}
    >
      {/* ── Video background — z-index 0 ────────────────────────────────── */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.45,
          mixBlendMode: "luminosity",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/assets/videos/portfolio-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark gradient overlay — z-index 1 ──────────────────────────── */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.65) 100%)",
        zIndex: 1,
        pointerEvents: "none",
      }} />

      {/* ── Content — z-index 2 ─────────────────────────────────────────── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            {isAr ? "قطاعاتنا" : "Who We Serve"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            {isAr ? "نخدم كل القطاعات في" : "Trusted Across Every"}
            <br />
            <span className="text-gold-grad">{isAr ? "دولة قطر" : "Sector in Qatar"}</span>
          </h2>
          <span className="gold-divider gold-divider-center" />
          <p style={{ maxWidth: 520, margin: "0.75rem auto 0", color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
            {isAr
              ? "من المباني التجارية إلى الفلل الخاصة والمدارس — نقدم خبرتنا لكل نوع من أنواع المنشآت."
              : "From high-rise commercial towers to private villas and educational institutions — our expertise spans every property type in Qatar."}
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {sectors.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(201,168,76,0.15)",
                  padding: "2rem",
                  display: "flex", flexDirection: "column", gap: "0.875rem",
                  textAlign: isAr ? "right" : "left",
                  backdropFilter: "blur(8px)",
                  transition: "box-shadow 0.4s, transform 0.4s, border-color 0.4s",
                }}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.35)" }}
              >
                {/* Tag + Icon row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: isAr ? "row-reverse" : "row" }}>
                  <div style={{
                    width: 48, height: 48,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(201,168,76,0.1)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}>
                    <Icon size={20} color="var(--gold)" strokeWidth={1.5} />
                  </div>
                  <span style={{
                    fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em",
                    color: "var(--gold)", border: "1px solid rgba(201,168,76,0.3)",
                    padding: "0.2rem 0.6rem",
                    background: "rgba(201,168,76,0.06)",
                  }}>
                    {isAr ? sector.tagAr : sector.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                  {isAr ? sector.titleAr : sector.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
                  {isAr ? sector.descAr : sector.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Hide video on mobile */}
      <style>{`
        @media (max-width: 768px) {
          #who-we-serve video { display: none; }
        }
      `}</style>
    </section>
  );
}
