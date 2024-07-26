import React from 'react'
import './ChildOneTwo.css'
const ChildTwo = ({sharedState,updateState}) => {
  return (
    <div className='child-container'>
         <h3>Child Two State: {sharedState}</h3>
         <button onClick={() => updateState('Updated from Child Two')}>Update State</button>
    </div>
  )
}

export default ChildTwo