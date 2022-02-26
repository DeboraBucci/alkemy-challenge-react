exports.timeTextGenerator = (hs, mins) => {
  const hours = hs !== 0 ? `${hs} h` : "";
  const minutes = mins !== 0 ? `${mins} min` : "";

  return [hours, minutes];
};
