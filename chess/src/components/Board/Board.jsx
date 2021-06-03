import React from 'react';
import  board  from '../../assets/img/chessboard.png';

function Board() {
    return (
        <div>
              <img src={board} alt='board'/>
        </div>
    );
}

export default Board;