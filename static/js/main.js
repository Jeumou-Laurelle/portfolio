document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const header = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Form status message
    document.body.addEventListener('htmx:afterRequest', (evt) => {
        const status = document.getElementById('form-status');
        if (evt.detail.target.id === 'form-status') {
            if (evt.detail.successful) {
                status.innerHTML = '<p style="color: #4ade80; margin-top: 1rem;">Message envoyé avec succès !</p>';
                evt.detail.elt.reset();
            } else {
                status.innerHTML = '<p style="color: #f87171; margin-top: 1rem;">Une erreur est survenue. Veuillez réessayer.</p>';
            }
        }
    });
});

function openTab(evt, tabName) {
    const tabcontents = document.querySelectorAll(".tab-content");
    tabcontents.forEach(tab => tab.classList.remove("active"));

    const tablinks = document.querySelectorAll(".tab-btn");
    tablinks.forEach(link => link.classList.remove("active"));

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
