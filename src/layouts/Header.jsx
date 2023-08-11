import React from "react";
import SyslabLogo from "../assets/img/syslab-logo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState(new Date());
  // time handler
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="header">
      <div className="title-container">
        <figure>
          <img src={SyslabLogo} alt="syslab-logo" width={100} />
        </figure>
      </div>
      <div className="date-time">
        <div className="day-container">
          <p
            id="hari"
            style={{
              fontSize: "11px",
            }}
          >
            {time.toLocaleString("id-ID", { dateStyle: "full" })}
          </p>
        </div>
        <div className="time-container">
          <p id="jam">
            <b>
              {time.toLocaleTimeString("en-US", {
                formatMatcher: "best fit",
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
