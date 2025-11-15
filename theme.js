document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Function to set the theme based on the class on the body
    function setTheme(isDark) {
        if (isDark) {
            // Apply Dark Mode
            body.classList.add('dark-mode');
            // Check if the button exists before changing innerHTML
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            }
            localStorage.setItem('theme', 'dark');
        } else {
            // Apply Light Mode (default)
            body.classList.remove('dark-mode');
            // Check if the button exists before changing innerHTML
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
            localStorage.setItem('theme', 'light');
        }
    }

    // 1. Check for saved theme preference on every page load
    const savedTheme = localStorage.getItem('theme');
    
    // If 'dark' is saved, activate dark mode on load
    if (savedTheme === 'dark') {
        setTheme(true); 
    } else {
        // Otherwise, default to light mode
        setTheme(false);
    }

    // 2. Add event listener for the button click (only works if the button exists)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle the state
            const isDark = !body.classList.contains('dark-mode');
            setTheme(isDark);
        });
    }
});