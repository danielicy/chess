import React  from 'react';
import {ClockControls } from './clockcontrols';
import  board  from '../assets/img/chessboard.png';
import { Counter } from './Counter';

function MainBoard(props) {
    return(
        <React.Fragment>
             <ClockControls/>
             <Counter/>


     <div>
         <img src={board}/>

     </div>
      <ClockControls/>
        </React.Fragment>
    
     );
  }



  export default MainBoard;