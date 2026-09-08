import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import FilmGrain from "@/components/ui/FilmGrain";
import FloatingContact from "@/components/ui/FloatingContact";
import NavigationProgress from "@/components/ui/NavigationProgress";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Footer from "@/components/layout/Footer";
import ConditionalFooter from "@/components/layout/ConditionalFooter";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0f19"
};

export const metadata: Metadata = {
  title: "SOBHAVI TRAVELS | Your journey. Our expertise.",
  description: "From quick getaways to international holidays, family vacations to special occasions - we help you plan the trip, while taking care of the details.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", sizes: "any" },
      { url: "/favicon-32x32.png?v=4", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=4", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=4", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=4",
    apple: [
      { url: "/apple-touch-icon.png?v=4", sizes: "180x180", type: "image/png" },
    ],
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
        <link rel="icon" href="/favicon.ico?v=4" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=4" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=4" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=4" />
      </head>
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
