import React,{useState} from "react"
import "../Styles/Heading.css"


function Heading(){
    
    return(
        <div className="heading">
            <h1>People of GOT</h1>
            <input id="search-input" type="text" placeholder="Search your GOT character" />
        </div>
    )
}

export default Heading