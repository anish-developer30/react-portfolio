import React from "react";
import { useData } from "../context/DataPass";
import { skill } from "../AllData";

//  skill section
const Skill = () => {
  const [isdark] = useData();

  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="skill" id="skill">
          <h2 className="heading">my skills</h2>
          <div className="skill_container">
            {skill.map((ele) => {
              const { id, img, text, percentage } = ele;
              return (
                <div className="iconBox" key={id}>
                  <img src={img} alt="" />
                  <p>{text}</p>
                  <div className="overlay">{percentage}</div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Skill;
