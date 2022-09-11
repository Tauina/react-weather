import "./Forecast.css";
import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let units = "metric";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apikey = `198980771e81f379fdd6a032c49dd66d`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col-sm">
          <div className="forecast-day">Wed</div>
          <WeatherIcon code="01d" size="35" />
          <div className="forecast-temp">
            <span className="forecast-temp-max">24º</span>
            <span className="forecast-temp-min">20º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
