export const formatFinishDate = (date, tripDays) => {
  if(date) {
    const newDate = date;
    newDate.setDate(newDate.getDate() + tripDays);
    return newDate.toLocaleDateString();
  } else {
    return '';
  }
};
