import React, { useState } from 'react'
import './CountButton.css'

export default function CountButton(props) {
    const [currentCount, setCurrentCount] = useState(0)//State

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    return (
        <div className='container-countBtn'>
            <button className='btn-increment' onClick={handleClick}>+{props.incrementBy}</button>
            <h2>{currentCount}</h2>
        </div>
    )
}
