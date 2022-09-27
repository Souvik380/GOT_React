import React from "react"
class Button extends React.Component{
    
    render(){
        const name=this.props.name
        const handler=this.props.handler

        return(
            <>
                <button onClick={(e)=>handler(e)}>{name}</button>
            </>
        )
    }

}

export default Button