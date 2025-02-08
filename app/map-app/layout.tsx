import PageWelcoming from "@/components/units/PageWelcoming";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-position ">
      <PageWelcoming title={title} description={description} />
      <div className="h-full height-full w-full xl:my-10 m-auto xl:border-2 xl:border-gray-600 rounded-xl">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}

const title = "Ardelon - Map Application";
const description = `Map App is a simple map app that allows you to search for a location and get the weather information of that location.`;
const imageUrl = `/map.webp`;
export const metadata = {
  title,
  description,

  openGraph: {
    type: "website",
    url: "https://ardelon.com/map-app",
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
