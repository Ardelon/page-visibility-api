"use client";

import { rgbToHsl } from "@/utility/rendering";
import { useEffect, useRef } from "react";

function ColorPickerWidget(props) {
  const { hue, setHslColor, setUpdateRgb } = props;
  const canvasRef = useRef(null);
  const canvasColorRef = useRef(null);

  useEffect(() => {
    var ColorCtx = canvasRef.current.getContext("2d");

    let gradientH = ColorCtx.createLinearGradient(
      0,
      0,
      ColorCtx.canvas.width,
      0
    );
    gradientH.addColorStop(0, "#fff");
    gradientH.addColorStop(1, `hsl(${hue * 360}, 100%,50%)`);
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
        let x = event.offsetX;
        let y = event.offsetY;
        const pixel = ColorCtx.getImageData(x, y, 1, 1)["data"];
        const newHsl = rgbToHsl({
          r: Number(pixel[0]),
          g: Number(pixel[1]),
          b: Number(pixel[2]),
        });
        setHslColor({ h: hue, s: newHsl.s, l: newHsl.l });
        setUpdateRgb(true);
      },
      { signal: controller.signal }
    );
    return () => {
      controller.abort();
    };
  }, [hue]);

  useEffect(() => {
    var ColorCtx = canvasColorRef.current.getContext("2d");

    let gradientV = ColorCtx.createLinearGradient(0, 0, 0, 350);
    for (let i = 0; i < 360; i++) {
      gradientV.addColorStop(i / 360 || 0, `hsl(${i},100%,50%)`);
      gradientV.addColorStop((i + 1) / 360, `hsl(${i + 1},100%,50%)`);
    }

    ColorCtx.fillStyle = gradientV;
    ColorCtx.fillRect(0, 0, ColorCtx.canvas.width, ColorCtx.canvas.height);

    canvasColorRef.current.addEventListener("click", function (e) {
      var ColorCtx = canvasColorRef.current.getContext("2d");
      let x = e.offsetX;
      let y = e.offsetY;
      const pixel = ColorCtx.getImageData(x, y, 1, 1)["data"];
      const newHsl = rgbToHsl({
        r: Number(pixel[0]),
        g: Number(pixel[1]),
        b: Number(pixel[2]),
      });
      setHslColor(newHsl);
      setUpdateRgb(true);
    });
  }, []);

  return (
    <>
      <div className="canvas-container">
        <canvas
          width="350px"
          height="350px"
          ref={canvasRef}
          className="inline-block"
        ></canvas>
        <canvas
          width="50px"
          height="350px"
          ref={canvasColorRef}
          className="inline-block"
        ></canvas>
      </div>
    </>
  );
}

export default ColorPickerWidget;
