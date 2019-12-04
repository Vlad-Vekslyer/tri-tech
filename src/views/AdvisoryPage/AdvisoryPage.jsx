import React, {useState} from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"


const AdvisoryPage = () => {
    //for test props---
    let locate;
    // -----------------

    // let chicagoCards = CardData.chicago.map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
    // Object.map then Array.map
    //city is key for object, cards is an object
    let cities = Object.keys(CardData).map(city => {
        let cards = CardData[city].map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
        return (
            <div id={city} className="card-contents">
                <span className="close" onClick={() => mouseClickHandlar(locate)}>&times;</span>
                {cards}
            </div>
        );
    });

    function mouseClickHandlar(place) {
        locate = place
        document.getElementById(place).classList.toggle('card-open')
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