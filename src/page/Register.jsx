import React from "react";
import { useState } from "react";
import Footer from "../layouts/Footer";
import SyslabLogo from "../assets/img/syslab-logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
  const [nip, setNip] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [telp, setTelp] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const Daftar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8080/user/register", {
        nip: nip,
        nama: nama,
        alamat: alamat,
        telp: telp,
        password: password,
      });
    } catch (error) {}
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
            <h2>Regsiter</h2>
          </div>
          <form onSubmit={Daftar} className="login-form">
            <div className="input-container">
              <label htmlFor="nip">NIP</label>
              <div className="input">
                <input
                  id="nip"
                  type="text"
                  placeholder="NIP"
                  value={nip}
                  onChange={(e) => {
                    setNip(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="nama">Nama Lengkap</label>
              <div className="input">
                <input
                  type="text"
                  id="nama"
                  placeholder="nama"
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="alamat">Alamat</label>
              <div className="input">
                <input
                  type="text"
                  id="alamat"
                  placeholder="alamat"
                  value={alamat}
                  onChange={(e) => {
                    setAlamat(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="kontak">No Telepon</label>
              <div className="input">
                <input
                  type="text"
                  id="kontak"
                  placeholder="kontak"
                  value={telp}
                  onChange={(e) => {
                    setTelp(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <div className="input-container">
              <label htmlFor="username">Password</label>
              <div className="input">
                <input
                  type="password"
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <input type="button" name="Login" value="Daftar" id="login" />
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
