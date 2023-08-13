import React from "react";
import NavBar from "../layouts/NavBar";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const RootElement = () => {
  const { user } = useUser();
  const location = useLocation();
  return user?.accessToken ? (
    <>
      <NavBar />
      <Outlet />
    </>
  ) : (
    <Navigate to={"/login"} state={{ from: location }} replace />
  );
};
