const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const UserStatistc = require('../models/userStatistic');

const getAllUserStatistics = async (req, res, next) => {
  let users;
  try {
    users = await UserStatistc.find({}, '-password')
  } catch(err) {
    return next(new HttpError('Samething went wrong, please try again', 404));
  }

  res.json({ users: users.map( user => user.toObject({ getters: true }) ) })
}

const getUserStatisticsById = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await UserStatistc.findById(userId);
  } catch (err) {
    return next(new HttpError('Samething went wrong, please try again', 404));
  }

  if (!user) {
    return next(new HttpError('could not find a user for the provided id', 404));
  }

  res.json({user: user.toObject( {getters: true} )})
}

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors:", errors);
    return next( new HttpError('Invalid inputs passed, please check uour data.', 422) );
  };

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await UserStatistc.findOne({ email: email })
  } catch(err) {
    return next(new HttpError('Samething went wrong, please try again', 404));
  }

  if (existingUser) {
    return next(new HttpError('Signing up failed, please try again', 500));
  }

  const createdUserStatistics = new UserStatistc({
    name, 
    email, 
    password,
    statistic: {
      hard: {
        victory: 0,
        loss: 0,
        draw: 0,
        averageRating: 0
      },
      easy: {
        victory: 0,
        loss: 0,
        draw: 0,
        averageRating: 0
      }
    }
  })

  try {
    await createdUserStatistics.save();
  } catch (err) {
    const error = new HttpError(
      'Creating user failed, please try again.',
      500
    )
    return next(error);
  }

  res.status(201).json({users: createdUserStatistics})
};  

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try{
    existingUser = await UserStatistc.findOne({ email: email })
  } catch (err) {
    return next(new HttpError('Samething went wrong, please try again', 404))
  }

  if (!existingUser || existingUser.password !== password) {
    return next( new HttpError('Could not identify user, credentials seem to be worng.', 401) )
  }

  res.json({ messege: 'Logged in!'});
}

const updateUserStatistics = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors:", errors);
    throw new HttpError('Something went wrong.', 422);
  };

  const { level, outcome } = req.body;
  const userId = req.params.uid;

  let UserStatistic;
  try {
    UserStatistic = await UserStatistc.findById(userId);
  } catch(err) {
    return next(new HttpError('Samething went wrong, please try again', 404));
  }

  if (!UserStatistic) {
    return next(new HttpError('could not find a user for the provided id', 404));
  }

  const statistic = UserStatistic.statistic[level];
  
  statistic[outcome]++;
  statistic.averageRating = outcome === "victory" ? statistic.averageRating+1 : outcome === "loss" ? statistic.averageRating-1: statistic.averageRating;
  
  try {
    await UserStatistic.save();
  } catch (err) {
    const error = new HttpError(
      'Update statistic user failed, please try again.',
      500
    )
    return next(error);
  }

  res.status(201).json({ users: UserStatistic.toObject( {getters: true} ) });
}

exports.getAllUserStatistics = getAllUserStatistics;
exports.getUserStatisticsById = getUserStatisticsById;
exports.signup = signup;
exports.login = login;
exports.updateUserStatistics = updateUserStatistics;