import { useState } from 'react';

import Board from './components/Board';
import SelectPlayer from './components/SelectPlayer';
import SelectLevel from './components/SelectLevel'
import Header from './components/Header';
import { PlayerContext } from './shared/context/Player-context';
import { DifficultyLevelContext } from './shared/context/DifficultyLevel-context';
import './App.css';

function App() {
  const [huPlayer ,setHuPlayer] = useState('X');
  const [aiPlayer ,setaiPlayer] = useState('O');
  const [level, setLevel] = useState('hard')
  
  return (
    <PlayerContext.Provider value={{  
      huPlayer: huPlayer,
      aiPlayer: aiPlayer,
      playerChange: (player) => {
        setHuPlayer(player) 
        setaiPlayer(player === "X" ? "O": "X" )
      } 
    }}> 
    <DifficultyLevelContext.Provider value={{  
      difficultyLevel: level,
      difficultyChange: (level) => {
        setLevel(level === "hard" ? "easy" : "hard")
      }
    }}>
      <div className="App">
        <Header />
        <h1>Tic Tac Toe game</h1>
        <SelectLevel />
        <SelectPlayer />
        <Board />
      </div>  
    </DifficultyLevelContext.Provider>
    </PlayerContext.Provider>
  );
}

export default App;
