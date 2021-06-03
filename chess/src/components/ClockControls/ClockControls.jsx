import React from 'react';
import { useDispatch } from 'react-redux'
import { start ,stop ,reset, tick} from './clockcontrolSlicer';
import './clockcontrols.css';

function ClockControls(props) {
     
    let interval= 0;

    const dispatch = useDispatch();
    
    const clockid= parseInt(props.id);

    dispatch(reset({id:clockid}));

    function startTimer() {      
         interval = setInterval(() => {
        dispatch(tick({
          id:clockid,
          time: Date.now()}));
     });
    
     dispatch(start({
       id:clockid,
       offset: Date.now(),
       interval}));
    }

    function stopTimer(){
      clearInterval(interval);
      dispatch(stop({id:clockid}));
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
            dispatch(reset({id:clockid}));
            
          }}
        >
          Reset
        </span>

       
        </div>
    );
}

export default ClockControls;