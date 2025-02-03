"use client";
import {
  copyToClipboard,
  generateRandomKey,
  isClient,
} from "@/utility/rendering";
import { useState } from "react";

function EyeDropperPage() {
  const isBrowser = isClient();
  const [result, setResult] = useState([]);

  const openEyeDropper = () => {
    if (!window.EyeDropper) {
      alert("Your browser does not support the EyeDropper API");
      return;
    }

    const eyeDropper = new EyeDropper();
    const abortController = new AbortController();

    eyeDropper
      .open({ signal: abortController.signal })
      .then((result) => {
        setResult((s) => [result.sRGBHex, ...s].slice(0, 15));
      })
      .catch((e) => {
        alert(e.message);
      });

    setTimeout(() => {
      abortController.abort();
    }, 20000);
  };

  if (!isBrowser) return null;

  return (
    <div className="page-position">
      <h2>Eye Dropper API Page</h2>
      <div className="color-container"></div>
      <button className="button" onClick={openEyeDropper}>
        Open Eye Dropper
      </button>
      <label style={{ textAlign: "center" }}>{result[0]}</label>
      <div style={{ backgroundColor: result[0], height: "50px" }}></div>
      <div className="picked-color-container">
        {result.length > 0 &&
          result.map((color) => (
            <div
              key={generateRandomKey()}
              style={{
                height: "20px",
                width: "20px",
                backgroundColor: color,
                cursor: "pointer",
              }}
              onClick={() => copyToClipboard(color)}
            ></div>
          ))}
      </div>
    </div>
  );
}

export default EyeDropperPage;
