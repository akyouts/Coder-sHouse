import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../http'
import { setAuth } from '../../store/authSclice'
import styles from "./Navigation.module.css"
import { useSelector } from 'react-redux'

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

  const { isAuth } = useSelector(state => state.auth)


  const dispatch = useDispatch();

  const LogoutUser = async() =>{
     

    try {
      
      const { data } = await logout();
        dispatch(setAuth(data))
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
         { isAuth?(<button onClick={LogoutUser} >Logout</button>):'' }
        
        
    </nav>
  )
}

export default Navigation