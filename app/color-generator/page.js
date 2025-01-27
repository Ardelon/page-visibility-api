"use client";

import { getNewColor } from "@/utility/getNewColor";
import { useEffect, useState } from "react";

function ColorGenerator() {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    Notification.requestPermission().then((result) => {
      console.log(result);
      navigator.setAppBadge(12);
    });
  }, []);
  const generateNewColors = () => {
    setColorList(Array.apply(null, Array(9)).map(() => getNewColor()));
  };
  return (
    <div className="battery">
      <h2>Color Generator Page</h2>
      <button className="button" onClick={generateNewColors}>
        Generate New Colors
      </button>
      {colorList.length > 0 &&
        colorList.map((color) => (
          <div className="color-container">
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
