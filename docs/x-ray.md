# Module: x-ray

**File:** `\src\x-ray.js`

## Overview

Module `x-ray` contains 0 analyzed entities.

```
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
    [R.prop('points'), R.objOf('node')],
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
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 5
- Authors: 1
- Bug fixes: 0
- Features: 4

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
