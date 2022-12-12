
import { useStateWithCallBack } from "./useStateWithCallBack"
import { useCallback, useRef ,useEffect } from "react"


export const useWebRTC = (roomId , user)=>{
  
      const [clients, setclients] = useStateWithCallBack([])
      const audioElements = useRef({})
      const connections = useRef({})
      const localMediaStream = useRef()
      
      

      const addNewClients = useCallback((newClient,cb)=>{

            const lookingFor = clients.find((res)=> newClient.id === res.id)
            if(lookingFor === undefined){
                
                setclients((existingClients)=> {
                  if(existingClients.find((res)=> newClient.id === res.id)){
                   return  [...existingClients]
                  }
                  else{
                    return[...existingClients,newClient]  
                  }
                  },cb)
            }
      },[clients])

      useEffect(() => {

        navigator.mediaDevices.getUserMedia({
          audio:true
         }).then(stream =>{
          localMediaStream.current = stream;
          addNewClients(user,()=>{
                      const localElement = audioElements.current[user.id]
                      if(localElement){
                        localElement.volume = 0;
                        localElement.srcObject = localMediaStream.current;
                      } 
                    })
                 })
          
          
         },[clients,setclients])
        //  const captureMedia = async()=>{
       
        //       localMediaStream.current = await navigator.mediaDevices.getUserMedia({
        //       audio:true
        //      })
             
             
        //      captureMedia().then(()=>{
                
        //         addNewClients(user,()=>{
        //           const localElement = audioElements.current[user.id]
        //           if(localElement){
        //             localElement.volume = 0;
        //             localElement.srcObject = localMediaStream.current;
        //           } 
        //         })
        //      })
        //  }
      
        


      const provideRef = (instance , userId)=>{
        audioElements.current[userId] = instance
        
      }
      

      return { clients ,provideRef }
} 