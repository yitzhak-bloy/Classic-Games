import { useContext } from "react";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

import { GameRunningContext } from "../../../shared/context/GameRunning-context";
import { PlayerContext } from "../../../shared/context/Player-context";
import { TurnContext } from "../../../shared/context/Turn-context";

const SelectPlayer = () => {
  const playerChangeHandler = useContext(PlayerContext).playerChangeHandler;
  const huPlayer = useContext(PlayerContext).huPlayer;
  const gameRun = useContext(GameRunningContext).gameRunning;
  const TurnChange = useContext(TurnContext).TurnChange;

  const changeTo = () => {
    if (!gameRun) {
      playerChangeHandler(huPlayer == "X" ? "O" : "X");
      TurnChange("X");
    }
  };

  return (
    <Box>
      <Box component='div' p={1} m={1} mt={5}>
        <Button
          onClick={changeTo}
          variant='outlined'
          size='large'
          color='primary'
        >
          {huPlayer}
        </Button>
      </Box>
    </Box>
  );
};

export default SelectPlayer;
