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
    <Box width={1} border={1} borderTop={0} >
      <Box component="div" p={1} m={1} display="inline"  >
        I play as:
      </Box>
      <Box component="div" p={1} m={1} display="inline"  >
        <Button onClick={changeTo} >{huPlayer}</Button>
      </Box>
    </Box>
  )
};

export default SelectPlayer