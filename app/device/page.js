"use client";

function Device() {
  const RAMRef = navigator.deviceMemory;

  return (
    <div className="battery">
      <h2>Device Page</h2>
      <p>{`Your device has approximately ${RAMRef} GB of RAM `}</p>
    </div>
  );
}

export default Device;
