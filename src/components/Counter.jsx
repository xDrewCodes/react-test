import React, { useState } from 'react'
import './Counter.css'

function Counter() {

    const [count, setCount] = useState(0) 

    return (
        <div className="counter__wrapper">
            <button onClick={ () => setCount( count--) }>-</button>
            <h2>{count}</h2>
            <button onClick={ () => setCount( count++) }>+</button>
        </div>
    )

}

export default Counter