import R from 'ramda';
import svgpath from 'svgpath';
import { drawOutline, drawHandles } from './skeletonize';
import { drawPoints } from './points';
import { drawArcEllipses } from './ellipses';

const toAbsolute = R.invoker(0, 'abs');

const getPathSegments = R.compose(
  R.prop('segments'),
  toAbsolute,
  svgpath,
  getPathDescription,
);

const parseSegments = R.compose(
  R.converge(R.assoc('segments'),
    [getPathSegments, R.objOf('node')],
  ),
);

function getPathDescription(path) {
  return path.getAttribute('d');
}

function getPaths(svg) {
  return svg.querySelectorAll('path');
}

const skeletonizePath = R.juxt([
  drawOutline,
  drawHandles,
  drawArcEllipses,
  // TODO: Draw circles!
  // Ellipses are unable to specify the exact orientation of the ellipse (if, for example, you wanted to draw an ellipse tilted at a 45 degree angle), but can be rotated by using the transform attribute.
  drawPoints,
]);

const xRay = R.compose(
  R.forEach(skeletonizePath),
  R.map(parseSegments),
  getPaths,
);

const cssQuery = R.invoker(1, 'querySelectorAll');

R.compose(
  R.forEach(xRay),
  cssQuery('svg'),
)(document);
