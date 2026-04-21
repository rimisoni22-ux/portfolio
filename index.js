
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    const bodyEl = document.body;
    const themeIcon = themeBtn.querySelector('i');

    // Theme Toggle Handler
    const handleThemeSwitch = () => {
        const currentTheme = bodyEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        bodyEl.setAttribute('data-theme', newTheme);
        
        // Update Icon
        if (newTheme === 'light') {
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    themeBtn.addEventListener('click', handleThemeSwitch);

   //cmooth scroller 
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigating to: ${link.getAttribute('href')}`);
        });
    });
});