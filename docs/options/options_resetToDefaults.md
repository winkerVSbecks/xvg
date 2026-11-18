# options.resetToDefaults

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 125-131)
- **Role:** internal
- **Stability:** unknown

## Signature

```
formDef => settings => () => {
  const resetForm = onLoadOptions(formDef);
  chrome.storage.sync.set(settings, () => {
    updateStatus('Reset Settings to Default')();
    resetForm(settings);
  });
}
```

## Docstring

_No docstring provided._

## Source

```
const resetToDefaults = formDef => settings => () => {
  const resetForm = onLoadOptions(formDef);
  chrome.storage.sync.set(settings, () => {
    updateStatus('Reset Settings to Default')();
    resetForm(settings);
  });
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
