const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

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

const getUserStatisticsById = (req, res, next) => {
  const userId = req.params.uid;

  const user = USER_STATISTICS.find(u => u.id === userId);

  if (!user) {
    return next(new HttpError('could not find a user for the provided id', 404));
  }

  res.json({user})
}

const createUserStatistics = (req, res, next) => {
  const { name, email, password } = req.body;

  const createdUserStatistics = {
    id: uuidv4(),
    name, 
    email, 
    password,
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

  USER_STATISTICS.push(createdUserStatistics);

  res.status(201).json({users: USER_STATISTICS})
};  

exports.getUserStatisticsById = getUserStatisticsById;
exports.createUserStatistics = createUserStatistics;