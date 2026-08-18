document.addEventListener('DOMContentLoaded', () => {
    
    // --- Custom Cursor ---
    const cursor = document.getElementById('custom-cursor');
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .blog-card, .social-icon');

    if (window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Hero Text Animation ---
    const heroTitle = document.getElementById('hero-title');
    const text = heroTitle.textContent;
    heroTitle.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.transitionDelay = `${index * 0.1}s`;
        heroTitle.appendChild(span);
    });

    setTimeout(() => {
        const spans = heroTitle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.opacity = '1';
            span.style.transform = 'translateY(0)';
            span.style.transition = 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
        });
    }, 100);

    // --- Scroll Reveal Animations ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Process Line Fill Animation ---
    const processSection = document.getElementById('process');
    const processProgress = document.getElementById('process-progress');
    const processSteps = document.querySelectorAll('.process-step');
    
    if (processSection && processProgress) {
        window.addEventListener('scroll', () => {
            const rect = processSection.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section has been scrolled past
            if (rect.top < windowHeight / 2 && rect.bottom > 0) {
                let scrollPercentage = ((windowHeight / 2 - rect.top) / sectionHeight) * 100;
                scrollPercentage = Math.max(0, Math.min(100, scrollPercentage * 1.5)); // Scale up effect
                
                processProgress.style.width = `${scrollPercentage}%`;

                // Highlight steps
                processSteps.forEach((step, index) => {
                    const stepThreshold = (index / (processSteps.length - 1)) * 100;
                    if (scrollPercentage >= stepThreshold - 10) {
                        step.classList.add('active');
                    } else {
                        step.classList.remove('active');
                    }
                });
            }
        });
    }

    // --- Testimonial Carousel ---
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    if (slides.length > 0) {
        setInterval(nextSlide, 5000); // Crossfade every 5 seconds
    }
});
