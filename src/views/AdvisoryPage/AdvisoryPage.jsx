import React, {useState} from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"

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
            console.log("Clicked!!!!", isClicked)
        }
    }

    function closeClickHandlar(){
        isClosed = !isClosed;
        mouseClickHandlar(locate)
    }

    return (
        <>
        <div id="adviser" className="adviser">   
            <div id="country">
                {/* mouseClickHandlar(props) <= should be properties*/}
                <div className="point" onClick={() => mouseClickHandlar("chicago")}>Point</div>
                <div className="point2" onClick={() => mouseClickHandlar("van")}>Point</div>
                <div className="point3" onClick={() => mouseClickHandlar("la")}>Point</div>
                <div className="point4" onClick={() => mouseClickHandlar("nyc")}>Point</div>
                <div className="point5" onClick={() => mouseClickHandlar("dallas")}>Point</div>
                <div className="point6" onClick={() => mouseClickHandlar("mexico")}>Point</div>
                <div className="point7" onClick={() => mouseClickHandlar("berlin")}>Point</div>
            </div>  
            <div id="card-component" className="card-component">
                {cities}
            </div> 
            
        </div>
        </>
    )
}

export default AdvisoryPage;