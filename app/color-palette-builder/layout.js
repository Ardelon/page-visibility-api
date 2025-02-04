export default function Layout({ children }) {
  return <>{children} </>;
}

export const metadata = {
  title: "Ardelon - Color Palette Builder",
  description:
    "Color Palette Builder that helps to fint tint, shadow and tone values of given color.",
  openGraph: {
    type: "website",
    url: "https://ardelon.com/color-palette-builder",
    title: "Ardelon - Home Page",
    description:
      "Color Palette Builder that helps to fint tint, shadow and tone values of given color.",
    siteName: "Ardelon",
    images: [
      {
        url: "/color_wheel.webp",
      },
    ],
  },
};
