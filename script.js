// JavaScript for section navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.content-section');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    // Mobile menu toggle with improved UX
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('menu-open');

            // Prevent body scroll when menu is open
            if (sidebar.classList.contains('menu-open')) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });

        // Close menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                sidebar.classList.remove('menu-open');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside (on mobile/tablet)
        if (window.innerWidth <= 1100) {
            document.addEventListener('click', function(event) {
                if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
                    menuToggle.classList.remove('active');
                    sidebar.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape' && sidebar.classList.contains('menu-open')) {
                    menuToggle.classList.remove('active');
                    sidebar.classList.remove('menu-open');
                    body.style.overflow = '';
                }
            });
        }
    }

    // Smooth scrolling for mobile
    function smoothScrollTo(element, duration = 500) {
        const targetPosition = element.offsetTop - 80; // Account for fixed header
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    // Section navigation with improved mobile scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the target section
            if (targetSection) {
                targetSection.style.display = 'block';
                // Use improved smooth scroll for mobile
                if (window.innerWidth <= 1100) {
                    setTimeout(() => smoothScrollTo(targetSection), 100);
                } else {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Set initial active state
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }

    // Handle window resize to reset mobile menu state
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1100) {
            // Reset mobile menu state on desktop
            menuToggle?.classList.remove('active');
            sidebar?.classList.remove('menu-open');
            body.style.overflow = '';
        }
    });
});