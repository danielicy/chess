import './App.css';
import Board from './components/Board/Board';
import ClockControls from './components/ClockControls/ClockControls';
import Clock from './components/Clock/Clock';

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
    </div>
  );
}

export default App;
