import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../providers/theme/ThemeContext";
import WeatherContext from "../providers/weather/WeatherContext";

const WeatherCard = () => {
  const { dark } = useContext(ThemeContext);
  const { weather, dispatch } = useContext(WeatherContext);

  // Input State
  const [city, setCity] = useState("");

  const getWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=5c673e73066e478e8ba72150242509&q=${city}&aqi=yes`
      );
      const data = await response.json();

      if (data.error) {
        window.alert("Enter Valid City Name!!");
      } else {
        dispatch({
          type: "GET_WEATHER",
          payload: data,
        });
      }
    } catch (error) {
      window.alert("Enter Valid City Name!!");
    }
  };

  const searchWeather = (e) => {
    e.preventDefault();
    getWeather(city);
    setCity("");
  };

  useEffect(() => {
    getWeather("Indore");
  }, []);

  return (
    <div className="col-sm-12 col-md-4">
      <div className={dark ? "card p-3 bg-dark text-light" : "card p-3"}>
        <form onSubmit={searchWeather}>
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter City Name.."
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          <button className="btn btn-success w-100 mb-2">Search Weather</button>
        </form>

        {!weather ? (
          <>
            <h1 className="text-center display-6 text-secondary">Loading...</h1>
          </>
        ) : (
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h1>{weather.current.temp_c} C</h1>
              <h2>{weather.location.name}</h2>
            </div>
            <div className="text-center">
              <img
                style={{ height: "100px", width: "100px" }}
                src={weather.current.condition.icon}
                alt=""
              />
              <p className="text-secondary">{weather.current.condition.text}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
