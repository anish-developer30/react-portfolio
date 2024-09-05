import React from "react";
import { NavLink } from "react-router-dom";
import { link, social } from "../AllData";
import { useData } from "../context/DataPass";

const Footer = () => {
  const [isdark] = useData();

  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="footer">
          <div className="footer_container">
            <div className="icons">
              <h1>about us</h1>
              <p>
                Hello <br /> my name is anish rathod i'm a fullstack web
                developer I'm From Anand [Gujarat ,India]
                <br />
              </p>
              <h2>+91 635 319 1430</h2>
              <h2>anishr6353@gmail.com</h2>
            </div>
            <div className="icons">
              <h1>redirect links</h1>
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
            </div>
            <div className="icons">
              <h1>social media</h1>
              {social.map((ele) => {
                return (
                  <NavLink
                    to=""
                    className={`${ele.icon} btn`}
                    title={ele.title}
                    key={ele.id}
                  >
                    <p>{ele.title}</p>
                  </NavLink>
                );
              })}
            </div>
            <div className="icons">
              <h1>contact us</h1>
              <div className="flex">
                <input type="text" placeholder="email" />
                <span>send</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Footer;
