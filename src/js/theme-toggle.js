// src/js/theme-toggle.js
document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggle-theme');
    const htmlElement = document.documentElement;

    toggleThemeButton.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Apply theme on initial load
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.classList.add('dark');
    } else {
        htmlElement.classList.remove('dark');
    }
});
