import React from "react";
import { useUser } from "../hooks/useUser";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Profil = () => {
  const { user } = useUser();

  return (
    <main className="main-loged">
      <div className="container">
        <Header />
      </div>
      <div className="container details-container">
        <div className="details-group">
          <div className="details-title">
            <label htmlFor="nama">Nama</label>
          </div>
          <div className="details-content">
            <input type="text" id="nama" defaultValue={user?.nama} />
          </div>
        </div>
        <div className="details-group">
          <div className="details-title">
            <label htmlFor="nip">NIP</label>
          </div>
          <div className="details-content">
            <input type="text" id="nip" defaultValue={user?.nip} />
          </div>
        </div>
        <div className="details-group">
          <div className="details-title">
            <label htmlFor="jabatan">Jabatan</label>
          </div>
          <div className="details-content">
            <select name="jabatan" id="jabatan">
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="details-group">
          <div className="details-title">
            <label htmlFor="nama">Nama</label>
          </div>
          <div className="details-content">
            <input type="text" id="nama" defaultValue={user?.nama} />
          </div>
        </div>
        <div className="details-group">
          <div className="details-title">
            <label htmlFor="nama">Nama</label>
          </div>
          <div className="details-content">
            <input type="text" id="nama" defaultValue={user?.nama} />
          </div>
        </div>
      </div>
      <div className="container">
        <Footer />
      </div>
    </main>
  );
};

export default Profil;
