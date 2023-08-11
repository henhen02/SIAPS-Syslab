import React from "react";
import { useState } from "react";
import * as BiIcon from "react-icons/bi";
import Footer from "../layouts/Footer";
import SyslabLogo from "../assets/img/syslab-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Login = () => {
  const [inputType, setInputType] = useState("password");
  const [iconType, setIconType] = useState(<BiIcon.BiSolidHide />);
  const [input, setInput] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  // Password hide handler
  const handleChangedInput = (evnt) => {
    setInput(evnt.target.value);
  };
  const handleChangeVisibility = () => {
    if (inputType === "password") {
      setInputType("text");
      setIconType(<BiIcon.BiSolidShow />);
      return;
    } else {
      setInputType("password");
      setIconType(<BiIcon.BiSolidHide />);
    }
  };
  return (
    <main className="main-login">
      <div className="login-page-container">
        <div className="jumbotron">
          <div className="jumbotron-header">
            <figure>
              <img src={SyslabLogo} alt="Logo Syslab" width={100} />
            </figure>
          </div>
          <div className="jumbotron-content">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              style={{
                fontSize: "90px",
                color: "rgb(38, 37, 103)",
              }}
            >
              SI
              <span
                style={{
                  color: "rgb(61, 181, 75)",
                }}
              >
                APS
              </span>
            </h1>
            <p
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              style={{
                color: "rgb(38, 37, 103)",
              }}
            >
              Sistem Antrian Pengambilan Sampel
            </p>
          </div>
        </div>
        <div className="form-container">
          <div className="form-title">
            <h2>Login</h2>
            <p
              style={{
                fontSize: "12px",
              }}
            >
              Selamat datang di SIAPS 👋
            </p>
          </div>
          <form action="" className="login-form">
            <div className="input-container">
              <label htmlFor="username">Username</label>
              <div className="input">
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="username">Password</label>
              <div className="input input-icon">
                <input
                  type={inputType}
                  id="password"
                  onChange={handleChangedInput}
                  value={input}
                  placeholder="password"
                  required
                />
                <span onClick={handleChangeVisibility}>{iconType}</span>
              </div>
            </div>
            <input type="button" name="Login" value="Login" id="login" />
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
