import React from "react"

class Header extends React.Component{

    render(){
        
        return(
            <div className="heading">
                <h1>People of GOT</h1>
                <input id="search-input" type="text" placeholder="Search your GOT character" />
        </div>
        )
    }

}

export default Header