import React from "react";
import { useData } from "../context/DataPass";
const Error = () => {
  const [isdark] = useData();
  return (
    <>
      <main className={isdark ? "error dark" : "error"}>
        <div className="content">
          <h1>404</h1>
          <p>oops.. page not found</p>
        </div>
      </main>
    </>
  );
};

export default Error;
