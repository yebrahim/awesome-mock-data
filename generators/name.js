import { firstNames } from '../static/names';
import { randomFromArray } from './random';

export function firstName() {
  return randomFromArray(firstNames);
}
