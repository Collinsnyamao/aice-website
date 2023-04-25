import { configureStore } from '@reduxjs/toolkit'

// import the specific reducers
import authReducer from "./features/authenctication"
import messageReducer from "./features/message"

const reducer = {
  auth: authReducer,
  message: messageReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true
})

export default store;
