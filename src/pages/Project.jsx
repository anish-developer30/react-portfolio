import React from "react";
import { project } from "../AllData";
import { NavLink } from "react-router-dom";
import { useData } from "../context/DataPass";
// project section
const Project = () => {
  const [isdark] = useData();

  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="project" id="project">
          <h2 className="heading">my projects</h2>

          <div className="project_container">
            {project.map((data) => {
              const { id, name, img, download, live } = data;
              return (
                <div className="project" key={id}>
                  <div className="image">
                    <img src={img} alt="" />
                  </div>
                  <div className="content">
                    <span>{name}</span>
                    <div className="text">
                      <NavLink
                        title="Download"
                        target="_blank"
                        className="fas fa-download"
                        to={download}
                      ></NavLink>
                      <NavLink
                        to={live}
                        target="_blank"
                        title="Live Demo"
                        className="fas fa-eye"
                      ></NavLink>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Project;
