document.addEventListener('DOMContentLoaded', function() {
    
    // --- Active Nav Link Scrolling ---
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') == '#' + current) {
                a.classList.add('active');
            }
        });
    });

    // --- Mobile Navigation Toggle ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        const navbarHeight = navbar.offsetHeight;
        navMenu.style.top = `${navbarHeight}px`;
        navMenu.style.height = `calc(100vh - ${navbarHeight}px)`;

        // Toggle hamburger icon text
        navToggle.textContent = navMenu.classList.contains('active') ? '?' : '?';
    });

    // --- Close mobile nav when a link is clicked ---
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.textContent = '?';
            }
        });
    });

});