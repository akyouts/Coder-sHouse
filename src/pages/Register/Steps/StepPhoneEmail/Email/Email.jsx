import React ,{useState} from 'react'
import Card from '../../../../../components/shared/Cards/Card'
import Button from '../../../../../components/shared/Button/Button'
import TextInput from '../../../../../components/shared/TextInput/TextInput'


const Email = ({onClick}) => {
  const [email, setemail] = useState('');


  return (
    <Card title="Enter you Email Address" icon="EmojiEmail" >
      <div>
        <TextInput placeholder="example@gmail.com" value = {email} onChange={(e)=> setemail(e.target.value)}  />
      </div>
      <div>
        <Button text="Next" onClick={onClick}></Button>
      </div>
      <p>By entering your Email Address, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>

    </Card>
  )
}

export default Email