# Module: dom

**File:** `\src\dom.js`

## Overview

Module `dom` contains 3 analyzed entities.

```
import R from 'ramda';

// mock document for testing
if (process.env.NODE_ENV === 'test') { global.document = {}; }

export const createElement = R.invoker(1, 'createElement')(R.__, document);
export const createSvgElement = R.invoker(2, 'createElementNS')(
  'http://www.w3.org/2000/svg',
  R.__,
  document,
);
export const setAttribute = R.invoker(2, 'setAttribute');

export const makeWith = R.compose(
  R.tap,
  R.juxt,
  R.map(R.apply(setAttribute)),
);

export function make(type, generateAttrs) {
  return (...args) => {
    return makeWith(
      generateAttrs(...args),
    )(createSvgElement(type));
  };
}

export function insertStyleSheet(id, rules) {
  const style = createElement('style');
  style.id = id;
  document.head.appendChild(style);

  rules.forEach((rule, idx) => {
    style.sheet.insertRule(rule, idx);
  });
}

export function insertSvgStyleSheet() {
  // const ss = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  // const svg = document.querySelector('svg');
  //
  // svg.appendChild(ss);
  // const sheets = document.styleSheets;
  // let sheet;
  //
  // for (let i = 0, length = sheets.length; i < length; i++) {
  //   sheet = sheets.item(i);
  //   if (sheet.ownerNode == ss) break;
  // }
  // sheet.insertRule('.xvg-inspect:hover { transform: scale3d(2, 2, 2); }', 0);
}
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `dom.make` | function | No description |
| `dom.insertStyleSheet` | function | No description |
| `dom.insertSvgStyleSheet` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
