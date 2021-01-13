const express = require('express');

const userStatisticsControllers = require('../controllers/userStatistics-controller');

const router = express.Router();

router.get('/:uid', userStatisticsControllers.getUserStatisticsById);

router.post('/signup', userStatisticsControllers.signup);

router.post('/login', userStatisticsControllers.login);

router.patch('/:uid', userStatisticsControllers.updateUserStatistics);

module.exports = router; 