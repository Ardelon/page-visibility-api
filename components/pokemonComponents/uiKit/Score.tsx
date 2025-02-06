import React from "react";

interface ScoreProps {
  statValue: number;
}

const Score: React.FC<ScoreProps> = ({ statValue }) => {
  const score = Math.ceil(statValue / 10);

  let arr = [];
  if (score >= 15) {
    arr = [...new Array(15).fill(1)];
  } else {
    arr = [...new Array(score).fill(1), ...new Array(15 - score).fill(0)];
  }

  return (
    <div className="flex flex-row gap-2 py-2">
      {arr.map((value, index) => {
        return (
          <div
            className={`${
              value ? "bg-[#3865d2]" : "bg-[#A8BFFC]"
            } w-3 h-3 rounded-full`}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};
export default Score;
