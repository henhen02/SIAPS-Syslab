import React from "react";
import Footer from "../layouts/Footer";
import {
  StatusTaskProgress,
  StatusTaskDone,
} from "../components/WarningContent";
import BarChart from "../layouts/BarChart";
import Header from "../layouts/Header";
import useDaftarJadwal from "../hooks/useDaftarJadwal";
import { ErrorPage, LoadingPage } from "./HandlingPages";
import { useState } from "react";
import { useEffect } from "react";
import { mutate } from "swr";

export default function Beranda() {
  const { data, isLoading, error } = useDaftarJadwal();
  let countdone = 0;
  let countprogress = 0;
  let countlate = 0;

  const [datarender, setDataRender] = useState(data);

  useEffect(() => {
    if (data) {
      setDataRender(
        data.filter((item) => {
          return new Date(item.tanggal)
            .toLocaleString("id-ID", { dateStyle: "medium" })
            .includes(
              timenow.toLocaleString("id-ID", {
                dateStyle: "medium",
              })
            );
        })
      );
    } else {
      mutate("http://127.0.0.1:8080/jadwal");
      setDataRender(data);
    }
  }, [data]);
  const timenow = new Date();

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
          <div className="container schedule-content">
            <div className="header">
              <div className="title-container">
                <h2
                  onClick={() => {
                    console.log(
                      data?.map((item) => {
                        return new Date(item.tanggal).toLocaleString("id-ID", {
                          dateStyle: "medium",
                        });
                      })
                    );
                  }}
                >
                  Jadwal Hari Ini
                </h2>
                <p>
                  <b>
                    {data?.map((item, index) => {
                      countprogress += 1;
                    })}
                    {countprogress} jadwal
                  </b>{" "}
                  untuk diselesaikan
                </p>
              </div>
              <div className="count-today">
                <div className="schedule-today">
                  <p>Diproses</p>
                  <h3 id="scheduleProgress">{countprogress}</h3>
                </div>
                <div className="schedule-today">
                  <p>Selesai</p>
                  <h3 id="scheduleDone">{countdone}</h3>
                </div>
              </div>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Instansi</th>
                    <th>Lokasi</th>
                    <th>Petugas</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.instansi}</td>
                        <td>{item.lokasi}</td>
                        <td>{item.user[0].nama}</td>
                        <td>
                          {item.statusId === 1 ? (
                            <StatusTaskProgress />
                          ) : (
                            <StatusTaskDone />
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="container">
            <div className="header">
              <div className="title-header">
                <h3>Grafik Kinerja</h3>
                <p>
                  Periode{" "}
                  <b>
                    {"Januari"} - {"Juni"} {"2023"}
                  </b>
                </p>
              </div>
            </div>
            <div className="chart-container">
              <BarChart />
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
