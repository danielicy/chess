
import store from '../../store/store';
import React ,{Component} from 'react';
  /* const Timer = (props) => {
 
function constructor() {
    //super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
	
  function componentWillUnmount() {
		if (this._interval) cancelAnimationFrame(this._interval);
	}

  
	*/ 

 /* let _interval;

  function progress () {
		store.dispatch({
			type: 'TICK',
			time: Date.now()
		});
		_interval = requestAnimationFrame(progress);
	}
   function start() {
		_interval = requestAnimationFrame(progress);
		
    store.dispatch({
      type: 'START_TIMER',
      offset: Date.now()
    });
  }
  
    function stop() {
		cancelAnimationFrame(_interval);
    store.dispatch({
      type: 'STOP_TIMER'
    });
  } 

  function click(t) {
    props.isOn ? start() : stop();
  }
  


  function format (time){
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
    
    return (  <div>
          <h1>Time: {format(props.time)}</h1>
          <span>{props.isOn}</span>
          <button onClick={() =>click(props.isOn)}>
         
          Click
        </button>
        <button onClick={props.isOn ? stop : start}>
          { props.isOn ? 'Stop' : 'Start' }
        </button>
          
        
      
      </div> );
}
 
export default Timer;*/


 // React Component to display the timer
class Timer extends Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }
	
	componentWillUnmount() {
		if (this._interval) cancelAnimationFrame(this._interval);
	}

  start() {
    
		this._interval = requestAnimationFrame(this.progress);
		
    store.dispatch({
      type: 'START_TIMER',
      offset: Date.now()
    });
  }
	
	progress = () => {
		store.dispatch({
			type: 'TICK',
			time: Date.now()
		});
		this._interval = requestAnimationFrame(this.progress);
	}
  
  stop() {    
		cancelAnimationFrame(this._interval);
    store.dispatch({
      type: 'STOP_TIMER'
    });
  }

  click() {
    this.props.isOn ? this.start() :  this.stop();
  }
  
  format(time) {
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

  render() {
    return (
      <div>
        <h1>Time: {this.format(this.props.time)}</h1>
        <button onClick={ this.start}>
          Start
        </button>
        <button onClick={ this.stop }>
          Stop
        </button>
      </div>
    );
  }
}




export default Timer;