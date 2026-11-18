# options.restoreOptions

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 117-119)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function restoreOptions(formDef) {
  chrome.storage.sync.get(defaultSettings, onLoadOptions(formDef));
}
```

## Docstring

_No docstring provided._

## Source

```
function restoreOptions(formDef) {
  chrome.storage.sync.get(defaultSettings, onLoadOptions(formDef));
}
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
