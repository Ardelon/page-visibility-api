import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Color Catalog";
const description = `Color Catalog from different sources.`;
const imageUrl = `/color_catalog.webp`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/color-palette-builder",
    title,
    description,
    siteName: "Ardelon",
    images: [{ url: imageUrl, width: 600, height: 600 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: imageUrl,
  },
};
