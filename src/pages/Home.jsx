import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'

const loginStyle ={
  textDecoration: 'none',
  color: '#ffff',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  
  /* Blue */
  
  color: '#0077FF'
} 


const Home = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card} >
      <div className={styles.headingWrapper} >
          <img src="/images/Logo.png" alt="logo" />
          <h1 className={styles.heading}>Welcome to Coders House</h1>
      </div>
      <div>

      <p className={styles.text} >We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>

      </div>
      <div  className={styles.buttonWrapper}>
           <button className={styles.button} > Get Your UserName <img  style={{ marginLeft:'10px' }} src="/images/Arrow.png" alt="arrow" /> </button>
      </div>
      <div  >
        <span>Have an invite text?</span>
         <Link style={loginStyle}  to={"/login"} > Sign Up </Link>
      </div>
    </div>
    </div>
  )
}

export default Home