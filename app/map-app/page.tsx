"use client";
import { isClient } from "@/utility/rendering";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect, useState } from "react";
import Weather from "@/components/MapComponents/Weather";
import { useSearchParams } from "next/navigation";
import { getValidCoordinate, isValidCoordinates } from "@/utility/mapUtilities";

function MapApp() {
  const isMounted = isClient();
  const searchParams = useSearchParams();
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const updateUrlParams = (lat: number, lng: number, zoom: number) => {
    if (isValidCoordinates(lat, lng, zoom)) {
      const params = new URLSearchParams(searchParams);
      params.set("lat", lat.toFixed(4));
      params.set("lng", lng.toFixed(4));
      params.set("zoom", zoom.toFixed(2));
      window.history.pushState({}, "", `?${params.toString()}`);
    }
  };

  useEffect(() => {
    if (isMounted) {
      const initialLat = getValidCoordinate(searchParams.get("lat"), 0);
      const initialLng = getValidCoordinate(searchParams.get("lng"), 0);
      const initialZoom = getValidCoordinate(searchParams.get("zoom"), 1);
      const map = new maplibregl.Map({
        container: "map",
        style: "https://demotiles.maplibre.org/style.json",
        center: [initialLng, initialLat],
        zoom: initialZoom,
      });

      map.on("click", (event) => {
        setSelectedLocation(event.lngLat);
      });
      map.on("moveend", () => {
        const center = map.getCenter();
        const zoom = map.getZoom();
        updateUrlParams(center.lat, center.lng, zoom);
      });

      return () => map.remove();
    }
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="relative w-full h-full">
      <div className="absolute w-full h-full rounded-xl" id="map">
        <Weather lat={selectedLocation?.lat} lng={selectedLocation?.lng} />
        <button
          onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
          }}
          className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg z-50"
        >
          Copy Map URL
        </button>
      </div>
    </div>
  );
}

export default MapApp;
