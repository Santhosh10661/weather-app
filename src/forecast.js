import React from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

function Forecast(props) {
  let { forecastList, isForecastHide, handleForecastHide } = props;
  const forecaststyle = {
    flexDirection: "column",
    fontSize: "14px",
    height: isForecastHide ? "25px" : "120px",
    padding: isForecastHide ? "0px 8px" : "4px 8px",
    transition: " 0.4s ease",
  };

  return (
    <div className="forecastCon d-flex col-12" style={forecaststyle}>
      {isForecastHide ? (
        <div
          className="d-flex justify-content-between align-items-center m-0 px-1 col-12 "
          style={{ fontSize: "14px", fontWeight: "500" }}
        >
          <p className="m-0">Upcoming Forecast</p>
          <IoIosAdd onClick={handleForecastHide} className="add" />
        </div>
      ) : (
        <div
          className="d-flex justify-content-between align-items-center m-0 px-1 col-12 "
          style={{ height: "fit-content", fontSize: "14px", fontWeight: "500" }}
        >
          <p className="m-0 ">Upcoming Forecast</p>
          <IoIosRemove onClick={handleForecastHide} className="minus" />
        </div>
      )}
      {!isForecastHide && (
        <nav className="forecastList">
          <ul
            className="d-flex justify-content-between p-0 m-2"
            style={{ width: "fit-content" }}
          >
            {forecastList.map((li, index) => {
              let dateAndTime = new Date(li.dt * 1000);
              let simpleDTFormat = format(dateAndTime);

              function format(dateAndTime) {
                let month = { month: "short" };
                let date = { day: "numeric" };
                let formattedM = dateAndTime.toLocaleDateString("en-US", month);
                let formattedD = dateAndTime.toLocaleDateString("en-US", date);
                let monthAndDate = `${formattedM}/${formattedD}`;

                let hours = dateAndTime.getHours();
                let minutes = dateAndTime.getMinutes();
                let time = `${hours}:${minutes}`;

                return `${monthAndDate} - ${time}`;
              }

              return (
                <li
                  key={index}
                  className="d-flex justify-content-between align-items-center mx-1"
                  style={{
                    width: "150px",
                    listStyle: "none",
                    flexDirection: "column",
                  }}
                >
                  <span>{simpleDTFormat}</span>
                  <h3 className="fw-bolder m-0 my-1">
                    {Math.floor(li.main.temp)}&deg;<small>c</small>
                  </h3>
                  <small className="text-capitalize">
                    {li.weather[0].description}
                  </small>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Forecast;
