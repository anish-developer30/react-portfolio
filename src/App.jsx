import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import { DataProvider } from "./context/DataPass";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
const App = () => {
  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </>
  );
};

export default App;
