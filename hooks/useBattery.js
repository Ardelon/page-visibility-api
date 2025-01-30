"use client";
import { useEffect, useState } from "react";

function useBattery() {
  const [batteryStatus, setBatteryStatus] = useState({
    isCharging: false,
    chargingTime: 0,
    dischargingTime: 0,
    level: 0,
  });

  const [batteryRef, setBatteryRef] = useState(null);

  useEffect(() => {
    (async () => {
      const battery = await navigator.getBattery();
      if (battery) {
        setBatteryStatus((state) => ({
          ...state,
          isCharging: battery.charging,
          level: battery.level,
          chargingTime: battery.chargingTime,
          dischargingTime: battery.dischargingTime,
        }));
        setBatteryRef(battery);
      }
    })();
  }, []);

  useEffect(() => {
    const chargingChangeHandler = (e) => {
      setBatteryStatus((state) => ({
        ...state,
        isCharging: e.currentTarget.charging,
      }));
    };
    const levelChangeHandler = (e) => {
      setBatteryStatus((state) => ({
        ...state,
        level: e.currentTarget.level,
      }));
    };
    const chargingTimeChangeHandler = (e) => {
      setBatteryStatus((state) => ({
        ...state,
        chargingTime: e.currentTarget.chargingTime,
      }));
    };
    const dischargingTimeChangeHandler = (e) => {
      setBatteryStatus((state) => ({
        ...state,
        chargingTime: e.currentTarget.dischargingTime,
      }));
    };
    const applyEventListeners = (battery) => {
      battery.addEventListener("chargingchange", chargingChangeHandler);
      battery.addEventListener("levelchange", levelChangeHandler);
      battery.addEventListener("chargingtimechange", chargingTimeChangeHandler);
      battery.addEventListener(
        "dischargingtimechange",
        dischargingTimeChangeHandler
      );
    };
    const removeEventListeners = (battery) => {
      battery.removeEventListeners("chargingchange", chargingChangeHandler);
      battery.removeEventListeners("levelchange", levelChangeHandler);
      battery.removeEventListeners(
        "chargingtimechange",
        chargingTimeChangeHandler
      );
      battery.removeEventListeners(
        "dischargingtimechange",
        dischargingTimeChangeHandler
      );
    };
    if (batteryRef) {
      applyEventListeners(batteryRef);
    }
    return () => {
      if (batteryRef && batteryRef.removeEventListener) {
        removeEventListeners(batteryRef);
      }
    };
  }, [batteryRef]);

  return batteryStatus;
}
export default useBattery;
