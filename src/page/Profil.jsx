import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { SaveButton } from "../components/ActionButton";

const Profil = () => {
  return (
    <>
      <main className="main-loged">
        <div className="container">
          <Header />
        </div>
        <div className="container details-container">
          <h3>Profil Pengguna</h3>
          <div className="edit-group">
            <div className="edit-container">
              <label htmlFor="namauser">Nama</label>
              <div className="edit-input">
                <input
                  type="text"
                  name="namauser"
                  id="namauser"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
            </div>
            <div className="edit-container">
              <label htmlFor="nipuser">NIP</label>
              <div className="edit-input">
                <input
                  type="text"
                  name="nipuser"
                  id="nipuser"
                  defaultValue={"11111111"}
                  disabled
                />
              </div>
            </div>
            <div className="edit-container">
              <label htmlFor="password">Password</label>
              <div className="edit-input">
                <input
                  type="password"
                  name="password"
                  id="password"
                  defaultValue={"********"}
                />
              </div>
            </div>
            <div className="edit-container">
              <label htmlFor="alamatuser">Alamat</label>
              <div className="edit-input">
                <input
                  type="text"
                  name="alamatuser"
                  id="alamatuser"
                  placeholder="Masukkan alamat lengkap"
                />
              </div>
            </div>
            <div className="edit-container">
              <label htmlFor="telpuser">Nomor Telepon</label>
              <div className="edit-input">
                <input
                  type="tel"
                  name="telpuser"
                  id="telpuser"
                  placeholder="Masukkan nomor telepon"
                />
              </div>
            </div>
            <div
              className="action-container"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <SaveButton text={"Simpan"} />
            </div>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Profil;
