import React, { useState } from 'react'
import './State.css'
const State = () => {
    const [state,setState]=useState(0);
    const handleClick=()=>{
        setState(state+1);
    }
  return (
    <div>
        <h1>State Management</h1>
        <button onClick={handleClick} className='likebutton'>Like Button</button>
        <h6>The page was liked by {state}</h6>
    </div>
  )
}

export default State