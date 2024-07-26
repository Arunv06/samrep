import React, { useState } from 'react'
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const ParentComponent = () => {
    const [sharedStateA,setSharedStateA] = useState('hi');
    const [sharedStateB,setSharedStateB] = useState('hi')
  return (
    <div>
        <ChildOne sharedState={sharedStateA} updateState={setSharedStateA} />
        <ChildTwo sharedState={sharedStateB} updateState={setSharedStateB} />
    </div>
  )
}

export default ParentComponent