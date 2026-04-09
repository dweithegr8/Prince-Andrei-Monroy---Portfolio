/* particles.js background — monochrome, matches portfolio theme */
document.addEventListener('DOMContentLoaded', function initParticles() {
    if (typeof window.particlesJS !== 'function') {
        return;
    }

    window.particlesJS('particles-js', {
        particles: {
            number: {
                value: 120,
                density: { enable: true, value_area: 800 }
            },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: 0.7,
                random: true,
                anim: { enable: false }
            },
            size: {
                value: 4,
                random: true,
                anim: { enable: false }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.5,
                width: 1.5
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out'
            }
        },
        interactivity: {
            detect_on: 'window',
            events: {
                onhover: { enable: true, mode: 'grab' },
                onclick: { enable: false, mode: 'push' },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: { opacity: 0.7 }
                },
                push: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
});
