const express = require('express');

const HttpError = require('../models/http-error');
const userStatisticsControllers = require('../controllers/userStatistics-controller');

const router = express.Router();

router.get('/:uid', userStatisticsControllers.getUserStatisticsById)

module.exports = router;