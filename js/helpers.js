// NOTE: Will return a (number >= 0) && (number < arrayLength)
export function randomNumberGeneratorForArrays(arrayLength) {
  return Math.floor(arrayLength * Math.random());
}

// NOTE: will return short time format (H:MM [AM/PM])
export function getDateTimeShort(time) {
  return new Date(time).toLocaleTimeString([], { timeStyle: 'short' });
}

// NOTE: will return boolean if mobile or not
// FIXME: see if this is robust enough
export function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }

  return false;
}
