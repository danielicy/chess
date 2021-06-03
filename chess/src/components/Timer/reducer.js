
 import { createSlice } from '@reduxjs/toolkit'



 

export const timerSlice = createSlice({
  name: 'timer',
  initialState: {
    currentTimer:0, 
    timers:[],  
    isOn: false,
    time: 0
  },
  reducers: {
    start: state => {
      
      state.isOn = true
    },
    stop: state => {
      alert("stopped");
        //state.isOn = false;
      
    },
    tick: (state, action) => {
      state.time =state.time + (action.time - state.offset)
      //state.offset: action.time
    },
    reset: state => {
        alert("reset")
       state.time =0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { start, stop, reset, tick } = timerSlice.actions

export default timerSlice.reducer