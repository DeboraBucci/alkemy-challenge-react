exports.randomNumGenerator = (min = 0, max = 1) => {
  return Math.random() * (max - 1) + min;
};
