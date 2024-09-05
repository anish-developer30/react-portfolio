import React from "react";
import About from "./About";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import { useData } from "../context/DataPass";

// hero section
const Home = () => {
  const [isdark] = useData();
  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="hero" id="home">
          <div className="banner">
            <h3>anish natversih rathod</h3>
            <h1>full stack web developer</h1>
          </div>
        </section>
      </main>
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
