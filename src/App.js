import logo from './logo.svg';
import './App.css';
import got from './data';
import React from 'react';
import Card from "./Components/Card"
import Buttons from "./Components/Buttons"

let peopleList=[]
let houseNames=[]

got.houses.map(house=>{
  houseNames.push(house.name)
  house.people.map(person=>{
    peopleList.push(person)
  })
})

let housePeople=got.houses.reduce(function(acc,curr){
  acc[curr.name]={}
  acc[curr.name]['people']=curr.people
  return acc
},{})


class App extends React.Component{
  constructor(){
    super()
    this.state={
      characters:peopleList
    }
  }

  handleInput=(e)=>{
    let filtered=peopleList.filter(person=>{
      if(person.name.includes(e.target.value)){
        return person
      }
    })

    this.setState({
      characters:filtered
    })
  }

  clickHandler=(e)=>{
    this.setState({
      characters:housePeople[e.target.innerText].people
    })
  }


  render(){
    const people=this.state.characters
    console.log(houseNames)
    return(
      <div className="App">
        <div>
          <h1>People of GOT</h1>
          <input id="search-input" type="text" placeholder="Search your GOT character" onKeyUp={(e)=>this.handleInput(e)}/>
        </div>
        <Buttons clickHandler={this.clickHandler} families={houseNames} />

        {
          people.map(person=>{
              return (
              <Card 
                  name={person.name}
                  image={person.image}
                  desc={person.description}
                  link={person.wikiLink}
              />
              )
          })
        }

      </div>
    )
  }
}
export default App;
