import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlicer'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})