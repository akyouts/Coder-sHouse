import React from 'react'

import StepName from '../../pages/Register/Steps/StepName/StepName'
import StepAvatar from '../../pages/Register/Steps/StepAvatar/StepAvatar'
import { useState } from 'react'



const Steper = {
  1:StepName,
  2:StepAvatar
}


const Activate = () => {

  const [Step, setStep] = useState(1);
  
  const Component = Steper[Step];

  const onClick = () =>{
    setStep(2); 
  }
  return (
    <div>
      
      <Component onClick={onClick} />

    </div>
  )
}

export default Activate