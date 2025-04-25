import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata = {
  title: "ZeroTek - Solar & Electrical Solutions",
  description: "Professional solar, battery, and electrical solutions for residential and commercial properties",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/png" />
      </head>
      <body
        className={`${sourceSans.variable} font-sans antialiased bg-white overflow-x-hidden`}
      >
        <div className="w-full overflow-x-hidden">
          <Navigation />
          <main className="min-h-screen w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
