export const findHighestScore = (arr) => {
  const largestEasy = arr
    .sort((a, b) =>
      a.ticTacToeStatistic.easy.averageRating <
      b.ticTacToeStatistic.easy.averageRating
        ? 1
        : b.ticTacToeStatistic.easy.averageRating <
          a.ticTacToeStatistic.easy.averageRating
        ? -1
        : 0
    )
    .slice(0, 3);
  const largestHard = arr
    .sort((a, b) =>
      a.ticTacToeStatistic.hard.averageRating <
      b.ticTacToeStatistic.hard.averageRating
        ? 1
        : b.ticTacToeStatistic.hard.averageRating <
          a.ticTacToeStatistic.hard.averageRating
        ? -1
        : 0
    )
    .slice(0, 3);

  return [largestEasy, largestHard];
};
