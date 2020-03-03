import React, { Component } from 'react'

export default class Forms extends Component {
    constructor() {
        super()
        this.state = {
            inputName: '',
            inputEmail: '@',
            inputTerms: true
        }
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange')
        console.log(e.target.checked)
        this.setState({ inputTerms: e.target.checked })
    }

    render() {
        return (
            <div>
                <h4>Forms</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Name:</label>
                        <input
                            id='name'
                            name='username'
                            onChange={e => this.setState({ inputName: e.target.value })}
                            placeholder='Type your name'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName} />
                    </p>
                    <p>
                        <label htmlFor='email'>Twitter:</label>
                        <input
                            id='email'
                            name='Email'
                            onChange={e => this.setState({ inputEmail: e.target.value })}
                            placeholder='Type your email'
                            ref={inputElement => this.inputEmail = inputElement}
                            value={this.state.inputEmail} />
                    </p>
                    <p>
                        <input
                            id='terms'
                            checked={this.state.inputTerms}
                            onChange={this.handleChange}
                            type='checkbox' />
                        <label htmlFor='terms'>Terms & Conditions:</label>
                    </p>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}