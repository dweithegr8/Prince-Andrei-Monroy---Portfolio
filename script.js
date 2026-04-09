// JavaScript for section navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.content-section');

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
                // Smooth scroll to the section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});