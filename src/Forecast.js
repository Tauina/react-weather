import "./Forecast.css";
import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./Forecastday";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col-sm">
            <ForecastDay data={forecast[0]}/>
          </div>
        </div>
      </div>
    );
  } else {
    let units = "metric";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apikey = `198980771e81f379fdd6a032c49dd66d`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
