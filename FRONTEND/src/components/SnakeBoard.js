import { useState, useEffect } from 'react';

import { Box } from '@material-ui/core';

import './SnakeBoard.css'

let index = [...Array(169).keys()];

const SnakeBoard = () => {
  const [theSnake, setTheSnake] = useState([87, 74, 61]);
  const [direction, setDirection] = useState('left');
  const [worker, setWorker] = useState(true);

  useEffect(() => {
    if (worker) {
      if (direction === 'right') {
        if (
          theSnake[theSnake.length - 1] + 1 !== 13 &&
          theSnake[theSnake.length - 1] + 1 !== 26 &&
          theSnake[theSnake.length - 1] + 1 !== 39 &&
          theSnake[theSnake.length - 1] + 1 !== 52 &&
          theSnake[theSnake.length - 1] + 1 !== 65 &&
          theSnake[theSnake.length - 1] + 1 !== 78 &&
          theSnake[theSnake.length - 1] + 1 !== 91 &&
          theSnake[theSnake.length - 1] + 1 !== 104 &&
          theSnake[theSnake.length - 1] + 1 !== 117 &&
          theSnake[theSnake.length - 1] + 1 !== 130 &&
          theSnake[theSnake.length - 1] + 1 !== 143 &&
          theSnake[theSnake.length - 1] + 1 !== 156
        ) {
          setTimeout(() => {
            setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 1].slice(1))
          }, [100])
        }
      } else if (direction === 'left') {
        if (
          theSnake[theSnake.length - 1] - 1 !== 12 &&
          theSnake[theSnake.length - 1] - 1 !== 25 &&
          theSnake[theSnake.length - 1] - 1 !== 38 &&
          theSnake[theSnake.length - 1] - 1 !== 51 &&
          theSnake[theSnake.length - 1] - 1 !== 64 &&
          theSnake[theSnake.length - 1] - 1 !== 77 &&
          theSnake[theSnake.length - 1] - 1 !== 90 &&
          theSnake[theSnake.length - 1] - 1 !== 103 &&
          theSnake[theSnake.length - 1] - 1 !== 116 &&
          theSnake[theSnake.length - 1] - 1 !== 129 &&
          theSnake[theSnake.length - 1] - 1 !== 142 &&
          theSnake[theSnake.length - 1] - 1 !== 155 &&
          theSnake[theSnake.length - 1] - 1 !== 168 &&
          !theSnake.includes(theSnake[theSnake.length - 1] - 1)
        ) {
          setTimeout(() => {
            setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 1].slice(1))
          }, [100])
        }
      } else if (direction === 'down') {
        if (theSnake[theSnake.length - 1] + 13 <= 168) {
          setTimeout(() => {
            setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 13].slice(1))
          }, [100])
        }
      } else if (direction === 'up') {
        if (theSnake[theSnake.length - 1] - 13 >= 0) {
          setTimeout(() => {
            setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 13].slice(1))
          }, [100])
        }
      }


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