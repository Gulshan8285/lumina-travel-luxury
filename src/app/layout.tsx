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
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
