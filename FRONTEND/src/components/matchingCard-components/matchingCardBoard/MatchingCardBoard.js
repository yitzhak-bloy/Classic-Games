import mangaAvatar1 from "../../../shared/png/Manga Avatar 1.png";
import mangaAvatar2 from "../../../shared/png/Manga Avatar 2.png";
import mangaAvatar3 from "../../../shared/png/Manga Avatar 3.png";
import mangaAvatar4 from "../../../shared/png/Manga Avatar 4.png";
import mangaAvatar5 from "../../../shared/png/Manga Avatar 5.png";
import mangaAvatar6 from "../../../shared/png/Manga Avatar 6.png";
import mangaAvatar7 from "../../../shared/png/Manga Avatar 7.png";
import mangaAvatar8 from "../../../shared/png/Manga Avatar 8.png";
import mangaAvatar9 from "../../../shared/png/Manga Avatar 9.png";
import mangaAvatar10 from "../../../shared/png/Manga Avatar 10.png";
import mangaAvatar11 from "../../../shared/png/Manga Avatar 11.png";
import mangaAvatar12 from "../../../shared/png/Manga Avatar 12.png";
import iversityAvatar1 from "../../../shared/png/Diversity Avatar-1.png";
import iversityAvatar2 from "../../../shared/png/Diversity Avatar-2.png";
import iversityAvatar3 from "../../../shared/png/Diversity Avatar-3.png";
import iversityAvatar4 from "../../../shared/png/Diversity Avatar-4.png";
import iversityAvatar5 from "../../../shared/png/Diversity Avatar-5.png";
import iversityAvatar6 from "../../../shared/png/Diversity Avatar-6.png";
import iversityAvatar7 from "../../../shared/png/Diversity Avatar-7.png";
import iversityAvatar8 from "../../../shared/png/Diversity Avatar-8.png";
import coolGuysAvatarsIllustration1 from "../../../shared/png/Cool guys avatars illustration-01.png";
import coolGuysAvatarsIllustration2 from "../../../shared/png/Cool guys avatars illustration-02.png";
import coolGuysAvatarsIllustration3 from "../../../shared/png/Cool guys avatars illustration-03.png";
import coolGuysAvatarsIllustration4 from "../../../shared/png/Cool guys avatars illustration-04.png";
import coolGuysAvatarsIllustration5 from "../../../shared/png/Cool guys avatars illustration-05.png";
import coolGuysAvatarsIllustration6 from "../../../shared/png/Cool guys avatars illustration-06.png";
import coolGuysAvatarsIllustration7 from "../../../shared/png/Cool guys avatars illustration-07.png";
import coolGuysAvatarsIllustration8 from "../../../shared/png/Cool guys avatars illustration-08.png";
import emojisAvatarIllustrations01 from "../../../shared/png/Emojis Avatar Illustrations-01.png";
import emojisAvatarIllustrations02 from "../../../shared/png/Emojis Avatar Illustrations-02.png";
import emojisAvatarIllustrations03 from "../../../shared/png/Emojis Avatar Illustrations-03.png";
import emojisAvatarIllustrations04 from "../../../shared/png/Emojis Avatar Illustrations-04.png";

import { useState, useEffect, useContext } from "react";

import { Button } from "@material-ui/core";

import { useHttpClient } from "../../../shared/hooks/http-hook";

import { UserContext } from "../../../shared/context/User-context";

import PopsUp from "../../shared-components/popsUp/PopsUp";
import Card from "../card/Card";
import "./MatchingCardBoard.css";

const MatchingCardBoard = ({
  options,
  flippedCount,
  setFlippedCount,
  difficulty,
}) => {
  const [game, setGame] = useState([]);
  const [popsUpOpen, setPopsUpOpen] = useState(false);
  const [reset, setReset] = useState(false);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [request, setRequest] = useState(false);

  const email = useContext(UserContext).email;

  const { sendRequest } = useHttpClient();
  let points = Math.round(0.66 * flippedCount);

  const illustrations = [
    mangaAvatar1,
    mangaAvatar2,
    mangaAvatar3,
    mangaAvatar4,
    mangaAvatar5,
    mangaAvatar6,
    mangaAvatar7,
    mangaAvatar8,
    mangaAvatar9,
    mangaAvatar10,
    mangaAvatar11,
    mangaAvatar12,
    iversityAvatar1,
    iversityAvatar2,
    iversityAvatar3,
    iversityAvatar4,
    iversityAvatar5,
    iversityAvatar6,
    iversityAvatar7,
    iversityAvatar8,
    coolGuysAvatarsIllustration1,
    coolGuysAvatarsIllustration2,
    coolGuysAvatarsIllustration3,
    coolGuysAvatarsIllustration4,
    coolGuysAvatarsIllustration5,
    coolGuysAvatarsIllustration6,
    coolGuysAvatarsIllustration7,
    coolGuysAvatarsIllustration8,
    emojisAvatarIllustrations01,
    emojisAvatarIllustrations02,
    emojisAvatarIllustrations03,
    emojisAvatarIllustrations04,
  ];

  const shuffledGame = () => {
    const newGame = [];
    for (let i = 0; i < options / 2; i++) {
      const firstOption = {
        id: 2 * i,
        illustrationId: i,
        illustration: illustrations[i],
        flipped: false,
      };
      const secondOption = {
        id: 2 * i + 1,
        illustrationId: i,
        illustration: illustrations[i],
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
  }, [options]);

  useEffect(() => {
    (async () => {
      if (request && email) {
        try {
          const responseData = await sendRequest(
            "http://localhost:5000/api/userStatistics/updata/matching-card",
            "PATCH",
            JSON.stringify({
              email: email,
              level: difficulty,
              result: points,
            }),
            {
              "Content-Type": "application/json",
            }
          );
        } catch (err) {}
      }
    })();
  }, [request]);

  useEffect(() => {
    const finished = !game.some((card) => !card.flipped);
    if (finished && game.length > 0) {
      setTimeout(() => {
        shuffledGame();
        setRequest(true);
        setPopsUpOpen(true);
        setReset(true);
      }, 500);
    }
  }, [game]);

  const handelClose = () => {
    setFlippedCount(0);
    setGame([]);
    shuffledGame();
    setRequest(false);
    setPopsUpOpen(false);
  };
  const handelRestart = () => {
    setReset(true);
    handelClose();
  };

  if (flippedIndexes.length === 2) {
    const match =
      game[flippedIndexes[0]].illustrationId ===
      game[flippedIndexes[1]].illustrationId;

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
        <div
          className={`MatchingCard__squares ${
            options === 64
              ? "MatchingCard__squares-hard"
              : options === 16
              ? "MatchingCard__squares-easy"
              : null
          }`}
        >
          {game.map((card, index) => (
            <Card
              className='MatchingCard__square'
              id={index}
              illustration={card.illustration}
              game={game}
              flippedCount={flippedCount}
              setFlippedCount={setFlippedCount}
              flippedIndexes={flippedIndexes}
              setFlippedIndexes={setFlippedIndexes}
              reset={reset}
              setReset={setReset}
              options={options}
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
          className='matching-card-board-button__new-game'
        >
          new game
        </Button>
      </div>
    );
  }
};

export default MatchingCardBoard;
