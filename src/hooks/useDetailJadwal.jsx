import axios from "axios";
import useSWR from "swr";

const useDetailJadwal = (params) => {
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      console.log(params);
      return res.data;
    });
  const { data, isLoading, error } = useSWR(
    `http://localhost:8080/jadwal/${params}`,
    fetcher
  );
  return { data, isLoading, error };
};

export default useDetailJadwal;
