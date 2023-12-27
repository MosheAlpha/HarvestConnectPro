const difficulty = {
  easy: 'קל',
  medium: 'בינוני',
  hard: 'קשה',
};

const difficultyKeys = Object.keys(difficulty);
const difficultyNames = Object.entries(difficulty);

module.exports = {
  difficultyKeys,
  difficultyNames
};
