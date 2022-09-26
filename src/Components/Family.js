import React from "react"
import got from "../data"
import "../Styles/Family.css"

function Family({name}){
    return(
        <button className="btn" id={name}>{name}</button>
    )
}

export default Family