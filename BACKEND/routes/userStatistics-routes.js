const express = require('express');

const userStatisticsControllers = require('../controllers/userStatistics-controller');

const router = express.Router();

router.get('/:uid', userStatisticsControllers.getUserStatisticsById);

router.post('/', userStatisticsControllers.createUserStatistics)

module.exports = router; 