# options.saveOptions

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 48-55)
- **Role:** internal
- **Stability:** unknown

## Signature

```
formDef => () => {
  const settings = R.compose(
    getSettings,
    getForm,
  )(formDef);

  chrome.storage.sync.set(settings, updateStatus('Settings Saved'));
}
```

## Docstring

_No docstring provided._

## Source

```
const saveOptions = formDef => () => {
  const settings = R.compose(
    getSettings,
    getForm,
  )(formDef);

  chrome.storage.sync.set(settings, updateStatus('Settings Saved'));
};
```

## Git History

- Commits: 1
- Authors: 1
- Bug fixes: 0
- Features: 1

## Callers

None

## Callees

None
