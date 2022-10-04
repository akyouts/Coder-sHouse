import React ,{ useState } from 'react'
import Card from '../../../../components/shared/Cards/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import Button from '../../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import { useSelector } from 'react-redux'



const StepAvatar = ({onClick}) => {

  const [avatar, setavatar] = useState('./images/Photo.png');
 
  const {name} = useSelector((state)=> state.activate)

  return (
    <>
    <div className={styles.cardWrapper} >
        <Card title={`Okay, ${name}!`} icon="Monkey" >
        <p style={{marginTop:"1px" , marginBottom:"20px"}}>How's This Photo</p>
      <div className={styles.avatarWrapper} >
         <img src={avatar} className={styles.avatarImg} alt="avatar" />
      </div>
        <div>
          <input type="file" className={styles.avatarInput} name="" id="avatarfile"  />
          <label htmlFor='avatarfile' className={styles.avatarLable} > Choose your Avatar </label>
        </div>
      <div>
        <Button onClick={onClick} text="Next" ></Button>
      </div>
     
    </Card>

    </div>
    </>
  )
}

export default StepAvatar