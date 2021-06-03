import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { start ,stop ,reset, tick} from './clockcontrolSlicer';
import './clockcontrols.css';

function ClockControls(props) {
     
    let interval= 0;

    const dispatch = useDispatch();
    
    function startTimer() {      
         interval = setInterval(() => {
        dispatch(tick(props.id));
     });
    
     dispatch(start(interval));
    }

    function stopTimer(){
      clearInterval(interval);
      dispatch(stop());
    }
      
     
    return (
        <div className="controls">
           <span
             className="start"
          aria-label="Start"
          onClick={() => {
            startTimer();             
          }}
        >
          Start
        </span>
        <span
             className="stop"
          aria-label="Stop"
          onClick={() => {
            stopTimer();            
          }}
        >
          Stop
        </span>
        <span
             className="reset"
          aria-label="Reset"
          onClick={() => {
            dispatch(reset());
            
          }}
        >
          Reset
        </span>

       
        </div>
    );
}

export default ClockControls;