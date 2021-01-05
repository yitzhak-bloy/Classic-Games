const express = require('express');

const HttpError = require('../models/http-error');
console.log("🚀 ~ file: userStatistics-routes.js ~ line 4 ~ HttpError", HttpError)

const router = express.Router();

const USER_STATISTICS = [
  {
    id: 'u1',
    name: 'yosi',
    email: 'yosi@gmail.com',
    password: '123456',
    statistic: {
      hard: {
        Victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      },
      easy: {
        Victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      }
    }
  },
  {
    id: 'u2',
    name: 'efrat',
    email: 'efrat@gmail.com',
    password: '123456',
    statistic: {
      hard: {
        Victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      },
      easy: {
        Victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      }
    }
  }
]

router.get('/:uid', (req, res, next) => {
  const userId = req.params.uid;

  const user = USER_STATISTICS.find(u => u.id === userId);

  if (!user) {
    return next(new HttpError('could not find a user for the provided id', 404));
  }

  res.json({user})
})

module.exports = router