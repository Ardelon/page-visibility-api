import PageWelcoming from "@/components/units/PageWelcoming";
import { Suspense } from "react";

const title = "Ardelon - QR App";
const description = `QR App is a simple app that allows you to generate multiple QR codes and export them. It is a demo application and later will be integrated with ai style generated qr codes.`;
const imageUrl = `/qr_code.webp`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full height-full-app xl:w-4/5 xl:my-20 m-auto xl:border-2 xl:border-gray-600 rounded-xl">
      <PageWelcoming title={title} description={description} />
      <Suspense>{children}</Suspense>
    </div>
  );
}

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/qr-app",
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
