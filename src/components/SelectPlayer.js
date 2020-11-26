import { useContext } from 'react';
import Box from '@material-ui/core/Box';

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
    <Box>
      <Box component="div" p={1} m={1}  mt={5}  >
        <Button onClick={changeTo} variant="outlined" size="large" color="primary" >{huPlayer}</Button>
      </Box>
    </Box>
  )
};

export default SelectPlayer