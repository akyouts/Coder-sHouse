import { configureStore } from '@reduxjs/toolkit'
import auth from './authSclice'
import activate from './activateSlice'

export const store = configureStore({
  reducer: {auth , activate},
})