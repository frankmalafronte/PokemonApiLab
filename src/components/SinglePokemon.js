import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class SinglePokemon extends Component {
  constructor(){
    super()
    this.state= {pokemon:{}}
  }

 

  async componentDidMount(){

    let name = this.props.match.params.name
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const json = await response.json()
    console.log(json)
    this.setState({pokemon:json})
  }


  
  render(){
    console.log(this.props)
    let imageURL = "no image"
    if(this.state.pokemon.name){
       imageURL = this.state.pokemon.sprites.front_default
    }
    return(
      <div>
    <div>
    {this.state.pokemon.name}
    <img alt ="" src = {imageURL}/>
    </div>
    <button>
      <Link to = '/home' style={{textDecoration:'none', color:'black'}}> back </Link>
    </button>
    </div>)
  }
}

export default SinglePokemon;