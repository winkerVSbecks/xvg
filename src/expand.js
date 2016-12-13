import R from 'ramda';
import { hasX, hasY } from './utils';

function getPrevX(idx, segments) {
  return R.compose(
    R.ifElse(
      R.compose(R.equals('H'), R.head),
      R.last,
      R.nth(-2),
    ),
    R.findLast(R.compose(hasX, R.head)),
    R.slice(0, idx),
  )(segments);
}

function getPrevY(idx, segments) {
  return R.compose(
    R.last,
    R.findLast(R.compose(hasY, R.head)),
    R.slice(0, idx),
  )(segments);
}

/**
 * Expand abbreviated commands
 *  adds the x coordinate for V
 *  adds the y coordinate for H
 */
export function expand(segment, idx, segments) {
  const type = segment[0];

  if (idx === 0) {
    return segment;
  } else if (type === 'H') {
    return [segment[0], segment[1], getPrevY(idx, segments)];
  } else if (type === 'V') {
    return [segment[0], getPrevX(idx, segments), segment[1]];
  }

  return segment;
}
