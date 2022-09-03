import React , {useState} from 'react'
import Button from '../../../../../components/shared/Button/Button'
import Card from '../../../../../components/shared/Cards/Card'
import TextInput from '../../../../../components/shared/TextInput/TextInput'

const Phone = ({onClick}) => {
  const [phoneNumber, setphoneNumber] = useState('');
  return (
    <Card title="Enter you phone number" icon="Phone" >
      <div>
        <TextInput placeholder="+91 8888888888" value = {phoneNumber} onChange={(e)=> setphoneNumber(e.target.value) } />
      </div>
      <div>
        <Button text="Next" onClick={onClick} ></Button>
      </div>
        <p>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
    </Card>
  )
}

export default Phone