import useSWR from "swr";

import { useAxiosPrivate } from "./useAxiosPrivate";

const useDetailJadwal = (params) => {
  const axiosPrivateInstance = useAxiosPrivate();

  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => {
      console.log(params);
      return res.data;
    });
  const { data, isLoading, error } = useSWR(`/jadwal/${params}`, fetcher);
  return { data, isLoading, error };
};

export default useDetailJadwal;
