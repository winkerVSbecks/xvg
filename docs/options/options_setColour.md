# options.setColour

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 61-64)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function setColour(target) {
  const indicator = getElementById(`${target.id}-indicator`);
  if (indicator) indicator.style.backgroundColor = target.value;
}
```

## Docstring

_No docstring provided._

## Source

```
function setColour(target) {
  const indicator = getElementById(`${target.id}-indicator`);
  if (indicator) indicator.style.backgroundColor = target.value;
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
