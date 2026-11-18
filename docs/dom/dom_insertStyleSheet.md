# dom.insertStyleSheet

- **Type:** function
- **Language:** javascript
- **File:** `\src\dom.js` (lines 28-36)
- **Role:** internal
- **Stability:** unknown

## Signature

```
function insertStyleSheet(id, rules) {
  const style = createElement('style');
  style.id = id;
  document.head.appendChild(style);

  rules.forEach((rule, idx) => {
    style.sheet.insertRule(rule, idx);
  });
}
```

## Docstring

_No docstring provided._

## Source

```
export function insertStyleSheet(id, rules) {
  const style = createElement('style');
  style.id = id;
  document.head.appendChild(style);

  rules.forEach((rule, idx) => {
    style.sheet.insertRule(rule, idx);
  });
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
