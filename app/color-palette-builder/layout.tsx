import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Color Palette Builder";
const description = `Color Palette Builder that helps to fint tint, shadow and tone values of given color.`;
const imageUrl = `/color_wheel.webp`;
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
