import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import { useEffect } from "react";

interface WeatherProps {
  lat: number | undefined;
  lng: number | undefined;
}

function Weather(props: WeatherProps) {
  const { lat, lng } = props;
  const { weather, loading, error, fetchWeather } = useWeather();
  console.log(lat, lng);
  useEffect(() => {
    if (typeof lat === "number" && typeof lng === "number") {
      fetchWeather(lat, lng);
    }
  }, [lat, lng]);

  return (
    <>
      {loading && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
          Loading weather data...
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg text-red-500 z-50">
          {error}
        </div>
      )}
      {weather && (
        <div className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
          <h2 className="text-lg font-bold">{weather.location.name}</h2>
          <p className="text-sm text-gray-600">{weather.location.country}</p>
          <div className="flex items-center mt-2">
            <Image
              src={`https:${weather.current.condition.icon}`}
              alt="Weather icon"
              width={48}
              height={48}
            />
            <div className="ml-2">
              <p className="text-xl font-semibold">
                {weather.current.temp_c}°C
              </p>
              <p>{weather.current.condition.text}</p>
            </div>
          </div>
          <div className="mt-2 text-sm">
            <p>Humidity: {weather.current.humidity}%</p>
            <p>Wind: {weather.current.wind_kph} km/h</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
