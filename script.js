
// Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Salmath Afiya's Portfolio!");
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
    ".resume-card, .biodata-card, .resume-content h2"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    element.classList.add("reveal");
    observer.observe(element);
});
