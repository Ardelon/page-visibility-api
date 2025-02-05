"use client";

import { copyToClipboard, generateRandomKey } from "@/utility/rendering";
import { useState } from "react";

const { default: StepCounter } = require("../widgets/StepCouter");

function DisplayTints({ color }) {
  const [steps, setSteps] = useState(10);

  const tints = Array.from({ length: steps }, (_, index) => {
    return `rgb(${Math.floor(
      color.r + ((255 - color.r) / steps) * (index + 1)
    )}, ${Math.floor(
      color.g + ((255 - color.g) / steps) * (index + 1)
    )}, ${Math.floor(color.b + ((255 - color.b) / steps) * (index + 1))})`;
  });
  tints.unshift(`rgb(${color.r}, ${color.g}, ${color.b})`);

  return (
    <div className="tint-container">
      <div className="control-panel">
        <h3>Tints</h3>
        <StepCounter stepCount={steps} setStepCount={setSteps} maxStep={20} />
      </div>
      <div className="palette-container">
        {tints.map((tint) => (
          <div
            className="palette-div"
            key={generateRandomKey()}
            style={{ background: tint }}
            onClick={() => copyToClipboard(tint)}
          >
            <div className="palette-label">{tint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTints;
