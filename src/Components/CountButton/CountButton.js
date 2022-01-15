import React, { useState, useEffect } from 'react'
import './CountButton.scss'

export default function CountButton(props) {
    const [currentCount, setCurrentCount] = useState(0)//State

    const handleClick = () => {
        setCurrentCount(currentCount + props.incrementBy)
    }

    useEffect(() => { 
        if (currentCount === 10)
            setCurrentCount(0)
    },[currentCount])// dependency array, vergeet de blockhaken nooit. Anders infinitive loopeffect.


    return (
        <div className='container-countBtn'>
            <button className='btn-increment' onClick={handleClick}>+{props.incrementBy}</button>
            <h2>{currentCount}</h2>
        </div>
    )
}
