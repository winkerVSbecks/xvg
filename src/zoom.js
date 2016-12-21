export function addZoomStyles() {
  const style = document.createElement('style');
  style.id = 'xvg-stylesheet';
  document.head.appendChild(style);

  style.sheet.insertRule(
    `.xvg-inspect {
      transform: scale3d(1, 1, 1);
      transition: transform 0.2s ease-in-out;
      cursor: zoom-in;
      z-index: 1;
    }`,
    0,
  );

  style.sheet.insertRule(
    '.xvg-inspect:hover { transform: scale3d(1.75, 1.75, 1.75); }',
    1,
  );
}

export function attachZoom(node) {
  node.classList.add('xvg-inspect');
}
