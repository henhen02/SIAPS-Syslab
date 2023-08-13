import NavBar from "../layouts/NavBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import { useEffect, useState } from "react";
import { useRefreshToken } from "../hooks/useRefreshToken";
import { LoadingPage } from "./HandlingPages";

export const RootElement = () => {
  const refresh = useRefreshToken();
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  const location = useLocation();

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

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : user?.accessToken ? (
        <>
          <NavBar />
          <Outlet />
        </>
      ) : (
        <Navigate to={"/login"} state={{ from: location }} replace />
      )}
    </>
  );
};
