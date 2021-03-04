import './SnakeBoard.css'

import { Box } from '@material-ui/core';

const SnakeBoard = () => {
  return (
    <div className="center" >
      <h1> !אני הלוח</h1>
      <Box className='snake-board' m={2} center >
        <Box bgcolor="#ffb2ff" color="#400CCC">
          start
        </Box>
      </Box>
    </div>
  )
};

export default SnakeBoard