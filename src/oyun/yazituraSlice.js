import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  player: [],
}

export const yazituraSlice = createSlice({
  name: 'oyun',
  initialState,
  reducers: {
    changePlayer:(state,action)=>{
        state.player=action.payload
    },
  },
})

export const { changePlayer } = yazituraSlice.actions

export default yazituraSlice.reducer