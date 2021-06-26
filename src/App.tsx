import React from 'react';
import './App.css';
import Board from './Components/Board';
import { Boards } from './style';

function App() {
  return (
    <div className="App">
      <Boards>
        <Board />
      </Boards>
    </div>
  );
}

export default App;
