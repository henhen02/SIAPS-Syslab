import React from "react";
import * as AiIcon from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NavBar = () => {
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
            <NavLink to={"/"}>
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
