document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // --- DARK MODE LOGIC START (From original theme.js) ---

    // Function to set the theme based on the class on the body
    function setTheme(isDark) {
        if (isDark) {
            // Apply Dark Mode
            body.classList.add('dark-mode');
            // Update the button text/icon
            if (themeToggle) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            }
            localStorage.setItem('theme', 'dark');
        } else {
            // Apply Light Mode (default)
            body.classList.remove('dark-mode');
            // Update the button text/icon
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

    // 2. Add event listener for the theme toggle button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            // Toggle the state
            const isDark = !body.classList.contains('dark-mode');
            setTheme(isDark);
        });
    }

    // --- DARK MODE LOGIC END ---

    // --- MOBILE MENU LOGIC START ---

    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('nav-open');
            // Prevent background scrolling when menu is open
            body.classList.toggle('no-scroll'); 
        });
        
        // OPTIONAL: Close menu if a link is clicked
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('nav-open')) {
                    mainNav.classList.remove('nav-open');
                    body.classList.remove('no-scroll');
                }
            });
        });
    }

    // --- MOBILE MENU LOGIC END ---
    
    console.log("Portfolio scripts loaded.");
});