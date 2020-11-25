import { useContext } from 'react';
import Box from '@material-ui/core/Box';


import { ButtonGroup } from '@material-ui/core';
import { Button } from '@material-ui/core';

import { DifficultyLevelContext } from '../shared/context/DifficultyLevel-context';

const SelectLevel = () => {
  const difficultyChange = useContext(DifficultyLevelContext).difficultyChange;
  const difficultyLevel = useContext(DifficultyLevelContext).difficultyLevel;
  
  const changeTo = () => {
    difficultyChange(difficultyLevel)
  }

  return (
    <Box width={1} border={1} mt={4} >
      <Box component="div" p={1} m={1} display="inline"  >
        My difficulty level:
      </Box>
      <Box component="div" p={1} m={1} display="inline"  >
        <Button onClick={changeTo}>{difficultyLevel}</Button>
      </Box>
    </Box>
  )
};

export default SelectLevel