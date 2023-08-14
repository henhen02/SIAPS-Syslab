import React from "react";
import { useUser } from "../hooks/useUser";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Profil = () => {
  const { user } = useUser();

  return (
    <>
      <main className="main-loged">
        <div className="container">
          <Header />
        </div>
        <div className="container details-container">
          {/* <div className="details-group">
            <div className="details-title">
              <label htmlFor="nama">Nama</label>
            </div>
            <div className="details-content">
              <input
                type="text"
                name="nama"
                id="nama"
                defaultValue={user?.nama}
              />
            </div>
          </div>
          <div className="details-group">
            <div className="details-title">
              <label htmlFor="nip">NIP</label>
            </div>
            <div className="details-content">
              <input type="text" name="nip" id="nip" defaultValue={user?.nip} />
            </div>
          </div>
          <div className="details-group">
            <div className="details-title">
              <label htmlFor="jabatan">Jabatan</label>
            </div>
            <div className="details-content">{user?.jabatanId}</div>
          </div>
          <div className="details-group">
            <div className="details-title">
              <label htmlFor="alamat">Alamat</label>
            </div>
            <div className="details-content">
              <input
                type="text"
                nama="alamat"
                id="alamat"
                defaultValue={user?.alamat}
              />
            </div>
          </div>
          <div className="details-group">
            <div className="details-title">
              <label htmlFor="nama">Nomor Telepon</label>
            </div>
            <div className="details-content">
              <input
                type="text"
                name="telp"
                id="telp"
                defaultValue={user?.telp}
              />
            </div>
          </div>*/}
          <div className="coming-soon">
            <h1>Fitur ini belum tersedia</h1>
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
