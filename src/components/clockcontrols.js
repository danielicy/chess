import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  START_WATCH,
  STOP_WATCH,
  RESET_WATCH
  
} from '../store/actions';
import './clock.css';


export function ClockControls() {
 
  const dispatch = useDispatch();

  return (
    <div>
      <div >
        <button
         className="start"
          aria-label="Start clock"
          onClick={() => dispatch(START_WATCH)}
        >
          +
        </button>
        
        <button
         className="stop"
          aria-label="Stop clock"
          onClick={() => dispatch(STOP_WATCH)}
        >
          -
        </button>
       
        
        <button
         
          aria-label="Reset value"
          onClick={() => dispatch(RESET_WATCH)}
        >
          -
        </button>

      </div>
      {/* omit additional rendering output here */}
    </div>
  )
}


