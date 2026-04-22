// NAVIGATION BAR FUNCTION
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ADD SHADOW ON NAVIGATION BAR
window.onscroll = function () {
  headerShadow();
};

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

// TYPING EFFECT
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
window.onscroll = function () {
  var button = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

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

// Parallax effect for doodle
let ticking = false;
document.addEventListener('mousemove', (e) => {
  if (ticking) return;
  ticking = true;
  
  requestAnimationFrame(() => {
    const doodleContainer = document.querySelector('.doodle-container');
    if (!doodleContainer) {
      ticking = false;
      return;
    }
    
    const rect = doodleContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / 40;
    const deltaY = (e.clientY - centerY) / 40;
    
    const circles = document.querySelectorAll('.doodle-circle');
    circles.forEach((circle, index) => {
      const factor = (index + 1) * 0.4;
      circle.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
    });
    
    const icons = document.querySelector('.doodle-icons');
    if (icons) {
      icons.style.transform = `translate(${-deltaX * 1.2}px, ${-deltaY * 1.2}px)`;
    }
    
    const dots = document.querySelectorAll('.icon-dot');
    dots.forEach((dot, index) => {
      const factor = index % 2 === 0 ? 1.8 : 1.4;
      dot.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
    });
    
    const paths = document.querySelectorAll('.doodle-path');
    paths.forEach((path, index) => {
      const factor = index % 2 === 0 ? 0.6 : 0.8;
      path.style.transform = `translate(${deltaX * factor}px, ${deltaY * factor}px)`;
    });
    
    ticking = false;
  });
});