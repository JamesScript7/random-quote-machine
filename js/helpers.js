// NOTE: Will return a (number >= 0) && (number < arrayLength)
export function randomNumberGeneratorForArrays(arrayLength) {
  return Math.floor(arrayLength * Math.random());
}
