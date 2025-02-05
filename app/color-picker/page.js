"use client";

import ColorPickerWidget from "@/components/widgets/ColorPickerWidget";
import { isClient, RGBToHex, rgbToHsl } from "@/utility/rendering";
import { useEffect, useRef, useState } from "react";
function ColorPicker() {
  const mounted = isClient();
  const [rgbColor, setRgbColor] = useState({ r: 219, g: 7, b: 61 });
  const [hslColor, setHslColor] = useState(
    rgbToHsl({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b })
  );
  const [hexColor, setHexColor] = useState(
    RGBToHex({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b })
  );

  useEffect(() => {
    setHslColor(rgbToHsl({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b }));
    setHexColor(RGBToHex({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b }));
  }, [rgbColor]);

  if (!mounted) return null;
  return (
    <div className="page-position">
      <h2>Color Picker</h2>
      <div className="color-picker-container">
        <ColorPickerWidget rgbColor={rgbColor} setrgbColor={setRgbColor} />
        <div className="color-value-container">
          <div className="color-input-container">
            <label>Red</label>
            <input
              value={rgbColor.r}
              onChange={(e) => {
                setRgbColor((state) => {
                  return {
                    ...state,
                    r: Math.min(Math.max(Number(e.target.value), 0), 255),
                  };
                });
              }}
            />
          </div>
          <div className="color-input-container">
            <label>Green</label>
            <input
              value={rgbColor.g}
              onChange={(e) => {
                setRgbColor((state) => {
                  return {
                    ...state,
                    g: Math.min(Math.max(Number(e.target.value), 0), 255),
                  };
                });
              }}
            />
          </div>
          <div className="color-input-container">
            <label>Blue</label>
            <input
              value={rgbColor.b}
              onChange={(e) => {
                setRgbColor((state) => {
                  return {
                    ...state,
                    b: Math.min(Math.max(Number(e.target.value), 0), 255),
                  };
                });
              }}
            />
          </div>
        </div>
        <div className="hsl-container">
          <div className="color-input-container">
            <label>Hue</label>
            <div>{hslColor.h}</div>
          </div>
          <div className="color-input-container">
            <label>Light</label>
            <div>{hslColor.s}</div>
          </div>
          <div className="color-input-container">
            <label>Saturation</label>
            <div>{hslColor.l}</div>
          </div>
        </div>
        <div
          style={{
            height: "100px",

            background: `hsl(${hslColor[0] * 360},${hslColor[1] * 100}%,${
              hslColor[2] * 100
            }%)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default ColorPicker;
