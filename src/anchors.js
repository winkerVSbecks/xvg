import R from 'ramda';
import { expand } from './expand';
import { createElement, isArc, removeZ } from './utils';

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

function makeCircle([x, y]) {
  const circle = createElement('circle');

  circle.setAttributeNS(null, 'cx', x);
  circle.setAttributeNS(null, 'cy', y);
  circle.setAttributeNS(null, 'r', '1%');
  circle.setAttributeNS(null, 'fill', '#fff');
  circle.setAttributeNS(null, 'stroke', '#FF41B4');
  circle.setAttributeNS(null, 'stroke-width', '0.5%');
  circle.setAttribute(
    'style',
    'stroke: #FF41B4; fill: #fff; stroke-width: 0.75%',
  );

  return circle;
}

const makePathAnchors = R.compose(
  R.map(makeCircle),
  getSegmentAnchors,
  R.prop('segments'),
);

export const getPolygonAnchors = R.compose(
  R.splitEvery(2),
  R.split(/,|\s+/),
  R.replace(/,/g, ' '),
);

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
