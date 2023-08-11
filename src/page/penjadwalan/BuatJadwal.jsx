import React from "react";
import { useState } from "react";

function BuatJadwal() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <form action="" className="form-new-schedule">
        <h3>Buat Jadwal Baru</h3>
        <fieldset>
          <legend>Data Instansi</legend>
          <div className="input-group-container">
            <label htmlFor="instansi">
              Isi dengan nama lengkap instansi tujuan
            </label>
            <input type="text" name="instansi" id="instansi" />
          </div>
          <div className="input-group-container">
            <label htmlFor="instansi">
              Isi dengan nama lengkap instansi tujuan
            </label>
            <input type="text" name="instansi" id="instansi" />
          </div>
          <div className="input-group-container">
            <label htmlFor="instansi">
              Isi dengan nama lengkap instansi tujuan
            </label>
            <input type="text" name="instansi" id="instansi" />
          </div>
          <div className="input-group-container">
            <label htmlFor="instansi">
              Isi dengan nama lengkap instansi tujuan
            </label>
            <input type="text" name="instansi" id="instansi" />
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default BuatJadwal;
