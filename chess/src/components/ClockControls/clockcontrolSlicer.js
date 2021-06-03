import { createSlice } from '@reduxjs/toolkit'

export const Clock = createSlice({
  name: 'clock',
  initialState: {
    timers:[] = ['d'],
    running: false,
    time:  0,
    interval:0
  },
  reducers: {
    start: (state, action) => {          
      state.running = true;
      state.interval = action.payload;
      
    },
    stop: state => {      
        state.running = false;
        console.log("stop")
    },
    tick:(state, action) =>{
      console.log(action)
    },
    reset: (state, action) => {
      alert('reset')  
      state.time = 0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { start, stop, reset,tick } = Clock.actions

export default Clock.reducer