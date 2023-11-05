import React from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { BsThermometerHalf } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer(props) {
  let { wind, humidity, pressure, handleHide, isHide, climateStatus } = props;
  let styled = {
    fontWeight: "500",
    background: isHide ? "transparent" : "#fff",
    color: isHide ? "#fff" : "#00a9ff",
    borderRadius: "20px",
    height: isHide ? "25px" : "140px",
    opacity: isHide ? "0.8" : "1",
    transition: " 0.4s ease",
  };

  return (
    <footer
      className="col-12 d-flex flex-wrap justify-content-center"
      style={styled}
    >
      {isHide ? (
        <p className="m-0 col-12">
          <IoIosArrowUp onClick={handleHide} className="arrow" />
        </p>
      ) : (
        <p className="m-0 col-12 " style={{ height: "fit-content" }}>
          <IoIosArrowDown onClick={handleHide} className="arrow" />
        </p>
      )}

      {!isHide && (
        <>
          <p className="col-12 m-0 text-capitalize">{climateStatus}</p>
          <div className="col-6 d-flex justify-content-center align-items-center ">
            <IconContext.Provider value={{ className: "windIcon" }}>
              <PiWindBold />
            </IconContext.Provider>
            <div>
              <p className="mx-2 my-0 ">{`${wind}km/h`}</p>
              <p className="mx-2 my-0 ">Wind</p>
            </div>
          </div>
          <div className="col-6 d-flex justify-content-center align-items-center ">
            <IconContext.Provider value={{ className: "humidityIcon" }}>
              <WiHumidity />
            </IconContext.Provider>
            <div>
              <p className="mx-1 my-0 ">{`${humidity}%`}</p>
              <p className="mx-1 my-0 ">Humidity</p>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center ">
            <IconContext.Provider value={{ className: "pressureIcon" }}>
              <BsThermometerHalf />
            </IconContext.Provider>
            <div>
              <p className="mx-1 my-0 ">{`${pressure} mbar`}</p>
              <p className="mx-1 my-0 ">Pressure</p>
            </div>
          </div>
        </>
      )}
    </footer>
  );
}

export default Footer;
