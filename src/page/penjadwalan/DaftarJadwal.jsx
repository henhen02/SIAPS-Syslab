import React from "react";
import {
  StatusTaskDone,
  StatusTaskProgress,
} from "../../components/WarningContent";
import {
  AddButton,
  DetailButton,
  SearchButton,
} from "../../components/ActionButton";
import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarJadwal from "../../hooks/useDaftarJadwal";
import { ErrorPage, LoadingPage } from "../HandlingPages";

const DaftarJadwal = () => {
  const { data, isLoading, error } = useDaftarJadwal();

  const [task, setTask] = useState(1);
  const myFunc = () => {
    alert("Cari apa kontol?");
  };

  if (error) {
    return <ErrorPage />;
  }
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <main className="main-loged">
          <div className="container">
            <Header />
          </div>
          <div className="container">
            <div className="action-container">
              <div className="action-type">
                <p className="action-title">Rentang waktu percarian jadwal</p>
                <div className="search-container">
                  <div className="search-input-container">
                    <div className="input-date">
                      <input type="date" name="date-start" />
                    </div>
                    <p>hingga</p>
                    <div className="input-date">
                      <input type="date" name="date-end" />
                    </div>
                  </div>
                  <SearchButton func={myFunc} text={"Cari"} />
                </div>
              </div>
              <div className="action-type">
                <p className="action-title">Buat jadwal baru</p>
                <div className="add-data">
                  <AddButton path={"jadwalbaru"} text={"Tambah"} />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header">
              <div className="title-container">
                <h3>Jadwal</h3>
                <p>
                  Periode <b>{"Agustus 2023"}</b>
                </p>
              </div>
              <div className="count-today">
                <div className="schedule-today">
                  <p>Diproses</p>
                  <h3 id="scheduleProgress">{22}</h3>
                </div>
                <div className="schedule-today">
                  <p>Selesai</p>
                  <h3 id="scheduleDone">{1}</h3>
                </div>
              </div>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Instansi</th>
                    <th>Tanggal</th>
                    <th>Lokasi</th>
                    <th>Petugas</th>
                    <th colSpan={2}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>{item.instansi}</td>
                        <td>
                          {new Date(item.tanggal).toLocaleDateString("id-ID", {
                            dateStyle: "medium",
                          })}
                        </td>
                        <td>{item.lokasi}</td>
                        <td>{"Kontol"}</td>
                        <td>
                          {item.statusId === 1 ? (
                            <StatusTaskProgress />
                          ) : (
                            <StatusTaskDone />
                          )}
                        </td>
                        <td>
                          <DetailButton path={`${item.id}`} text={"Rincian"} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default DaftarJadwal;
