import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
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
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER} />
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS} />
      <Script async crossOrigin="anonymous" src={process.env.GOOGLE_AD_SENSE} />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          {children}
          <footer className={styles.footer}>
            <Link href="/web-api/music" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Music
            </Link>
            <Link href="/web-api/video" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Video
            </Link>
            <Link href="/web-api/timer" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Timer
            </Link>
            <Link href="/web-api/battery" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Battery
            </Link>
            <Link href="/web-api/device" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Device
            </Link>
            <Link href="/color-generator" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Color Generator
            </Link>
            <Link href="/web-api/eye-dropper" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Eye Dropper API
            </Link>
            {/* <Link href="/color-palette-builder" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Color Palette Builder
            </Link> */}
          </footer>
        </div>
      </body>
    </html>
  );
}
