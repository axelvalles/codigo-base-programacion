const checks = Array.from(document.querySelectorAll<HTMLInputElement>('.exercise input'));

if (checks.length > 0) {
  const progressText = document.querySelector<HTMLElement>('#progress-text');
  const progressBar = document.querySelector<HTMLElement>('#progress-bar');
  let saved: Record<string, boolean> = {};

  try {
    saved = JSON.parse(localStorage.getItem('codigo-base-progress') || '{}');
  } catch {
    saved = {};
  }

  function updateProgress() {
    const complete = checks.filter((check) => check.checked).length;
    if (progressText) progressText.textContent = `${complete}/${checks.length}`;
    if (progressBar) progressBar.style.width = `${(complete / checks.length) * 100}%`;
    checks.forEach((check) => check.closest('.exercise')?.classList.toggle('done', check.checked));
    localStorage.setItem(
      'codigo-base-progress',
      JSON.stringify(Object.fromEntries(checks.map((check) => [check.dataset.id, check.checked]))),
    );
  }

  checks.forEach((check) => {
    check.checked = Boolean(saved[check.dataset.id || '']);
    check.addEventListener('change', updateProgress);
  });
  updateProgress();

  document.querySelectorAll<HTMLButtonElement>('.filter').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll<HTMLElement>('.exercise').forEach((card) => {
        card.classList.toggle('hidden', button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter);
      });
    });
  });
}
