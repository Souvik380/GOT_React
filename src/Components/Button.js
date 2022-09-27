import React from "react"
import "../Styles/Button.css"

class Button extends React.Component{
    
    render(){
        const name=this.props.name
        const handler=this.props.handler

        return(
            
                <button className="button"  onClick={(e)=>handler(e)}>{name}</button>
            
        )
    }

}

export default Button