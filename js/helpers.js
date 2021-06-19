// NOTE: Will return a (number >= 0) && (number < arrayLength)
export function randomNumberGeneratorForArrays(arrayLength) {
  return Math.floor(arrayLength * Math.random());
}

// NOTE: will return short time format (H:MM [AM/PM])
export function getDateTimeShort(time) {
  return new Date(time).toLocaleTimeString([], { timeStyle: 'short' });
}
