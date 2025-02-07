import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Battery Status API";
const description = `Battery Status API is helps to reach battery status information of clients device. It is a very straightforward API but also a useful one. Potential use cases could be saving necessary data in local storages or in servers depend on application architecture. For example, if Netflix did not save the proggress on what I have been watching for the last hour and my battery died, I would be very upset to find out that Netflix did not take the necessary actions to save my data.`;
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
