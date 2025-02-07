"use client";
import PageWelcoming from "@/components/units/PageWelcoming";
import useBattery from "@/hooks/useBattery";
import { clientData } from "./data";

function Battery() {
  const { isCharging, chargingTime, dischargingTime, level } = useBattery();

  return (
    <div className="page-position">
      <PageWelcoming {...clientData} />
      <p> {`Battery charging? ${isCharging ? "Yes" : "No"}`}</p>
      <p>{`Battery level: ${level * 100}%`}</p>
      <p>{`Battery charging time: ${chargingTime} seconds`}</p>
      <p>{`Battery discharging time: ${dischargingTime} seconds`}</p>
    </div>
  );
}

export default Battery;
