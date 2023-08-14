import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarJabatan from "../../hooks/useDaftarJabatan";
import { LoadingPage } from "../HandlingPages";
import { SaveButton } from "../../components/ActionButton";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useState } from "react";
import { useEffect } from "react";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

function TambahKaryawan() {
  const { data, isLoading, error } = useDaftarJabatan();
  const axiosPrivateInstance = useAxiosPrivate();
  const { user } = useUser();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    nama: "",
    nip: "",
    alamat: "",
    jabatanId: "3",
    telp: "",
  });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosPrivateInstance.post(`/karyawan`, input, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
        withCredentials: true,
      });
    } catch (error) {
      // console.log(error);
      null;
    } finally {
      navigate("/karyawan");
    }
  };

  useEffect(() => {
    setInput({
      nama: "",
      nip: "",
      alamat: "",
      jabatanId: "",
      telp: "",
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
            <h3>Tambah Karyawan</h3>
            <div className="form-container centered">
              <form action="">
                <div className="edit-container">
                  <label htmlFor="nama">Nama Lengkap</label>
                  <div className="column-container">
                    <input
                      type="text"
                      name="nama"
                      id="nama"
                      onChange={handleInput}
                      value={input?.nama}
                      placeholder="Masukkan nama lengkap"
                      required
                    />
                  </div>
                </div>
                <div className="edit-container">
                  <label htmlFor="nip">NIP</label>
                  <div className="column-container">
                    <input
                      type="text"
                      name="nip"
                      id="nip"
                      onChange={handleInput}
                      value={input?.nip}
                      placeholder="Masukkan NIP"
                      required
                    />
                  </div>
                </div>
                <div className="edit-container">
                  <label htmlFor="alamat">Alamat</label>
                  <div className="column-container">
                    <input
                      type="text"
                      name="alamat"
                      id="alamat"
                      onChange={handleInput}
                      value={input?.alamat}
                      placeholder="Masukkan alamat"
                      required
                    />
                  </div>
                </div>
                <div className="edit-container">
                  <label htmlFor="telp">Nomor Telepon</label>
                  <div className="column-container">
                    <input
                      type="text"
                      name="telp"
                      id="telp"
                      onChange={handleInput}
                      value={input?.telp}
                      placeholder="Masukkan nomor telepon"
                      required
                    />
                  </div>
                </div>
                <div className="edit-container">
                  <label htmlFor="jabatanId">Pilih Jabatan</label>
                  <div className="column-container">
                    <select
                      name="jabatanId"
                      id="jabatan"
                      onChange={(e) => {
                        setInput((prev) => {
                          return {
                            ...prev,
                            jabatanId: e.target.value,
                          };
                        });
                      }}
                      value={input?.jabatanId || ""}
                    >
                      <option name="jabatan">Pilih jabatan</option>
                      {isLoading ? (
                        <option>Memuat...</option>
                      ) : error ? (
                        <option>Error...</option>
                      ) : (
                        data?.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.jabatan}
                            </option>
                          );
                        })
                      )}
                    </select>
                  </div>
                </div>
                <div className="edit-container">
                  <SaveButton handleInput={handleSubmit} text={"Simpan"} />
                </div>
              </form>
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

export default TambahKaryawan;
