import React from "react";
import { AddButton, DetailButton } from "../../components/ActionButton";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarKaryawan from "../../hooks/useDaftarKaryawan";
import { ErrorPage, LoadingPage } from "../HandlingPages";

function DaftarKaryawan() {
  const { data, isLoading, error } = useDaftarKaryawan();

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
              <AddButton path={"tambahkaryawan"} text={"Tambah"} />
            </div>
          </div>
          <div className="container">
            <div className="header">
              <h2>Daftar Karyawan</h2>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Alamat</th>
                    <th>Tanggal Lahir</th>
                    <th>Telepon</th>
                    <th colSpan={2}>Jabatan</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{(index += 1)}</td>
                        <td>{item.nama}</td>
                        <td>{item.nip}</td>
                        <td>{item.alamat}</td>
                        <td>{item.telp}</td>
                        <td>{item.jabatan.jabatan}</td>
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
}

export default DaftarKaryawan;
