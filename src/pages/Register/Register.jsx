import React from 'react'
import styles from './Register.module.css'
import { useState } from 'react'
import StepPhoneEmail from './Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from './Steps/StepOtp/StepOtp'
import StepName from './Steps/StepName/StepName'
import StepAvatar from './Steps/StepAvatar/StepAvatar'
import StepUserName from './Steps/StepUserName/StepUserName'




const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
    3:StepName,
    4:StepAvatar,
    5:StepUserName

}

const Register = () => {

    const [step,setStep] = useState(1);
    
    const increaseStep = () =>{
       setStep(step + 1);
    }
    const Step = steps[step]

  return (
    <div><Step onClick={increaseStep} /></div>
  )
}

export default Register