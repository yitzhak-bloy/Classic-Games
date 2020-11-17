import { createContext } from 'react';

export const DifficultyLevelContext = createContext({
  difficultyLevel: "Hard",
  difficultyChange: () => {}
})