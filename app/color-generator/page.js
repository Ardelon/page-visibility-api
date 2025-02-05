"use client";

import { getNewColor } from "@/utility/getNewColor";
import { useState } from "react";

function ColorGenerator() {
  const [colorList, setColorList] = useState(
    Array.apply(null, Array(9)).map(() => getNewColor())
  );

  const generateNewColors = () => {
    setColorList(Array.apply(null, Array(9)).map(() => getNewColor()));
  };

  return (
    <div className="page-position">
      <h2>Color Generator Page</h2>
      <button className="button" onClick={generateNewColors}>
        Generate New Colors
      </button>
      {colorList.length > 0 &&
        colorList.map((color, key) => (
          <div key={key} className="color-container">
            <label>{color}</label>
            <div
              className="color-div"
              style={{
                backgroundColor: color,
              }}
            ></div>
          </div>
        ))}
    </div>
  );
}

export default ColorGenerator;
