import React, { useState } from 'react'
import Phone from './Phone/Phone'
import Email from './Email/Email'
import styles from './StepPhoneEmail.module.css'

const PhoneEmailMap = {
  phone: Phone,
  email: Email
}

const StepPhoneEmail = ({ onClick }) => {
  const [phoneEmailToggle, setphoneEmailToggle] = useState("phone");
  var Toggle = PhoneEmailMap[phoneEmailToggle];



  return (

    <>        
    
     <div className={styles.cardWrapper}>
      <div className={styles.buttonWrapper} >
      <button onClick={() => {setphoneEmailToggle("phone")}}>Phone</button>
      <button onClick={ () => {setphoneEmailToggle("email")}}>email</button>
      </div>
      <div><Toggle /></div>
      <button onClick={onClick}>Next</button>
    </div>

      
    </>
  )
}

export default StepPhoneEmail
