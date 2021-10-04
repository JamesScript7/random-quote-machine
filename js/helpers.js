'use strict';

const PICSUM_URL = 'https://picsum.photos';
const PICSUM_MAX_LENGTH = '1085';
const IMG_WIDTH_HEIGHT = '2048/1536';
const IMG_WIDTH_HEIGHT_MOBILE = '1024/768';

export function getCurrentYear() {
  return new Date().getFullYear();
}

// NOTE: will return short time format (H:MM [AM/PM])
export function getDateTimeShort(time) {
  return new Date(time).toLocaleTimeString([], { timeStyle: 'short' });
}

// NOTE: Internal - yes, using UA is not reliable as feature detection like Modernizer
// but this is good enough for this application
function isMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
}

// NOTE: Will return a (number >= 0) && (number < arrayLength)
export function randomNumberGenerator(num = PICSUM_MAX_LENGTH) {
  return Math.floor(num * Math.random());
}

export function getImgURLString() {
  let imgResolution = IMG_WIDTH_HEIGHT;

  if (isMobile()) {
    imgResolution = IMG_WIDTH_HEIGHT_MOBILE;
  }

  return `${PICSUM_URL}/${imgResolution}/?image=${randomNumberGenerator()}`;
}
