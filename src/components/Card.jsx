import React from 'react'
import { useWeather } from '../context/Weather'

const Card = () => {
    const weather = useWeather();
  return (
    <div className="card">
      <img src={weather.data?.current?.condition?.icon} />
      <p>{weather.data?.current?.condition?.text}</p>
      <h1>{weather.data?.current?.temp_c} °C<span style={{fontWeight: '300', fontSize: '2rem'}}> / {weather.data?.current?.temp_f}°F</span></h1>
      <h4>{weather?.data?.location?.name},  .{weather?.data?.location?.region}, {weather?.data?.location?.country}</h4>
    </div>
  )
}

export default Card
