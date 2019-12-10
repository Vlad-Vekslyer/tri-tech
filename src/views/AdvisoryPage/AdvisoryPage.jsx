import React from "react";
import Slider from "react-slick";
// import MediaQuery from 'react-responsive';

import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"
import CardData from "./AdvisoryStore"
import vector from "../../assets/Vector.png"
import map from "../../assets/worldmap.svg"

const AdvisoryPage = () => {
    //for Handlar code-------
    let locate;             //to store previous id of Card
    let isClicked = false;  //to prevent breaking code when you open and close the Card
    let isClosed = false;
    
    // for Slider --------
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    // Object.map then Array.map
    //city is key for object, cards is an object
    let cities = Object.keys(CardData).map(city => {
        let cards = CardData[city].map((card, index) => <Card key={index} text={card.text} name={card.name} location={card.location}/>);

    // to separate if cards has more than two contents
    let newCard=[], newCards=[];

        cards.map(content => {
            if(cards.length > 2){
                newCards.push(content)
            }else{
                newCard.push(content)
            }    
        }) 
    // -----------

        return (
            <>
            <div id={city} className="card-contents">
                <span className="close" onClick={() => closeClickHandlar()}>&times;</span>
                {newCard}
                <Slider {...settings}>
                    {newCards}
                </Slider>
            </div>
            </>
        );
    });

    function mouseClickHandlar(place) {
        if(!isClicked || isClosed){
            console.log("clicked")
            document.getElementById(place).classList.toggle('card-open')
            locate = place
            isClicked = !isClicked
            isClosed = false;
        }
    }
    //code that you can close the Card only from this close button
    function closeClickHandlar(){
        isClosed = !isClosed;
        mouseClickHandlar(locate)
    }

    return (
        <>
        <div id="adviser" className="adviser">   
            <div id="card-component" className="card-component">
                {cities}
            </div> 

            <div id="country">
                <img src={map}></img>
                {/* mouseClickHandlar(props) <= should be properties*/}
                <div className="vector vector1"><img className="point" onClick={() => mouseClickHandlar("chicago")} src={vector} ></img><p>Chicago</p></div>
                <div className="vector vector2"><img className="point" onClick={() => mouseClickHandlar("van")} src={vector} ></img><p>Vancouver</p></div>
                <div className="vector vector3"><img className="point" onClick={() => mouseClickHandlar("la")} src={vector} ></img><p>Los Angels</p></div>
                <div className="vector vector4"><img className="point" onClick={() => mouseClickHandlar("nyc")} src={vector} ></img><p>New york City</p></div>
                <div className="vector vector5"><img className="point" onClick={() => mouseClickHandlar("dallas")} src={vector} ></img><p>Dallas</p></div>
                <div className="vector vector6"><img className="point" onClick={() => mouseClickHandlar("mexico")} src={vector} ></img><p>Mexico City</p></div>
                <div className="vector vector7"><img className="point" onClick={() => mouseClickHandlar("berlin")} src={vector} ></img><p>Berlin</p></div>
            </div>  
            
        </div>
        </>
    )
}

export default AdvisoryPage;