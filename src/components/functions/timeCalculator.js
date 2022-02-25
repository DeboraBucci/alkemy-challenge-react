exports.timeCalculator = (mins) => {
  const hours = Math.floor(mins / 60);
  const minutes = Math.floor(mins % 60);

  return [hours, minutes];
};
