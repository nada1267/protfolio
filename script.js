// Scroll active link
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar nav a");
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 90;
        if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) link.classList.add("active");
    });
});

// Dark/Light mode toggle
const toggleBtn = document.querySelector(".mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Initialize AOS library
AOS.init({
    duration:1000,
    once:true
});

// Custom Animation on Scroll
const cards = document.querySelectorAll(
    '.projects-page .project-card, .experience-card'
);

function animateOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerPoint){
            card.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);



// Animate certifications on scroll (fancy)
const certCards = document.querySelectorAll('.cert-card');

function animateCertsOnScroll() {
    const triggerPoint = window.innerHeight * 0.85;

    certCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerPoint) {
            card.classList.add('animate');
        }
    });
}

// حدث التحريك على scroll و load
window.addEventListener('scroll', animateCertsOnScroll);
window.addEventListener('load', animateCertsOnScroll);

const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

