# Module: settings

**File:** `\src\settings.js`

## Overview

Module `settings` contains 0 analyzed entities.

```
export default {
  xvg: {
    xvgCpSize: '0.75%',
    xvgCpStroke: '#ff41b4',
    xvgCpFill: '#fff',
    xvgOutlineSize: '1%',
    xvgOutlineColour: '#5e2ca5',
    xvgHandleSize: '0.5%',
    xvgHandleColour: '#ff41b4',
    xvgArcGuideSize: '0.25%',
    xvgArcGuideColour: '#96CCFF',
    xvgZoom: true,
  },

  set: function setXvgSetting(newSettings) {
    this.xvg = newSettings;
  },
};
```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| _none_ | — | — |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
