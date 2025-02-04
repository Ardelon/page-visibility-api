export default function Metadata({ title, description }) {
  return (
    <>
      <title>{"Ardelon - Color Palette Builder"}</title>
      <meta
        name="description"
        content={
          "Color Palette Builder that helps to fint tint, shadow and tone values of given color."
        }
      />
      <meta
        property="og:url"
        content="https://ardelon.com/color-palette-builder"
      ></meta>
      <meta
        property="og:title"
        content="Ardelon - Color Palette Builder"
      ></meta>
      <meta
        name="og:description"
        content={
          "Color Palette Builder that helps to fint tint, shadow and tone values of given color."
        }
      />
      <meta name="og:image" content={"/color_wheel.webp"} />
    </>
  );
}
