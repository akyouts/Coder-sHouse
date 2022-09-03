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
        <div>



          <div className={styles.buttonWrapper} >
            <button className={phoneEmailToggle === "phone" ? styles.active : styles.tabbutton} onClick={() => { setphoneEmailToggle("phone") }}>
              <img src="./images/MobileIcon.png" alt="" />
            </button>
            <button className={phoneEmailToggle === "email" ? styles.active : styles.tabbutton} onClick={() => { setphoneEmailToggle("email") }}>
              <img src="./images/Envelop.png" alt="" /></button>
          </div>
          <div><Toggle onClick={onClick} /></div>


        </div>
      </div>


    </>
  )
}

export default StepPhoneEmail
