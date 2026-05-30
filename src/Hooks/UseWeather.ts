import { useState } from "react";
import { weatherDataType, ApiResponse } from "../types/weather";
import { API_KEY, APP_TEXT, BASE_URL } from "../utils";

export const useWeather = () => {
  const [weatherData, setWeather] = useState<weatherDataType>({
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
  });

  const fetchWeather = async (city: string, country: string) => {
    const isDataSelected = city && country;
    const apiData = await fetch(
      BASE_URL + `/weather?q=${city}%2C${country}&appid=${API_KEY}&units=metric`,
    );
    const formatedData: ApiResponse = await apiData.json();

    // dto = Data Obj model
    const dto = {
      temperature: formatedData.main.temp,
      city: formatedData.name,
      country: formatedData.sys.country,
      humidity: formatedData.main.humidity,
      description: formatedData.weather[0].description,
      error: "",
    };

    if (isDataSelected) {
      setWeather(dto);
    } else {
      setWeather({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: APP_TEXT.errMsg,
      });
    }
  };
  const resetData = () => {
    setWeather({
      temperature: "",
      city: "",
      country: "",
      humidity: "",
      description: "",
      error: "",
    });
  };
  return { weatherData, fetchWeather, resetData };
};
