import React, { useState } from 'react'

const Counter =()=>{
    const [number, setNumber] = useState(0) // 훅

    const onAddHandler = ()=> {
        setNumber(number+1)
    }
    const onSubHandler = ()=>{
        setNumber(number-1)
    }
    return (<>
    <h1>{number}</h1>
    <button onClick = {onAddHandler}>+</button>
    <button onClick = {onSubHandler}>-</button>
    
    </>)
}

export default Counter