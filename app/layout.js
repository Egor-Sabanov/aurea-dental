import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aurea-dental.example"),
  title: {
    default: "AUREA DENTAL — Современная стоматология",
    template: "%s — AUREA DENTAL",
  },
  description:
    "Современная стоматология с вниманием к деталям, технологиям и комфорту пациента.",
  keywords: ["стоматология", "стоматолог", "имплантация", "эстетическая стоматология"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "AUREA DENTAL — Современная стоматология",
    description: "Современная стоматология с человеческим отношением.",
    type: "website",
    locale: "ru_RU",
    siteName: "AUREA DENTAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "AUREA DENTAL — Современная стоматология",
    description: "Современная стоматология с человеческим отношением.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
