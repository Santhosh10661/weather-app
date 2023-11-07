import React from "react";
import { WiHumidity } from "react-icons/wi";
import { PiWindBold } from "react-icons/pi";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { BsThermometerHalf } from "react-icons/bs";
import { IconContext } from "react-icons";

function Footer(props) {
  let { wind, humidity, pressure, handleMoreHide, isMoreHide, climateStatus } =
    props;
  let footerstyle = {
    fontWeight: "500",
    background: "#fff",
    color: "#00a9ff",
    borderRadius: "20px",
    height: isMoreHide ? "25px" : "140px",
    padding: isMoreHide ? "0px 8px" : "4px 8px",
    transition: " 0.4s ease",
    overflow: "hidden",
  };

  return (
    <footer
      className="col-12 d-flex flex-wrap justify-content-center"
      style={footerstyle}
    >
      {isMoreHide ? (
        <div className="d-flex justify-content-between align-items-center m-0 px-1 col-12 ">
          <p className="m-0">More</p>
          <IoIosAdd onClick={handleMoreHide} className="add" />
        </div>
      ) : (
        <div
          className="d-flex justify-content-between align-items-center m-0 px-1 col-12 "
          style={{ height: "fit-content" }}
        >
          <p className="m-0">More</p>
          <IoIosRemove onClick={handleMoreHide} className="minus" />
        </div>
      )}

      {!isMoreHide && (
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            opacity: isMoreHide ? "0.5" : "1",
          }}
        >
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
        </div>
      )}
    </footer>
  );
}

export default Footer;
