import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import styles from "./page.module.css";
import { GoogleTagManager } from "@next/third-parties/google";
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
      <GoogleTagManager gtmId="GTM-N58DZ4KH" />
      <GoogleTagManager gtmId="G-ZB551XM599" />

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          {children}
          <footer className={styles.footer}>
            <a href="music" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Music
            </a>
            <a href="video" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Video
            </a>
            <a href="timer" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Timer
            </a>
            <a href="battery" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              Battery
            </a>
            <a href="device" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Device
            </a>
            <a href="color-generator" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Color Generator
            </a>
            <a href="eye-dropper" rel="noopener noreferrer">
              <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
              />
              Eye Dropper API
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
