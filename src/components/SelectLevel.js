import { useContext } from 'react';

import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { DifficultyLevelContext } from '../shared/context/DifficultyLevel-context';


const SelectLevel = () => {
  const difficultyChange = useContext(DifficultyLevelContext).difficultyChange;
  const difficultyLevel = useContext(DifficultyLevelContext).difficultyLevel;
  const changeTo = () => {
    difficultyChange(difficultyLevel)
  }

  const changeToEasy = () => {
    difficultyChange("hard")
  };

  return (
    <div>
      <h5>My difficulty level:</h5>
      <ButtonGroup disableElevation variant="contained" color='inherit' size='large' >
        <Button onClick={changeTo}>{difficultyLevel}</Button>
      </ButtonGroup>
      <p/>
    </div>
  )
};

export default SelectLevel