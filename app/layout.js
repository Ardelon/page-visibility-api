import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import Link from "next/link";
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
        url: "https://example.com/og.png",
      },
    ],
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
        <div className={"page-layout"}>
          {children}
          <footer className={"footer"}>
            <Link href="/" rel="noopener noreferrer" className="link">
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Home Page
            </Link>
            <Link
              href="/pokemon-app?page=1"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Pokemon
            </Link>
            <Link
              href="/web-api/intersection-observer"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Intersection Observer API
            </Link>
            <Link
              href="/color-picker"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Color Picker
            </Link>
            <Link
              href="/color-catalog"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Color Catalog
            </Link>
            <Link
              href="/color-generator"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Color Generator
            </Link>
            <Link
              href="/web-api/eye-dropper"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Eye Dropper API
            </Link>
            <Link
              href="/color-palette-builder"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Color Palette Builder
            </Link>
            <Link
              href="/web-api/music"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Music
            </Link>
            <Link
              href="/web-api/video"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Video
            </Link>
            <Link
              href="/web-api/timer"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Timer
            </Link>
            <Link
              href="/web-api/battery"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Battery
            </Link>
            <Link
              href="/web-api/device"
              rel="noopener noreferrer"
              className="link"
            >
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Device
            </Link>
          </footer>
        </div>
      </body>
    </html>
  );
}
