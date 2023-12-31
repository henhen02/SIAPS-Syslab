import useSWR from "swr";
import { useUser } from "./useUser";
import { useAxiosPrivate } from "./useAxiosPrivate";

const useDaftarKaryawan = () => {
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
  const { data, isLoading, error } = useSWR("/karyawan", fetcher);
  return { data, isLoading, error };
};

export default useDaftarKaryawan;
