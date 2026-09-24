import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0B0C0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fmm-fzco.com"),
  title: "FURCAK MARKETING MANAGEMENT - FZCO | Dubai Business Consultancy",
  description:
    "FURCAK MARKETING MANAGEMENT - FZCO is a Dubai-based consultancy licensed by DIEZA (DSO-IFZA). Delivering Marketing Management, Business Development, and Project Development Consultancy across industrial, engineering, and technology sectors.",
  keywords: [
    "FURCAK MARKETING MANAGEMENT",
    "Dubai Business Consultancy",
    "FZCO Dubai Silicon Oasis",
    "DIEZA Licenced Consultancy",
    "Business Development Dubai",
    "Project Development Consultancy UAE",
    "Marketing Management Dubai",
    "Jan Furcak Dubai",
    "Cross-Border Commercial Advisory",
    "DSO-IFZA Consultancy",
  ],
  authors: [{ name: "Jan Furcak", url: "https://fmm-fzco.com" }],
  creator: "FURCAK MARKETING MANAGEMENT - FZCO",
  publisher: "FURCAK MARKETING MANAGEMENT - FZCO",
  alternates: {
    canonical: "https://fmm-fzco.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fmm-fzco.com",
    siteName: "FURCAK MARKETING MANAGEMENT - FZCO",
    title: "FURCAK MARKETING MANAGEMENT - FZCO | Dubai Consultancy",
    description:
      "Driving Business Growth. Developing Opportunities. Connecting Markets. Licensed B2B Marketing, Business Development, and Project Consultancy in Dubai Silicon Oasis.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FURCAK MARKETING MANAGEMENT - FZCO",
    description:
      "Driving Business Growth. Developing Opportunities. Connecting Markets. Dubai Silicon Oasis (DSO-IFZA).",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConsultingService",
    name: "FURCAK MARKETING MANAGEMENT - FZCO",
    legalName: "FURCAK MARKETING MANAGEMENT - FZCO",
    alternateName: "FURCAK",
    description:
      "Dubai-based business consultancy providing Marketing Management, Business Development, and Project Development Consultancy services.",
    url: "https://fmm-fzco.com",
    telephone: "+971505395412",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Premises No. DSO-IFZA, IFZA Properties",
      addressLocality: "Dubai Silicon Oasis",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    founder: {
      "@type": "Person",
      name: "Jan Furcak",
      jobTitle: "Founder | Director | General Manager",
    },
    foundingLocation: {
      "@type": "Place",
      name: "Dubai Silicon Oasis (DSO-IFZA)",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Trade Licence",
      recognizedBy: {
        "@type": "Organization",
        name: "DIEZA (Dubai Integrated Economic Zones Authority)",
      },
    },
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${outfit.variable} ${inter.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#0B0C0E] text-[#F8FAFC] antialiased selection:bg-[#C5A059] selection:text-[#0B0C0E]">
        {children}
      </body>
    </html>
  );
}
