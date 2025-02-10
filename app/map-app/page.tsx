"use client";
import { isClient } from "@/utility/rendering";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState } from "react";
import Weather from "@/components/MapComponents/Weather";
import { useSearchParams } from "next/navigation";
import { getValidCoordinate } from "@/utility/mapUtilities";
import GeolocationButton from "@/components/MapComponents/GeolocationButton";
import CopyMapUrl from "@/components/MapComponents/CopyMapUrl";

import {
  isMapboxURL,
  transformMapboxUrl,
} from "maplibregl-mapbox-request-transformer";

const transformRequest = (
  url: string,
  resourceType: maplibregl.ResourceType | undefined
) => {
  if (isMapboxURL(url)) {
    return transformMapboxUrl(
      url,
      resourceType as string,
      process.env.MAPBOX_KEY ?? ""
    );
  }

  // Do any other transforms you want
  return { url };
};

function MapApp() {
  const isMounted = isClient();
  const searchParams = useSearchParams();
  const [mapInstance, setMapInstance] = useState<maplibregl.Map | null>(null);

  useEffect(() => {
    if (isMounted) {
      const initialLat = getValidCoordinate(searchParams.get("lat"), 0);
      const initialLng = getValidCoordinate(searchParams.get("lng"), 0);
      const initialZoom = getValidCoordinate(searchParams.get("zoom"), 1);
      const map = new maplibregl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        validateStyle: false,
        center: [initialLng, initialLat],
        zoom: initialZoom,
        transformRequest,
      });

      setMapInstance(map);

      return () => map.remove();
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full rounded-xl" id="map">
        {mapInstance && <Weather mapInstance={mapInstance} />}
        {mapInstance && <CopyMapUrl mapInstance={mapInstance} />}
        {mapInstance && <GeolocationButton mapInstance={mapInstance} />}
      </div>
    </div>
  );
}

export default MapApp;
