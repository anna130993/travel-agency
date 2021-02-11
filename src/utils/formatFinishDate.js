export const formatFinishDate = (date, tripDays) => {
  if(date) {
    date.setDate(date.getDate() + tripDays);
    return date.toLocaleDateString();
  } else {
    return '';
  }
};
