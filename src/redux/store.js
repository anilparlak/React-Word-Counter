import {  configureStore , combineReducers} from '@reduxjs/toolkit'
import wordReducer from './slice'

const rootReducer = combineReducers({ word:wordReducer});
export const store = configureStore({
    reducer: rootReducer
  
  })
  