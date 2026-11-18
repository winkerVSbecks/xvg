# Module: expand

**File:** `\src\expand.js`

## Overview

Module `expand` contains 3 analyzed entities.

```
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
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `expand.getPrevX` | function | No description |
| `expand.getPrevY` | function | No description |
| `expand.expand` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
