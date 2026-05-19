"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  lang: "en" | "ar";
  onContactClick: () => void;
}

export default function Hero({ lang, onContactClick }: HeroProps) {
  const isAr = lang === "ar";
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ─── Canvas animated grid ─────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    let w = 0, h = 0;
    type Line = { x: number; y: number; dx: number; dy: number; len: number; alpha: number };
    const lines: Line[] = [];
    const resize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const init = () => {
      lines.length = 0;
      for (let i = 0; i < 60; i++) {
        lines.push({
          x: Math.random() * w, y: Math.random() * h,
          dx: (Math.random() - 0.5) * 0.4, dy: (Math.random() - 0.5) * 0.4,
          len: Math.random() * 120 + 40, alpha: Math.random() * 0.12 + 0.02,
        });
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      lines.forEach((l) => {
        l.x += l.dx; l.y += l.dy;
        if (l.x < 0 || l.x > w) l.dx *= -1;
        if (l.y < 0 || l.y > h) l.dy *= -1;
        ctx.beginPath(); ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + l.len, l.y + l.len * 0.5);
        ctx.strokeStyle = `rgba(201,168,76,${l.alpha})`; ctx.lineWidth = 0.8; ctx.stroke();
      });
      animId = requestAnimationFrame(draw);
    };
    resize(); init(); draw();
    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(160deg, #0A0A0A 0%, #111111 40%, #0D0D0D 100%)",
        overflow: "hidden",
      }}
    >
      {/* Animated canvas */}
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1 }} />

      {/* Gold radial glow */}
      <div style={{
        position: "absolute", top: "30%", left: "60%",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
        transform: "translate(-50%,-50%)", pointerEvents: "none", zIndex: 1,
      }} />

      {/* Bottom gradient fade */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 200,
        background: "linear-gradient(to top, #0A0A0A, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Arabic geometric texture */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40Z' fill='none' stroke='%23C9A84C' stroke-width='1'/%3E%3Cpath d='M40 10 L70 40 L40 70 L10 40Z' fill='none' stroke='%23C9A84C' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "80px 80px", pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "8rem 2rem 9rem",
        position: "relative", zIndex: 3,
        textAlign: isAr ? "right" : "left",
      }}>

        {/* Eye-brow label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <span className="section-label" style={{ marginBottom: "1.5rem", flexDirection: isAr ? "row-reverse" : "row" }}>
            {isAr ? "منذ ٢٠١٩ · مقرنا الدوحة · قطر" : "Est. 2019 · Based in Doha · Qatar"}
          </span>
        </motion.div>

        {/* Static headline — no animation */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          style={{
            fontSize: "clamp(1.8rem, 4.5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "-0.02em",
            color: "#fff",
            whiteSpace: "nowrap",
            marginBottom: "1.25rem",
          }}
        >
          {isAr ? (
            <>دقة.<span className="text-gold-grad"> موثوقية.</span> تميّز.</>
          ) : (
            <>Precision.<span className="text-gold-grad"> Reliability.</span> Excellence.</>
          )}
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "var(--gold-light)",
            maxWidth: 580, lineHeight: 1.6,
            marginBottom: "2.5rem", fontWeight: 400,
          }}
        >
          {isAr
            ? "خدمات إدارة المرافق المتكاملة — ميكانيكا وكهرباء وسباكة، عقود صيانة سنوية، وتشطيبات داخلية في جميع أنحاء قطر."
            : "Integrated facility management, MEP services, annual maintenance contracts, and interior fit-out solutions across Qatar."}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: isAr ? "flex-end" : "flex-start" }}
        >
          <button onClick={onContactClick} className="btn-primary" style={{ fontSize: "0.85rem" }}>
            {isAr ? "اطلب عرض أسعار" : "Request a Proposal"}
            <ArrowRight size={16} />
          </button>
          <a href="tel:+97412345678" className="btn-ghost" style={{ fontSize: "0.85rem" }}>
            <Phone size={15} />
            {isAr ? "تواصل معنا" : "Call Us Now"}
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            marginTop: "4rem",
            display: "flex", flexWrap: "wrap", gap: "2.5rem",
            justifyContent: isAr ? "flex-end" : "flex-start",
          }}
        >
          {[
            { num: "5+",   label: isAr ? "سنوات خبرة" : "Years Experience" },
            { num: "200+", label: isAr ? "مشروع منجز" : "Projects Delivered" },
            { num: "50+",  label: isAr ? "عميل راضٍ"  : "Active Clients" },
            { num: "24/7", label: isAr ? "دعم فني"    : "Support Available" },
          ].map((stat) => (
            <div key={stat.num} style={{ textAlign: isAr ? "right" : "left" }}>
              <div className="stat-number" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>{stat.num}</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.25rem" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)", zIndex: 3,
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}
      >
        <span style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: 1, height: 40, background: "linear-gradient(to bottom, var(--gold), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
