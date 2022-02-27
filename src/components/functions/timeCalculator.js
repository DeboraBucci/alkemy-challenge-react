const timeCalculator = (mins) => {
  if (mins === 0) return [0, 0];

  const hours = Math.floor(mins / 60);
  const minutes = Math.floor(mins % 60);

  return [hours, minutes];
};

export { timeCalculator };
