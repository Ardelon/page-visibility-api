import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Device Memory API";
const description = `Device Memory API is helps to determine clients RAM capacity with privacy. API gives average RAM capacity to protect clients anonimity and has upper limits to 8 GB of RAM to protect clients anonimity even further. Even though it gives inexplicit results, API can be utilized into serving different versions of applications or even components best suited for the clients needs and his/her devices capabilities.`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/web-api/device",
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
