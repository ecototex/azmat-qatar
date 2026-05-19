"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", labelAr: "خدماتنا", href: "#services" },
  { label: "Who We Serve", labelAr: "عملاؤنا", href: "#who-we-serve" },
  { label: "Portfolio", labelAr: "أعمالنا", href: "#portfolio" },
  { label: "AMC", labelAr: "عقود الصيانة", href: "#amc" },
  { label: "About", labelAr: "عنّا", href: "#about" },
  { label: "Contact", labelAr: "تواصل معنا", href: "#contact" },
];

interface NavbarProps {
  lang: "en" | "ar";
  onLangToggle: () => void;
}

export default function Navbar({ lang, onLangToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false);
    setActiveHash(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 900,
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "1px solid transparent",
          transition: "background 0.4s, backdrop-filter 0.4s, border-color 0.4s",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
          {/* Logo */}
          <a href="#" onClick={() => handleNavClick("#")} style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontSize: "1.35rem", fontWeight: 800, letterSpacing: "-0.01em", color: "#fff" }}>
              AZMAT<span className="text-gold"> QATAR</span>
            </span>
            <span style={{ fontSize: "0.58rem", letterSpacing: "0.22em", color: "var(--muted)", textTransform: "uppercase", marginTop: 2 }}>
              {isAr ? "إدارة المرافق المتكاملة" : "Integrated Facility Management"}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="desktop-nav">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${activeHash === link.href ? "active" : ""}`}
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {isAr ? link.labelAr : link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Lang Toggle */}
            <button
              onClick={onLangToggle}
              style={{
                background: "none", border: "1px solid rgba(201,168,76,0.35)",
                color: "var(--gold)", padding: "0.4rem 0.875rem",
                fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em",
                cursor: "pointer", transition: "background 0.3s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
              aria-label="Toggle language"
            >
              {isAr ? "EN" : "عربي"}
            </button>

            {/* CTA */}
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.75rem" }}
            >
              {isAr ? "اتصل بنا" : "Get a Quote"}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none", padding: "0.25rem" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", top: 76, left: 0, right: 0, zIndex: 899,
              background: "rgba(10,10,10,0.98)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              padding: "1.5rem 2rem 2rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                style={{
                  display: "block", width: "100%", textAlign: isAr ? "right" : "left",
                  background: "none", border: "none", color: "rgba(255,255,255,0.8)",
                  padding: "0.875rem 0", fontSize: "1rem", fontWeight: 500,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  cursor: "pointer", fontFamily: "inherit",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}
              >
                {isAr ? link.labelAr : link.label}
              </motion.button>
            ))}
            <div style={{ marginTop: "1.25rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button onClick={onLangToggle} className="btn-ghost" style={{ padding: "0.6rem 1.25rem", fontSize: "0.78rem" }}>
                {isAr ? "English" : "عربي"}
              </button>
              <button onClick={() => handleNavClick("#contact")} className="btn-primary" style={{ padding: "0.6rem 1.5rem", fontSize: "0.78rem" }}>
                {isAr ? "اتصل بنا" : "Get a Quote"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
