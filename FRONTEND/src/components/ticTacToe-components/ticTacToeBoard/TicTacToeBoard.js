import { useState, useEffect, useContext } from "react";
import { Box, Button } from "@material-ui/core";

import Square from "../square/Square";
import { minimax } from "../../../Algorithms/minimax";
import { winning } from "../../../Algorithms/winning";
import { PlayerContext } from "../../../shared/context/Player-context";
import { DifficultyLevelContext } from "../../../shared/context/DifficultyLevel-context";
import { GameRunning } from "../../../shared/context/GameRunning-context";
import { TurnContext } from "../../../shared/context/Turn-context";
import { UserContext } from "../../../shared/context/User-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import PopsUp from "../../shared-components/popsUp/PopsUp";
import "./TicTacToeBoard.css";

const TicTacToeBoard = () => {
  const [squares, setSquares] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
  const [win, setWin] = useState([false]);
  const [popsUpOpen, setPopsUpOpen] = useState(false);
  const [request, setRequest] = useState(false);

  const email = useContext(UserContext).email;
  const gameRunChange = useContext(GameRunning).gameChange;
  const huPlayer = useContext(PlayerContext).huPlayer;
  const aiPlayer = useContext(PlayerContext).aiPlayer;
  const setWhoseTurn = useContext(TurnContext).TurnChange;
  const whoseTurn = useContext(TurnContext).whoseTurn;
  const difficultyLevel = useContext(DifficultyLevelContext).difficultyLevel;

  const { sendRequest } = useHttpClient();

  useEffect(() => {
    if (whoseTurn === aiPlayer) {
      const bestMove = minimax(squares, aiPlayer, difficultyLevel);
      setTimeout(() => {
        setSquares(
          squares.map((square, i) => {
            if (i != bestMove.index) return square;
            return aiPlayer;
          })
        );
      }, 500);
      setWhoseTurn(huPlayer);
    }
  }, [whoseTurn, squares, huPlayer]);

  useEffect(() => {
    if (winning(squares, "X") === "true") {
      setWin([true, "X"]);
      setPopsUpOpen(true);
      setRequest(true);
    } else if (winning(squares, "O") === "true") {
      setWin([true, "O"]);
      setPopsUpOpen(true);
      setRequest(true);
    } else if (
      winning(squares, "X") === "full" ||
      winning(squares, "O") === "full"
    ) {
      setWin([true, "tie"]);
      setPopsUpOpen(true);
      setRequest(true);
    }
  }, [squares]);

  useEffect(async () => {
    if (request) {
      let outcome =
        win[1] == huPlayer ? "victory" : win[1] == aiPlayer ? "loss" : "draw";

      if (email) {
        try {
          const responseData = await sendRequest(
            "http://localhost:5000/api/userStatistics//updata/tictactoe",
            "PATCH",
            JSON.stringify({
              email: email,
              level: difficultyLevel,
              outcome,
            }),
            {
              "Content-Type": "application/json",
            }
          );
        } catch (err) {}
      }
    }
  }, [request]);

  const clickHandler = (SerialNum) => {
    if (whoseTurn === huPlayer) {
      setRequest(false);
      setSquares(
        squares.map((square, i) => {
          if (i !== SerialNum || square === aiPlayer || square === huPlayer)
            return square;
          setWhoseTurn(aiPlayer);
          gameRunChange(true);
          return huPlayer;
        })
      );
    }
  };

  const handelRestart = () => {
    setSquares(["0", "1", "2", "3", "4", "5", "6", "7", "8"]);
    gameRunChange(false);
    setWhoseTurn("X");
  };

  const handleClose = () => {
    handelRestart();
    setTimeout(() => {
      setPopsUpOpen(false);
    }, 1);
  };

  return (
    <Box>
      <Box className='board' m={2}>
        <Square state={squares[0]} keys={0} clickHandler={clickHandler} />
        <Square state={squares[1]} keys={1} clickHandler={clickHandler} />
        <Square state={squares[2]} keys={2} clickHandler={clickHandler} />
        <Square state={squares[3]} keys={3} clickHandler={clickHandler} />
        <Square state={squares[4]} keys={4} clickHandler={clickHandler} />
        <Square state={squares[5]} keys={5} clickHandler={clickHandler} />
        <Square state={squares[6]} keys={6} clickHandler={clickHandler} />
        <Square state={squares[7]} keys={7} clickHandler={clickHandler} />
        <Square state={squares[8]} keys={8} clickHandler={clickHandler} />
      </Box>

      <PopsUp open={popsUpOpen} handleClose={handleClose} description={win} />

      <Button
        onClick={handelRestart}
        disableElevation
        variant='outlined'
        size='large'
        color='primary'
      >
        new game
      </Button>
    </Box>
  );
};

export default TicTacToeBoard;
