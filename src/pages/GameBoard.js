import { useState } from 'react';
import Box from '@material-ui/core/Box';

import Board from '../components/Board';
import SelectPlayer from '../components/SelectPlayer';
import SelectLevel from '../components/SelectLevel'
import { PlayerContext } from '../shared/context/Player-context';
import { DifficultyLevelContext } from '../shared/context/DifficultyLevel-context';
import './GameBoard.css';

const GameBoard = () => {
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
      <Box className="GameBoard">
        <SelectLevel />
        <SelectPlayer />
        <Board />
      </Box >  
    </DifficultyLevelContext.Provider>
    </PlayerContext.Provider>
  );
}

export default GameBoard;
