# utils.getNodes

- **Type:** function
- **Language:** javascript
- **File:** `\src\utils.js` (lines 20-22)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function getNodes(type) {
  return (svg) => svg.querySelectorAll(type);
}
```

## Docstring

_No docstring provided._

## Source

```
export function getNodes(type) {
  return (svg) => svg.querySelectorAll(type);
}
```

## Git History

- Commits: 3
- Authors: 1
- Bug fixes: 0
- Features: 2

## Callers

None

## Callees

None
