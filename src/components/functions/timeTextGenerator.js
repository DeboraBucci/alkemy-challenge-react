exports.timeTextGenerator = (hs, mins) => {
  if (hs === 0 && mins === 0) return ["", "0 min"];

  const hours = hs !== 0 ? `${hs} h` : "";
  const minutes = mins !== 0 ? `${mins} min` : "";

  return [hours, minutes];
};
