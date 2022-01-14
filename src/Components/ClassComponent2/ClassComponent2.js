import React, { Component } from 'react'

export default class ClassComponent2 extends Component {
    constructor(props) {
        super()

    }

    render() {

        return (
            <div className='container-inputOnchange'>
                <h2>Opdracht2</h2>
                <h1>Class Shared State {this.props.title}</h1>
                <input type="text" value={this.props.title} onChange={this.props.changeHandlerTitle} />
            </div>
        )
    }
}

