import { useUser } from "./useUser";
import { axiosInstance } from "../../utils/axios";

export const useRefreshToken = () => {
  const { setUser } = useUser();

  const refresh = async () => {
    const response = await axiosInstance.get("/user/refresh", {
      withCredentials: true,
    });
    setUser((prev) => ({ ...prev, accessToken: response.data?.accessToken }));
    return response.data?.accessToken;
  };
  return refresh;
};
