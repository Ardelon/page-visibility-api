"use client";

import PageWelcoming from "@/components/units/PageWelcoming";
import { getNewColor } from "@/utility/getNewColor";
import { useState } from "react";
import { clientData } from "./data";

function ColorGenerator() {
  const [colorList, setColorList] = useState(
    Array.apply(null, Array(9)).map(() => getNewColor())
  );

  const generateNewColors = () => {
    setColorList(Array.apply(null, Array(9)).map(() => getNewColor()));
  };

  return (
    <div className="page-position">
      <PageWelcoming {...clientData} />
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
