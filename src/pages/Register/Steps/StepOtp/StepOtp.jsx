import React , {useState} from 'react'
import Button from '../../../../components/shared/Button/Button'
import Card from '../../../../components/shared/Cards/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from './StepOtp.module.css'
import { verifyOtp } from '../../../../http'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../../store/authSclice'
import { useDispatch } from 'react-redux'



const StepOtp = ({onClick}) => {

  const [otp, setotp] = useState('');
  const {phone , hash}= useSelector((state)=>state.auth.otp)
  const dispatch = useDispatch();

  async  function submit(){
      try {
        if(!otp) return
        const { data } =await verifyOtp({ Otp:otp,Phone:phone,Hash:hash })
        console.log(data);
        dispatch(setAuth(data));
      } catch (error) {
        
      }
    //onClick()
  }
  return (
    <div className={styles.cardWrapper} >
        <Card title="" icon="Lock" >
      <div>
        <TextInput placeholder="" value={otp} onChange={(e)=>setotp(e.target.value)}   />
      </div>
      <p style={{marginTop:"10px"}}>Didn’t receive? Tap to resend</p>
      <div>
        <Button onClick={submit} text="Next" ></Button>
      </div>
     
    </Card>

    </div>
    
  )
}

export default StepOtp