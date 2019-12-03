import React, {useState} from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"


class AdvisoryPage extends React.Component {
    constructor() {
        super()
    }

    render() {
        // let chicagoCards = CardData.chicago.map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
        // map then map
        let cities = Object.keys(CardData).map(city => {
            let cards = CardData[city].map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);
            return (
                <div id={city} className="card-contents">
                    {cards}
                </div>
            );
        });
        function mouseClickHandlar(place) {
            document.getElementById(place).classList.toggle('card-open')
            document.getElementById('card-component').classList.toggle('close')
        }

        return (
            <>
            <div id="adviser" className="adviser">   
                <div id="country">
                    {/* <div onClick={() => setData()} >setState</div> */}
                    <div className="point" onClick={() => mouseClickHandlar("chicago")}>Point</div>
                    <div className="point2" onClick={() => mouseClickHandlar("van")}>Point</div>
                    <div className="point3" onClick={() => mouseClickHandlar("la")}>Point</div>
                </div>  

                <div id="card-component" className="card-component">
                    {cities}
                </div>
            </div>
            </>
        )
    }
}

export default AdvisoryPage;