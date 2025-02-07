import { Header } from "@/components/pokemonComponents";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-4/5 my-20 m-auto border-2 border-gray-600 rounded-xl">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
    </div>
  );
}

const title = "Ardelon - Pokedex App";
const description = `Battery Status API is helps to reach battery status information of clients device. It is a very straightforward API but also a useful one. Potential use cases could be saving necessary data in local storages or in servers depend on application architecture. For example, if Netflix did not save the proggress on what I have been watching for the last hour and my battery died, I would be very upset to find out that Netflix did not take the necessary actions to save my data.`;
const imageUrl = `/pokedex.webp`;
export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/pokemon-app",
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
