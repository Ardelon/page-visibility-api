"use client";
import useBattery from "@/hooks/useBattery";

function Battery() {
  const { isCharging, chargingTime, dischargingTime, level } = useBattery();

  return (
    <div className="battery">
      <h2>Battery Page</h2>
      <p> {`Battery charging? ${isCharging ? "Yes" : "No"}`}</p>
      <p>{`Battery level: ${level * 100}%`}</p>
      <p>{`Battery charging time: ${chargingTime} seconds`}</p>
      <p>{`Battery discharging time: ${dischargingTime} seconds`}</p>
    </div>
  );
}

export default Battery;
