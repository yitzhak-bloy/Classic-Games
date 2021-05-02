import { useState, useEffect } from "react";

import { Button } from "@material-ui/core";

import PopsUp from "../../shared-components/popsUp/PopsUp";
import Card from "../card/Card";
import "./MatchingCardBoard.css";

const MatchingCardBoard = ({ options }) => {
  const [game, setGame] = useState([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [popsUpOpen, setPopsUpOpen] = useState(false);
  const [reset, setReset] = useState(false);

  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const colors = [
    "#ecdb54",
    "#e34132",
    "#6ca0dc",
    "#944743",
    "#dbb2d1",
    "#ec9787",
    "#00a68c",
    "#645394",
    "#6c4f3d",
    "#ebe1df",
    "#bc6ca7",
    "#bfd833",
  ];

  const shuffledGame = () => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        colorId: i,
        color: colors[i],
        flipped: false,
      };
      const secondOption = {
        id: 2 * i + 1,
        colorId: i,
        color: colors[i],
        flipped: false,
      };

      newGame.push(firstOption);
      newGame.push(secondOption);
    }

    const shuffledGame = newGame.sort(() => Math.random() - 0.5);
    setGame(shuffledGame);
  };

  useEffect(() => {
    shuffledGame();
  }, []);

  let points = Math.round(0.66 * flippedCount);
  useEffect(() => {
    const finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        shuffledGame();
        setPopsUpOpen(true);
        setReset(true);
      }, 500);
    }
  }, [game]);

  const handelClose = () => {
    setFlippedCount(0);
    setGame([]);
    shuffledGame();
    setPopsUpOpen(false);
  };
  const handelRestart = () => {
    setReset(true);
    handelClose();
  };

  if (flippedIndexes.length === 2) {
    const match =
      game[flippedIndexes[0]].colorId === game[flippedIndexes[1]].colorId;

    if (match) {
      const newGame = [...game];
      newGame[flippedIndexes[0]].flipped = true;
      newGame[flippedIndexes[1]].flipped = true;
      setGame(newGame);

      const newIndexes = [...flippedIndexes];
      newIndexes.push(false);
      setFlippedIndexes(newIndexes);
    } else {
      const newIndexes = [...flippedIndexes];
      newIndexes.push(true);
      setFlippedIndexes(newIndexes);
    }
  }

  if (game.length === 0) return <div>loading...</div>;
  else {
    return (
      <div className='MatchingCard__board'>
        <div className='MatchingCard__squares'>
          {game.map((card, index) => (
            <Card
              className='MatchingCard__square'
              id={index}
              color={card.color}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
              reset={reset}
              setReset={setReset}
            />
          ))}
        </div>

        <PopsUp
          open={popsUpOpen}
          handleClose={handelClose}
          description={["MatchingCard", points]}
        />

        <Button
          onClick={handelRestart}
          disableElevation
          variant='outlined'
          size='large'
          color='primary'
        >
          new game
        </Button>
      </div>
    );
  }
};

export default MatchingCardBoard;
