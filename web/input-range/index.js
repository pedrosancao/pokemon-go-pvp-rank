const { sheet } = document.head.appendChild(document.createElement('style'));
const ruleTextPosition = `
.range-scale {
  position: relative;
}`;
const ruleTextBefore = `.range-scale::before {
  content: '';
  position: absolute;
  inset: auto 0 0;
  height: 0.3rem;
  background-image: linear-gradient(90deg, var(--scale-color), var(--scale-color) 1px, transparent 1.01px);
  background-size: 100% 0.3rem;
  background-position: 10px 0;
}`;
sheet.insertRule(ruleTextPosition, 0);
sheet.insertRule(ruleTextBefore, 1);
const beforeRule = sheet.cssRules[1];

function placeRangeScale() {
  const range = document.querySelector('.range-scale [type=range]');
  const { width, height } = range.getBoundingClientRect();
  const offset = height / 2;
  const distance = (width - height) / (range.max || 1);
  const [, sizeY] = beforeRule.style.backgroundSize.split(' ');
  const [, positionY] = beforeRule.style.backgroundPosition.split(' ');
  beforeRule.style.backgroundSize = `${distance}px ${sizeY}`;
  beforeRule.style.backgroundPosition = `${offset}px ${positionY}`;
}
window.addEventListener('resize', () => {
  requestAnimationFrame(placeRangeScale);
});
placeRangeScale();
