import axios from "axios";
import useSWR from "swr";

const useDaftarJadwal = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR(
    "http://127.0.0.1:8080/jadwal",
    fetcher
  );
  return { data, isLoading, error };
};

export default useDaftarJadwal;
