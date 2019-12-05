import React, {useState} from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"
import vector from "../../assets/Vector.png"

const AdvisoryPage = () => {
    //for test code---
    let locate;
    let isClicked = false;
    let isClosed = false;
    // -----------------

    // let chicagoCards = CardData.chicago.map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
    // Object.map then Array.map
    //city is key for object, cards is an object
    let cities = Object.keys(CardData).map(city => {
        let cards = CardData[city].map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
        return (
            <div id={city} className="card-contents">
                <span className="close" onClick={() => closeClickHandlar()}>&times;</span>
                {cards}
            </div>
        );
    });

    function mouseClickHandlar(place) {
        if(!isClicked || isClosed){
            document.getElementById(place).classList.toggle('card-open')
            locate = place
            isClicked = !isClicked
            isClosed = false;
        }
    }
    //code that you can close Card only from close button
    function closeClickHandlar(){
        isClosed = !isClosed;
        mouseClickHandlar(locate)
    }

    return (
        <>
        <div id="adviser" className="adviser">   
            <div id="country">
                {/* mouseClickHandlar(props) <= should be properties*/}
                <div><div className="point" onClick={() => mouseClickHandlar("chicago")}><img src={vector} ></img></div><p>Chicago</p></div>
                
                <div className="point2" onClick={() => mouseClickHandlar("van")}><img src={vector} ></img><p>Vancouver</p></div>
                <div className="point3" onClick={() => mouseClickHandlar("la")}><img src={vector} ></img><p>Los Angels</p></div>
                <div className="point4" onClick={() => mouseClickHandlar("nyc")}><img src={vector} ></img><p>New york City</p></div>
                <div className="point5" onClick={() => mouseClickHandlar("dallas")}><img src={vector} ></img><p>Dallas</p></div>
                <div className="point6" onClick={() => mouseClickHandlar("mexico")}><img src={vector} ></img><p>Mexico City</p></div>
                <div className="point7" onClick={() => mouseClickHandlar("berlin")}><img src={vector} ></img><p>Berlin</p></div>
            </div>  
            <div id="card-component" className="card-component">
                {cities}
            </div> 
            
        </div>
        </>
    )
}

export default AdvisoryPage;