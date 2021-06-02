import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/counterSlicer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})