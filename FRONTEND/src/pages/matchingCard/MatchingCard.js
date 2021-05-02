import { useState, useEffect } from "react";

import MatchingCardBoard from "../../components/matchingCard-components/matchingCardBoard/MatchingCardBoard";
import DifficultyLevelButtons from "../../components/shared-components/difficultyLevelButtons/DifficultyLevelButtons";

const MatchingCard = () => {
  const [options, setOptions] = useState(16);
  const [difficulty, setDifficulty] = useState("medium");

  const handelEasy = () => {
    setOptions(9);
    setDifficulty("easy");
  };
  const handelMedium = () => {
    setOptions(16);
    setDifficulty("medium");
  };
  const handelHard = () => {
    setOptions(36);
    setDifficulty("hard");
  };

  useEffect(() => {
    setDifficulty(options === 9 ? "easy" : options === 16 ? "medium" : "hard");
  }, [options]);

  return (
    <div>
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
