"use client";

import { copyToClipboard, generateRandomKey } from "@/utility/rendering";
import { useState } from "react";

const { default: StepCounter } = require("../widgets/StepCouter");

function DisplayShadows({ color }) {
  const [steps, setSteps] = useState(10);

  const shadows = Array.from({ length: steps }, (_, index) => {
    return `rgb(${Math.floor(
      color[0] - (color[0] / steps) * (index + 1)
    )}, ${Math.floor(
      color[1] - (color[1] / steps) * (index + 1)
    )}, ${Math.floor(color[2] - (color[2] / steps) * (index + 1))})`;
  });
  shadows.unshift(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);

  return (
    <div className="shadow-container">
      <div className="control-panel">
        <h3>Shadows</h3>
        <StepCounter stepCount={steps} setStepCount={setSteps} maxStep={20} />
      </div>
      <div className="palette-container">
        {shadows.map((shadow) => (
          <div
            className="palette-div"
            key={generateRandomKey()}
            style={{ background: shadow }}
            onClick={() => copyToClipboard(shadow)}
          >
            <div className="palette-label">{shadow}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayShadows;
