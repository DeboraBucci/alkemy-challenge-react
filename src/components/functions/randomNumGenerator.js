exports.randomNumGenerator = (min, max) => {
  return Math.round(Math.random() * (max - 1) + min);
};
