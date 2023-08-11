// Import packages
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RootElement } from "./page/RootElement";
import { RouterProvider } from "react-router-dom";

// Import styles
import "./App.css";

// Import Pages
import Beranda from "./page/Beranda";
import Karyawan from "./page/karyawan/Karyawan";
import SuratTugas from "./page/SuratTugas";
import Profil from "./page/Profil";

// Penjadwalan
import Penjadwalan from "./page/penjadwalan/Penjadwalan";
import DetailJadwal from "./page/penjadwalan/DetailJadwal";
import BuatJadwal from "./page/penjadwalan/BuatJadwal";

// Karyawan
import DetailKaryawan from "./page/karyawan/DetailKaryawan";
import TambahKaryawan from "./page/karyawan/TambahKaryawan";

import { Routes, Route } from "react-router-dom";
import DaftarJadwal from "./page/penjadwalan/DaftarJadwal";
import DaftarKaryawan from "./page/karyawan/DaftarKaryawan";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootElement />}>
        <Route index element={<Beranda />} />
        <Route path="penjadwalan" element={<Penjadwalan />}>
          <Route index element={<DaftarJadwal />} />
          <Route path=":id" element={<DetailJadwal />} />
          <Route path="penjadwalan" element={<BuatJadwal />} />
        </Route>
        <Route path="karyawan" element={<Karyawan />}>
          <Route index element={<DaftarKaryawan />} />
          <Route path=":id" element={<DetailKaryawan />} />
          <Route path="tambahkaryawan" element={<TambahKaryawan />} />
        </Route>
        <Route path="surattugas" element={<SuratTugas />} />
        <Route path="profil" element={<Profil />} />
      </Route>
    </>
  )
);

export default function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
