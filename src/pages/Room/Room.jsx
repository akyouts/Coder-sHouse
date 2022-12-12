import React from 'react'

import { useWebRTC } from '../../hooks/useWebRTC'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const Room = () => {
  const { id:roomId } = useParams();
  const user = useSelector(state => state.auth.user)

  
  const { clients ,provideRef } = useWebRTC(roomId,user);
  
  return (
    <div>
      <h1>All Connected Clients</h1>
      {
        clients.map((ele)=>{
          
          return (<div>
            <audio ref={(instance)=>{return provideRef(instance, ele.id)}}  controls autoPlay></audio>
            <h4>{ ele.name }</h4>
          </div>)
        })
      }
    </div>
  )
}
