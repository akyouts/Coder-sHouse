import React from 'react'
import TextInput from '../shared/TextInput/TextInput'
import styles from './AddRoomModal.module.css'

const AddRoomModal = () => {
  return (
    <div className={styles.modalMask}>
        <div className={styles.modalBody}>
            <div className={styles.modalHeader}>
                  <h3 className={styles.heading} >Enter the topic to be discussed</h3>
                  <TextInput fullwidth="true" />
                  <h2 className={styles.subHeading} >Room Types</h2>
                  <div className={styles.roomTypes}>
                    <div className={styles.typeBox}>
                        <img src="/images/Globe.png" alt="globe" />
                        <span>Open</span>
                    </div>
                    <div className={styles.typeBox}>
                        <img src="/images/Users.png" alt="Users" />
                        <span>Social</span>
                    </div>
                    <div className={styles.typeBox}>
                        <img src="/images/Lock1.png" alt="Lock" />
                        <span>Closed</span>
                    </div>
                  </div>
            </div>
            <div className={styles.modalFooter}>
                 <h2>Start a room,Open to Every One</h2>
                 <button className={styles.FooterButton}><img src="/images/Celebration.png" alt="" /><span>Lets Go</span></button>
            </div>
        </div>
    </div>
  )
}

export default AddRoomModal