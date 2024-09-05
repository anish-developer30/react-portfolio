import React from "react";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataPass";

// about section
const About = () => {
  const [isdark] = useData();

  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="about" id="about">
          <h2 className="heading">about us</h2>
          <div className="row">
            <div className="image">
              <img src="./images/me.jpg" alt="" />
            </div>
            <div className="content">
              <p>
                Hello my name is
                <strong> anish rathod i'm a fullstack web developer </strong>
              </p>
              <p>
                I'm From Anand [Gujarat ,India] I have bachelor degree in
                computer application from C P Patel F H Shah Commerce Collage
                Anand
              </p>
              <p>
                1. I create e-commerce website project in my BCA final year. I
                add some functionality in my website such as filter, search,
                categories wise search, price wise search. I create full dynamic
                e-commerce website <br />
                2. I Manage Both Part Front-End & Back-End Part <br />
                3. Used this languages HTML, CSS, JS, PHP, MYSQL
              </p>
              <p>
                I create clone based website (YouTube, Facebook) I create
                portfolio websites I create API based projects (Weather
                Application, Movie App, and Corona Virus) I also host some
                portfolio website on (GitHub, Google Drive, and Nitrify) I
                create many small project like (Calculator, and Linear-Gradient
                Background Generator, Convertor etc.)
              </p>
              <div className="btns">
                <NavLink className="btn">download cv</NavLink>
                <NavLink className="btn" to={`/project`}>
                  check projects
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
