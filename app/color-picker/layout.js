export default function Layout({ children }) {
  return <>{children} </>;
}

const title = "Ardelon - Color Picker";
const description = "Color picker with canvas.";

export const metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://ardelon.com/color-picker",
    title,
    description,
    siteName: "Ardelon",
    images: [{ url: `/color_catalog.webp`, width: 600, height: 600 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: `/color_catalog.webp`,
  },
};
