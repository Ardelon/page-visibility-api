import { isValidCoordinates } from "./mapUtilities";

export const updateUrlParams = (
  lat: number,
  lng: number,
  zoom: number,
  searchParams: URLSearchParams
) => {
  if (isValidCoordinates(lat, lng, zoom)) {
    const params = new URLSearchParams(searchParams);
    params.set("lat", lat.toFixed(4));

    params.set("lng", lng.toFixed(4));
    params.set("zoom", zoom.toFixed(2));
    window.history.pushState({}, "", `?${params.toString()}`);
  }
};
