import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarKaryawan from "../../hooks/useDaftarKaryawan";

function BuatJadwal() {
  const [total, setTotal] = useState(1);
  const { data, isLoading, error } = useDaftarKaryawan();

  const SelectKaryawan = () => {
    return (
      <>
        {(index = total) => {
          return (
            <select key={index}>
              {data?.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.nama}
                  </option>
                );
              })}
            </select>
          );
        }}
      </>
    );
  };

  useEffect(() => console.log(total), [total]);

  return (
    <>
      <main className="main-loged details-page">
        <div className="container">
          <Header />
        </div>
        <div className="container details-container">
          <form action="" className="form-new-schedule">
            <h3
              onClick={() => {
                console.log(data);
              }}
            >
              Buat Jadwal Baru
            </h3>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="instansi">Instansi Tujuan</label>
                <div className="edit-input">
                  <input type="text" name="instansi" id="instansi" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="instansi">Alamat</label>
                <div className="edit-input">
                  <input type="text" name="alamat" id="alamat" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="tanggal">Tanggal</label>
                <div className="edit-input">
                  <input type="date" name="tanggal" id="tanggal" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="pj">Penanggung Jawab</label>
                <div className="edit-input">
                  <input type="text" name="pj" id="pj" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="cpj">Kontak Penanggung Jawab</label>
                <div className="edit-input">
                  <input type="tel" name="cpj" id="cpj" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="instansi">Engineer</label>
                <div className="edit-input">
                  <select
                    name="total-engineer"
                    id="total-engineer"
                    onChange={(e) => {
                      setTotal(e.target.value);
                    }}
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
                <label htmlFor="instansi">Engineer</label>
                <div className="edit-input">
                  <SelectKaryawan />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="instansi">Instansi Tujuan</label>
                <div className="edit-input">
                  <input type="text" name="instansi" id="instansi" />
                </div>
              </div>
            </div>
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="instansi">Instansi Tujuan</label>
                <div className="edit-input">
                  <input type="text" name="instansi" id="instansi" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default BuatJadwal;
