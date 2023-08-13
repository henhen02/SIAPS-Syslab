import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarKaryawan from "../../hooks/useDaftarKaryawan";
import useJenisSampel from "../../hooks/useJenisSampel";
import { SaveButton } from "../../components/ActionButton";
import { LoadingPage } from "../HandlingPages";

function BuatJadwal() {
  const [total, setTotal] = useState(1);
  const [totalsampel, setTotalsampel] = useState(1);
  const {
    data: datakaryawan,
    isLoading: datakaryawanloading,
    error: datakaryawanerror,
  } = useDaftarKaryawan();
  const {
    data: datasampel,
    isLoading: datasampelloading,
    error: datasampelerror,
  } = useJenisSampel();

  const SelectKaryawan = ({ text }) => {
    return (
      <>
        <label htmlFor="petugas">{text}</label>
        <select name="petugas" className=" select-many">
          {datakaryawan?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.nama}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const SelectSampel = ({ text }) => {
    return (
      <>
        <label htmlFor="sampel">{text}</label>
        <select name="sampel" className="select-many">
          {datasampel?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.sampel}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const [jumlahElementKaryawan, setJumlahElementKaryawan] = useState([
    <SelectKaryawan key={0} />,
  ]);

  const [jumlahElementSampel, setJumlahElementSampel] = useState([
    <SelectSampel key={0} />,
  ]);

  const handleChangejumlahKaryawan = (e) => {
    setTotal(parseInt(e.target.value));
  };

  const handleChangejumlahSampel = (e) => {
    setTotalsampel(parseInt(e.target.value));
  };

  useEffect(() => {
    const elementKaryawan = [];
    for (let i = 0; i < total; i++) {
      elementKaryawan.push(
        <SelectKaryawan
          key={i}
          text={total > 1 ? "Enginner " + (i + 1) : "Engineer"}
        />
      );
    }
    setJumlahElementKaryawan(elementKaryawan);
  }, [total, datakaryawanloading]);

  useEffect(() => {
    const elementSampel = [];
    for (let i = 0; i < totalsampel; i++) {
      elementSampel.push(
        <SelectSampel
          key={i}
          text={totalsampel > 1 ? "Sampel " + (i + 1) : "Sampel"}
        />
      );
    }
    setJumlahElementSampel(elementSampel);
  }, [totalsampel, datasampelloading]);

  return (
    <>
      {datakaryawanloading && datasampelloading ? (
        <LoadingPage />
      ) : (
        <main className="main-loged details-page">
          <div className="container">
            <Header />
          </div>
          <div className="container details-container">
            <form action="" className="form-new-schedule">
              <h3
                onClick={() => {
                  console.log(useJenisSampel(datasampel));
                }}
              >
                Buat Jadwal Baru
              </h3>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="instansi">Instansi Tujuan</label>
                  <div className="edit-input">
                    <input type="text" name="instansi" id="instansi" required />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="instansi">Alamat</label>
                  <div className="edit-input">
                    <input type="text" name="alamat" id="alamat" required />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="tanggal">Tanggal</label>
                  <div className="edit-input">
                    <input type="date" name="tanggal" id="tanggal" required />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="pj">Penanggung Jawab</label>
                  <div className="edit-input">
                    <input type="text" name="pj" id="pj" required />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="cpj">Kontak Penanggung Jawab</label>
                  <div className="edit-input">
                    <input type="tel" name="cpj" id="cpj" required />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="jumlah-engineer">Jumlah Engineer</label>
                  <div className="edit-input">
                    <select
                      name="jumlah-engineer"
                      id="jumlah-engineer"
                      onChange={handleChangejumlahKaryawan}
                      required
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <div className="edit-input">
                    {jumlahElementKaryawan.map((item) => {
                      return item;
                    })}
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="jumlah-sampel">Jumlah sampel</label>
                  <div className="edit-input">
                    <select
                      name="jumlah-sampel"
                      id="jumlah-sampel"
                      onChange={handleChangejumlahSampel}
                      required
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <div className="edit-input">
                    {jumlahElementSampel.map((item) => {
                      return item;
                    })}
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <SaveButton text={"Simpan"} />
              </div>
            </form>
          </div>
          <div className="container">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

export default BuatJadwal;
