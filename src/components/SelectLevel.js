import { useContext } from 'react';

import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { DifficultyLevelContext } from '../shared/context/DifficultyLevel-context';


const SelectLevel = () => {
  const difficultyChange = useContext(DifficultyLevelContext).difficultyChange;

  const changeToHard = () => {
    difficultyChange("easy")
  }

  const changeToEasy = () => {
    difficultyChange("hard")
  };

  return (
    <div>
      <h5>What level of difficulty do you want to play?</h5>
      <ButtonGroup disableElevation variant="contained" color='inherit' size='large' >
        <Button onClick={changeToHard}>hard</Button>
        <Button onClick={changeToEasy}>easy</Button>
      </ButtonGroup>
      <p/>
    </div>
  )
};

export default SelectLevel