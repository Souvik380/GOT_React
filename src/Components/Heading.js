import React from "react"

class Heading extends React.Component{

    // constructor(){
    //     super()
    //     this.state
    // }

    render(){
        return(
            <div>
                <h1>People of GOT</h1>
                <input id="search-input" type="text" placeholder="Search your GOT character" />
            </div>

        )
    }
}

export default Heading