import React, { Component } from 'react'

export default class classComponent extends Component {

    constructor() {
        super()

        this.state = {
            title: ""
        }
    }

    inputHandler = (text) => {

        this.setState({
            title: text.target.value

        })


    }
    render() {
        return (
            <div className='container-inputOnchange'>

                <h1>Hello Class {this.state.title}</h1>
                <input type="text" value={this.state.title} onChange={this.inputHandler} />
            </div>
        )
    }
}

