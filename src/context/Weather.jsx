import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";
const WeatherContext = createContext(null);
export const useWeather = () => {
    return useContext(WeatherContext);
}

export const WeatherProvider = (props) => {
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity] = useState(null);
    const fetchData = async() => {
        const response = await getWeatherDataForCity(searchCity);
        setData(response)
    }
    const clearData = () => {
        setData(null);
        console.log(data);
        setSearchCity("");
        
    }

    return(
        <WeatherContext.Provider value={{data, searchCity, setSearchCity, fetchData, clearData}}>
            {props.children}
        </WeatherContext.Provider>
    )
}