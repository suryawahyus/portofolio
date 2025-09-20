    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement; // <html>

    toggle.addEventListener('click', () => {
      html.classList.toggle('dark-mode');
      html.classList.toggle('light-mode');

      // Ganti icon
      const icon = toggle.querySelector('i');
      if (html.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });