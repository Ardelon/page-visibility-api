import { Header } from "@/components/pokemonComponents";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full xl:w-4/5 xl:my-20 m-auto xl:border-2 xl:border-gray-600 rounded-xl">
      <Header />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
    </div>
  );
}

const title = "Ardelon - Pokedex App";
const description = `Pokedex App is a simple app that allows you to view a list of Pokémon and their details.`;
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
