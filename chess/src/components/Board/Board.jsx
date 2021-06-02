import React from 'react';
import  board  from '../../assets/img/chessboard.png';

function Board(props) {
    return (
        <div>
              <img src={board}/>
        </div>
    );
}

export default Board;