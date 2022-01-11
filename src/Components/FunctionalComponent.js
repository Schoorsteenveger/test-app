import React, { useState } from 'react'

export default function FunctionalComponent() {
    const [title, setTitle] = useState("FunctionalComponent")

    function inputHandler(text) {
        console.log(text)
        setTitle(text)
    }

    return (
        <div>
            <h1>{title}</h1>
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
