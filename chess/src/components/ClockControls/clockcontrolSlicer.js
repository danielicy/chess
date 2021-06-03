import { createSlice } from '@reduxjs/toolkit'

export const Clock = createSlice({
  name: 'clock',
  initialState: {
    timers:[],
    running: false,
   // time:  0,
    interval:0,
    offset:[]
  },
  reducers: {
    start: (state, action) => {          
      state.running = true;
        state.interval = action.payload.interval;
        state.offset[action.payload.id]= action.payload.offset;      
    },
    stop: state => {      
        state.running = false;  
    },
    tick:(state, action) =>{      
      state.timers[action.payload.id]= state.timers[action.payload.id] +
       (action.payload.time - state.offset[action.payload.id] );
      state.offset[action.payload.id] = action.payload.time;
    },
    reset: (state, action) => {
      state.offset[action.payload.id]=0;
      state.timers[action.payload.id]=0;
    }
  }
})

// Action creators are generated for each case reducer function
export const { start, stop, reset,tick } = Clock.actions

export default Clock.reducer