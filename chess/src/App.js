 
import './App.css';
import Board from './components/Board/Board';
import ClockControls from './components/ClockControls/ClockControls';
import Clock from './components/Clock/Clock';
import Counter from './components/Counter/Counter';
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
      <Counter/>
    </div>
  );
}

export default App;
