import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Eye Dropper API";
const description = `Eye Dropper API is a Web API that helps to select colors from anywhere on the screen, not limited to the browser. With that, Eye Dropper API is starting point to building such applications such as Chrome Extensions. It is easy to use and control the outcome with the right UI calibration into clients needs.`;
const imageUrl = `/eye-dropper.webp`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/web-api/eye-dropper",
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
