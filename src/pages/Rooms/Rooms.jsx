import React from 'react'
import styles from './Rooms.module.css'

const Rooms = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.roomsHeader}>
        <div className={styles.left} >
          <span className={styles.heading} > All voice Rooms </span>
          <div className={styles.searchBox}>
            <img src="/images/search.png" alt="" />
            <input type="text" className={styles.searchInput} />
          </div>
        </div>
        <div className={styles.right}>
          <button className={styles.startRoomButton} >
            <img src="/images/start-room.png" alt="" />
            <span >Start a Room </span>
          </button>
        </div>
      </div>
      <div className={styles.RoomsList} ></div>
    </div>
    </>
  )
}

export default Rooms