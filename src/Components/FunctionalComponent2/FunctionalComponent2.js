import React from 'react'

export default function FunctionalComponent2(props) {
    console.log(props)


    return (
        <div className='container-inputOnchange'>
            <h1>Function Shared State {props.title}</h1>
            <input type="text" onChange={props.changeHandlerTitle} />

        </div>
    )
}

// import React from 'react'

// export default function FunctionalComponent2({ title, changeHandlerTitle }) {
//     console.log(props)


//     return (
//         <div className='container-inputOnchange'>
//             <h1>Function Shared State {title}</h1>
//             <input type="text" onChange={changeHandlerTitle} />

//         </div>
//     )
// }
