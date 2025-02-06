import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return <>{children} </>;
}

const title = "Ardelon - Intersection Observer API";
const description = ` Web API Intersection Observer API example using React custom hooks. In
        the demo, there is multiple React Elements that initialized with
        useIntersectionObserver hook and their relative counter increases
        everytime the blocks became visible according to intersection observer
        hook.At the same time, their background tone darkens as the counter
        increase.`;
const imageUrl = `/intersection_observer.webp`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/web-api/intersection-observer",
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
