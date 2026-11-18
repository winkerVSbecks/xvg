# expand.getPrevX

- **Type:** function
- **Language:** javascript
- **File:** `\src\expand.js` (lines 4-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function getPrevX(idx, segments) {
  return R.compose(
    R.ifElse(
      R.compose(R.equals('H'), R.head),
      R.last,
      R.nth(-2),
    ),
    R.findLast(R.compose(hasX, R.head)),
    R.slice(0, idx),
  )(segments);
}
```

## Docstring

_No docstring provided._

## Source

```
function getPrevX(idx, segments) {
  return R.compose(
    R.ifElse(
      R.compose(R.equals('H'), R.head),
      R.last,
      R.nth(-2),
    ),
    R.findLast(R.compose(hasX, R.head)),
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
