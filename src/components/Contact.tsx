"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

type FormData = { name: string; company: string; email: string; phone: string; service: string; message: string };

interface ContactProps {
  lang: "en" | "ar";
}

const services = [
  { en: "MEP Services & HVAC", ar: "خدمات الميكانيكا والكهرباء والتكييف" },
  { en: "Annual Maintenance Contract (AMC)", ar: "عقود الصيانة السنوية" },
  { en: "Electrical & Plumbing", ar: "الكهرباء والسباكة" },
  { en: "Steel Fabrication", ar: "تصنيع الحديد والمعادن" },
  { en: "Carpentry & Fit-Out", ar: "النجارة والتشطيبات" },
  { en: "Building Maintenance", ar: "صيانة المباني" },
  { en: "Trading & Supplies", ar: "التجارة والتوريدات" },
];

export default function Contact({ lang }: ContactProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Contact form:", data);
    reset();
  };

  return (
    <section id="contact" style={{ background: "var(--charcoal)", padding: "7rem 0", position: "relative" }}>
      <div className="geo-grid" />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label" style={{ justifyContent: "center" }}>
            {isAr ? "تواصل معنا" : "Get In Touch"}
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
            {isAr ? "ابدأ مشروعك اليوم" : "Start Your Project Today"}
            <br />
            <span className="text-gold-grad">{isAr ? "نحن هنا للمساعدة" : "We're Ready to Help"}</span>
          </h2>
          <span className="gold-divider gold-divider-center" />
        </motion.div>

        {/* Split Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            style={{ textAlign: isAr ? "right" : "left" }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              {isAr ? "معلومات التواصل" : "Contact Information"}
            </h3>

            {[
              { icon: Phone, label: isAr ? "هاتف" : "Phone", value: "+974 1234 5678", href: "tel:+97412345678" },
              { icon: Phone, label: "WhatsApp", value: "+974 5678 9012", href: "https://wa.me/97456789012" },
              { icon: Mail, label: isAr ? "البريد الإلكتروني" : "Email", value: "info@azmatqatar.com", href: "mailto:info@azmatqatar.com" },
              { icon: MapPin, label: isAr ? "العنوان" : "Address", value: isAr ? "الدوحة، قطر — المنطقة الصناعية" : "Doha, Qatar — Industrial Area", href: undefined },
              { icon: Clock, label: isAr ? "ساعات العمل" : "Working Hours", value: isAr ? "الأحد – الجمعة: ٧ص – ٧م" : "Sun – Fri: 7AM – 7PM", href: undefined },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", alignItems: "flex-start", flexDirection: isAr ? "row-reverse" : "row" }}>
                  <div style={{
                    width: 40, height: 40, flexShrink: 0,
                    background: "var(--gold-dim)", border: "1px solid var(--gold-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={16} color="var(--gold)" strokeWidth={1.5} />
                  </div>
                  <div style={{ textAlign: isAr ? "right" : "left" }}>
                    <div style={{ fontSize: "0.7rem", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{ color: "rgba(255,255,255,0.85)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
                      >{item.value}</a>
                    ) : (
                      <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem" }}>{item.value}</span>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Map embed */}
            <div style={{ marginTop: "2rem", overflow: "hidden", border: "1px solid rgba(201,168,76,0.2)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231498.71963754527!2d51.35178025!3d25.2854473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x41f509d9680a992b!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1716110000000!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0, display: "block", filter: "grayscale(40%) brightness(0.7)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: isAr ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            style={{
              background: "var(--charcoal-2)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "2.5rem",
              direction: isAr ? "rtl" : "ltr",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
              {isAr ? "أرسل رسالة" : "Send Us a Message"}
            </h3>
            <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "2rem" }}>
              {isAr ? "سنرد عليك خلال يوم عمل واحد." : "We respond within one business day."}
            </p>

            {isSubmitSuccessful ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <div className="text-gold-grad" style={{ fontSize: "2rem", marginBottom: "0.75rem", fontWeight: 800 }}>✓</div>
                <p style={{ color: "#fff", fontWeight: 600, marginBottom: "0.5rem" }}>{isAr ? "تم إرسال رسالتك!" : "Message sent!"}</p>
                <p style={{ color: "var(--muted)", fontSize: "0.85rem" }}>{isAr ? "سنتواصل معك قريباً." : "We'll be in touch shortly."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input {...register("name", { required: true })} placeholder={isAr ? "الاسم الكامل *" : "Full Name *"} className="form-input" />
                  <input {...register("company")} placeholder={isAr ? "اسم الشركة" : "Company Name"} className="form-input" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input {...register("email", { required: true })} type="email" placeholder={isAr ? "البريد الإلكتروني *" : "Email Address *"} className="form-input" />
                  <input {...register("phone")} placeholder={isAr ? "رقم الهاتف" : "Phone Number"} className="form-input" />
                </div>
                <select {...register("service")} className="form-input" style={{ cursor: "pointer" }}>
                  <option value="">{isAr ? "اختر الخدمة المطلوبة" : "Select Service Required"}</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.en}>{isAr ? s.ar : s.en}</option>
                  ))}
                </select>
                <textarea {...register("message", { required: true })} placeholder={isAr ? "تفاصيل مشروعك أو استفسارك..." : "Tell us about your project or inquiry..."} className="form-input" rows={5} style={{ resize: "vertical" }} />
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: "0.25rem" }}>
                  {isAr ? "إرسال الرسالة" : "Send Message"}
                  <ArrowRight size={15} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
          #contact form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
