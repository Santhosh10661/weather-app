import { useState } from "react";
import "./WeatherApp.css";

import defaultIcon from "./icons/static svg/rainy-2.svg";
import clear_skyD from "./icons/static svg/day.svg";
import clear_skyN from "./icons/static svg/night.svg";
import few_cloudsD from "./icons/static svg/cloudy-day-1.svg";
import few_cloudsN from "./icons/static svg/cloudy-night-1.svg";
import broken_scattered_clouds from "./icons/static svg/cloudy.svg";
import rain from "./icons/static svg/rainy-6.svg";
import thunderstorm from "./icons/static svg/thunder.svg";
import snow from "./icons/static svg/snowflake-2657.svg";
import mist from "./icons/static svg/smog-solid.svg";
import Content from "./content";
import Search from "./search";
import Background from "./background";
import Background2 from "./background2";

function WeatherApp() {
  let [location, setLocation] = useState([]);
  let [temp, setTemp] = useState([]);
  let [fetchError, setFetchError] = useState("Search Any Location");
  let [searchLocate, setSearchLocate] = useState([]);
  let [date, setDate] = useState([]);
  let [iconStatus, setIconStatus] = useState([]);
  let [climateStatus, setClimateStatus] = useState([]);
  let [wind, setWind] = useState([]);
  let [humidity, setHumidity] = useState([]);
  let [pressure, setPressure] = useState([]);

  let API_KEY = "75e7bef2f7d1c7a5c61779a83b61d589";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${API_KEY}`;

  function handleChange(e) {
    setLocation(e.target.value);
  }
  function checkDate() {
    let currentDate = new Date();
    let monthDate = { month: "short", day: "numeric" };
    let year = { year: "numeric" };
    let formattedMD = currentDate.toLocaleDateString("en-US", monthDate);
    let formattedY = currentDate.toLocaleDateString("en-US", year);
    let curMD = `${formattedMD} / ${formattedY}`;
    setDate(curMD);
  }
  function changeIcon(iconValue) {
    if (iconValue === "01d" || iconValue === "01n") {
      if (iconValue === "01d") {
        setIconStatus(clear_skyD);
      } else {
        setIconStatus(clear_skyN);
      }
    } else if (iconValue === "02d" || iconValue === "02n") {
      if (iconValue === "02d") {
        setIconStatus(few_cloudsD);
      } else {
        setIconStatus(few_cloudsN);
      }
    } else if (
      iconValue === "03d" ||
      iconValue === "03n" ||
      iconValue === "04d" ||
      iconValue === "04n"
    ) {
      setIconStatus(broken_scattered_clouds);
    } else if (
      iconValue === "09d" ||
      iconValue === "09n" ||
      iconValue === "10d" ||
      iconValue === "10n"
    ) {
      setIconStatus(rain);
    } else if (iconValue === "11d" || iconValue === "11n") {
      setIconStatus(thunderstorm);
    } else if (iconValue === "13d" || iconValue === "13n") {
      setIconStatus(snow);
    } else if (iconValue === "50d" || iconValue === "50n") {
      setIconStatus(mist);
    } else {
      setIconStatus(defaultIcon);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(url);
      if (!response.ok) throw new Error("Data Not Found");
      let result = await response.json();
      setTemp(Math.floor(result.main.temp));
      setSearchLocate(result.name);
      setClimateStatus(result.weather[0].description);
      setWind(Math.floor(result.wind.speed));
      setHumidity(result.main.humidity);
      setPressure(result.main.pressure);
      let iconValue = result.weather[0].icon;
      changeIcon(iconValue);
      checkDate();
      setFetchError(null);
      setLocation([]); /*<< return to default empty input */
    } catch (err) {
      switch (err.message) {
        case "Data Not Found":
          setFetchError("Enter Valid Location");
          break;
        case "Failed to fetch":
          setFetchError("Check Your Internet Connection");
          break;
        default:
          setFetchError(err.message);
      }
      setSearchLocate([]);
    } finally {
    }
  };
  return (
    <div className="container-fluid weatherApp">
      <div className="weatherBoard col-12 col-sm-8 col-md-7 col-lg-6 col-xl-4 col-xxl-3 py-3 px-4">
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          location={location}
        />
        <div className="detailsCon text-center">
          {fetchError && <p className="m-0">{fetchError}</p>}
          <div className="contentCon row text-center">
            {!fetchError && (
              <Content
                date={date}
                searchLocate={searchLocate}
                iconStatus={iconStatus}
                temp={temp}
                climateStatus={climateStatus}
                wind={wind}
                humidity={humidity}
                pressure={pressure}
              />
            )}
          </div>
        </div>
      </div>
      <Background />
      <Background2 />
    </div>
  );
}

export default WeatherApp;
