# skeletonize.handleDescriptionFn

- **Type:** function
- **Language:** javascript
- **File:** `\src\skeletonize.js` (lines 33-37)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function handleDescriptionFn(segment, origin) {
  const segmentType = R.head(segment);
  const descriptionFn = handleDescriptions[segmentType];
  return descriptionFn ? descriptionFn(segment, origin) : '';
}
```

## Docstring

_No docstring provided._

## Source

```
function handleDescriptionFn(segment, origin) {
  const segmentType = R.head(segment);
  const descriptionFn = handleDescriptions[segmentType];
  return descriptionFn ? descriptionFn(segment, origin) : '';
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
