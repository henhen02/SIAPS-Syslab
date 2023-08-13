import { useAxiosPrivate } from "./useAxiosPrivate";

// import useDaftarKaryawan from "./useDaftarKaryawan";
import useSWR from "swr";

const useDetailKaryawan = (params) => {
  const axiosPrivateInstance = useAxiosPrivate();

  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => {
      console.log(params);
      return res.data;
    });
  const { data, isLoading, error } = useSWR(`/karyawan/${params}`, fetcher);
  return { data, isLoading, error };
};

export default useDetailKaryawan;
