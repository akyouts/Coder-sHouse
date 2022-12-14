import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const initialState = {
     isAuth:false,
    isActivate:false,
    user:'',
    otp:{
      phone:'',
      hash:''
    }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state,action) => {
      const { user} = action.payload
      
      if(user == null){
        state.isAuth = false;
        state.user.name = '' ;
        state.isActivate = '';
      }else{
        state.isAuth = true;
        state.user = user;
        state.isActivate = user.activated
      }
      
      
      
    },
    setOtp:(state,action)=>{
      const {phone , hash} = action.payload;
      state.otp.phone = phone;
      state.otp.hash = hash;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAuth ,setOtp } = authSlice.actions

export default authSlice.reducer