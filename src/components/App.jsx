import React from "react";
import "./App.scss";

import AdvisoryPage from "../views/AdvisoryPage/AdvisoryPage.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Landing from "../views/Landing/Landing.jsx";
import AboutUs from "../views/AboutUs/AboutUs.jsx";
import Press from "../views/Press/Press.jsx";

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <AboutUs/>
      <AdvisoryPage/>
      <Press/>
    </>
  );
}

export default App;
