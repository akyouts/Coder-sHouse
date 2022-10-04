import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const initialState = {
   name:'',
   avatar:''
}

export const activateSlice = createSlice({
  name: 'actvate',
  initialState,
  reducers: {
    setName: (state,action) => {
        console.log(action.payload);
      state.name = action.payload
     },
    setAvatar:(state,action)=>{
       state.avatar = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setName ,setAvatar } = activateSlice.actions

export default activateSlice.reducer