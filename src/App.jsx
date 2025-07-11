import Input from './components/Input'
import Card from './components/Card'
import Button from './components/Button'
import './App.css'
import { useWeather } from './context/Weather'

const App = () => {
    const weather = useWeather();
    
  return (
    <section>
      <h1>WeatherNow</h1>
      <div className="search-bar">
        <Input /> 
        <Button onClick={weather.fetchData} className="search-btn" value="Search"/>
      </div>
      <Card />
      <Button onClick={weather.clearData} value="Refresh"/>
    </section>
  )
}

export default App
