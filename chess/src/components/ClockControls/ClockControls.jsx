import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { start ,stop ,reset} from './clockcontrolSlicer';
import './clockcontrols.css';

function ClockControls(props) {

    const running = useSelector(state => state.clock.running);

    const dispatch = useDispatch();

    return (
        <div className="controls">
           <span
             className="start"
          aria-label="Start"
          onClick={() => {
            dispatch(start());
            alert(running);
          }}
        >
          Start
        </span>
        <span
             className="stop"
          aria-label="Stop"
          onClick={() => {
            dispatch(stop());
            alert(running);
          }}
        >
          Stop
        </span>
        <span
             className="reset"
          aria-label="Reset"
          onClick={() => {
            dispatch(reset());
            alert(running);
          }}
        >
          Reset
        </span>

        <span>State: {running}</span>
        </div>
    );
}

export default ClockControls;