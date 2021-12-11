import { randomInt } from 'crypto';

export function randomInt(min = 0, max = 1000) {
  return randomInt(max - min) + min;
}

export function randomFromArray(arr) {
  return arr[randomInt(arr.length)];
}
