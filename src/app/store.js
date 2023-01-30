import { configureStore } from '@reduxjs/toolkit'
import yazituraSlice from '../oyun/yazituraSlice'
export const store = configureStore({
  reducer: {
    oyun:yazituraSlice
  },
})