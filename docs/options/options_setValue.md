# options.setValue

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 93-96)
- **Role:** internal
- **Stability:** unknown

## Signature

```
value => node => {
  node.value = value;
  setColour(node);
}
```

## Docstring

_No docstring provided._

## Source

```
const setValue = value => node => {
  node.value = value;
  setColour(node);
};
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
