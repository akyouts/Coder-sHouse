import React from 'react'
import RoomCard from '../../components/Room/RoomCard'
import styles from './Rooms.module.css'

const Dummy = [{
  id:1,
  topic:"Which Frame Work is best for Fe",
  speaker:[{
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  },
  {
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  },
  {
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  },
  


  ],
  totalPeople:40

},
{
  id:1,
  topic:"Which Frame Work is best for Fe",
  speaker:[{
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  },
  {
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  },
  {
      id:1,
      name:'Ahad',
      avatar:'/images/Monkey.png'
  }
  


  ],
  totalPeople:40
}
]

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
      <div className={styles.roomsList} >
         
      { Dummy.map((room)=>{
        
        return <RoomCard key={room.id} room={room} />
      }) }

      </div>
    </div>
    </>
  )
}

export default Rooms