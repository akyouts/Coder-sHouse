import React ,{ useState } from 'react'
import Card from '../../../../components/shared/Cards/Card'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import Button from '../../../../components/shared/Button/Button'
import styles from './StepAvatar.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { render } from 'react-dom'
import {setAvatar} from '../../../../store/activateSlice'
import { activate } from '../../../../http'







const StepAvatar = ({onClick}) => {

  
  const [imageAvatar, setavatar] = useState('./images/Photo.png');
  const dispatch = useDispatch()
  
  const {name , avatar} = useSelector((state)=> state.activate)
  
  const captureImage = (e) =>{
    const image  = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = ()=>{
      setavatar(reader.result)
      dispatch(setAvatar(reader.result))
    }
    
  }

  const submit = async () =>{
try {
    const { data } = await avatar({ name , avatar });
} catch (error) {
    console.log(error);
}
  }
  return (
    <>
    <div className={styles.cardWrapper} >
        <Card title={`Okay, ${name}!`} icon="Monkey" >
        <p style={{marginTop:"1px" , marginBottom:"20px"}}>How's This Photo</p>
      <div className={styles.avatarWrapper} >
         <img src={imageAvatar} className={styles.avatarImg} alt="avatar" />
      </div>
        <div>
          <input type="file" className={styles.avatarInput} name="" id="avatarfile" onChange={captureImage}  />
          <label htmlFor='avatarfile' className={styles.avatarLable} > Choose your Avatar </label>
        </div>
      <div>
        <Button onClick={submit} text="Next" ></Button>
      </div>
     
    </Card>

    </div>
    </>
  )
}

export default StepAvatar