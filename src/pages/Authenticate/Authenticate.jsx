import React , {useState} from 'react'

import StepOtp from '../Register/Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Register/Steps/StepPhoneEmail/StepPhoneEmail'
import styles from './Authenticate.module.css'

const steps = {
    1:StepPhoneEmail,
    2:StepOtp,
    

}

const Authenticate = () => {
  
    const [step, setStep] = useState(1);
    const Step = steps[step];

    const increaseStep = () =>{
        setStep(step + 1);
     }
  return (
    <div><Step onClick={increaseStep}/></div>
  )
}

export default Authenticate



// /home/ahad/.ssh/id_ed25519