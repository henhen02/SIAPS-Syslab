import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../layouts/NavBar";
import Header from "../layouts/Header";

export const RootElement = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
