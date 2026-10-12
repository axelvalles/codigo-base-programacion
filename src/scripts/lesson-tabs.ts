const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-setup-tab]'));
const panels = Array.from(document.querySelectorAll<HTMLElement>('[data-setup-panel]'));

if (tabs.length > 0) {
  function activateTab(tab: HTMLButtonElement, focus = false) {
    const selectedId = tab.dataset.setupTab;
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.setupPanel !== selectedId;
    });
    if (focus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex = index;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      const command = button.dataset.copy;
      if (!command) return;
      try {
        await navigator.clipboard.writeText(command);
        button.textContent = 'Copiado';
        window.setTimeout(() => { button.textContent = 'Copiar'; }, 1200);
      } catch {
        button.textContent = 'No se pudo copiar';
        window.setTimeout(() => { button.textContent = 'Copiar'; }, 1600);
      }
    });
  });
}
