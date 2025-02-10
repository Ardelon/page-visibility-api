import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Header from "@/components/websiteComponents/Header";
import Footer from "@/components/websiteComponents/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ardelon.com"),
  title: "Ardelon - Home Page",
  description: "Ardelon portfolio and demo website",
  applicationName: "Ardelon Portfolio",
  authors: "Alihan Keskin",
  keywords: ["Next.js", "React", "demo", "portfolio"],
  keywords: "Next.js",
  creator: "Alihan Keskin",
  publisher: "Vercel",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://ardelon.com",
    title: "Ardelon - Home Page",
    description: "Ardelon portfolio and demo website",
    siteName: "Ardelon",
    images: [
      {
        url: "/og_logo.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardelon - Home Page",
    description: "Ardelon portfolio and demo website",
    images: "/og_logo.jpg",
  },
};

export const viewport = {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {process.env.GoogleTagManager && (
        <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER} />
      )}
      {process.env.GOOGLE_ANALYTICS && (
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
      )}
      {process.env.GOOGLE_AD_SENSE && (
        <Script
          async
          crossOrigin="anonymous"
          src={process.env.GOOGLE_AD_SENSE}
        />
      )}

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header className={"z-50"} />
        <div className={"page-layout z-40"}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
