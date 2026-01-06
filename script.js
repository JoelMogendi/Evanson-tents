// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Animate hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (!mobileMenu.classList.contains('hidden')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('#mobile-menu a, #nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgb(0 0 0 / 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Phone number click tracking (optional - for analytics)
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here if needed
        console.log('Phone number clicked');
    });
});

// WhatsApp link tracking (optional - for analytics)
document.querySelectorAll('a[href^="https://wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here if needed
        console.log('WhatsApp link clicked');
    });
});



