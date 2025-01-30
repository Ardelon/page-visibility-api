"use client";
import { isClient } from "@/utility/rendering";

function Device() {
  const isBrowser = isClient();

  return (
    <div className="battery">
      <h2>Device Page</h2>
      {isBrowser ? (
        <>
          <p>{`Your device has approximately ${navigator.deviceMemory} GB of RAM `}</p>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Device;
