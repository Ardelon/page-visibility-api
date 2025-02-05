"use client";

import ColorPickerWidget from "@/components/widgets/ColorPickerWidget";
import { hslToRgb, isClient, RGBToHex, rgbToHsl } from "@/utility/rendering";
import { useEffect, useState } from "react";
function ColorPicker() {
  const mounted = isClient();
  const [rgbColor, setRgbColor] = useState({ r: 219, g: 7, b: 61 });
  const [hslColor, setHslColor] = useState(
    rgbToHsl({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b })
  );
  const [hexColor, setHexColor] = useState(
    RGBToHex({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b }.hex)
  );
  const [updateHsl, setUpdateHsl] = useState(false);
  const [updateRgb, setUpdateRgb] = useState(false);

  useEffect(() => {
    setHexColor(RGBToHex({ r: rgbColor.r, g: rgbColor.g, b: rgbColor.b }).hex);
    if (updateRgb) {
      setRgbColor(hslToRgb(hslColor));
      setUpdateRgb(false);
    }
    if (updateHsl) {
      setHslColor(rgbToHsl(rgbColor));
      setUpdateHsl(false);
    }
  }, [rgbColor, hslColor, updateHsl, updateRgb]);

  if (!mounted) return null;
  return (
    <div className="page-position">
      <h2>Color Picker</h2>
      <div className="color-picker-container">
        <ColorPickerWidget
          hue={Number(hslColor.h)}
          setHslColor={setHslColor}
          setUpdateRgb={setUpdateRgb}
        />
        <div className="color-value-container">
          <div className="color-input-container">
            <label>Red</label>
            <input
              value={rgbColor.r}
              onChange={(e) => {
                setUpdateHsl(true);
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
                setUpdateHsl(true);
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
                setUpdateHsl(true);
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

            background: `hsl(${hslColor.h * 360},${hslColor.s * 100}%,${
              hslColor.l * 100
            }%)`,
          }}
        ></div>
        <div className="hex-container">
          <p>{hexColor}</p>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
