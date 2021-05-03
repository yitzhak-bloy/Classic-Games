import { useState, useEffect } from "react";

import MatchingCardBoard from "../../components/matchingCard-components/matchingCardBoard/MatchingCardBoard";
import DifficultyLevelButtons from "../../components/shared-components/difficultyLevelButtons/DifficultyLevelButtons";
import "./MatchingCard.css";

const MatchingCard = () => {
  const [options, setOptions] = useState(36);
  const [difficulty, setDifficulty] = useState("medium");

  const handelEasy = () => {
    setOptions(16);
    setDifficulty("easy");
  };
  const handelMedium = () => {
    setOptions(36);
    setDifficulty("medium");
  };
  const handelHard = () => {
    setOptions(64);
    setDifficulty("hard");
  };

  useEffect(() => {
    setDifficulty(options === 16 ? "easy" : options === 36 ? "medium" : "hard");
  }, [options]);

  return (
    <div className='MatchingCard-container'>
      <DifficultyLevelButtons
        difficulty={difficulty}
        handelEasy={handelEasy}
        handelMedium={handelMedium}
        handelHard={handelHard}
      />
      <MatchingCardBoard options={options} />
    </div>
  );
};

export default MatchingCard;
