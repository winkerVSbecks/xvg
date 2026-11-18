# Module: utils

**File:** `\src\utils.js`

## Overview

Module `utils` contains 2 analyzed entities.

```
import R from 'ramda';

export const isArc = R.compose(R.equals('A'), R.head);

export const hasControlPoints = R.test(/(q|t|c|s)/ig);
export const hasX = R.test(/(m|l|h|q|t|c|s|a)/ig);
export const hasY = R.test(/(m|l|v|q|t|c|s|a)/ig);

export const getCommandOrigin = R.compose(
  R.takeLast(2),
  (idx, segments) => segments[idx - 1],
);

export const removeZ = R.filter(R.compose(R.not, R.equals('Z'), R.head));

export function getAttribute(type) {
  return path => path.getAttribute(type);
}

export function getNodes(type) {
  return (svg) => svg.querySelectorAll(type);
}
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `utils.getAttribute` | function | No description |
| `utils.getNodes` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
