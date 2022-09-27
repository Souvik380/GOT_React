import React from "react"
import Button from "./Button"
import "../Styles/Buttons.css"

class Buttons extends React.Component{
    
    render(){
        let families=this.props.families
        let handler=this.props.clickHandler
        // console.log("--<",families)

        return(
            <div className="buttons">
                {
                    families.map(family=>{
                        return(<Button 
                            handler={handler}
                            name={family}
                        />)
                    })
                }
            </div>
        )
    }

}

export default Buttons