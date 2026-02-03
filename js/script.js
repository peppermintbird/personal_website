// --- Dark Mode Logic ---
        const moonPath = "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"; 
        const sunPath = "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"; 

        const toggleBtn = document.getElementById('themeToggle');
        const toggleIcon = document.getElementById('toggleIcon');
        const html = document.documentElement;

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            html.setAttribute('data-theme', savedTheme);
            updateIcon(savedTheme);
        }

        toggleBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });

        function updateIcon(theme) {
            toggleIcon.innerHTML = '';
            const newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
            if (theme === 'dark') {
                newPath.setAttribute("d", sunPath);
                newPath.setAttribute("stroke", "currentColor");
                newPath.setAttribute("stroke-width", "1.5");
                newPath.setAttribute("fill", "none");
            } else {
                newPath.setAttribute("d", moonPath);
                newPath.setAttribute("stroke", "none");
                newPath.setAttribute("fill", "currentColor");
            }
            toggleIcon.appendChild(newPath);
        }
        if (!savedTheme) updateIcon('light');