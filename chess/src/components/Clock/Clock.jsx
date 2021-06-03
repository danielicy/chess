import React from 'react';
import './clock.css';
import { useSelector } from 'react-redux'



function Clock(props) {
    
    let timer =  useSelector(state => state.clock.timers[parseInt(props.id)]);
 
   
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
             <h1>Time:{format(timer)}</h1>
        </div>
    );
}

export default Clock;