import React , {useState} from 'react'
import Button from '../../../../../components/shared/Button/Button'
import Card from '../../../../../components/shared/Cards/Card'
import TextInput from '../../../../../components/shared/TextInput/TextInput'
import { sendOtp } from '../../../../../http/index'
import { useDispatch } from 'react-redux'
import { setOtp } from '../../../../../store/authSclice'

const Phone = ({onClick}) => {
  const [phoneNumber, setphoneNumber] = useState('');
  const dispatch = useDispatch();


  const onsubmit = async () =>{
   
        const otpReq = await sendOtp({Phone:phoneNumber});
        const data = otpReq.data;
        console.log(otpReq);
        dispatch(setOtp({phone:data.Phone, hash:data.hash}));

        onClick();
  }
  return (
    <Card title="Enter you phone number" icon="Phone" >
      <div>
        <TextInput placeholder="+91 8888888888" value = {phoneNumber} onChange={(e)=> setphoneNumber(e.target.value) } />
      </div>
      <div>
        <Button text="Next" onClick={onsubmit} ></Button>
      </div>
        <p>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
    </Card>
  )
}

export default Phone