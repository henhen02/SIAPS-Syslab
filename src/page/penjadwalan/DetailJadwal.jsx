import React from "react";
import { useParams } from "react-router-dom";
import useDetailJadwal from "../../hooks/useDetailJadwal";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { ErrorPage, LoadingPage } from "../HandlingPages";
import { BackButton, DoneTask } from "../../components/ActionButton";
import {
  StatusTaskDone,
  StatusTaskProgress,
} from "../../components/WarningContent";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function DetailJadwal() {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailJadwal(id);
  const axiosPrivateInstance = useAxiosPrivate();
  const navigate = useNavigate();

  const handleDoneButton = async () => {
    try {
      await axiosPrivateInstance.put(`/jadwal/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      null;
    } finally {
      navigate("/penjadwalan");
    }
  };

  const handleBackButton = () => {
    navigate("/penjadwalan");
  };
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <main className="main-loged details-page">
          <div className="container">
            <Header />
          </div>
          <div className="container details-container">
            <h3>Rincian Tiket</h3>
            <div className="header">
              <p>
                <b>Tiket ID : </b>
                {data?.id.toUpperCase()}
              </p>
            </div>
            <div className="ticket-details">
              <h5>Instansi</h5>
              <p>{data?.instansi}</p>
            </div>
            <div className="ticket-details">
              <h5>Lokasi</h5>
              <p>{data?.lokasi}</p>
            </div>
            <div className="ticket-details">
              <h5>Tanggal</h5>
              <p>
                {new Date(data?.tanggal).toLocaleDateString("id-ID", {
                  dateStyle: "medium",
                })}
              </p>
            </div>
            <div className="ticket-details">
              <h5>Penanggung Jawab</h5>
              <p>{data?.pj}</p>
            </div>
            <div className="ticket-details">
              <h5>Kontak Penanggung Jawab</h5>
              <p>{data?.kontak_pj}</p>
            </div>
            <div className="ticket-details">
              <h5>Petugas</h5>
              <div className="data-sampel">
                {data?.karyawan?.map((item, index) => {
                  return <p key={index}>{item.nama}</p>;
                })}
              </div>
            </div>
            <div className="ticket-details">
              <h5>Sampel</h5>
              <div className="data-sampel">
                {data?.jenisSampel?.map((item, index) => {
                  return <p key={index}>{item.sampel}</p>;
                })}
              </div>
            </div>
            <div className="ticket-details">
              <h5>Status Tiket</h5>
              <p>
                {data?.statusId === 1 ? (
                  <StatusTaskProgress />
                ) : (
                  <StatusTaskDone />
                )}
              </p>
            </div>
            <div className="action-container">
              {data?.statusId === 2 ? (
                <></>
              ) : (
                <DoneTask text={"Selesai"} handleInput={handleDoneButton} />
              )}
              <BackButton text={"Kembali"} handleInput={handleBackButton} />
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
export default DetailJadwal;
