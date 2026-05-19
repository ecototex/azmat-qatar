"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Share2, ExternalLink } from "lucide-react";

interface FooterProps {
  lang: "en" | "ar";
  onLangToggle: () => void;
}

const navLinks = [
  { label: "Services", labelAr: "خدماتنا", href: "#services" },
  { label: "Who We Serve", labelAr: "عملاؤنا", href: "#who-we-serve" },
  { label: "Portfolio", labelAr: "أعمالنا", href: "#portfolio" },
  { label: "AMC Plans", labelAr: "خطط الصيانة", href: "#amc" },
  { label: "About", labelAr: "عنّا", href: "#about" },
  { label: "Contact", labelAr: "تواصل معنا", href: "#contact" },
];

const serviceLinks = [
  { label: "MEP Services", labelAr: "خدمات MEP" },
  { label: "HVAC Maintenance", labelAr: "صيانة التكييف" },
  { label: "AMC Contracts", labelAr: "عقود الصيانة" },
  { label: "Steel Fabrication", labelAr: "تصنيع الحديد" },
  { label: "Fit-Out", labelAr: "التشطيبات" },
  { label: "Industrial Supplies", labelAr: "المستلزمات الصناعية" },
];

export default function Footer({ lang, onLangToggle }: FooterProps) {
  const isAr = lang === "ar";

  return (
    <footer style={{ background: "var(--jet)", borderTop: "1px solid rgba(201,168,76,0.15)", direction: isAr ? "rtl" : "ltr" }}>
      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "5rem 2rem 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "4rem" }}>
          {/* Brand */}
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em" }}>
                AZMAT<span className="text-gold"> QATAR</span>
              </div>
              <div style={{ fontSize: "0.58rem", letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase", marginTop: 4 }}>
                {isAr ? "إدارة المرافق المتكاملة" : "Integrated Facility Management"}
              </div>
            </div>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 320, marginLeft: isAr ? "auto" : 0 }}>
              {isAr
                ? "أزمت قطر — شريكك الموثوق في إدارة المرافق وخدمات الميكانيكا والكهرباء والسباكة وعقود الصيانة السنوية في جميع أنحاء قطر."
                : "Your trusted partner for integrated facility management, MEP services, and annual maintenance contracts across Qatar's commercial and residential sectors."}
            </p>
            {/* Social */}
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.75rem", justifyContent: isAr ? "flex-end" : "flex-start" }}>
              {[
                { icon: Globe, href: "#", label: "LinkedIn" },
                { icon: Share2, href: "#", label: "Instagram" },
                { icon: ExternalLink, href: "#", label: "Facebook" },
              ].map(({ icon: Icon, href, label }, i) => (
                <a key={i} href={href} style={{
                  width: 36, height: 36,
                  background: "var(--charcoal-2)", border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--muted)", transition: "border-color 0.3s, color 0.3s",
                  textDecoration: "none",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)"; }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
              {isAr ? "التنقل" : "Navigation"}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
                  >
                    {isAr ? link.labelAr : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
              {isAr ? "خدماتنا" : "Services"}
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <a href="#services" style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
                  >
                    {isAr ? s.labelAr : s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ textAlign: isAr ? "right" : "left" }}>
            <h4 style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.25rem" }}>
              {isAr ? "تواصل معنا" : "Contact"}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: Phone, text: "+974 1234 5678", href: "tel:+97412345678" },
                { icon: Mail, text: "info@azmatqatar.com", href: "mailto:info@azmatqatar.com" },
                { icon: MapPin, text: isAr ? "الدوحة، قطر" : "Doha, Qatar", href: undefined },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", flexDirection: isAr ? "row-reverse" : "row" }}>
                    <Icon size={13} color="var(--gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: "0.85rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")}
                      >{item.text}</a>
                    ) : (
                      <span style={{ fontSize: "0.85rem", color: "var(--muted)" }}>{item.text}</span>
                    )}
                  </div>
                );
              })}
            </div>
            <button onClick={onLangToggle} style={{
              marginTop: "1.5rem", background: "none",
              border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)",
              padding: "0.4rem 0.875rem", fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.1em", cursor: "pointer", fontFamily: "inherit",
              transition: "background 0.3s",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(201,168,76,0.08)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              {isAr ? "English" : "عربي"}
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
          flexDirection: isAr ? "row-reverse" : "row",
        }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(201,168,76,0.45)" }}>
            © {new Date().getFullYear()} AZMAT QATAR. {isAr ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexDirection: isAr ? "row-reverse" : "row" }}>
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")}
              >{item}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
