import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './sections/forms'


class App extends Component {
  constructor() {
    super()
    this.state = { mouseX: 0, mouseY: 0 }
    // this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const { clientX, clientY } = e
    this.setState({ mouseX: clientX, mouseY: clientY })
  }

  handleClick(e) {
    console.log(e)
    alert('Hello world!')  
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Forms />
        </header>
      </div>
    );
  }
}

export default App;
