import React from "react";

import "./card.css";

const Card = (props) => {   
    const limitCaracter = 80; 
    

    if(props.ver === "1"){
        return(
            <div className="cardProjeto">
                <h4>{props.title}</h4>  
    
                <img src={props.image} alt="Imagen Card Projeto"></img>
    
                <p>&emsp;{props.info.length > limitCaracter ? props.info.substring(0, limitCaracter) + ' ...' : props.info}</p>
                
                {
                    props.ver === '1' && props.linkShow === '1' ? 
                    <a className= 'linkAtivo' href={process.env.PUBLIC_URL+props.url} target={'_blank'} rel="noreferrer" >Ver Mais</a> :
                    <span className="linkInativo">Ver Mais</span> 
                }
            </div>
        )
    }
    
}

export default Card;