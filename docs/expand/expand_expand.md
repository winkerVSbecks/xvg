# expand.expand

- **Type:** function
- **Language:** javascript
- **File:** `\src\expand.js` (lines 29-41)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function expand(segment, idx, segments) {
  const type = segment[0];

  if (idx === 0) {
    return segment;
  } else if (type === 'H') {
    return [segment[0], segment[1], getPrevY(idx, segments)];
  } else if (type === 'V') {
    return [segment[0], getPrevX(idx, segments), segment[1]];
  }

  return segment;
}
```

## Docstring

_No docstring provided._

## Source

```
export function expand(segment, idx, segments) {
  const type = segment[0];

  if (idx === 0) {
    return segment;
  } else if (type === 'H') {
    return [segment[0], segment[1], getPrevY(idx, segments)];
  } else if (type === 'V') {
    return [segment[0], getPrevX(idx, segments), segment[1]];
  }

  return segment;
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
