

//https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
import React from 'react';
import './clock.css';
import { useSelector, useDispatch } from 'react-redux'
import { timers} from '../ClockControls/clockcontrolSlicer'


function Clock(props) {
    
    const timer = "100";// useSelector(state => state.clock.timers[props.id]);

    function format(time) {
        const pad = (time, length) => {
          while (time.length < length) {
            time = '0' + time;
          }
          return time;
        }
        
        time = new Date(time);
        let m = pad(time.getMinutes().toString(), 2);
        let s = pad(time.getSeconds().toString(), 2);
        let ms = pad(time.getMilliseconds().toString(), 3);
        
        return `${m} : ${s} . ${ms}`;
      }
    return (
        <div className="clock">
             <span>Time:{timer}</span>
        </div>
    );
}

export default Clock;