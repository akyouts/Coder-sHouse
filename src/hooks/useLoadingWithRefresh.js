import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSclice';


export function useLoadingWithRefresh(){
    const[ Loading , setLoading ] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{
         axios.get('http://localhost:8000/api/refresh',{
            withCredentials:true
         }).then((result)=>{
            const { data } = result;
            dispatch(setAuth(data));
           
            setLoading(false);
         }).catch((err)=>{
            
            setLoading(false);
         })
    },[])

    return { Loading } ;
}