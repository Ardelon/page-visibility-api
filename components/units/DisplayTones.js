"use client";

import { generateRandomKey } from "@/utility/rendering";
import { useState } from "react";

const { default: StepCounter } = require("../widgets/StepCouter");

function DisplayTones({ color }) {
  const [steps, setSteps] = useState(10);

  const tones = Array.from({ length: steps }, (_, index) => {
    return `rgb(${Math.floor(
      color.r + ((128 - color.r) / steps) * (index + 1)
    )}, ${Math.floor(
      color.g + ((128 - color.g) / steps) * (index + 1)
    )}, ${Math.floor(color.b + ((128 - color.b) / steps) * (index + 1))})`;
  });
  tones.unshift(`rgb(${color.r}, ${color.g}, ${color.b})`);

  return (
    <div className="tone-container">
      <div className="control-panel">
        <h3>Tones</h3>
        <StepCounter stepCount={steps} setStepCount={setSteps} maxStep={20} />
      </div>
      <div className="palette-container">
        {tones.map((tone) => (
          <div
            className="palette-div"
            key={generateRandomKey()}
            style={{ background: tone }}
          >
            <div className="palette-label">{tone}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTones;
