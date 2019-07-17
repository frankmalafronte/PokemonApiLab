import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Hello, Welcome, Pokemon, SinglePokemon} from './components'

class Routes extends Component {
constructor(){
  super()
  this.state={}
}



render(){
  return (
    <Switch>
      {/* These are our routes */}
      <Route path="/hello" component={Hello} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/home" component={Pokemon} />

      {/* <Route path = "/pokemon/:name" component ={SinglePokemon}/> */}

       <Route path = "/pokemon/:name" component ={SinglePokemon}/>


      {/* If we can't find a path, we can have a default to a component maybe a 404?*/}
      <Route component = {Pokemon} />
    </Switch>
    )
  }
}

export default Routes




