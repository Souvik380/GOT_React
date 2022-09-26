import React from "react"
import got from "../data"
import Family from "./Family"
import "../Styles/Families.css"


function Families(){
    return(
        <div className="lists">
            {got.houses.map(ele=>(
                <Family name={ele.name} />
            ))} 
        </div>
    )
}


export default Families