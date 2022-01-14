import React, { useState } from 'react'

export default function FunctionalComponent({ }) {
    const [title, setTitle] = useState("")

    function inputHandler(event) {
        console.log('USERTEXT', event.target.value)
        setTitle(event.target.value)
    }

    return (
        <div className='container-inputOnchange'>
            <h1>Hello Function {title}</h1>
            <input onChange={inputHandler} />
        </div>
    )
}
