import R from 'ramda';
import { expand } from './expand';
import { isArc, removeZ } from './utils';
import { make } from './dom';

export const convertArcToEndPoint = R.ifElse(isArc,
  R.juxt([R.nth(0), R.nth(6), R.nth(7)]),
  R.identity,
);

export const getSegmentAnchors = R.compose(
  R.splitEvery(2),
  R.unnest,
  R.map(R.tail),
  R.addIndex(R.map)(expand),
  R.map(convertArcToEndPoint),
  removeZ,
);

const makeCircle = make('circle', ([x, y]) => [
  ['cx', x],
  ['cy', y],
  ['r', '1%'],
  ['fill', '#fff'],
  ['stroke', '#FF41B4'],
  ['stroke-width', '0.5%'],
  ['style', 'stroke: #FF41B4; fill: #fff; stroke-width: 0.75%'],
]);

const makePathAnchors = R.compose(
  R.map(makeCircle),
  getSegmentAnchors,
  R.prop('segments'),
);

export const getPolygonAnchors = R.map(R.props(['x', 'y']));

const makePolygonAnchors = R.compose(
  R.map(makeCircle),
  getPolygonAnchors,
  R.prop('points'),
);

function draw(makeAnchors) {
  return R.converge(
    (circles, path) => {
      circles.forEach(c => {
        path.parentElement.appendChild(c);
      });
    },
    [makeAnchors, R.prop('node')],
  );
}

export const drawPolygonAnchors = draw(makePolygonAnchors);
export const drawPathAnchors = draw(makePathAnchors);
