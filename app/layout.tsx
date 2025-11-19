import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juste Un – Christianisme",
  description:
    "Un jeu de mots inspiré de Just One, revisité pour apprendre, découvrir et approfondir le christianisme de manière ludique.",
  applicationName: "Juste Un",
  keywords: [
    "Juste Un",
    "Just One",
    "Christianisme",
    "Jeu chrétien",
    "Jeu biblique",
    "Mots",
    "Catéchèse",
    "Culture chrétienne",
  ],

  // Open Graph
  openGraph: {
    title: "Juste Un – Jeu de mots sur le christianisme",
    description:
      "Retrouve une version chrétienne du jeu Just One : découvre et fais découvrir des mots liés au christianisme.",
    url: "https://justeun.vercel.app",
    siteName: "Juste Un",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Juste Un – Jeu chrétien",
      },
    ],
    type: "website",
    locale: "fr_FR",
  },

  // Twitter cards
  twitter: {
    card: "summary_large_image",
    title: "Juste Un – Jeu chrétien",
    description:
      "Une adaptation chrétienne du jeu Just One pour découvrir la foi et la culture chrétienne.",
    images: ["/preview.jpg"],
  },

  // PWA
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="min-h-full bg-slate-100">
      <head>
        {/* PWA Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="white" />
        <meta name="apple-mobile-web-app-title" content="Juste Un" />

        {/* Mobile safe area */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Fallback preview */}
        <meta property="og:image" content="/preview.jpg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
         <Analytics />
      </body>
    </html>
  );
}
