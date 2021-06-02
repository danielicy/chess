import { createSlice } from '@reduxjs/toolkit'

export const Clock = createSlice({
  name: 'clock',
  initialState: {
    running: false,
    time:  0
  },
  reducers: {
    start: state => {     
      state.running = true
    },
    stop: state => {
        state.running = false
    },
    reset: (state, action) => {
      state.time = 0
    }
  }
})

// Action creators are generated for each case reducer function
export const { start, stop, reset } = Clock.actions

export default Clock.reducer