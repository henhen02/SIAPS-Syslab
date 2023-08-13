import { useUser } from "./useUser";
import { axiosInstance } from "../../utils/axios";

export const UseRefreshToken = () => {
  const { setUser } = useUser();

  const refresh = async () => {
    const response = await axiosInstance.get("api/auth/refresh", {
      withCredentials: true,
    });
    setUser(response.data);
    return response.data?.accessToken;
  };
  return refresh;
};
