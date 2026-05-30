import { useState } from "react";
import { weatherDataType, ApiResponse } from "../Types/weather";
export const useWeather = () => {
    const [weatherData, setWeather] = useState<weatherDataType>({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "",
    });
    // API link: https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44
    const apiKey = "e36ed364400282e43250b6c4c0274d44";
    const fetchWeather = async (city: string, country: string) => {
        const apiData = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${apiKey}`)
        const formatedData: ApiResponse = await apiData.json();
        if (city  && country ) {
            setWeather({
                temperature: formatedData.main.temp,
                city: formatedData.name,
                country: formatedData.sys.country,
                humidity: formatedData.main.humidity,
                description: formatedData.weather[0].description,
                error: ""
            });
        } else {
            setWeather({
                temperature: "",
                city: "",
                country: "",
                humidity: "",
                description: "",
                error: "Please enter data",
            });
        };  
    };
    return {weatherData, fetchWeather};
};