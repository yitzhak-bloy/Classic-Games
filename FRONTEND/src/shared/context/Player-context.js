import { createContext } from "react";

export const PlayerContext = createContext({
  huPlayer: "X",
  aiPlayer: "O",
  playerChange: () => {},
});
