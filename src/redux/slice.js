import { createSlice } from '@reduxjs/toolkit'

const wordSlice = createSlice({
  name: 'word',
  initialState: {
    getText: [],
    value: 0,
    characters: 0
  },
  reducers: {
    getWord: (state,action) =>{
        state.getText = []
        state.getText.push(action.payload)
        state.value = ((state.getText) + "").split(" ").length - 1
        state.characters = ((state.getText) + "").split("").length
    },
   

  }
})

export const { getWord , count } = wordSlice.actions
export default wordSlice.reducer
