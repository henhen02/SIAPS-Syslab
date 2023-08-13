import useSWR from "swr";
import { useUser } from "./useUser";
import { useAxiosPrivate } from "./useAxiosPrivate";

const useDetailKaryawan = (params) => {
  const axiosPrivateInstance = useAxiosPrivate();
  const { user } = useUser();

  const fetcher = (url) =>
    axiosPrivateInstance
      .get(url, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
      .then((res) => res.data);
  const { data, isLoading, error } = useSWR(`/karyawan/${params}`, fetcher);
  return { data, isLoading, error };
};

export default useDetailKaryawan;
