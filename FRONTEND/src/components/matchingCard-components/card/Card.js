import { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

import "./Card.css";

const Card = ({
  id,
  color,
  game,
  flippedCount,
  setFlippedCount,
  flippedIndexes,
  setFlippedIndexes,
  reset,
  setReset,
  options,
}) => {
  const [flipped, setFlipped] = useState(false); // true = open, false = close
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 15, tension: 300, friction: 80 },
  });

  const onCardClick = () => {
    if (!game[id].flipped && flippedCount % 3 === 0) {
      setFlipped((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    } else if (
      flippedCount % 3 === 1 &&
      !game[id].flipped &&
      flippedIndexes.indexOf(id) < 0
    ) {
      setFlipped((state) => !state);
      setFlippedCount(flippedCount + 1);
      const newIndexes = [...flippedIndexes];
      newIndexes.push(id);
      setFlippedIndexes(newIndexes);
    }
  };

  useEffect(() => {
    const finished = !game.some((card) => card.flipped);
    if (finished && reset) {
      setTimeout(() => {
        setFlipped(false);
        setReset(false);
      }, 1000);
    }
  }, [game]);

  useEffect(() => {
    if (flippedIndexes[2] === true && flippedIndexes.indexOf(id) > -1) {
      setTimeout(() => {
        setFlipped((state) => !state);
        setFlippedCount(flippedCount + 1);
        setFlippedIndexes([]);
      }, 1000);
    } else if (flippedIndexes[2] === false && id === 0) {
      setFlippedCount(flippedCount + 1);
      setFlippedIndexes([]);
    }
  }, [flippedIndexes]);

  return (
    <div onClick={onCardClick}>
      <a.div
        className={`c back ${options === 64 && "cHard"}`}
        style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
      />
      <a.div
        class='c front'
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default Card;
