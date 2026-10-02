(() => {
  function fitPages() {
    document.querySelectorAll('.page-wrap').forEach(wrapper => {
      const scale = Math.min(1, wrapper.clientWidth / 1190);
      const page = wrapper.querySelector('.page');
      page.style.transform = `scale(${scale})`;
      wrapper.style.height = `${1684 * scale}px`;
    });
  }
  fitPages();
  new ResizeObserver(fitPages).observe(document.documentElement);
  window.addEventListener('beforeprint', () => document.querySelectorAll('.page').forEach(p => p.style.transform = 'none'));
  window.addEventListener('afterprint', fitPages);
})();
