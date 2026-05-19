import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AZMAT QATAR — Integrated Facility Management Solutions | Doha",
  description: "AZMAT QATAR delivers premium MEP services, HVAC maintenance, AMC contracts, steel fabrication, and building maintenance across Doha and Qatar. Certified specialists serving commercial, residential and industrial clients.",
  keywords: "facility management Doha, MEP services Qatar, HVAC maintenance Qatar, AMC contracts Doha, building maintenance Qatar, electrical plumbing Qatar, fit-out company Doha, steel fabrication Qatar, industrial supplies Doha, villa maintenance Qatar",
  openGraph: {
    title: "AZMAT QATAR — Integrated Facility Management Solutions",
    description: "Premium MEP, HVAC, AMC, and facility management services in Doha, Qatar.",
    type: "website",
    locale: "en_QA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700;9..40,800&family=Tajawal:wght@300;400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
