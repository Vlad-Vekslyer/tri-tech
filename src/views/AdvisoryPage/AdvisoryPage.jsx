import React from "react";
import "./AdvisoryPage.css";

import Card from "../../components/Card/Card.jsx"

const txt = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum ducimus rerum blanditiis quis obcaecati, veniam laborum vitae sit aliquid debitis nemo non dignissimos ab nisi! Explicabo, eius nemo! Deleniti, illo?";

const AdvisoryPage = () => {

    function onMouseHover() {
        let x = document.getElementById('card')

        x.classList.toggle('card-open')
    }

    return (
        <>
        <div id="adviser" className="adviser">   
            <div className="country" onClick={() => onMouseHover()}>
                <p>Vancouver</p>
            </div>
            
            <div id="card" className="card-component">
                <div className="card-contents">
                    <Card text={txt} name="Jhon" location="Vancouver" />
                </div>
            </div>
        </div>
        </>
    )
}

export default AdvisoryPage;