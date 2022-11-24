import React from 'react'
import { useState } from 'react'
import TextInput from '../shared/TextInput/TextInput'
import styles from './AddRoomModal.module.css'
import { createRoom as create } from '../../http'
import { useNavigate } from 'react-router-dom'

const AddRoomModal = ({ onClose }) => {

  const [roomType,setRommType]=useState('open')
  const [topic,setTopic] =useState('')
  const navigate = useNavigate();

  const createRoom = async () =>{
    // Api request to create Room.

    try {

      if(!topic)
      return

      const {data} = await create({ topic , roomType  })
      navigate(`/room/${data.id}`);
      
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.modalMask}>
        <div className={styles.modalBody}>
          <button onClick={onClose} className={styles.closeButton}>
            <img src="/images/close.png" alt="" />
          </button>
            <div className={styles.modalHeader}>
                  <h3 className={styles.heading} >Enter the topic to be discussed</h3>
                  <TextInput fullwidth="true" value={topic} onChange = { (e) => setTopic(e.target.value) } />
                  <h2 className={styles.subHeading} >Room Types</h2>
                  <div className={styles.roomTypes}>
                    <div className={`${styles.typeBox} ${roomType === 'open'? styles.active:''} `} onClick={()=>{
                      setRommType('open')
                    }}>
                        <img src="/images/Globe.png" alt="globe" />
                        <span>Open</span>
                    </div>
                    <div className={`${styles.typeBox} ${roomType === 'users'? styles.active:''} `} onClick={()=>{
                      setRommType('users')
                    }} >
                        <img src="/images/Users.png" alt="Users" />
                        <span>Social</span>
                    </div>
                    <div className={`${styles.typeBox} ${roomType === 'lock'? styles.active:''} `} onClick={()=>{
                      setRommType('lock')
                    }}>
                        <img src="/images/Lock1.png" alt="Lock" />
                        <span>Closed</span>
                    </div>
                  </div>
            </div>
            <div className={styles.modalFooter}>
                 <h2>Start a room,Open to Every One</h2>
                 <button className={styles.FooterButton} onClick={createRoom} ><img src="/images/Celebration.png" alt="" /><span>Lets Go</span></button>
            </div>
        </div>
    </div>
  )
}

export default AddRoomModal