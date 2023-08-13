import useSWR from "swr";
import { useAxiosPrivate } from "./useAxiosPrivate";

const useDaftarKaryawan = () => {
  const axiosPrivateInstance = useAxiosPrivate();

  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR("/karyawan", fetcher);
  return { data, isLoading, error };
};

export default useDaftarKaryawan;
