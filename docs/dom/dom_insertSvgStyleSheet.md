# dom.insertSvgStyleSheet

- **Type:** function
- **Language:** javascript
- **File:** `\src\dom.js` (lines 39-52)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function insertSvgStyleSheet() {
  // const ss = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  // const svg = document.querySelector('svg');
  //
  // svg.appendChild(ss);
  // const sheets = document.styleSheets;
  // let sheet;
  //
  // for (let i = 0, length = sheets.length; i < length; i++) {
  //   sheet = sheets.item(i);
  //   if (sheet.ownerNode == ss) break;
  // }
  // sheet.insertRule('.xvg-inspect:hover { transform: scale3d(2, 2, 2); }', 0);
}
```

## Docstring

_No docstring provided._

## Source

```
export function insertSvgStyleSheet() {
  // const ss = document.createElementNS('http://www.w3.org/2000/svg', 'style');
  // const svg = document.querySelector('svg');
  //
  // svg.appendChild(ss);
  // const sheets = document.styleSheets;
  // let sheet;
  //
  // for (let i = 0, length = sheets.length; i < length; i++) {
  //   sheet = sheets.item(i);
  //   if (sheet.ownerNode == ss) break;
  // }
  // sheet.insertRule('.xvg-inspect:hover { transform: scale3d(2, 2, 2); }', 0);
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
