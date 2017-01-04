import R from 'ramda';
import svgpath from 'svgpath';
import { drawOutline, drawHandles } from './skeletonize';
import { drawPathAnchors, drawPolygonAnchors } from './anchors';
import { drawArcGuides } from './arc-guides';
import { getAttribute, getNodes } from './utils';

const toAbsolute = R.invoker(0, 'abs');
const unshort = R.invoker(0, 'unshort');

const getPathSegments = R.compose(
  R.prop('segments'),
  unshort,
  toAbsolute,
  svgpath,
  getAttribute('d'),
);

const parseSegments = R.compose(
  R.converge(R.assoc('segments'),
    [getPathSegments, R.objOf('node')],
  ),
);

const drawPathDebugArtifacts = R.juxt([
  drawOutline,
  drawHandles,
  drawArcGuides,
  drawPathAnchors,
]);

const xRayPaths = R.compose(
  R.forEach(drawPathDebugArtifacts),
  R.map(parseSegments),
  getNodes('path'),
);

const parsePoints = R.compose(
  R.converge(R.assoc('points'),
    [getAttribute('points'), R.objOf('node')],
  ),
);

const xRayPolygons = R.compose(
  R.forEach(R.juxt([
    drawOutline,
    drawPolygonAnchors,
  ])),
  R.map(parsePoints),
  getNodes('polygon, polyline'),
);

export const xRay = R.juxt([
  xRayPaths,
  xRayPolygons,
]);
