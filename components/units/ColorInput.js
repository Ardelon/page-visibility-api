"use client";

import { hexToRGB, parseRGB, RGBToHex } from "@/utility/rendering";
import { useEffect, useRef, useState } from "react";

function ColorInput({ color, setColor }) {
  const inputRef = useRef(null);
  const [mode, setMode] = useState("hex");
  const [inputState, setInputState] = useState(color);

  const onChange = (e) => {
    setInputState(e.target.value);
  };

  const setNewColor = () => {
    if (mode === "hex") {
      const { rgb, error } = hexToRGB(inputState);
      if (!error) setColor(rgb);
    } else {
      const { rgb, error } = parseRGB(inputState);
      if (!error) setColor(rgb);
    }
  };

  useEffect(() => {
    inputRef.current.value =
      mode === "hex"
        ? RGBToHex(color).hex
        : `rgb(${color.r},${color.g},${color.b})`;
  }, [color, mode]);

  return (
    <div className="color-input">
      <label>{`Reference Color ${mode.toLocaleUpperCase()}`}</label>
      <input
        ref={inputRef}
        type="text"
        placeholder={
          mode === "hex"
            ? RGBToHex(color).hex
            : `rgb(${color.r},${color.g},${color.b})`
        }
        onChange={onChange}
      />
      <button onClick={setNewColor}>Set Color</button>
      <input
        type="checkbox"
        onChange={() => {
          setMode((mode) => {
            return mode === "hex" ? "rgb" : "hex";
          });
        }}
        checked={mode === "hex" ? false : true}
      />
    </div>
  );
}

export default ColorInput;
