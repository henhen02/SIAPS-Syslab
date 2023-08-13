import useSWR from "swr";
import { useAxiosPrivate } from "./useAxiosPrivate";

const useDaftarJadwal = () => {
  const axiosPrivateInstance = useAxiosPrivate();

  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR("/jadwal", fetcher);
  return { data, isLoading, error };
};

export default useDaftarJadwal;
