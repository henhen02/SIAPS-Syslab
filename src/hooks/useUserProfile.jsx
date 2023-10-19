import { useAxiosPrivate } from "./useAxiosPrivate";
import useSWR from "swr";
import { useUser } from "./useUser";

// const useUserProfile = () => {
//   const user = useUser();
//   const axiosPrivateInstance = useAxiosPrivate();
//   const fetcher = (url) =>
//     axiosPrivateInstance
//       .get(url, {
//         withCredentials: true,
//         headers: {
//           Authorization: `Bearer ${user?.accessToken}`,
//         },
//       })
//       .then((res) => res.data);
//   const { data, isLoading, error, mutate } = useSWR("/user", fetcher);
//   return { data, isLoading, error, mutate };
// };

// export default useUserProfile;

const useUserProfile = () => {
  const useUser = useUser();
  const axiosPrivateInstance = useAxiosPrivate();
  const fetcher = (url) =>
    axiosPrivateInstance.get(url).then((res) => {
      console.log(params);
      return res.data;
    });
  const { data, isLoading, error } = useSWR(`/user/${params}`, fetcher);
  return { data, isLoading, error };
};

export default useUserProfile;
