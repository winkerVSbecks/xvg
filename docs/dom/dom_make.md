# dom.make

- **Type:** function
- **Language:** javascript
- **File:** `\src\dom.js` (lines 20-26)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function make(type, generateAttrs) {
  return (...args) => {
    return makeWith(
      generateAttrs(...args),
    )(createSvgElement(type));
  };
}
```

## Docstring

_No docstring provided._

## Source

```
export function make(type, generateAttrs) {
  return (...args) => {
    return makeWith(
      generateAttrs(...args),
    )(createSvgElement(type));
  };
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
