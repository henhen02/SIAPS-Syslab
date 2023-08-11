import axios from "axios";
// import useDaftarKaryawan from "./useDaftarKaryawan";
import useSWR from "swr";

const useDetailKaryawan = (params) => {
  const fetcher = (url) =>
    axios.get(url).then((res) => {
      console.log(params);
      return res.data;
    });
  const { data, isLoading, error } = useSWR(
    `http://localhost:8080/karyawan/${params}`,
    fetcher
  );
  return { data, isLoading, error };
};

export default useDetailKaryawan;
