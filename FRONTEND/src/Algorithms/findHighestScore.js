export const findHighestScore = (arr) => {
  const largestEasy = arr.sort((a, b) => (a.statistic.easy.averageRating < b.statistic.easy.averageRating) ? 1 : ((b.statistic.easy.averageRating < a.statistic.easy.averageRating) ? -1 : 0)).slice(0, 3);
  const largestHard = arr.sort((a, b) => (a.statistic.hard.averageRating < b.statistic.hard.averageRating) ? 1 : ((b.statistic.hard.averageRating < a.statistic.hard.averageRating) ? -1 : 0)).slice(0, 3);

  return [largestEasy, largestHard];
};