import React from 'react'
import styles from './Home.module.css'
import { Link , useNavigate } from 'react-router-dom'
import Card from '../components/shared/Cards/Card'
import Button from '../components/shared/Button/Button'



const loginStyle ={
  textDecoration: 'none',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '22px',
  
  /* Blue */
  
  color: '#0077FF'
}




const Home = () => {

  const navigate = useNavigate();

  function gotoRegister(){
    navigate('/register')
 }
  return (

    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coder's House" icon="Logo" >
      <p className={styles.text} >We’re working hard to get Codershouse ready for everyone! While we wrap up the finishing youches, we’re adding people gradually to make sure nothing breaks :)</p>

    <Button text="Get Your User Name" onClick={gotoRegister}></Button>

<div  >
  <span>Have an invite text?</span>
   <Link style={loginStyle}  to={"/login"} > Sign Up </Link>
</div>
      </Card>
    </div>
  )
}

export default Home