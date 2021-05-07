const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const UserStatistc = require("../models/userStatistic");

const updateTicTacToeStatistics = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors:", errors);
    throw new HttpError("Something went wrong.", 422);
  }

  const { email, level, outcome } = req.body;

  let UserStatistic;
  try {
    UserStatistic = await UserStatistc.findOne({ email: email });
  } catch (err) {
    return next(new HttpError("Samething went wrong, please try again", 404));
  }

  if (!UserStatistic) {
    return next(
      new HttpError("could not find a user for the provided id", 404)
    );
  }

  const ticTacToeStatistic = UserStatistic.ticTacToeStatistic[level];

  ticTacToeStatistic[outcome]++;
  ticTacToeStatistic.averageRating =
    outcome === "victory"
      ? ticTacToeStatistic.averageRating + 1
      : outcome === "loss"
      ? ticTacToeStatistic.averageRating - 1
      : ticTacToeStatistic.averageRating;

  try {
    await UserStatistic.save();
  } catch (err) {
    const error = new HttpError(
      "Update ticTacToeStatistic user failed, please try again.",
      500
    );
    return next(error);
  }

  res.status(201).json({ users: UserStatistic.toObject({ getters: true }) });
};

exports.updateTicTacToeStatistics = updateTicTacToeStatistics;
