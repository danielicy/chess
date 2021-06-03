import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { start ,stop ,reset, tick} from './clockcontrolSlicer';
import './clockcontrols.css';

function ClockControls(props) {

    const running = useSelector(state => state.clock.running);
    const interval = useSelector(state => state.clock.interval);

    const dispatch = useDispatch();
    
    function startTimer() {
      
        const interval = setInterval(() => {
        dispatch(tick(props.id));

     });
    
     dispatch(start(interval));
    }

    function stopTimer(){
      clearInterval(interval);
      dispatch(stop());
      console.log("stopped")

    }
      
     
    return (
        <div className="controls">
           <span
             className="start"
          aria-label="Start"
          onClick={() => {
            startTimer();
           // dispatch(start());
             
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

        <span>State: {running}</span>
        </div>
    );
}

export default ClockControls;