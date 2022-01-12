import React, { Component } from 'react'

export default class classComponent extends Component {

    constructor() {
        super()

        this.state = {
            title: "ClassComponent:"
        }
    }
    inputHandler = (text) => {
        console.log(text)
        
    }
    render() {
        return (
            <div className='container-inputOnchange'>
                <h1>{this.state.title}</h1>
                <input onChange={(e) => this.inputHandler(e.target.value)} />
            </div>
        )
    }
}
