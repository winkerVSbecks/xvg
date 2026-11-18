# Module: options

**File:** `\src\options\options.js`

## Overview

Module `options` contains 8 analyzed entities.

```
import '../../website/index.css';
import R from 'ramda';

const settingsFormDefinition = {
  xvgCpSize: 'cp-size',
  xvgCpStroke: 'cp-stroke',
  xvgCpFill: 'cp-fill',
  xvgOutlineSize: 'outline-size',
  xvgOutlineColour: 'outline-colour',
  xvgHandleSize: 'handle-size',
  xvgHandleColour: 'handle-colour',
  xvgArcGuideSize: 'arc-guide-size',
  xvgArcGuideColour: 'arc-guide-colour',
  xvgZoom: 'zoom',
};

const getElementById = R.invoker(1, 'getElementById')(R.__, document);
const getForm = R.map(getElementById);
const getSettings = R.evolve({
  xvgCpSize: R.prop('value'),
  xvgCpStroke: R.prop('value'),
  xvgCpFill: R.prop('value'),
  xvgOutlineSize: R.prop('value'),
  xvgOutlineColour: R.prop('value'),
  xvgHandleSize: R.prop('value'),
  xvgHandleColour: R.prop('value'),
  xvgArcGuideSize: R.prop('value'),
  xvgArcGuideColour: R.prop('value'),
  xvgZoom: R.prop('checked'),
});

const updateStatus = message => () => {
  const status = document.getElementById('status');
  status.classList.toggle('active');
  status.textContent = message;

  setTimeout(() => {
    status.classList.toggle('active');
    status.textContent = '';
  }, 1500);
};

/**
 * Saves options to chrome.storage
 */
const saveOptions = formDef => () => {
  const settings = R.compose(
    getSettings,
    getForm,
  )(formDef);

  chrome.storage.sync.set(settings, updateStatus('Settings Saved'));
};

/**
 * Update colour indicator for inputs
 */
function setColour(target) {
  const indicator = getElementById(`${target.id}-indicator`);
  if (indicator) indicator.style.backgroundColor = target.value;
}

const onInputChange = R.compose(
  setColour,
  R.prop('target'),
);

const attachOnInput = R.compose(
  R.forEach(node => { node.oninput = onInputChange; }),
  R.map(getElementById),
);

/**
 * Restores settings and updates DOM accordingly
 */
export const defaultSettings = {
  xvgCpSize: '0.75%',
  xvgCpStroke: '#ff41b4',
  xvgCpFill: '#fff',
  xvgOutlineSize: '1%',
  xvgOutlineColour: '#5e2ca5',

```

## Key Components

| Entity | Type | Description |
|--------|------|-------------|
| `options.setColour` | function | No description |
| `options.restoreOptions` | function | No description |
| `options.updateStatus` | function | No description |
| `options.setChecked` | function | No description |
| `options.onLoadOptions` | function | No description |
| `options.setValue` | function | No description |
| `options.saveOptions` | function | No description |
| `options.resetToDefaults` | function | No description |

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Note

Connect an NVIDIA Nemotron model (Ollama locally or Nebius Serverless) and re-run
`documentor generate` to upgrade these pages to AI-generated narrative docs with
purpose, usage examples, and gotchas.
