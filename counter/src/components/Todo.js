import React, { useState } from 'react'

const Todo =()=>{
    const [item, setItem] = useState('')
    return(<>
        <h4>{item}</h4>
        <button onClick = {()=>{setItem(item)}}>할일추가</button>
        <button onClick = {()=>{setItem(' ')}}>할일삭제</button>
    </>)
}
export default Todo