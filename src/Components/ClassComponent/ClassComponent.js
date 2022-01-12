import React, { Component } from 'react'

export default class classComponent extends Component {

    constructor(props) {
        super(props)

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

// import React, { Component } from 'react'

// export default class classComponent extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             title: "Text"
//         }
//     }

//     inputHandler = (text) => {
//         console.log(text)



//     }
//     render() {
//         return (
//             <div className='container-inputOnchange'>
//                 <h1>{this.state.title}</h1>
//                 <input type="text" onChange={(e) => this.inputHandler(e.target.value)} />
//             </div>
//         )
//     }
// }
