import React, { useState } from 'react'

export default function FunctionalComponent() {
    const [title, setTitle] = useState("")

    function inputHandler(text) {
        console.log(text)
        setTitle(text)
    }

    return (
        <div className='container-inputOnchange'>
            <h1>Hello Function {title}</h1>
            <input onChange={(e) => inputHandler(e.target.value)} />
        </div>
    )
}


// export default function FunctionalComponent() {
//     return (
//         <div>
//             <input type="text" />
//             <h1>Hoi</h1>
//         </div>
//     )
// }
