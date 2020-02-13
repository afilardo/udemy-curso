import React, { Component } from 'react';
import ConditionalSection from './sections/conditional'
import cars from './assets/cars.json'
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

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Title text="Welcome to React" />
//         <Text
//           arrayOfNumbers={[1, 2, 3]}
//           multiply={(number) => number * 4}
//           number={2}
//           objectWithInfo={{key: 'value'}}
//           text="Hello world!"
//           title={<h1>This is the title</h1>}
//         />
//         <Counter start={100} />     
//       </header>
//     </div>
//   );
// }

// class App extends Component {
//   render() {
//     const numbers = [1, 1, 4, 5]

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <Title text="Working with lists" />
//           {numbers.map((number, index) => {
//             return <p key={index}>The number {number}</p>
//           })}
//         </header>
//       </div>   
//     )
//   }
// }

class CarItem extends Component {
  render() {
    const { car, id } = this.props

    return (
      <li>
        <p><strong>ID: </strong>{id}</p>
        <p><strong>Name: </strong>{car.name}</p>
        <p><strong>Brand: </strong>{car.company}</p>
      </li>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text="Working with object lists" />
          <ul>
            {
              cars.map(car => {
                return <CarItem key={car.id} id={car.id} car={car} />
              })
            }
          </ul>
        </header>
      </div>   
    )
  }
}

export default App;
