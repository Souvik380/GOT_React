import React from "react"
import "../Styles/Card.css"

class Card extends React.Component{

    render(){
        const {name,image,desc,link}=this.props
        return(
            <div className="card-div" id={name}>
                <img src={image} />
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href={link}>KNOW MORE</a>
            </div>
        )
    }

}

export default Card