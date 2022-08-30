import React from 'react'
import styles from './button.module.css'

const Button = ({text , onClick}) => {
  return (
    <div  className={styles.buttonWrapper}>
     <button onClick={onClick} className={styles.button} > <span>{text}</span> <img  style={{ marginLeft:'10px' }} src="/images/Arrow.png" alt="arrow" /> </button>
</div>
  )
}

export default Button