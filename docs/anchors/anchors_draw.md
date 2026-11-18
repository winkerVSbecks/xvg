# anchors.draw

- **Type:** function
- **Language:** javascript
- **File:** `\src\anchors.js` (lines 45-54)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function draw(makeAnchors) {
  return R.converge(
    (circles, path) => {
      circles.forEach(c => {
        path.parentElement.appendChild(c);
      });
    },
    [makeAnchors, R.prop('node')],
  );
}
```

## Docstring

_No docstring provided._

## Source

```
function draw(makeAnchors) {
  return R.converge(
    (circles, path) => {
      circles.forEach(c => {
        path.parentElement.appendChild(c);
      });
    },
    [makeAnchors, R.prop('node')],
  );
}
```

## Git History

- Commits: 6
- Authors: 1
- Bug fixes: 0
- Features: 5

## Callers

None

## Callees

None
