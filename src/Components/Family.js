import React from "react"
import got from "../data"
import "../Styles/Family.css"

// let btn=document.createElement("button")
//         btn.innerText=character
//         btn.classList.add("btn")
//         btn.id=character
//         btn.onclick=()=>func(character)
//         lists.appendChild(btn)

function Family({name}){
    return(
        <button className="btn" id={name}>{name}</button>
    )
}

export default Family