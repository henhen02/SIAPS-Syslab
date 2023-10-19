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
  const {
    data: dataDiagram,
    isLoading: loadingDiagram,
    error: errorDiagram,
  } = useDaftarJadwal;

  let countdone = 0;
  let countschedule = 0;
  let countprogress = 0;

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
      mutate("/jadwal");
      setDataRender(data);
    }
  }, [data]);
  const timenow = new Date();

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
            {datarender?.length === 0 ? (
              <>
                <div className="header">
                  <h2>Jadwal Hari Ini</h2>
                </div>
                <div className="noSchedule">
                  <h3>Tidak ada jadwal</h3>
                </div>
              </>
            ) : (
              <>
                <div className="header">
                  <div className="title-container">
                    <h2>Jadwal Hari Ini</h2>
                    <p>
                      <b>
                        {datarender?.map((item, index) => {
                          countschedule += 1;
                        })}
                        {countschedule} jadwal
                      </b>{" "}
                    </p>
                  </div>
                  <div className="count-today">
                    <div className="schedule-today">
                      <p>Selesai</p>
                      <h3 id="scheduleProgress">
                        {datarender?.map((item, index) => {
                          if (item?.statusId === 2) {
                            countdone += 1;
                          } else if (item?.statusId === 1) {
                            countprogress += 1;
                          }
                        })}
                        {countdone}
                      </h3>
                    </div>
                    <div className="schedule-today">
                      <p>Diproses</p>
                      <h3 id="scheduleDone">{countprogress}</h3>
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
                      {datarender?.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td>{item.instansi}</td>
                            <td>{item.lokasi}</td>
                            <td>{item?.karyawan[0]?.nama}</td>
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
              </>
            )}
          </div>
          <div className="container">
            <div className="header">
              <div className="title-header">
                <h3>Grafik Permintaan Sampling</h3>
                <p>
                  Periode{" "}
                  <b>
                    {"Januari"} - {"Juni"} {"2023"}
                  </b>
                </p>
              </div>
            </div>
            <div className="chart-container">
              <BarChart
                fordatasets={[countschedule, 0, 0, 0, 0]}
                forlabels={[
                  "Agustus",
                  "September",
                  "Oktober",
                  "November",
                  "Desember",
                ]}
              />
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
