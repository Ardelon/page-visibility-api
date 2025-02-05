"use client";

import { RGBToHex, rgbToHsl } from "@/utility/rendering";
import { useEffect, useRef } from "react";

function ColorPickerWidget({ rgbColor, setRgbColor }) {
  const canvasRef = useRef(null);
  const canvasColorRef = useRef(null);

  useEffect(() => {
    var ColorCtx = canvasRef.current.getContext("2d");

    var { hex: color } = RGBToHex({
      r: rgbColor.r,
      g: rgbColor.g,
      b: rgbColor.b,
    });

    let gradientH = ColorCtx.createLinearGradient(
      0,
      0,
      ColorCtx.canvas.width,
      0
    );
    gradientH.addColorStop(0, "#fff");
    gradientH.addColorStop(1, color);
    ColorCtx.fillStyle = gradientH;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

    let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
    gradientV.addColorStop(0, "rgba(0,0,0,0)");
    gradientV.addColorStop(1, "#000");
    ColorCtx.fillStyle = gradientV;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

    const controller = new AbortController();

    canvasRef.current.addEventListener(
      "click",
      function (event) {
        var ColorCtx = canvasRef.current.getContext("2d");
        let x = event.offsetX; // Get X coordinate
        let y = event.offsetY; // Get Y coordinate
        const pixel = ColorCtx.getImageData(x, y, 1, 1)["data"];
        const newHsl = rgbToHsl(pixel[0], pixel[1], pixel[2]);
        // setHslColor(rgbToHsl(newHsl[0], newHsl[1], newHsl[2]));
      },
      { signal: controller.signal }
    );
    return () => {
      controller.abort();
    };
  }, [rgbColor]);

  useEffect(() => {
    var ColorCtx = canvasColorRef.current.getContext("2d");

    let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 300);
    for (let i = 0; i < 360; i++) {
      gradientV.addColorStop(i / 360 || 0, `hsl(${i},100%,50%)`);
      gradientV.addColorStop((i + 1) / 360, `hsl(${i + 1},100%,50%)`);
    }

    ColorCtx.fillStyle = gradientV;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);
  }, [rgbColor]);

  return (
    <>
      <div className="canvas-container">
        <canvas width="300px" height="300px" ref={canvasRef}></canvas>
        <canvas width="50px" height="300px" ref={canvasColorRef}></canvas>
      </div>
    </>
  );
}

export default ColorPickerWidget;
