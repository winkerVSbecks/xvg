# options.updateStatus

- **Type:** function
- **Language:** javascript
- **File:** `\src\options\options.js` (lines 33-42)
- **Role:** internal
- **Stability:** unknown

## Signature

```
message => () => {
  const status = document.getElementById('status');
  status.classList.toggle('active');
  status.textContent = message;

  setTimeout(() => {
    status.classList.toggle('active');
    status.textContent = '';
  }, 1500);
}
```

## Docstring

_No docstring provided._

## Source

```
const updateStatus = message => () => {
  const status = document.getElementById('status');
  status.classList.toggle('active');
  status.textContent = message;

  setTimeout(() => {
    status.classList.toggle('active');
    status.textContent = '';
  }, 1500);
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
