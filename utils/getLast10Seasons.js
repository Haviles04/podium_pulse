export const getLast10Seasons = () => {
  let years = [];
  const date = new Date().getFullYear();
  for (let i = 0; i < 10; i++) {
    years.push(date - i);
  }
  return years;
};
