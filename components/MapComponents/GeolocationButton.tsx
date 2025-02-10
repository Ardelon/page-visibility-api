import { useGeolocation } from "@/hooks/mapHooks/useGeolocation";

import { useEffect } from "react";

interface GeolocationButtonProps {
  mapInstance: maplibregl.Map;
}

function GeolocationButton(props: GeolocationButtonProps) {
  const { mapInstance } = props;
  const {
    isTriggered,
    latitude,
    longitude,
    error,
    loading,
    getCurrentLocation,
  } = useGeolocation();

  useEffect(() => {
    if (latitude && longitude) {
      mapInstance.setCenter([longitude, latitude]);
      mapInstance.setZoom(12);
    }
  }, [latitude, longitude, mapInstance]);
  return (
    <>
      <button
        onClick={getCurrentLocation}
        className="absolute top-4 left-32 bg-white p-2 rounded-lg shadow-lg z-50"
        disabled={isTriggered && loading}
      >
        {!isTriggered
          ? "Get My Location"
          : loading
          ? "Getting Location..."
          : `${latitude}, ${longitude}`}
      </button>
      {error && (
        <div className="absolute top-16 left-4 bg-red-100 text-red-700 p-2 rounded-lg shadow-lg z-50">
          {error}
        </div>
      )}
      ;
    </>
  );
}

export default GeolocationButton;
