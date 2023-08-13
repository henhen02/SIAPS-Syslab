import { useEffect } from "react";
import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import useDaftarKaryawan from "../../hooks/useDaftarKaryawan";
import useJenisSampel from "../../hooks/useJenisSampel";
import * as AiIcon from "react-icons/ai";
import { LoadingPage } from "../HandlingPages";
import { useAxiosPrivate } from "../../hooks/useAxiosPrivate";
import { useUser } from "../../hooks/useUser";

function BuatJadwal() {
  const axiosPrivateInstance = useAxiosPrivate();
  const { user } = useUser();

  const [total, setTotal] = useState(1);
  const [totalsampel, setTotalsampel] = useState(1);

  const {
    data: datakaryawan,
    isLoading: datakaryawanloading,
    error: datakaryawanerror,
  } = useDaftarKaryawan();
  const {
    data: datasampel,
    isLoading: datasampelloading,
    error: datasampelerror,
  } = useJenisSampel();

  const [input, setInput] = useState({
    instansi: "",
    lokasi: "",
    tanggal: "",
    pj: "",
    kontak_pj: "",
    karyawan: [
      {
        id: "1",
      },
    ],
    jenisSampel: [
      {
        id: "1",
      },
    ],
  });

  const SelectKaryawan = ({ text, index }) => {
    return (
      <>
        <label htmlFor="petugas">{text}</label>
        <select
          name="karyawan"
          className=" select-many"
          onChange={(e) => {
            setInput(
              (prev) => (
                (prev.karyawan[index] = { id: e.target.value }), { ...prev }
              )
            );
          }}
        >
          {datakaryawan?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.nama}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const SelectSampel = ({ text, index }) => {
    return (
      <>
        <label htmlFor="sampel">{text}</label>
        <select
          name="jenisSampel"
          className="select-many"
          onChange={(e) => {
            setInput(
              (prev) => (
                (prev.jenisSampel[index] = { id: e.target.value }), { ...prev }
              )
            );
          }}
        >
          {datasampel?.map((item, index) => {
            return (
              <option key={index} value={item.id}>
                {item.sampel}
              </option>
            );
          })}
        </select>
      </>
    );
  };

  const [jumlahElementKaryawan, setJumlahElementKaryawan] = useState([
    <SelectKaryawan key={0} index={0} />,
  ]);

  const [jumlahElementSampel, setJumlahElementSampel] = useState([
    <SelectSampel key={0} index={0} />,
  ]);

  const handleChangejumlahKaryawan = (e) => {
    setTotal(parseInt(e.target.value));
  };

  const handleChangejumlahSampel = (e) => {
    setTotalsampel(parseInt(e.target.value));
  };

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivateInstance.post("/jadwal", input, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const elementKaryawan = [];
    for (let i = 0; i < total; i++) {
      elementKaryawan.push(
        <SelectKaryawan
          key={i}
          index={i}
          text={total > 1 ? "Enginner " + (i + 1) : "Engineer"}
        />
      );
    }
    setJumlahElementKaryawan(elementKaryawan);
  }, [total, datakaryawanloading]);

  useEffect(() => {
    const elementSampel = [];
    for (let i = 0; i < totalsampel; i++) {
      elementSampel.push(
        <SelectSampel
          key={i}
          index={i}
          text={totalsampel > 1 ? "Sampel " + (i + 1) : "Sampel"}
        />
      );
    }

    setJumlahElementSampel(elementSampel);
  }, [totalsampel, datasampelloading]);

  return (
    <>
      {datakaryawanloading && datasampelloading ? (
        <LoadingPage />
      ) : (
        <main className="main-loged details-page">
          <div className="container">
            <Header />
          </div>
          <div className="container details-container">
            <form
              action=""
              className="form-new-schedule"
              onSubmit={handleSubmit}
            >
              <h3
                onClick={() => {
                  console.log();
                }}
              >
                Buat Jadwal Baru
              </h3>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="instansi">Instansi Tujuan</label>
                  <div className="edit-input">
                    <input
                      type="text"
                      name="instansi"
                      id="instansi"
                      required
                      defaultValue={input.instansi}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="lokasi">Alamat</label>
                  <div className="edit-input">
                    <input
                      type="text"
                      name="lokasi"
                      id="lokasi"
                      required
                      defaultValue={input.lokasi}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="tanggal">Tanggal</label>
                  <div className="edit-input">
                    <input
                      type="date"
                      name="tanggal"
                      id="tanggal"
                      required
                      onChange={handleInput}
                      defaultValue={input.tanggal}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="pj">Penanggung Jawab</label>
                  <div className="edit-input">
                    <input
                      type="text"
                      name="pj"
                      id="pj"
                      required
                      defaultValue={input.pj}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="kontak_pj">Kontak Penanggung Jawab</label>
                  <div className="edit-input">
                    <input
                      type="tel"
                      name="kontak_pj"
                      id="kontak_pj"
                      required
                      defaultValue={input.kontak_pj}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="jumlah-engineer">Jumlah Engineer</label>
                  <div className="edit-input">
                    <select
                      name="jumlah-engineer"
                      id="jumlah-engineer"
                      onChange={handleChangejumlahKaryawan}
                      required
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <div className="edit-input">
                    {jumlahElementKaryawan.map((item) => {
                      return item;
                    })}
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <label htmlFor="jumlah-sampel">Jumlah sampel</label>
                  <div className="edit-input">
                    <select
                      name="jumlah-sampel"
                      id="jumlah-sampel"
                      onChange={handleChangejumlahSampel}
                      required
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <div className="edit-container">
                  <div className="edit-input">
                    {jumlahElementSampel.map((item) => {
                      return item;
                    })}
                  </div>
                </div>
              </div>
              <div className="edit-group">
                <button className="save">
                  <AiIcon.AiOutlineSave size={12} />
                  Simpan
                </button>
              </div>
            </form>
          </div>
          <div className="container">
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}

export default BuatJadwal;
