import { useContext } from 'react';

import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { PlayerContext } from '../shared/context/Player-context';

const SelectPlayer = () => {
  const playerChange = useContext(PlayerContext).playerChange;
  const huPlayer = useContext(PlayerContext).huPlayer;
  console.log("SelectPlayer -> huPlayer", huPlayer)
  

  const changeTo = () => {
    playerChange(huPlayer == "X" ? "O" : "X")
  }

  return (
    <div>
      <h5>I play as:</h5>
      <ButtonGroup disableElevation variant="contained" color='inherit' size='large' >
        <Button onClick={changeTo}>{huPlayer}</Button>
      </ButtonGroup>
      <p/>
    </div>
  )
};

export default SelectPlayer