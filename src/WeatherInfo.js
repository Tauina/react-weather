import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="today-info">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
          <div className="text-capitalize">{props.data.description}</div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-sm-6">
          <div className="icon">
            <WeatherIcon code={props.data.icon} size="65" />
          </div>
          <div className="temp-today">{Math.round(props.data.temperature)}</div>
          <div className="unit">ºC</div>
        </div>
        <div className="col-sm-6">
          <div className="more-info">
            <div>Humidity: {props.data.humidity}%</div>
            <div>Wind: {Math.round(props.data.wind)}km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}
