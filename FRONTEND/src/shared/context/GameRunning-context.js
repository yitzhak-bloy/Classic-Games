import { useState, createContext } from "react";

export const GameRunningContext = createContext({
  gameRunning: false,
});

export const GameRunningProvider = (props) => {
  const [gameRunning, setGameRunning] = useState(false);

  return (
    <GameRunningContext.Provider
      value={{
        gameRunning: gameRunning,
        gameChange: (state) => {
          setGameRunning(state);
        },
      }}
    >
      {props.children}
    </GameRunningContext.Provider>
  );
};
