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
  xvgHandleSize: '0.5%',
  xvgHandleColour: '#ff41b4',
  xvgArcGuideSize: '0.25%',
  xvgArcGuideColour: '#96CCFF',
  xvgZoom: true,
};

const setValue = value => node => {
  node.value = value;
  setColour(node);
};
const setChecked = value => node => { node.checked = value; };
const restoreSettings = R.evolve({
  xvgCpSize: setValue,
  xvgCpStroke: setValue,
  xvgCpFill: setValue,
  xvgOutlineSize: setValue,
  xvgOutlineColour: setValue,
  xvgHandleSize: setValue,
  xvgHandleColour: setValue,
  xvgArcGuideSize: setValue,
  xvgArcGuideColour: setValue,
  xvgZoom: setChecked,
});

const onLoadOptions = formDef => settings => {
  const form = getForm(formDef);
  const restoreSettingsInDom = R.evolve(restoreSettings(settings));
  restoreSettingsInDom(form);
};

function restoreOptions(formDef) {
  chrome.storage.sync.get(defaultSettings, onLoadOptions(formDef));
}


/**
 * Reset to defaults
 */
const resetToDefaults = formDef => settings => () => {
  const resetForm = onLoadOptions(formDef);
  chrome.storage.sync.set(settings, () => {
    updateStatus('Reset Settings to Default')();
    resetForm(settings);
  });
};


/**
 * Add event listeners
 */
document
  .addEventListener('DOMContentLoaded', () => {
    restoreOptions(settingsFormDefinition);
    attachOnInput(['cp-stroke', 'cp-fill', 'outline-colour', 'handle-colour',
      'arc-guide-colour']);
  });

document
  .getElementById('save')
  .addEventListener('click', saveOptions(settingsFormDefinition));

document
  .getElementById('reset-to-default')
  .addEventListener(
    'click',
    resetToDefaults(settingsFormDefinition)(defaultSettings),
  );
