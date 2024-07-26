import React from 'react'
import './ChildOneTwo.css'

const ChildOne = ({sharedState, updateState}) => {
  return (
    <div className='child-container'>
        <h3>Child One State : {sharedState} </h3>
        <button onClick={() => updateState('Updated from Child One')}>Update State</button>

    </div>
  )
}

export default ChildOne