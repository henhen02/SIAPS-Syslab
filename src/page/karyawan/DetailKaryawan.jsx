import React from "react";
import Header from "../../layouts/Header";
import useDetailKaryawan from "../../hooks/useDetailKaryawan";
import { useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";
import { useState, useEffect } from "react";
import {
  BackButton,
  DeleteButton,
  SaveButton,
} from "../../components/ActionButton";
import { ErrorPage, LoadingPage } from "../HandlingPages";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function DetailKaryawan() {
  const { id } = useParams();
  const { user } = useUser();
  const { data, isLoading, error } = useDetailKaryawan(id);
  const axiosPrivateInstance = useAxiosPrivate();
  const navigate = useNavigate();

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

      // console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/karyawan");
    }
  };

  const handleBack = () => {
    navigate("/karyawan");
  };

  const handleDeleteButton = async () => {
    try {
      await axiosPrivateInstance.delete(`/karyawan/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
        withCredentials: true,
      });
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/karyawan");
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
                <label htmlFor="alamat">Alamat</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="alamat"
                    id="alamat"
                    defaultValue={data?.alamat}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container">
                <label htmlFor="telp">Nomor Telepon</label>
                <div className="edit-input">
                  <input
                    type="text"
                    name="telp"
                    id="telp"
                    defaultValue={data?.telp}
                    onChange={handleInput}
                    required
                  />
                </div>
              </div>
              <div className="edit-container action-container">
                <BackButton
                  text={"Kembali"}
                  handleInput={handleBack}
                  path={"/karyawan"}
                />
                <SaveButton text={"Simpan"} handleInput={handleSubmit} />
              </div>
              <div className="edit-container action-container">
                <DeleteButton text={"Hapus"} handleInput={handleDeleteButton} />
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
