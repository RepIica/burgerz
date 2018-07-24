import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'
import getBurgers from './Adapter/adapter.js'

class App extends Component {

  state = {
    burgers: [],
    current: {}
  }

  componentDidMount(){
    getBurgers()
      .then(data => {
        console.log(data)
        this.setState({
          burgers: data
        })

      })
  }

  showBurger = (burger) =>{
    this.setState({
      current: burger
    })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgers} clickHandler={this.showBurger}/>
        <BurgerDisplay burger={this.state.current} />
      </div>
    );
  }
}

export default App;
