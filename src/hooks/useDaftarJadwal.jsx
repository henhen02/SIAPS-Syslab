import useSWR from "swr";
import { useAxiosPrivate } from "./useAxiosPrivate";
import { useUser } from "./useUser";

const useDaftarJadwal = () => {
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
  const { data, isLoading, error } = useSWR("/jadwal", fetcher);
  return { data, isLoading, error };
};

export default useDaftarJadwal;
