import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ChatButton from '@/components/ChatButton';

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata = {
  title: {
    default: "ZeroTek - Solar & Electrical Solutions",
    template: "%s | ZeroTek"
  },
  description: "Professional solar, battery, and electrical solutions for residential and commercial properties. Expert installations, maintenance, and sustainable energy solutions across the UK.",
  keywords: "solar panels, battery storage, electrical services, renewable energy, sustainable solutions, solar installation, EV charging, MVHR systems, UK solar company",
  authors: [{ name: "ZeroTek" }],
  creator: "ZeroTek",
  publisher: "ZeroTek",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zerotek.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ZeroTek - Solar & Electrical Solutions",
    description: "Professional solar, battery, and electrical solutions for residential and commercial properties",
    url: "https://zerotek.co.uk",
    siteName: "ZeroTek",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZeroTek - Sustainable Energy Solutions",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroTek - Solar & Electrical Solutions",
    description: "Professional solar, battery, and electrical solutions for residential and commercial properties",
    images: ["/images/twitter-image.jpg"],
    creator: "@zerotek",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${sourceSans.variable} font-sans antialiased bg-white overflow-x-hidden`}
      >
        <div className="w-full overflow-x-hidden">
          <Navigation />
          <main className="min-h-screen w-full">{children}</main>
          <ChatButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
