export const daysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

export const compareDates = (date1, date2) => {
  if (typeof date1 === 'string') {
    date1 = new Date(date1);
  }

  if (typeof date2 === 'string') {
    date2 = new Date(date2);
  }

  if (date1 instanceof Date && date2 instanceof Date) {
    return date1.getTime() === date2.getTime();
  }
  return false;
};
