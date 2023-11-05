import React, { useState } from "react";
import Footer from "./footer";

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
  } = props;

  let [isHide, setIsHide] = useState([true]);
  const styled = {
    display: "flex",
    flexDirection: isHide ? "column" : "row",
    height: isHide ? "204px" : "104px",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s ease",
  };
  const tempMarginStyle = { margin: isHide ? " 0 0 0 0.2em" : "0" };

  function handleHide() {
    setIsHide(!isHide);
  }
  return (
    <>
      <main className="container my-3">
        <p className="m-0 col-12 h3 ">{date}</p>
        <div className="mainCon container p-0" style={styled}>
          <div className="col-6">
            <img src={iconStatus} alt="" className="iconic" />
          </div>
          <h1 className="col-6 text-center display-1" style={tempMarginStyle}>
            {temp}
            <sup>
              <small>&deg;</small>
            </sup>
          </h1>
        </div>
        <p className="m-0 col-12 text-uppercase h3 ">{searchLocate}</p>
      </main>
      <Footer
        wind={wind}
        humidity={humidity}
        isHide={isHide}
        handleHide={handleHide}
        climateStatus={climateStatus}
        pressure={pressure}
      />
    </>
  );
}

export default Content;
