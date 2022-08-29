import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navigation.module.css"

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
  return (
    <nav className={`${styles.navbar} container`} >
        <Link style={brandStyle} to={"/"}>
        <img src="/images/Logo.png" alt="logo" />
        <span style={logoText} >Coder's House</span>
        </Link>
        
    </nav>
  )
}

export default Navigation