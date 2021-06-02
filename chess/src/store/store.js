import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/Counter/counterSlicer'
import clockReducer from '../components/ClockControls/clockcontrolSlicer';

export default configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer
  }
})