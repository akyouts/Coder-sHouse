import { configureStore } from '@reduxjs/toolkit'
import auth from './authSclice'

export const store = configureStore({
  reducer: {auth},
})