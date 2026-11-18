# options.onLoadOptions

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 111-115)
- **Role:** internal
- **Stability:** unknown

## Signature

```
formDef => settings => {
  const form = getForm(formDef);
  const restoreSettingsInDom = R.evolve(restoreSettings(settings));
  restoreSettingsInDom(form);
}
```

## Docstring

_No docstring provided._

## Source

```
const onLoadOptions = formDef => settings => {
  const form = getForm(formDef);
  const restoreSettingsInDom = R.evolve(restoreSettings(settings));
  restoreSettingsInDom(form);
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
