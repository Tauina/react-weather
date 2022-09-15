import "./Search.css";
import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function SearchCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchAPI();
  }

  function searchAPI() {
    let units = "metric";
    let apikey = `198980771e81f379fdd6a032c49dd66d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="search"
                className="form-control"
                placeholder="Enter a city"
                onChange={SearchCity}
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                value="Search"
                className="btn btn-outline-secondary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchAPI();
    return <div>Loading</div>;
  }
}
