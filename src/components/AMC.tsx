"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

const plans = [
  {
    tier: "Basic",
    tierAr: "أساسي",
    price: "On Request",
    priceAr: "بناءً على الطلب",
    desc: "Ideal for small offices and residential properties requiring essential scheduled maintenance.",
    descAr: "مثالي للمكاتب الصغيرة والعقارات السكنية التي تحتاج صيانة دورية أساسية.",
    features: [
      { en: "Quarterly preventive maintenance visits", ar: "زيارات صيانة وقائية ربع سنوية" },
      { en: "HVAC filter cleaning & inspection", ar: "تنظيف وفحص فلاتر التكييف" },
      { en: "Electrical safety checks", ar: "فحوصات سلامة كهربائية" },
      { en: "Plumbing inspection", ar: "فحص أنظمة السباكة" },
      { en: "Emergency call-out (business hours)", ar: "استدعاء طوارئ (ساعات العمل)" },
    ],
    exclusions: [
      { en: "24/7 emergency response", ar: "استجابة طوارئ ٢٤/٧" },
      { en: "Parts & materials included", ar: "قطع الغيار والمواد مشمولة" },
    ],
    featured: false,
  },
  {
    tier: "Standard",
    tierAr: "قياسي",
    price: "On Request",
    priceAr: "بناءً على الطلب",
    desc: "Our most popular plan for commercial offices, villas, and mid-size facilities across Qatar.",
    descAr: "خطتنا الأكثر طلباً للمكاتب التجارية والفلل والمنشآت متوسطة الحجم في قطر.",
    features: [
      { en: "Monthly preventive maintenance visits", ar: "زيارات صيانة وقائية شهرية" },
      { en: "Full HVAC servicing & gas top-up", ar: "صيانة التكييف الشاملة وتعبئة الغاز" },
      { en: "Electrical & plumbing maintenance", ar: "صيانة الكهرباء والسباكة" },
      { en: "Priority emergency response", ar: "استجابة طوارئ ذات أولوية" },
      { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
      { en: "Monthly service reports", ar: "تقارير خدمة شهرية" },
    ],
    exclusions: [
      { en: "Major parts replacement", ar: "استبدال القطع الرئيسية" },
    ],
    featured: true,
  },
  {
    tier: "Premium",
    tierAr: "مميز",
    price: "On Request",
    priceAr: "بناءً على الطلب",
    desc: "Comprehensive all-inclusive coverage for large commercial buildings, compounds, and portfolios.",
    descAr: "تغطية شاملة للمباني التجارية الكبيرة والمجمعات ومحافظ العقارات.",
    features: [
      { en: "Weekly dedicated site visits", ar: "زيارات موقع مخصصة أسبوعية" },
      { en: "All MEP systems fully covered", ar: "جميع أنظمة الميكانيكا والكهرباء مشمولة" },
      { en: "24/7 emergency response guaranteed", ar: "استجابة طوارئ مضمونة ٢٤/٧" },
      { en: "On-site parts inventory", ar: "مخزون قطع غيار في الموقع" },
      { en: "Digital maintenance portal access", ar: "الوصول إلى بوابة الصيانة الرقمية" },
      { en: "Quarterly executive reports", ar: "تقارير تنفيذية ربع سنوية" },
      { en: "All materials & parts included", ar: "جميع المواد والقطع مشمولة" },
    ],
    exclusions: [],
    featured: false,
  },
];

interface AMCProps {
  lang: "en" | "ar";
}

type FormData = { name: string; company: string; email: string; phone: string; plan: string; message: string };

export default function AMC({ lang }: AMCProps) {
  const isAr = lang === "ar";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Standard");
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const openModal = (plan: string) => { setSelectedPlan(plan); setShowModal(true); };
  const closeModal = () => { setShowModal(false); setSubmitted(false); reset(); };

  const onSubmit = (data: FormData) => {
    console.log("AMC Form:", data);
    setSubmitted(true);
    setTimeout(closeModal, 3000);
  };

  return (
    <>
      <section id="amc" style={{ background: "var(--charcoal-2)", padding: "7rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <span className="section-label" style={{ justifyContent: "center" }}>
              {isAr ? "عقود الصيانة السنوية" : "Annual Maintenance Contracts"}
            </span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1rem" }}>
              {isAr ? "حافظ على منشأتك" : "Keep Your Facility"}
              <br />
              <span className="text-gold-grad">{isAr ? "في أفضل حال دائماً" : "Always at Peak Performance"}</span>
            </h2>
            <span className="gold-divider gold-divider-center" />
            <p style={{ maxWidth: 560, margin: "0.75rem auto 0", color: "var(--muted)", lineHeight: 1.7, fontSize: "0.9rem" }}>
              {isAr
                ? "اختر خطة الصيانة المناسبة لحجم منشأتك وميزانيتك. جميع الخطط قابلة للتخصيص."
                : "Choose the maintenance plan that fits your facility's scale and budget. All plans are fully customizable."}
            </p>
          </motion.div>

          {/* Plans */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5px", alignItems: "start" }}>
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className={`plan-card ${plan.featured ? "featured" : ""}`}
                style={{ textAlign: isAr ? "right" : "left", position: "relative" }}
              >
                {plan.featured && (
                  <div style={{
                    position: "absolute", top: -1, left: "50%", transform: "translateX(-50%)",
                    background: "var(--grad-gold)", padding: "0.25rem 1.25rem",
                    fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em",
                    color: "var(--jet)", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>
                    {isAr ? "الأكثر طلباً" : "Most Popular"}
                  </div>
                )}

                <div style={{ marginBottom: "1.5rem", paddingTop: plan.featured ? "1rem" : 0 }}>
                  <span className="text-gold-grad" style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                    {isAr ? plan.tierAr : plan.tier}
                  </span>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginTop: "0.5rem" }}>
                    {isAr ? plan.priceAr : plan.price}
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    {isAr ? plan.descAr : plan.desc}
                  </p>
                </div>

                <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.25rem", marginBottom: "1.5rem" }}>
                  {plan.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.6rem", flexDirection: isAr ? "row-reverse" : "row" }}>
                      <Check size={13} color="var(--gold)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.75)" }}>{isAr ? f.ar : f.en}</span>
                    </div>
                  ))}
                  {plan.exclusions.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.6rem", flexDirection: isAr ? "row-reverse" : "row" }}>
                      <X size={13} color="var(--muted-2, #555)" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontSize: "0.82rem", color: "var(--muted)" }}>{isAr ? f.ar : f.en}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal(isAr ? plan.tierAr : plan.tier)}
                  className={plan.featured ? "btn-primary" : "btn-ghost"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {isAr ? "اطلب هذه الخطة" : "Request This Plan"}
                  <ArrowRight size={15} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              className="modal-box"
              style={{ direction: isAr ? "rtl" : "ltr" }}
            >
              <button onClick={closeModal} style={{ position: "absolute", top: "1rem", right: isAr ? "auto" : "1rem", left: isAr ? "1rem" : "auto", background: "none", border: "none", color: "var(--muted)", cursor: "pointer", padding: 4 }}>
                <X size={18} />
              </button>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
                  <h3 className="text-gold-grad" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                    {isAr ? "تم إرسال طلبك" : "Proposal Request Sent"}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                    {isAr ? "سيتواصل معك فريقنا خلال 24 ساعة." : "Our team will contact you within 24 hours."}
                  </p>
                </div>
              ) : (
                <>
                  <span className="section-label" style={{ flexDirection: isAr ? "row-reverse" : "row" }}>
                    {isAr ? "طلب خطة AMC" : "Request AMC Proposal"}
                  </span>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#fff", marginBottom: "0.5rem" }}>
                    {selectedPlan} {isAr ? "— عرض أسعار" : "— Get a Quote"}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.85rem", marginBottom: "2rem" }}>
                    {isAr ? "أرسل تفاصيلك وسنقدم لك عرضاً مخصصاً خلال يوم عمل واحد." : "Send your details and we'll provide a tailored proposal within one business day."}
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <input {...register("name", { required: true })} placeholder={isAr ? "الاسم الكامل *" : "Full Name *"} className="form-input" style={{ textAlign: isAr ? "right" : "left" }} />
                    <input {...register("company", { required: true })} placeholder={isAr ? "اسم الشركة / المنشأة *" : "Company / Facility Name *"} className="form-input" style={{ textAlign: isAr ? "right" : "left" }} />
                    <input {...register("email", { required: true })} type="email" placeholder={isAr ? "البريد الإلكتروني *" : "Email Address *"} className="form-input" style={{ textAlign: isAr ? "right" : "left" }} />
                    <input {...register("phone")} placeholder={isAr ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"} className="form-input" style={{ textAlign: isAr ? "right" : "left" }} />
                    <textarea
                      {...register("message")}
                      placeholder={isAr ? "تفاصيل المنشأة وأي متطلبات خاصة..." : "Facility details and any special requirements..."}
                      className="form-input"
                      rows={4}
                      style={{ resize: "vertical", textAlign: isAr ? "right" : "left" }}
                    />
                    <button type="submit" className="btn-primary" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
                      {isAr ? "إرسال الطلب" : "Submit Request"}
                      <ArrowRight size={15} style={{ transform: isAr ? "rotate(180deg)" : "none" }} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
