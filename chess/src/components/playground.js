const { createStore } = Redux;

// Initial state for reducer
const initialState = {
  isOn: false,
  time: 0
};

// Reducer function
const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        isOn: true,
        offset: action.offset,
        interval: action.interval
      };
    
    case 'STOP_TIMER':
      clearInterval(state.interval);
      return {
        ...initialState
      };
      
    case 'TICK':
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time
      };

    default: 
      return state;
  }
}

// Create store using the reducer
const store = createStore(timer);

// React Component to display the timer
class Timer extends React.Component {
  constructor() {
    super();
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  start() {
  
  const interval = setInterval(() => {
      store.dispatch({
      type: 'TICK',
      time: Date.now()
    });
  });
    store.dispatch({
      type: 'START_TIMER',
      offset: Date.now(),
      interval
    });
  }
  
  stop() {
    store.dispatch({
      type: 'STOP_TIMER'
    });
  }

  click() {
    this.props.isOn ? start() : stop();
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
        <button onClick={this.props.interval ? this.stop : this.start}>
          { this.props.interval ? 'Stop' : 'Start' }
        </button>
      </div>
    );
  }
}

// render function that runs everytime an action is dispatched
const render = () => {
  ReactDOM.render(
    <Timer 
      time={store.getState().time}
      isOn={store.getState().isOn}
      interval={store.getState().interval}
    />,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();