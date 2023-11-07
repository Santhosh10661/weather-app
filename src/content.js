import React, { useState } from "react";
import Footer from "./footer";
import Forecast from "./forecast";

function Content(props) {
  let {
    temp,
    climateStatus,
    wind,
    humidity,
    pressure,
    iconStatus,
    searchLocate,
    date,
    forecastList,
  } = props;

  let [isMoreHide, setIsMoreHide] = useState([true]);
  let [isForecastHide, setIsForecastHide] = useState([true]);
  const mainConStyle = {
    display: "flex",
    flexDirection: !isMoreHide || !isForecastHide ? "row" : "column",
    height: !isMoreHide || !isForecastHide ? "104px" : "204px",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s ease",
  };
  const tempMarginStyle = {
    margin: isMoreHide && isForecastHide ? " 0 0 0 0.2em" : "0",
  };

  function handleMoreHide() {
    if (!isForecastHide) {
      setIsForecastHide(!isForecastHide);
      setIsMoreHide(!isMoreHide);
    } else {
      setIsMoreHide(!isMoreHide);
    }
  }
  function handleForecastHide() {
    if (!isMoreHide) {
      setIsMoreHide(!isMoreHide);
      setIsForecastHide(!isForecastHide);
    } else {
      setIsForecastHide(!isForecastHide);
    }
  }
  return (
    <>
      <main className="container my-3">
        <p className="m-0 col-12 h3 ">{date}</p>
        <div className="mainCon container p-0" style={mainConStyle}>
          <div className="col-6">
            <img src={iconStatus} alt="" className="iconic" />
          </div>
          <h1 className="col-6 text-center display-1" style={tempMarginStyle}>
            {temp}
            <sup>
              <small>&deg;</small>
            </sup>
            <small>c</small>
          </h1>
        </div>
        <p className="m-0 col-12 text-uppercase h3 ">{searchLocate}</p>
      </main>
      <Footer
        wind={wind}
        humidity={humidity}
        isMoreHide={isMoreHide}
        handleMoreHide={handleMoreHide}
        climateStatus={climateStatus}
        pressure={pressure}
      />
      <Forecast
        forecastList={forecastList}
        isForecastHide={isForecastHide}
        handleForecastHide={handleForecastHide}
      />
    </>
  );
}

export default Content;
