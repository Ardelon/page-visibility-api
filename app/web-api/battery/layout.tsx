import { ReactNode } from "react";
import { clientData } from "./data";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const { title, description } = clientData;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/web-api/battery",
    title,
    description,
    siteName: "Ardelon",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};
