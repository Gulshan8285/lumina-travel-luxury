import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import FilmGrain from "@/components/ui/FilmGrain";
import FloatingContact from "@/components/ui/FloatingContact";
import NavigationProgress from "@/components/ui/NavigationProgress";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Footer from "@/components/layout/Footer";
import ConditionalFooter from "@/components/layout/ConditionalFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a"
};

export const metadata: Metadata = {
  title: "SOBHAVI TRAVELS | Your journey. Our expertise.",
  description: "From quick getaways to international holidays, family vacations to special occasions - we help you plan the trip, while taking care of the details.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="dark-mode-forced">
        <Suspense fallback={null}>
          <NavigationProgress />
        </Suspense>
        <FilmGrain />
        <FloatingContact />
        <SmoothScrollProvider>
          {children}
          <ConditionalFooter>
            <Footer />
          </ConditionalFooter>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
