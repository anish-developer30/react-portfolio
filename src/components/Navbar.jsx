import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { link, social } from "../AllData";
import { useData } from "../context/DataPass";
//  header section
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isdark, setIsDark] = useData();
  return (
    <>
      <header className={isdark ? "header dark" : "header"}>
        <NavLink to="/" className="logo">
          <img src="./images/logo2.png" alt="" />
        </NavLink>
        <nav className={menu ? "navbar active" : " navbar"}>
          {link.map((ele) => {
            return (
              <NavLink
                to={ele.path}
                key={ele.id}
                onClick={() => setMenu(false)}
              >
                {ele.name}
              </NavLink>
            );
          })}
        </nav>
        <div className="icons">
          <NavLink
            onClick={() => {
              localStorage.setItem("isDark", !isdark);
              setIsDark(!isdark);
            }}
            to="#"
            title="Dark Mode"
            id="moon"
            className={isdark ? "fas fa-sun dark" : "fas fa-moon dark"}
          ></NavLink>
          <NavLink
            to="#"
            title="Menu"
            id="menu"
            className={menu ? "fas fa-times" : "fas fa-stream"}
            onClick={() => setMenu(!menu)}
          ></NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
