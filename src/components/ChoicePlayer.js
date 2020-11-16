import { useContext } from 'react';

import { PlayerContext } from '../shared/context/Player-context';

const ChoicePlayer = () => {
  const playerChange = useContext(PlayerContext).playerChange;

  const changeToX = () => {
    playerChange("X")
  }

  const YchangeToO = () => {
    playerChange("O")
  };

  return (
    <div>
      <h5>What player do you want to be?</h5>
      <button onClick={changeToX} >X</button> 
      <button onClick={YchangeToO} >O</button>
    </div>
  )
};

export default ChoicePlayer