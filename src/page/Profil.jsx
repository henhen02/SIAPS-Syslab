import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import useDetailKaryawan from "../hooks/useDetailKaryawan";
import { ErrorPage, LoadingPage } from "./HandlingPages";
import { useParams } from "react-router-dom";

function Profil() {
  const id = "1690a3cc-eb4a-4a03-ad9f-e314d47a6d83";
  const {
    data: datakaryawan,
    isLoading: loadingkaryawan,
    error: errorkaryawan,
  } = useDetailKaryawan(id);
  if (errorkaryawan) {
    return <ErrorPage />;
  }
  return (
    <>
      {loadingkaryawan ? (
        <LoadingPage />
      ) : (
        <main className="main-loged details-page">
          <div className="container">
            <Header />
          </div>
          <div className="container details-container">
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="nama">Nama</label>
                <div className="edit-input">
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    defaultValue={datakaryawan?.nama}
                  />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="nip">NIP</label>
                <div className="edit-input">
                  <input
                    type="text"
                    id="nip"
                    name="nip"
                    defaultValue={datakaryawan?.nip}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="alamat">Alamat</label>
                <div className="edit-input">
                  <input
                    type="text"
                    id="alamat"
                    name="alamat"
                    defaultValue={datakaryawan?.alamat}
                  />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="jabatan">Jabatan</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="jabatan"
                    id="jabatan"
                    defaultValue={datakaryawan?.jabatan.jabatan}
                    disabled
                  />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="nomor-telp">Telepon</label>
                <div className="edit-input">
                  <input
                    type="telp"
                    name="nomor-telp"
                    id="nomor-telp"
                    defaultValue={datakaryawan?.telp}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

export default Profil;
