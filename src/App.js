import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Title(props) {
//   return <h2>{props.title}</h2>
// }

// const Title = (props) => <h2>{props.title}</h2>

class Title extends Component {
  render() {
    return <h2>{this.props.text}</h2>  
  }
}

Title.defaultProps = {
  text: 'Default title'
}

class Text extends Component {
  render() {
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props
    
    const mappedNumbers = arrayOfNumbers.map(multiply)

    return (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { counter: this.props.start }
    setInterval(() => {
      this.setState({  counter: this.state.counter + 1 })
    }, 1000)
  }

  render() {
    return <NumberCounter number={this.state.counter} />
  }
}

Counter.defaultProps = {
  start: 0
}

class NumberCounter extends Component {
  render() {
    console.log('NUmberCounter render()')
    return <span>{this.props.number}</span>
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title text="Welcome to React" />
        <Text
          arrayOfNumbers={[1, 2, 3]}
          multiply={(number) => number * 4}
          number={2}
          objectWithInfo={{key: 'value'}}
          text="Hello world!"
          title={<h1>This is the title</h1>}
        />
        <Counter start={100} />
      </header>
    </div>
  );
}

export default App;
