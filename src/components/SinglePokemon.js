import React, { Component } from 'react';

class SinglePokemon extends Component {
  constructor(){
    super()
    this.state= {pokemon:{}}
  }

 

  async componentDidMount(){
    console.log(this.props)

    let id = this.props.match.params.name
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const json = await response.json()
    console.log(json)
    this.setState({pokemon:json})
  }


  
  render(){
    console.log(this.state)
    let imageURL = "no image"
    if(this.state.pokemon.name){
       imageURL = this.state.pokemon.sprites.front_shiny
    }
    return(
      <div>
    <div>
    {this.state.pokemon.name}
    <img alt ="" src = {imageURL}/>
    </div>
    </div>)
  }
}

export default SinglePokemon;