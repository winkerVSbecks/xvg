import R from 'ramda';
import { expand } from './expand';
import { createElement, isArc, removeZ } from './utils';

const removeArcSweeps = R.ifElse(isArc,
  R.compose(R.prepend('A'), R.takeLast(2)),
  R.identity,
);

const getSegmentPoints = R.compose(
  R.flatten,
  R.map(R.tail),
  R.addIndex(R.map)(expand),
  R.map(removeArcSweeps),
  removeZ,
  R.prop('segments'),
);

function makeCircle([x, y]) {
  const circle = createElement('circle');

  circle.setAttributeNS(null, 'cx', x);
  circle.setAttributeNS(null, 'cy', y);
  circle.setAttributeNS(null, 'r', '1%');
  circle.setAttributeNS(null, 'fill', '#fff');
  circle.setAttributeNS(null, 'stroke', '#FF41B4');
  circle.setAttributeNS(null, 'stroke-width', '0.5%');

  return circle;
}

const makePoints = R.compose(
  R.compose(
    R.map(makeCircle),
    R.splitEvery(2),
  ),
  getSegmentPoints,
);

export const drawPoints = R.converge(
  (circles, path) => {
    circles.forEach(c => {
      path.parentElement.appendChild(c);
    });
  },
  [makePoints, R.prop('node')],
);
