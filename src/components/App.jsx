import React from 'react';
import './App.css';
import Navbar from "./Navbar/Navbar.jsx";
import Card from "./Card/Card"

// code for CArd component
import img from "../img/card.png"
const txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste nesciunt et aut ipsam quos velit vitae dolor assumenda eligendi tempora, veniam modi aliquid est voluptates minus, sequi eos explicabo possimus!";

function App() {
  return(
    <>
      <Navbar/>
      <Card imageUrl={img} text={txt} name="Jhon" location="Canada" />
    </>
  );
}

export default App;
