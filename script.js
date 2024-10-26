// script.js
document.addEventListener('DOMContentLoaded', () => {
    const welcomeMsg = document.querySelector('.header h1');
    welcomeMsg.style.opacity = 0;
    setTimeout(() => {
        welcomeMsg.style.transition = "opacity 2s";
        welcomeMsg.style.opacity = 1;
    }, 500);
});
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
            }
        });
    }, options);

    document.querySelectorAll('.animate-slide, .animate-bounce').forEach(element => {
        observer.observe(element);
    });

    // Smooth Scroll Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
            }
        });
    }, options);

    document.querySelectorAll('.animate-slide, .dream').forEach(element => {
        observer.observe(element);
    });

    // Smooth Scroll Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const options = {
        threshold: 0.5
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade');
            }
        });
    }, options);

    document.querySelectorAll('.animate-slide, .dream').forEach(element => {
        observer.observe(element);
    });

    // Smooth Scroll Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
