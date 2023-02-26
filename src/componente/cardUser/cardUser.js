import React from "react";

import "./card.css";

const Card = (props) => {   
    const limitCaracter = 80; 

    const ButtonVisit = () => {
        const imgPath = props.linkShow === '1' ? "/eye.png" : "/eye-hidden.png";
        const cursor = props.linkShow === '1' ? 'pointer' : 'not-allowed';
        return(
            <a className="buttonLink" href={props.url} style={{cursor: cursor}} ><label className="button-visit" 
            style={{    backgroundImage: `url(${process.env.PUBLIC_URL + imgPath})`,
                        cursor: cursor}}>Visitar</label></a>
        )
    }
    

    if(props.ver === "1"){
        return(
            <div className="cardProjeto">
                <h4>{props.title}</h4>  
    
                <img src={props.image} alt="Imagen Card Projeto"></img>
    
                <p>&emsp;{props.info.length > limitCaracter ? props.info.substring(0, limitCaracter) + ' ...' : props.info}</p>

                {
                    <ButtonVisit />
                }

            </div>
        )
    }
    
}

export default Card;