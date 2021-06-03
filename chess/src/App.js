 
import './App.css';
import Board from './components/Board/Board';
import ClockControls from './components/ClockControls/ClockControls';
import Clock from './components/Clock/Clock';
import Counter from './components/Counter/Counter';
import Timer from './components/Timer/Timer';
import  store  from './store/store';

function App() {
  return (
    <div className="App">

      
      <div className="clockcontainer">
        <ClockControls id='1'/>
       <Clock id ='1'/>
      </div> 
      
      <Board/>
      <div className="clockcontainer">
        <ClockControls id='2'/>
        <Clock id='2'/>
      </div> 
      <Counter/>

      <Timer 
      time={store.getState().timer.time}
      isOn={store.getState().timer.isOn}
    />
    </div>
  );
}

export default App;
