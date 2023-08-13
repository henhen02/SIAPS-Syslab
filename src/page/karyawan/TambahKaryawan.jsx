import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

function TambahKaryawan() {
  return (
    <>
      <main className="main-loged details-page">
        <div className="container">
          <Header />
        </div>
        <div className="container details-container"></div>
        <div className="container">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default TambahKaryawan;
