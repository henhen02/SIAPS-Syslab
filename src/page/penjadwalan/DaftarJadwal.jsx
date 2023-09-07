import React from "react";
import {
  StatusTaskDone,
  StatusTaskLate,
  StatusTaskProgress,
} from "../../components/WarningContent";
import { AddButton, DetailButton } from "../../components/ActionButton";
import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarJadwal from "../../hooks/useDaftarJadwal";
import { ErrorPage, LoadingPage } from "../HandlingPages";
import { useEffect } from "react";
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";

const DaftarJadwal = () => {
  let { data, isLoading, error } = useDaftarJadwal();
  const navigate = useNavigate();

  const { mutate } = useSWRConfig();

  const [search, setSearch] = useState("");

  const [dataRender, setDataRender] = useState(data);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search != "") {
      setDataRender(
        data.filter((item) => {
          return item.instansi.toLowerCase().includes(search.toLowerCase());
        })
      );
    } else {
      mutate("/jadwal");
      setDataRender(data);
    }
  }, [search, isLoading]);
  let doneStatus = 0;
  let progressStatus = 0;
  let lateStatus = 0;

  useEffect(() => {
    setDataRender(data);
  }, [data]);
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
                <p className="action-title">Cari Tiket</p>
                <div className="search-container">
                  <div className="search-input-container">
                    <div className="input-date">
                      <input
                        type="Text"
                        name="date-start"
                        placeholder="Instansi"
                        onChange={handleChangeSearch}
                        value={search}
                      />
                    </div>
                  </div>
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
          <div className="container schedule-container">
            <div className="header">
              <div className="title-container">
                <h3 onClick={() => console.log(data)}>Jadwal</h3>
              </div>
              <div className="count-today">
                <div className="schedule-today">
                  <p>Diproses</p>
                  <h3 id="scheduleProgress">
                    {data?.map((item, index) => {
                      if (item.statusId === 1) {
                        progressStatus += 1;
                      } else if (item.statusId === 2) {
                        doneStatus += 1;
                      } else {
                        lateStatus += 1;
                      }
                    })}
                    {progressStatus}
                  </h3>
                </div>
                <div className="schedule-today">
                  <p>Selesai</p>
                  <h3 id="scheduleDone">{doneStatus}</h3>
                </div>
                <div className="schedule-today">
                  <p>Terlambat Selesai</p>
                  <h3 id="scheduleDone">{lateStatus}</h3>
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
                  {dataRender?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>{item.instansi}</td>
                        <td>
                          {new Date(item.tanggal).toLocaleDateString("id-ID", {
                            dateStyle: "long",
                          })}
                        </td>
                        <td>{item.lokasi}</td>
                        <td>{item.karyawan[0]?.nama}</td>
                        <td>
                          {item.statusId === 1 ? (
                            <StatusTaskProgress />
                          ) : item.statusId === 2 ? (
                            <StatusTaskDone />
                          ) : (
                            <StatusTaskLate />
                          )}
                        </td>
                        <td>
                          <DetailButton
                            handleInput={() => {
                              navigate(`${item?.id}`);
                            }}
                            text={"Rincian"}
                          />
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
