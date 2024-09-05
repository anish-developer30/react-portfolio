import React from "react";
import { useData } from "../context/DataPass";

const Contact = () => {
  const [isdark] = useData();
  return (
    <>
      <main className={isdark ? "dark" : ""}>
        <section className="contact">
          <h2 className="heading">contact us</h2>
          <div className="contact_container">
            <div className="image">
              <img src="./images/map.png" alt="" />
            </div>
            <div className="form">
              <form>
                <input type="text" placeholder="enter full name" />
                <div className="flex">
                  <input type="text" placeholder="enter email address" />
                  <input type="text" placeholder="enter phone number" />
                </div>
                <div className="flex">
                  <input type="text" placeholder="enter city name" />
                  <input type="text" placeholder="enter pincode" />
                </div>
                <textarea placeholder="enter your message"></textarea>
                <input type="submit" className="btn" value="submit" />
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
