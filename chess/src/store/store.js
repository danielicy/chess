import { configureStore } from '@reduxjs/toolkit'
import clockReducer from '../components/ClockControls/clockcontrolSlicer';

export default configureStore({
  reducer: {    
    clock: clockReducer   
  }
})