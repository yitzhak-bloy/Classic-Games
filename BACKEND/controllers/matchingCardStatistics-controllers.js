const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const UserStatistc = require("../models/userStatistic");

const updateMatchingCardStatistics = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("errors:", errors);
    throw new HttpError("Something went wrong.", 422);
  }

  const { email, level, result } = req.body;

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

  if (
    !UserStatistic.matchingCardStatistic[level] ||
    UserStatistic.matchingCardStatistic[level] > result
  ) {
    UserStatistic.matchingCardStatistic[level] = result;

    try {
      await UserStatistic.save();
    } catch (err) {
      const error = new HttpError(
        "Update matchingCard user statistic failed, please try again.",
        500
      );
      return next(error);
    }
  }

  res.status(201).json({ user: UserStatistic.toObject({ getters: true }) });
};

exports.updateMatchingCardStatistics = updateMatchingCardStatistics;
