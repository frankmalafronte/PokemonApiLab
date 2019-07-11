import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {pokemon:{}}
  }

  // async componentDidMount(){
  //   try{
  //   const response = await fetch(`https://pokeapi.com/api/v2/pokemon/13`)
  //   const json = await response.json()
  //   console.log(json)
  //   this.setState({pokemon:json})
  //   } catch(e){
  //     console.log(e)
  //   }
  // }

  async componentDidMount(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`)
    const json = await response.json()
    console.log(json.name)
    this.setState({pokemon:json})
  }

  // async componentDidMount() {
  //   const response = await fetch(
  //     `https://developer.nps.gov/api/v1/parks?fields=images&api_key=${
  //       process.env.API_KEY
  //     }`
  //   )
  //   const json = await response.json();
  //   this.setState({ data: json.data });
  // }
  
  render(){
    console.log(this.state)
    // return(<div>{"hello world"}</div>)
    return(<div>
        {this.state.pokemon.name}
    </div>)
  }
}

export default App;
