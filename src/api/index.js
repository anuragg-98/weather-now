const baseURL = "http://api.weatherapi.com/v1/current.json?key=43ba9d9cf6d24b0f92d44609251505";

export const getWeatherDataForCity = async(city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
    return await response.json();
};