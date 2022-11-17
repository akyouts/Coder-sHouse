import React from 'react'
import { useState } from 'react'
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal'
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
   
  const [showModal,setshowModal] = useState(false);

  const openModal = () =>{
      setshowModal(true)
  }
  
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
          <button onClick={openModal} className={styles.startRoomButton} >
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

    {showModal  && <AddRoomModal/>}
    </>
  )
}

export default Rooms