import React from "react"
import Button from "./Button"

class Buttons extends React.Component{
    
    render(){
        let families=this.props.families
        let handler=this.props.clickHandler
        // console.log("--<",families)

        return(
            <>
                {
                    families.map(family=>{
                        return(<Button 
                            handler={handler}
                            name={family}
                        />)
                    })
                }
            </>
        )
    }

}

export default Buttons