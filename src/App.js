import { useState } from 'react';

import Board from './components/Board';
import ChoicePlayer from './components/ChoicePlayer';
import { PlayerContext } from './shared/context/Player-context';
import './App.css';

function App() {
  const [huPlayer ,setHuPlayer] = useState('X');
  const [aiPlayer ,setaiPlayer] = useState('O');
  
  return (
    <PlayerContext.Provider value={{  
      huPlayer: huPlayer,
      aiPlayer: aiPlayer,
      playerChange: (player) => {
        setHuPlayer(player) 
        setaiPlayer(player === "X" ? "O": "X" )
      } 
    }}> 
      <div className="App">
        <h1>Tic Tac Toe game</h1>
        <ChoicePlayer />
        <Board />
      </div>  
    </PlayerContext.Provider>
  );
}

export default App;
