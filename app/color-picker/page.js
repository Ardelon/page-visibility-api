"use client";

import { RGBToHex, rgbToHsl } from "@/utility/rendering";
import { useEffect, useRef, useState } from "react";
function ColorPicker() {
  const canvasRef = useRef(null);
  const [color, setColor] = useState({ r: 219, g: 7, b: 61 });
  const [hslColor, setHslColor] = useState(rgbToHsl(color.r, color.g, color.b));

  useEffect(() => {
    setHslColor(rgbToHsl(color.r, color.g, color.b));
  }, [color]);

  useEffect(() => {
    var ColorCtx = canvasRef.current.getContext("2d"); // This create a 2D context for the canvas

    var { hex: color1 } = RGBToHex([color.r, color.g, color.b]);

    let gradientH = ColorCtx.createLinearGradient(
      0,
      0,
      ColorCtx.canvas.width,
      0
    );
    gradientH.addColorStop(0, "#fff");
    gradientH.addColorStop(1, color1);
    ColorCtx.fillStyle = gradientH;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

    // Create a Vertical Gradient(white to black)
    let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
    gradientV.addColorStop(0, "rgba(0,0,0,0)");
    gradientV.addColorStop(1, "#000");
    ColorCtx.fillStyle = gradientV;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);
    const pixel = ColorCtx.getImageData(200, 100, 1, 1)["data"];

    const controller = new AbortController();

    canvasRef.current.addEventListener(
      "click",
      function (event) {
        var ColorCtx = canvasRef.current.getContext("2d");
        const pixel1 = ColorCtx.getImageData(200, 100, 1, 1)["data"];
        let x = event.offsetX; // Get X coordinate
        let y = event.offsetY; // Get Y coordinate
        const pixel = ColorCtx.getImageData(x, y, 1, 1)["data"];
        console.log(pixel);
        const newHsl = rgbToHsl(pixel[0], pixel[1], pixel[2]);
        console.log(newHsl);
        setHslColor(rgbToHsl(newHsl[0], newHsl[1], newHsl[2]));
      },
      { signal: controller.signal }
    );
    return () => {
      controller.abort();
    };
  }, [color]);

  return (
    <div className="page-position">
      <h2>Color Picker</h2>
      <div className="color-picker-container">
        <div className="canvas-container">
          <canvas width="300px" height="300px" ref={canvasRef}></canvas>
        </div>
        <div className="color-value-container">
          <div className="color-input-container">
            <label>Red</label>
            <input
              value={color.r}
              onChange={(e) => {
                setColor((state) => {
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
              value={color.g}
              onChange={(e) => {
                setColor((state) => {
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
              value={color.b}
              onChange={(e) => {
                setColor((state) => {
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
            <div>{hslColor[0]}</div>
          </div>
          <div className="color-input-container">
            <label>Light</label>
            <div>{hslColor[1]}</div>
          </div>
          <div className="color-input-container">
            <label>Saturation</label>
            <div>{hslColor[2]}</div>
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
