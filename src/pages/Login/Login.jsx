import React , {useState} from 'react'

import StepOtp from '../Register/Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Register/Steps/StepPhoneEmail/StepPhoneEmail'

const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
    

}

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const increaseStep = () =>{
        setStep(step + 1);
     }
  return (
    <div><Step onClick={increaseStep}/></div>
  )
}

export default Login