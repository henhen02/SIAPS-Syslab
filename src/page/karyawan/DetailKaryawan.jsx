import React from "react";
import Header from "../../layouts/Header";
import useDetailKaryawan from "../../hooks/useDetailKaryawan";
import { useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { useState, useEffect } from "react";
import { SaveButton } from "../../components/ActionButton";
import { ErrorPage, LoadingPage } from "../HandlingPages";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useUser } from "../../hooks/useUser";

function DetailKaryawan() {
  const { id } = useParams();
  const { user } = useUser();
  const { data, isLoading, error } = useDetailKaryawan(id);
  const axiosPrivateInstance = useAxiosPrivate();

  const [input, setInput] = useState({
    nama: data?.nama,
    nip: data?.nip,
    alamat: data?.alamat,
    telp: data?.telp,
    jabatan: data?.jabatanId,
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axiosPrivateInstance.put(`/karyawan/${id}`, input, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
        withCredentials: true,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setInput({
      nama: data?.nama,
      nip: data?.nip,
      alamat: data?.alamat,
      telp: data?.telp,
      jabatan: data?.jabatanId,
    });
  }, [data]);
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
            <div className="edit-group">
              <div className="edit-container">
                <label htmlFor="nip">NIP</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nip"
                    id="nip"
                    defaultValue={data?.nip}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Nama</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.nama}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Alamat</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.alamat}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="nama">Nomor Telepon</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="nama"
                    id="nama"
                    defaultValue={data?.telp}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <SaveButton text={"Simpan"} handleInput={handleSubmit} />
              </div>
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

export default DetailKaryawan;
