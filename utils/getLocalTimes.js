export const getLocalTimes = (date, time) => {
  return new Date(date + " " + time).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};
