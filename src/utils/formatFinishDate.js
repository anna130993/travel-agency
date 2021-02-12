export const formatFinishDate = (date, tripDays) => {
  if(date) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + tripDays);
    return newDate.toLocaleDateString();
  } else {
    return '';
  }
};
