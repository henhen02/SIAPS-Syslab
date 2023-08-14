import React from "react";
import * as AiIcon from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUser();

  const Logout = async () => {
    try {
      await axiosInstance.get("/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/login");
    }
  };
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-title">
          <h1>
            SI<span>APS</span>
          </h1>
        </div>
        <ul className="navigation-container">
          <li>
            <NavLink to={"/"}>
              <AiIcon.AiOutlineHome />
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to={"penjadwalan"}>
              <AiIcon.AiOutlineCalendar />
              Penjadawalan
            </NavLink>
          </li>
          <li>
            <NavLink to={"karyawan"}>
              <AiIcon.AiOutlineTeam />
              Karyawan
            </NavLink>
          </li>
        </ul>
        <ul className="navigation-container second-navigation">
          <li>
            <NavLink to={"profil"}>
              <AiIcon.AiOutlineUser />
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" onClick={Logout}>
              <AiIcon.AiOutlineLogout />
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
