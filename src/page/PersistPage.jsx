import { useState } from "react";
import { UseRefreshToken } from "../hooks/useRefreshToken";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
import { LoadingPage } from "./HandlingPages";
import { Outlet } from "react-router-dom";

export const PersistPage = () => {
  const [loading, setLoading] = useState(true);
  const refresh = UseRefreshToken();
  const { user } = useUser();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        await refresh();
      } catch (error) {
        null;
      } finally {
        setLoading(false);
      }
    };
    !user?.accessToken ? verifyToken() : setLoading(false);
  }, []);
  return;
  <>{loading ? <LoadingPage /> : <Outlet />}</>;
};
