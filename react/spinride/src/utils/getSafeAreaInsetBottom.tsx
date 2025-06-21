export const getSafeAreaInsetBottom = (): number => {
  const el = document.createElement('div');
  el.style.cssText = `
    position: absolute;
    bottom: 0;
    left: 0;
    height: env(safe-area-inset-bottom);
    width: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: -1;
  `;
  document.body.appendChild(el);
  const height = parseFloat(getComputedStyle(el).height) || 0;
  document.body.removeChild(el);
  return height;
};
