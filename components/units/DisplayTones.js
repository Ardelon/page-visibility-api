"use client";

import { generateRandomKey } from "@/utility/rendering";
import { useState } from "react";

const { default: StepCounter } = require("../widgets/StepCouter");

function DisplayTones({ color }) {
  const [steps, setSteps] = useState(10);

  const tones = Array.from({ length: steps }, (_, index) => {
    return `rgb(${Math.floor(
      color[0] + ((128 - color[0]) / steps) * (index + 1)
    )}, ${Math.floor(
      color[1] + ((128 - color[1]) / steps) * (index + 1)
    )}, ${Math.floor(color[2] + ((128 - color[2]) / steps) * (index + 1))})`;
  });
  tones.unshift(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);

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
