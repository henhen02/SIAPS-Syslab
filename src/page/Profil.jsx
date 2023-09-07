import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
// import useUserProfile from "../hooks/useUserProfile";

const Profil = () => {
  // const { data, isLoading, error } = useUserProfile();

  return (
    <>
      <main className="main-loged">
        <div className="container">
          <Header />
        </div>
        <div className="container details-container">
          <div className="edit-container">
            <label htmlFor="nama">Nama</label>
            <div className="edit-input">
              <input type="text" name="nama" id="nama" defaultValue={"Nama"} />
            </div>
          </div>
          <div className="edit-container">
            <label htmlFor="nama">Nama</label>
            <div className="edit-input">
              <input type="text" name="nama" id="nama" defaultValue={"Nama"} />
            </div>
          </div>
          <div className="edit-container">
            <label htmlFor="nama">Nama</label>
            <div className="edit-input">
              <input type="text" name="nama" id="nama" defaultValue={"Nama"} />
            </div>
          </div>
          <div className="edit-container">
            <label htmlFor="nama">Nama</label>
            <div className="edit-input">
              <input type="text" name="nama" id="nama" defaultValue={"Nama"} />
            </div>
          </div>
          <div className="edit-container">
            <label htmlFor="nama">Nama</label>
            <div className="edit-input">
              <input type="text" name="nama" id="nama" defaultValue={"Nama"} />
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
