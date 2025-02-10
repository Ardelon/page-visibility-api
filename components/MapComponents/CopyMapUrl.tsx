import { updateUrlParams } from "@/utility/mapUtility";
import { useSearchParams } from "next/navigation";

interface CopyMapUrlProps {
  mapInstance: maplibregl.Map;
}
function CopyMapUrl(props: CopyMapUrlProps) {
  const { mapInstance } = props;
  const searchParams = useSearchParams();
  mapInstance.on("moveend", () => {
    const center = mapInstance.getCenter();
    const zoom = mapInstance.getZoom();
    updateUrlParams(center.lat, center.lng, zoom, searchParams);
  });
  return (
    <button
      onClick={() => {
        const url = window.location.href;
        navigator.clipboard.writeText(url);
      }}
      className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-lg z-50"
    >
      Copy Map URL
    </button>
  );
}

export default CopyMapUrl;
