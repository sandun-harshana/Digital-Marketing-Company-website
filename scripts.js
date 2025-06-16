// Dark mode toggle with localStorage support
const toggleButton = document.getElementById('toggleDark');

function setDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add('dark');
    toggleButton.textContent = '☀️ Light';
  } else {
    document.documentElement.classList.remove('dark');
    toggleButton.textContent = '🌙 Dark';
  }
  localStorage.setItem('darkMode', isDark);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    setDarkMode(true);
  } else {
    setDarkMode(false);
  }
});

toggleButton.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setDarkMode(!isDark);
});
