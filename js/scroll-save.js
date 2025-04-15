  // Guardar scroll antes de recargar
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollPosition', window.scrollY);
  });

  // Restaurar scroll después de cargar
  window.addEventListener('load', () => {
    const scrollY = localStorage.getItem('scrollPosition');
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY));
    }
  });