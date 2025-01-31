import DisplayShadows from "@/components/units/DisplayShadows";
import DisplayTints from "@/components/units/DisplayTints";
import DisplayTones from "@/components/units/DisplayTones";

function ColorPaletteBuilder() {
  return (
    <div className="battery">
      <h2>Color Paletter Builder</h2>
      <DisplayTints color={[219, 7, 61]} />
      <DisplayShadows color={[219, 7, 61]} />
      <DisplayTones color={[219, 7, 61]} />
    </div>
  );
}

export default ColorPaletteBuilder;
