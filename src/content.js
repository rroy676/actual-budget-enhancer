(() => {
  const BADGE_ID = 'abe-on-badge';

  if (document.getElementById(BADGE_ID)) {
    return;
  }

  const badge = document.createElement('div');
  badge.id = BADGE_ID;
  badge.setAttribute('aria-label', 'Actual Budget Enhancer is active');
  badge.textContent = 'Enhancer ON';
  document.documentElement.appendChild(badge);
})();
