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
        victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      },
      easy: {
        victory: 0,
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
        victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      },
      easy: {
        victory: 0,
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
        victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      },
      easy: {
        victory: 0,
        loss: 0,
        draw: 0,
        AverageRating: 0
      }
    }
  }

  USER_STATISTICS.push(createdUserStatistics);

  res.status(201).json({users: USER_STATISTICS})
};  

const updateUserStatistics = (req, res, next) => {
  const userId = req.params.uid;
  const { level, outcome } = req.body;

  const updateUser = { ...USER_STATISTICS.find(u => u.id === userId) };
  const indexUser = USER_STATISTICS.findIndex(u => u.id === userId);

  if (!updateUser) {
    return next(new HttpError('could not find a user for the provided id', 404));
  }

  const statistic = updateUser.statistic[level];
  
  statistic[outcome]++;
  statistic.AverageRating = outcome === "victory" ? statistic.AverageRating+1 : outcome === "loss" ? statistic.AverageRating-1: statistic.AverageRating;

  USER_STATISTICS[indexUser] = updateUser;
  
  res.status(201).json({users: USER_STATISTICS})
}

exports.getUserStatisticsById = getUserStatisticsById;
exports.createUserStatistics = createUserStatistics;
exports.updateUserStatistics = updateUserStatistics;