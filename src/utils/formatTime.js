export const formatTime = (param) => {

  const seconds = Math.floor(param % 60);
  const minutes = Math.floor((param / 60)% 60);
  const hours = Math.floor(param / 3600);

  const time = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

  if (typeof param === 'undefined' || typeof param != 'number' || param < 0) {
    return null;
  } else {
    return time;
  }
};

