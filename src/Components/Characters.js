import React from "react"
import got from "../data"
import Character from "./Character";
import "../Styles/Characters.css"

function Characters(){
 
    return(
        <div className="characters">
            {
                got.houses.map(house=>(
                    house.people.map(person=>(
                        <Character 
                            name={person.name} 
                            image={person.image} 
                            desc={person.description} 
                            link={person.wikiLink} 
                        />
                    ))
                    
                ))
            } 
        </div>
    )
}

export default Characters