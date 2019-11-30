import React, {useState} from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"


class AdvisoryPage extends React.Component {
    constructor() {
        super()
        this.state = CardData.chicago[0]
        console.log("heredata: ",CardData.chicago[0])
    }
    state = {

    }

    render() {
        const {card_id, name, location, text} = this.state; 

        // function setData() {
        //     this.setState(
        //         return {
        //         card_id: 0
        //         }
                
        //     )
        // }

        function mouseClickHandlar(place) {
            document.getElementById(place).classList.toggle('card-open')
            document.getElementById('card-component').classList.toggle('close')
        }

        return (
            <>
            <div id="adviser" className="adviser">   
                <div id="country">
                    {/* <div onClick={() => setData()} >setState</div> */}
                    <div className="point" onClick={() => mouseClickHandlar(card_id)}>Point</div>
                    <div className="point2" onClick={() => mouseClickHandlar(card_id)}>Point2</div>
                    <div className="point3" onClick={() => mouseClickHandlar(card_id)}>Point3</div>
                    <div className="point4" onClick={() => mouseClickHandlar(card_id)}>Point4</div>
                    <div className="point5" onClick={() => mouseClickHandlar(card_id)}>Point5</div>
                    <div className="point6" onClick={() => mouseClickHandlar(card_id)}>Point6</div>
                    <div className="point7" onClick={() => mouseClickHandlar(card_id)}>Point7</div>
                </div>
                
                <div id="card-component" className="card-component">
                    <div id={card_id} className="card-contents">
                        {card_id && <Card text={text} name={name} location={location} />}
                        {card_id && <Card text={text} name={name} location={location} />}
                        {card_id && <Card text={text} name={name} location={location} />}
                        <br />
                        {card_id && <Card text={text} name={name} location={location} />}
                        {card_id && <Card text={text} name={name} location={location} />}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AdvisoryPage;