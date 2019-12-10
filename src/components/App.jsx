import React from "react";
import "./App.scss";

import AdvisoryPage from "../views/AdvisoryPage/AdvisoryPage.jsx";
import Navbar from "./Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AdvisoryPage />
    </>
  );
}

export default App;
