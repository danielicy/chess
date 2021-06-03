//https://stackoverflow.com/questions/34577012/creating-a-stopwatch-with-redux
//https://jsbin.com/dupeji/12/edit?js,output
//https://jsfiddle.net/kontrolonics/8wm3yu5o/

//https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b
import React from 'react';
import './clock.css';
import { useSelector, useDispatch } from 'react-redux'



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