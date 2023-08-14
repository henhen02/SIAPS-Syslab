import useSWR from "swr";
import { axiosInstance } from "../../utils/axios";

const useDaftarJabatan = () => {
  const fetcher = (url) => axiosInstance.get(url).then((res) => res.data);

  const { data, isLoading, error } = useSWR("/public/jabatan", fetcher);
  return { data, isLoading, error };
};

export default useDaftarJabatan;
