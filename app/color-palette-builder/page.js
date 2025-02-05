"use client";
import ColorInput from "@/components/units/ColorInput";
import DisplayShadows from "@/components/units/DisplayShadows";
import DisplayTints from "@/components/units/DisplayTints";
import DisplayTones from "@/components/units/DisplayTones";
import { useState } from "react";

function ColorPaletteBuilder() {
  const [color, setColor] = useState({ r: 219, g: 7, b: 61 });
  return (
    <>
      <div className="page-position color-palette-container ">
        <h2>Color Paletter Builder</h2>
        <ColorInput color={color} setColor={setColor} />
        <DisplayTints color={color} />
        <DisplayShadows color={color} />
        <DisplayTones color={color} />
      </div>
    </>
  );
}

export default ColorPaletteBuilder;
