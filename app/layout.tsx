import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCallButton } from "@/components/MobileCallButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { cn } from "@/lib/utils";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://arizonawomenspecialists.com"),
  title: {
    default: "Arizona Women Specialists | Expert OBGYN & Weight Loss",
    template: "%s | Arizona Women Specialists"
  },
  description: "Personalized obstetrics, gynecology, and doctor-supervised medical weight loss programs in Phoenix and Glendale, AZ.",
  keywords: ["OBGYN Phoenix", "Women's Health Glendale", "Medical Weight Loss AZ", "Pregnancy Care Phoenix", "Gynecology Arizona"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arizonawomenspecialists.com",
    siteName: "Arizona Women Specialists",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arizona Women Specialists"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arizona Women Specialists",
    description: "Expert women's healthcare and medical weight loss in Arizona.",
    images: ["/og-image.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, "antialiased")}>
        <AuthProvider>
          <SchemaMarkup />
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <MobileCallButton />
        </AuthProvider>
      </body>
    </html>
  );
}
