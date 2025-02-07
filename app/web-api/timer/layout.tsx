import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Page Visibility API (Timer Example)";
const description = `Page Visibility API helps to determine if application is visible to the client or not. That information gives applications to know when to reduce hardware needs and improve (at least do not limit) performance clients computer. Other than that, Page Visibility API can be used for advertisement have been seen or not by the clients. Because if clients would not se the advertisement, there is no reason to pay to the website. In order to detect that, Page Visibility API can be utilized. In this example, I choose different invertalled timers, both of them start and stops relative to the pages visibility by the user.`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/web-api/timer",
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
