document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');
    const footerLinks = document.querySelectorAll('.footer-link');
    const actionButtons = document.querySelectorAll('[data-target]');

    // Function to show a specific section
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        
        // Show the target section
        document.getElementById(targetId).classList.remove('hidden');
        
        // Update active nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-target') === targetId) {
                link.classList.add('active');
            }
        });
        
        // Scroll to top when navigating
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Add click event listeners to footer links
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Add click event listeners to action buttons
    actionButtons.forEach(button => {
        if (button.getAttribute('data-target')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('data-target');
                showSection(targetId);
            });
        }
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && subject && message) {
                // In a real application, you would send this data to a server
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Show home section by default
    showSection('home');

    console.log('Professional Portfolio loaded successfully!');
});