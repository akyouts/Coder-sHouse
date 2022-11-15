import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { logout } from '../../http'
import { setAuth } from '../../store/authSclice'
import styles from "./Navigation.module.css"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const brandStyle = {
  color: "#ffff",
  textDecoration:"none",
  fontWeight:"bold",
  fontSize: "22px",
  display:"flex",
  alignitems:"center"
}

const logoText = {
  marginLeft: "10px"
}

const Navigation = () => {

  const navigate = useNavigate()

  const { isAuth , user } = useSelector(state => state.auth)


  const dispatch = useDispatch();

  const LogoutUser = async() =>{
     

    try {
      
      const { data } = await logout();
      dispatch(setAuth(data))
      navigate('/')

    } catch (error) {
        console.log(error);
    }
     

  }
  return (
    <nav className={`${styles.navbar} container`} >
        <Link style={brandStyle} to={"/"}>
        <img src="/images/Logo.png" alt="logo" />
        <span style={logoText} >Coder's House</span>
        </Link>
        
         <div className={ styles.navRight } >
          <h3 className={styles.name} >{ user.name }  </h3>
          {isAuth?(<img className={styles.avatar} src={user.avatar} height="40" width="40" alt="" />):''}
         { isAuth?(<button className={styles.logoutButton} onClick={LogoutUser} >
          <img className='' src='/images/logout.png' />
         </button>):'' }
         </div>
        
        
    </nav>
  )
}

export default Navigation