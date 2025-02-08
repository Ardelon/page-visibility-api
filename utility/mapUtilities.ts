export const getValidCoordinate = (
  value: string | null,
  defaultValue: number
): number => {
  const num = Number(value);
  return !isNaN(num) ? num : defaultValue;
};

export const isValidCoordinates = (lat: number, lng: number, zoom: number) => {
  return (
    lat >= -90 &&
    lat <= 90 &&
    lng >= -180 &&
    lng <= 180 &&
    zoom >= 0 &&
    zoom <= 22
  );
};
