import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Pokemon extends Component {
  constructor(){
    super()
    this.state= {pokemon:{}}
  }

 

  async componentDidMount(){
    console.log(this.props.match)
    console.log(window.location.href)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    const json = await response.json()
    console.log(json)
    this.setState({pokemon:json})
  }

  renderPokemon = (array) =>{
    array.map(el =>
        <li key = {el.name}>
        {el.name}
        </li>
    )
  }


  
  render(){
    console.log(this.state)
    let arrayToMap = []
    if(this.state.pokemon.results){
      //  imageURL = this.state.pokemon.sprites.front_shiny
      arrayToMap = this.state.pokemon.results
    }
    return(
      <div>
      <ul>
         {arrayToMap.map(el =>
         <li key ={el.name}>

         <Link to ={`/pokemon/${el.name}`}>
         
         {el.name}
         </Link> 
         </li>
        )}
         </ul>
    
    </div>)
    // <div> hello </div>)
  }
}

export default Pokemon;
