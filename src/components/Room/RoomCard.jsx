import React from 'react'
import styles from './RoomCard.module.css'



const RoomCard = ({room}) => {
  return (
    <div className={styles.card} >
        <h3 className={styles.topic}>{room.topic}</h3>
        <div className={styles.speakers}>
            <div className={styles.avatars}>
                 { room.speaker.map(speaker =>(
                    <img className={styles.avatar} src={speaker.avatar} alt="" />
                 )) }
            </div>
            <div className={styles.name}>
            <div className={styles.avatars}>
                 { room.speaker.map(speaker =>(
                    <div className={styles.nameWrapper}>
                        <span>{speaker.name}</span>
                        <img src="/images/chat.png" alt="" />
                    </div>
                 )) }
            </div>
            </div>
        </div>
        <div className={styles.peopleCount}>
              <span>{room.totalPeople}</span>
              <img src="/images/user-icon.png" alt="" />
        </div>
    </div>
  )
}

export default RoomCard