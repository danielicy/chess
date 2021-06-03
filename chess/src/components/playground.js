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
        offset: action.offset
      };
    
    case 'STOP_TIMER':
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



// render function that runs everytime an action is dispatched
const render = () => {
  ReactDOM.render(
    <Timer 
      time={store.getState().time}
      isOn={store.getState().isOn}
    />,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();