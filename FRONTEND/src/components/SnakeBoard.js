import { useState, useEffect } from 'react';

import { Box } from '@material-ui/core';

import './SnakeBoard.css'

let index = [...Array(169).keys()];
// console.log("🚀 ~ file: SnakeBoard.js ~ line 6 ~ index", index)


const SnakeBoard = () => {
  const [theSnake, setTheSnake] = useState([78, 79, 80]);
  const [direction, setDirection] = useState('right');
  const [worker, setWorker] = useState(false);

  useEffect(() => {
    if (direction === 'right') {
      setTimeout(() => {
        setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 1].slice(1))
      }, [100])
    }
  }, [theSnake])


  return (
    <div className="center" >
      <h1> !אני הלוח</h1>
      <Box className='snake-board' >
        {
          index.map((i) => {
            if (theSnake.includes(i)) {
              return (
                <Box bgcolor="#000099" color="#000099" key={i}>
                  ---
                </Box>
              )
            }

            return (
              <Box bgcolor="#ffb2ff" color="#000099" key={i}>
                {i}
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
};

export default SnakeBoard