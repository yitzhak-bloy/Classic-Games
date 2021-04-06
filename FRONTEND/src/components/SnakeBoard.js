import { useState, useEffect, useContext } from 'react';

import { Box, Button } from '@material-ui/core';

import { useHttpClient } from '../shared/hooks/http-hook';
import { UserContext } from '../shared/context/User-context';

import apple from '../svg/apple.svg';
import PopsUp from '../shared/components/PopsUp';
import './SnakeBoard.css'

let index = [...Array(169).keys()];

const SnakeBoard = ({ running, direction, handelRestart }) => {
  const [theSnake, setTheSnake] = useState([110, 97, 84]);
  const [food, setFood] = useState(Math.floor(Math.random() * 169));
  const [counter, setCounter] = useState(0);
  const [snakeSpeed, setSnakeSpeed] = useState(200);
  const [popsUpOpen, setPopsUpOpen] = useState(false);
  const [request, setRequest] = useState(false);

  const email = useContext(UserContext).email;

  const { sendRequest } = useHttpClient();

  useEffect(() => {
    if (running) {
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
          theSnake[theSnake.length - 1] + 1 !== 156 &&
          !theSnake.includes(theSnake[theSnake.length - 1] + 1)
        ) {
          setTimeout(() => {
            if (theSnake[theSnake.length - 1] + 1 === food) {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 1])
              setFood(Math.floor(Math.random() * 169));
              setCounter(counter + 1);
            } else {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 1].slice(1))
            }
          }, [snakeSpeed])
        } else {
          setPopsUpOpen(true);
          setRequest(true);
        }
      } else if (direction === 'left') {
        if (
          theSnake[theSnake.length - 1] - 1 >= 0 &&
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
            if (theSnake[theSnake.length - 1] - 1 === food) {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 1]);
              setFood(Math.floor(Math.random() * 169));
              setCounter(counter + 1);
            } else {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 1].slice(1))
            }
          }, [snakeSpeed])
        } else {
          setPopsUpOpen(true);
          setRequest(true);
        }
      } else if (direction === 'down') {
        if (
          theSnake[theSnake.length - 1] + 13 <= 168 &&
          !theSnake.includes(theSnake[theSnake.length - 1] + 13)
        ) {
          setTimeout(() => {
            if (theSnake[theSnake.length - 1] + 13 === food) {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 13]);
              setFood(Math.floor(Math.random() * 169));
              setCounter(counter + 1);
            } else {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] + 13].slice(1))
            }
          }, [snakeSpeed])
        } else {
          setPopsUpOpen(true);
          setRequest(true);
        }
      } else if (direction === 'up') {
        if (
          theSnake[theSnake.length - 1] - 13 >= 0 &&
          !theSnake.includes(theSnake[theSnake.length - 1] - 13)
        ) {
          setTimeout(() => {
            if (theSnake[theSnake.length - 1] - 13 === food) {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 13]);
              setFood(Math.floor(Math.random() * 169));
              setCounter(counter + 1);
            } else {
              setTheSnake([...theSnake, theSnake[theSnake.length - 1] - 13].slice(1))
            }
          }, [snakeSpeed])
        } else {
          setPopsUpOpen(true);
          setRequest(true);
        }
      }
    }
  }, [theSnake, running])

  useEffect(async () => {
    if (request) {
      if (email) {
        try {
          const responseData = await sendRequest(
            'http://localhost:5000/api/userStatistics/updata/snake',
            'PATCH',
            JSON.stringify({
              email: email,
              level: snakeSpeed === 200 ? 'medium' : snakeSpeed === 600 ? 'easy' : 'hard',
              result: counter
            }),
            {
              'Content-Type': 'application/json'
            }
          )
        } catch (err) { }
      }
    }
  }, [request])

  const handelEasy = () => !running && setSnakeSpeed(600);
  const handelMedium = () => !running && setSnakeSpeed(200);
  const handelHard = () => !running && setSnakeSpeed(50);

  const handleClose = () => {
    handelRestart();
    setTheSnake([110, 97, 84]);
    setFood(Math.floor(Math.random() * 169));
    setCounter(0)
    setRequest(false);
    setTimeout(() => {
      setPopsUpOpen(false);
    }, 1);
  };

  return (
    <div className="center" >
      <h2 className='snake-counter'>{counter}</h2>
      <div className='snake-butten'>
        <Button onClick={handelEasy} disableElevation variant="outlined" size="large" color={snakeSpeed === 600 ? "primary" : 'palette.primary.dark'} >Easy</Button>
        <Button onClick={handelMedium} disableElevation variant="outlined" size="large" color={snakeSpeed === 200 ? "primary" : 'palette.primary.dark'} >Medium</Button>
        <Button onClick={handelHard} disableElevation variant="outlined" size="large" color={snakeSpeed === 50 ? "primary" : 'palette.primary.dark'} >Hard</Button>
      </div>
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

            if (food === i) {
              return (
                <Box bgcolor="#ffb2ff" color="#000099" key={i}>
                  <img src={apple} alt="apple" />
                </Box>
              )
            }

            return (
              <Box bgcolor="#ffb2ff" color="#000099" key={i}>
              </Box>
            )
          })
        }
      </Box>
      <PopsUp open={popsUpOpen} handleClose={handleClose} description={['snake', counter]} />
    </div>
  )
};

export default SnakeBoard