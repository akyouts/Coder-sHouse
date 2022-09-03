import React , {useState} from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Cards/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'

const StepOtp = ({onClick}) => {

  const [otp, setotp] = useState('');
  return (
    <div className={styles.cardWrapper} >
        <Card title="" icon="Lock" >
      <div>
        <TextInput placeholder="" value={otp} onChange={(e)=>setotp(e.target.value)}   />
      </div>
      <p style={{marginTop:"10px"}}>Didn’t receive? Tap to resend</p>
      <div>
        <Button text="Next" ></Button>
      </div>
     
    </Card>

    </div>
    
  )
}

export default StepOtp