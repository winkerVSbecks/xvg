# Module: zoom

**File:** `\src\zoom.js`

## Overview

Module `zoom` contains 2 analyzed entities.

```
import R from 'ramda';
import { insertStyleSheet } from './dom';

function addZoomStyles() {
  insertStyleSheet('xvg-stylesheet', [
    `.xvg-inspect {
      transform: scale3d(1, 1, 1);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: zoom-in;
      z-index: 1;
    }`,
    '.xvg-inspect:hover { transform: scale3d(2, 2, 2); }',
  ]);
}

function addZoomClass(node) {
  node.classList.add('xvg-inspect');
}

export const attachZoom = R.compose(
  R.when(
    R.compose(
      R.complement(R.isNil),
      R.always(document.head),
    ),
    R.compose(
      R.tap(R.forEach(addZoomClass)),
      R.tap(addZoomStyles),
    ),
  ),
);
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `zoom.addZoomStyles` | function | No description |
| `zoom.addZoomClass` | function | No description |

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
