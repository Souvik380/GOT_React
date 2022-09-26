import React from "react"
import "../Styles/Character.css"

function Character({name,image,desc,link}){
    
    return(
        <div className="character-div" id={name}>
            <img src={image}/>
            <h3>{name}</h3>
            <p>{desc}</p>
            <a href={link}>KNOW MORE</a>
        </div>
    )
}

export default Character