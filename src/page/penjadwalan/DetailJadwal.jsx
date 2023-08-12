import React from "react";
import { useParams } from "react-router-dom";
import useDetailJadwal from "../../hooks/useDetailJadwal";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { ErrorPage, LoadingPage } from "../HandlingPages";

function DetailJadwal() {
  const { id } = useParams();
  const { data, isLoading, error } = useDetailJadwal(id);

  if (error) {
    return <ErrorPage />;
  }

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
