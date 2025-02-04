export default function Layout({ children }) {
  return <>{children} </>;
}

export const metadata = {
  title: "Ardelon - Color Catalog",
  description: "Color Catalog from different sources.",
  openGraph: {
    type: "website",
    url: "https://ardelon.com/color-palette-builder",
    title: "Ardelon - Color Catalog",
    description: "Color Catalog from different sources.",
    siteName: "Ardelon",
    images: [{ url: `/color_catalog.webp`, width: 600, height: 600 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ardelon - Color Catalog",
    description: "Color Catalog from different sources.",
    images: `/color_catalog.webp`,
  },
};
