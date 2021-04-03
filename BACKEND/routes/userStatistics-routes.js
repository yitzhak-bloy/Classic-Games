const express = require('express');
const { check } = require('express-validator');

const userStatisticsControllers = require('../controllers/userStatistics-controller');
const ticTacToeStatisticsControllers = require('../controllers/ticTacToeStatistics-controllers');
const snakeStatisticsControllers = require('../controllers/snakeStatistics-controllers');

const router = express.Router();

router.get('/', userStatisticsControllers.getAllUserStatistics);

router.post('/signup',
  [
    check('name').notEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 })
  ],
  userStatisticsControllers.signup);

router.post('/login', userStatisticsControllers.login);

router.patch('/updata/tictactoe',
  [
    check('level').notEmpty(),
    check('outcome').notEmpty(),
  ],
  ticTacToeStatisticsControllers.updateTicTacToeStatistics);

router.patch('/updata/snake',
  [
    check('level').notEmpty(),
    check('result').notEmpty(),
  ],
  snakeStatisticsControllers.updateSnakeStatistics);


module.exports = router;