# expand.getPrevY

- **Type:** function
- **Language:** javascript
- **File:** `\src\expand.js` (lines 16-22)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function getPrevY(idx, segments) {
  return R.compose(
    R.last,
    R.findLast(R.compose(hasY, R.head)),
    R.slice(0, idx),
  )(segments);
}
```

## Docstring

_No docstring provided._

## Source

```
function getPrevY(idx, segments) {
  return R.compose(
    R.last,
    R.findLast(R.compose(hasY, R.head)),
    R.slice(0, idx),
  )(segments);
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
