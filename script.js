// NAVIGATION BAR FUNCTION
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// SCROLL HANDLERS
window.addEventListener('scroll', function() {
  headerShadow();
  showScrollButton();
});

function headerShadow() {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "80px";
    navHeader.style.lineHeight = "80px";
  }
}
var typingEffect = new Typed(".typedtext", {
  strings: ["Developer", "Engineer", "Lecturer", "Researcher"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// SCROLL REVEAL - Modern Enhanced Animations
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  reset: true,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
});

// Home Section Animations
sr.reveal(".featured-text-card", { opacity: 0, y: 30 });
sr.reveal(".featured-name", { delay: 100, opacity: 0, y: 30 });
sr.reveal(".featured-text-info", { delay: 200, opacity: 0, y: 30 });
sr.reveal(".featured-text-btn", { delay: 300, opacity: 0, y: 30 });
sr.reveal(".featured-image", { delay: 400, opacity: 0, scale: 0.9 });

// Section Headers
sr.reveal(".top-header", { opacity: 0, y: 30, duration: 800 });

// About Section
sr.reveal(".about-info", { opacity: 0, y: 50, delay: 100 });
sr.reveal(".skills-category", { opacity: 0, y: 40, delay: 200, interval: 150 });

// Cards (Experience & Education)
sr.reveal(".card-box", { opacity: 0, y: 50, interval: 200, scale: 0.95 });

// Project Boxes
sr.reveal(".project-box", { opacity: 0, y: 40, interval: 150, scale: 0.95 });

// Contact Section
sr.reveal(".contact-info", { opacity: 0, y: 40, delay: 100 });
sr.reveal(".form-control", { opacity: 0, y: 40, delay: 200 });

// Active Link Highlighting
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 100,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

// Resume Button
document.getElementById("resume").addEventListener("click", function () {
  var link =
    "https://drive.google.com/file/d/1QdKKRDObTSk5TwLT3ZKcu_7SxiLIMAAs/view?usp=sharing";
  window.open(link, "_blank");
});

// GitHub Button
document.getElementById("check-repo").addEventListener("click", function () {
  var link = "https://github.com/beckkenstschaft?tab=repositories";
  window.open(link, "_blank");
});

document.getElementById("check-repo-I").addEventListener("click", function () {
  var link = "https://github.com/beckkenstschaft?tab=repositories";
  window.open(link, "_blank");
});

// LinkedIn Buttons
document.getElementById("linkedin-btn").addEventListener("click", function () {
  var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
  window.open(link, "_blank");
});

document.getElementById("linkedin-btn-II").addEventListener("click", function () {
  var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
  window.open(link, "_blank");
});

document.getElementById("linkedin-btn-I").addEventListener("click", function () {
  var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
  window.open(link, "_blank");
});

// Scroll to Top Button
function showScrollButton() {
  var button = document.getElementById("scrollTopButton");
  if (button) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Check on load
document.addEventListener('DOMContentLoaded', showScrollButton);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    var targetId = this.getAttribute("href").substring(1);
    var targetSection = document.getElementById(targetId);
    if (targetSection) {
      // Close mobile menu if open
      var menuBtn = document.getElementById("myNavMenu");
      if (menuBtn.className === "nav-menu responsive") {
        menuBtn.className = "nav-menu";
      }
      
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Cursor ghost - follows mouse when scrolled past home
const cursorGhost = document.getElementById('cursorGhost');
const homeGhost = document.getElementById('homeGhost');
const homeSection = document.getElementById('home');
const speechBubble = document.querySelector('.speaker-bubble');
let ghostVisible = false;
let mouseX = 0, mouseY = 0;
let ghostX = 0, ghostY = 0;

// Hide speech bubble after wave animation completes (~4s)
setTimeout(() => {
    if (speechBubble) {
        speechBubble.classList.add('hidden');
    }
}, 4500);

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth ghost following loop
function animateGhost() {
    if (ghostVisible && cursorGhost) {
        // Smooth interpolation (lerp) for following
        ghostX += (mouseX - ghostX) * 0.08;
        ghostY += (mouseY - ghostY) * 0.08;
        
        cursorGhost.style.left = ghostX + 'px';
        cursorGhost.style.top = ghostY + 'px';
    }
    requestAnimationFrame(animateGhost);
}
animateGhost();

document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const homeBottom = homeSection ? homeSection.offsetHeight : 0;
  
  if (scrollY > homeBottom * 0.5) {
    if (!ghostVisible && cursorGhost) {
      cursorGhost.classList.add('visible');
      // Initialize position to current mouse position to prevent jumping
      ghostX = mouseX;
      ghostY = mouseY;
      ghostVisible = true;
    }
    if (homeGhost) {
      homeGhost.style.opacity = '0';
      homeGhost.style.transition = 'opacity 0.3s ease';
    }
  } else {
    if (ghostVisible && cursorGhost) {
      cursorGhost.classList.remove('visible');
      ghostVisible = false;
    }
    if (homeGhost) {
      homeGhost.style.opacity = '1';
    }
  }
});