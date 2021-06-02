 
import './App.css';
import Board from './components/Board/Board';
import ClockControls from './components/ClockControls/ClockControls';
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      <div className="clockcontainer">
        <ClockControls/>
       <Clock/>
      </div> 
      
      <Board/>
      <div className="clockcontainer">
        <ClockControls/>
        <Clock/>
      </div> 
    </div>
  );
}

export default App;
