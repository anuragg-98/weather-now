import React from "react";
import { useWeather } from "../context/Weather";

const Input = () => {
  const weather = useWeather();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      weather.fetchData();    }
  };
  return (
    <div>
      <input
        className="input-field"
        placeholder="Search City"
        value={weather.searchCity} 
        onChange={(e) => weather.setSearchCity(e.target.value)} onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
