import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function Title(props) {
//   return <h2>{props.title}</h2>
// }

// const Title = (props) => <h2>{props.title}</h2>

class Title extends Component {
  render() {
    return <h2>{this.props.title}</h2>  
  }
}

class Text extends Component {
  render() {
    // const booleanText = this.props.boolean ? 'True' : 'False'
    const mappedNumbers = this.props.arrayOfNumber.map(n => n * 2)

    return (
      <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title title="Welcome to React" />
        <Text
          arrayOfNumber={[1, 2, 3]}
          boolean={true}
          number={1}
          objectWithInfo={{key: 'value'}}
          text="Hello world!"
        />
      </header>
    </div>
  );
}

export default App;
