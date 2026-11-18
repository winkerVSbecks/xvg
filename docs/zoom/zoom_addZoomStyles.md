# zoom.addZoomStyles

- **Type:** function
- **Language:** javascript
- **File:** `\src\zoom.js` (lines 4-14)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function addZoomStyles() {
  insertStyleSheet('xvg-stylesheet', [
    `.xvg-inspect {
      transform: scale3d(1, 1, 1);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: zoom-in;
      z-index: 1;
    }`,
    '.xvg-inspect:hover { transform: scale3d(2, 2, 2); }',
  ]);
}
```

## Docstring

_No docstring provided._

## Source

```
function addZoomStyles() {
  insertStyleSheet('xvg-stylesheet', [
    `.xvg-inspect {
      transform: scale3d(1, 1, 1);
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      cursor: zoom-in;
      z-index: 1;
    }`,
    '.xvg-inspect:hover { transform: scale3d(2, 2, 2); }',
  ]);
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
