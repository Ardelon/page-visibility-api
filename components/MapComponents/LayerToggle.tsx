import { Map } from "maplibre-gl";
import { useState } from "react";

const mapStyles = {
  streets: "mapbox://styles/mapbox/streets-v12",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
  dark: "mapbox://styles/mapbox/dark-v11",
};

type LayerToggleProps = {
  mapInstance: Map;
};

export default function LayerToggle({ mapInstance }: LayerToggleProps) {
  const [currentStyle, setCurrentStyle] = useState("streets");

  const changeMapStyle = (styleKey: keyof typeof mapStyles) => {
    mapInstance.setStyle(mapStyles[styleKey]);
    setCurrentStyle(styleKey);
  };

  return (
    <div className="absolute top-28 left-4 bg-white rounded-lg shadow-md p-2">
      <select
        value={currentStyle}
        onChange={(e) =>
          changeMapStyle(e.target.value as keyof typeof mapStyles)
        }
        className="px-2 py-1 border rounded"
      >
        <option value="streets">Streets</option>
        <option value="satellite">Satellite</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}
