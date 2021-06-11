import { useReducer, createContext } from "react";

export const PlayerContext = createContext({
  huPlayer: "X",
  aiPlayer: "O",
  playerChangeHandler: () => {},
});

const reducerPlayer = (state, action) => {
  if (action.type === "X") {
    return {
      huPlayer: "X",
      aiPlayer: "O",
    };
  } else if (action.type === "O") {
    return {
      huPlayer: "O",
      aiPlayer: "X",
    };
  }
};

export const UserPlayerProvider = (props) => {
  const [statePlayer, dispatchPlayer] = useReducer(reducerPlayer, {
    huPlayer: "X",
    aiPlayer: "O",
  });

  const playerChangeHandler = (player) => {
    dispatchPlayer({ type: player });
  };

  return (
    <PlayerContext.Provider
      value={{
        huPlayer: statePlayer.huPlayer,
        aiPlayer: statePlayer.aiPlayer,
        playerChangeHandler: playerChangeHandler,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
