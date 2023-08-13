import React from "react";
import * as BiIcon from "react-icons/bi";
import Footer from "../layouts/Footer";
import SyslabLogo from "../assets/img/syslab-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../../utils/axios";
import { ErrorPage } from "./HandlingPages";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const { user, setUser } = useUser();

  const [data, setData] = useState({
    nip: "",
    password: "",
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [loading, setLoading] = useState(true);

  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axiosInstance.post("/api/auth/login", data, {
        withCredentials: true,
      }).then;
    } catch (err) {
      return <ErrorPage />;
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
              <label htmlFor="nip">NIP</label>
              <div className="input">
                <input type="text" id="nip" placeholder="NIP" required />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="pass">Password</label>
              <div className="input input-icon">
                <input
                  type={inputType}
                  id="password"
                  onChange={handleChangedInput}
                  value={input}
                  placeholder="********"
                  required
                />
                <span onClick={handleChangeVisibility}>{iconType}</span>
              </div>
            </div>
            <input type="button" name="Login" value="Login" id="login" />
            <div className="register-button">
              <p>Belum punya akun?</p>
              <Link to={"/register"}>Daftar</Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;
