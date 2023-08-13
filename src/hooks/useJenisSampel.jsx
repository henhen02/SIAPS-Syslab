import { useAxiosPrivate } from "./useAxiosPrivate";

import useSWR from "swr";

const useJenisSampel = () => {
  const axiosPrivateInstance = useAxiosPrivate();

  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => res.data);
  const { data, isLoading, error } = useSWR("/jenissampel", fetcher);
  return { data, isLoading, error };
};

export default useJenisSampel;
