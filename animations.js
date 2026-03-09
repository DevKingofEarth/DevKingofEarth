// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// TypeWriter class
class TypeWriter {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.type();
    }
    
    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.element.classList.add('typing-complete');
        }
    }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    // Scroll animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // Skill cards stagger
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Project cards stagger
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });
    
    // Stat items stagger
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Contact items stagger
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.classList.add('animate-on-scroll');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Typing effect for hero subtitle
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        setTimeout(() => {
            new TypeWriter(subtitle, text, 50);
        }, 500);
    }
    
    // Skills carousel - touch scroll with auto-resume
    const track = document.getElementById('skillsTrack');
    
    if (track) {
        // Mouse hover pause (desktop)
        track.addEventListener('mouseenter', () => track.classList.add('paused'));
        track.addEventListener('mouseleave', () => track.classList.remove('paused'));
        
        // Touch/drag on container - pause and allow manual scroll
        const container = document.querySelector('.skills-carousel-container');
        if (container) {
            let resumeTimer;
            const pauseAndResume = () => {
                track.classList.add('paused');
                clearTimeout(resumeTimer);
                resumeTimer = setTimeout(() => {
                    track.classList.remove('paused');
                }, 2000);
            };
            
            container.addEventListener('touchstart', pauseAndResume, { passive: true });
            container.addEventListener('touchmove', pauseAndResume, { passive: true });
        }
    }
    
    // Section title reveal animation
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('title-revealed');
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.section-title').forEach(title => {
        titleObserver.observe(title);
    });
    
    // Loading state
    document.body.classList.add('loaded');
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});