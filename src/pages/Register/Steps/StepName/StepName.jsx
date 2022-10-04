import React , { useState } from 'react'
import Card from '../../../../components/shared/Cards/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from './StepName.module.css'
import { useDispatch } from 'react-redux'
import { setName } from '../../../../store/activateSlice'
import { useSelector } from 'react-redux'


const StepName = ({onClick}) => {
  
  const dispatch = useDispatch();
  const { name } = useSelector( (state)=> state.activate  )
  const [fullName,setFullName] = useState(name);

  const onNext = ()=>{

      dispatch(setName(fullName));
      onClick();
  }

  
  
  return (
    <>
    <div className={styles.cardWrapper} >
        <Card title="What’s your full name?" icon="Emoji" >
      <div>
        <TextInput placeholder="" value={fullName} onChange={(e)=>setFullName(e.target.value)}   />
      </div>
      <p style={{marginTop:"10px"}}>Please Use Real Name at Coder</p>
      <div>
        <Button onClick={onNext} text="Next" ></Button>
      </div>
     
    </Card>

    </div>
    </>
  )
}

export default StepName