"use client";
import PageWelcoming from "@/components/units/PageWelcoming";
import { isClient } from "@/utility/rendering";
import { clientData } from "./data";

function Device() {
  const isBrowser = isClient();

  if (!isBrowser) return null;
  return (
    <div className="page-position">
      <PageWelcoming {...clientData} />
      <p>{`Your device has approximately ${navigator.deviceMemory} GB of RAM `}</p>
    </div>
  );
}

export default Device;
