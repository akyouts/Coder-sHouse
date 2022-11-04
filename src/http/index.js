import axios from "axios";


const api= axios.create({
    baseURL:'http://localhost:8000',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        
    }
})


export const sendOtp = async (data)=> {
    
    return await api.post('/api/send-otp',data);

}

export const verifyOtp = async (data)=>{
    return await api.post('/api/verify-otp',data)
}

export const activate = async (data)=>{
    return await api.post('/api/activate',data)
}

export const logout = async ()=>{
    return await api.post('/api/logout');
}


api.interceptors.response.use((config)=>{
    return config
},async(error)=>{
    const originalRequest = error.config;

    if(error.response.status === 401 && originalRequest && !originalRequest.isRetry){
        originalRequest.isRetry = true;
        try {
           await axios.get(`http://localhost:8000/api/refresh`,{
                withCredentials:true
             });

             api.request(originalRequest);

        } catch (error) {
            console.log(error)
        }
        
    }
})


export default api;