
 import { createSlice } from '@reduxjs/toolkit'

// Initial state for reducer
const initialState = {
    isOn: false,
    time: 0
  };
  
  // Reducer function
  const timer = (state = initialState, action) => {
    switch (action.type) {
      case 'START_TIMER':
        return {
          ...state,
          isOn: true,
          offset: action.offset
        };
      
      case 'STOP_TIMER':
        return {
          ...initialState
        };
        
      case 'TICK':
        return {
          ...state,
          time: state.time + (action.time - state.offset),
          offset: action.time
        };
  
      default: 
        return state;
    }
  }


  //export default timer;

 

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
        state.isOn = false
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