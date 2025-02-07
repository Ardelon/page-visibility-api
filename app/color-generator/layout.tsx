import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Color Generator";
const description = `Generating random colors on demand. It can be copied easily in hex code format. `;
const imageUrl = `/color-generator.webp`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/color-generator",
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
