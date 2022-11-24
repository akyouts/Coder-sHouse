import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AddRoomModal from '../../components/AddRoomModal/AddRoomModal'
import RoomCard from '../../components/Room/RoomCard'
import styles from './Rooms.module.css'
import { getAllRooms } from '../../http'



const Rooms = () => {

  const [rooms, setRooms] = useState([])
  useEffect( ()=>{
       const getRooms = async () =>{
        const { data } = await getAllRooms();
       setRooms(data.Rooms) ;
       }
       getRooms()

       
  },[])
   
  const [showModal,setshowModal] = useState(false);

  const openModal = () =>{
      setshowModal(true)
  }

  const onClose = ()=>{
        setshowModal(false)
  }
  
  return (
    <>
    { console.log(rooms) }
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
         
      { rooms.map((room)=>{
        
        return <RoomCard key={room.id} room={room} />
      }) }

      </div>
    </div>

    {showModal  && <AddRoomModal onClose={onClose}/>}
    </>
  )
}

export default Rooms