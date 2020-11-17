import { useContext } from 'react';

import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { PlayerContext } from '../shared/context/Player-context';

const SelectPlayer = () => {
  const playerChange = useContext(PlayerContext).playerChange;

  const changeToX = () => {
    playerChange("X")
  }

  const changeToO = () => {
    playerChange("O")
  };

  return (
    <div>
      <h5>What player do you want to be?</h5>
      <ButtonGroup disableElevation variant="contained" color='inherit' size='large' >
        <Button onClick={changeToX}>X</Button>
        <Button onClick={changeToO}>O</Button>
      </ButtonGroup>
      <p/>
    </div>
  )
};

export default SelectPlayer