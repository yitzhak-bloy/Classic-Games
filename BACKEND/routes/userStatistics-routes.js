const express = require('express');
const { check } = require('express-validator');

const userStatisticsControllers = require('../controllers/userStatistics-controller');

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

router.patch('/updata',
  [
    check('level').notEmpty(),
    check('outcome').notEmpty(),
  ],
  userStatisticsControllers.updateUserStatistics);

module.exports = router; 