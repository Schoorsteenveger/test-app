import React from 'react'
import { useState } from 'react/cjs/react.development'
import ClassComponent2 from '../Components/ClassComponent2/ClassComponent2'
import FunctionalComponent2 from '../Components/FunctionalComponent2/FunctionalComponent2'

export default function Opdracht2() {
    // state in het parent element pakt 
    const [title, setTitle] = useState('')

    const changeHandlerTitle = (event) => {
        console.log(event)
        setTitle(event.target.value)

    }

    // Parent pagina met components
    return (
        <div>
            <h1>Opdracht 2</h1>
            <ClassComponent2 title={title} changeHandlerTitle={changeHandlerTitle} />
            <FunctionalComponent2 title={title} changeHandlerTitle={changeHandlerTitle} />
        </div>
    )
}
