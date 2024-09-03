// NAVIGATION BAR FUNCTIONN
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
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

// TYPING EFFECT
var typingEffect = new Typed(".typedtext", {
  strings: ["Developer", "Programmer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// SCROLL REVEAL
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// HOME
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

sr.reveal(".about-info", { delay: 100 });
sr.reveal(".contact-info", { delay: 100 });

sr.reveal(".skills-box", { delay: 100 });
sr.reveal(".form-control", { delay: 100 });

// const srLeft = ScrollReveal({
//   origin: "left",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// srLeft.reveal(".about-info", { delay: 100 });
// srLeft.reveal(".contact-info", { delay: 100 });

// const srRight = ScrollReveal({
//   origin: "right",
//   distance: "80px",
//   duration: 2000,
//   reset: true,
// });

// srRight.reveal(".skills-box", { delay: 100 });
// srRight.reveal(".form-control", { delay: 100 });

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
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

// OPEN LINKS
document.getElementById("resume").addEventListener("click", function () {
  var link =
    "https://drive.google.com/file/d/1QdKKRDObTSk5TwLT3ZKcu_7SxiLIMAAs/view?usp=sharing";
  window.open(link, "_blank");
});

document.getElementById("check-repo").addEventListener("click", function () {
  var link = "https://github.com/beckkenstschaft?tab=repositories";
  window.open(link, "_blank");
});

document.getElementById("check-repo-I").addEventListener("click", function () {
  var link = "https://github.com/beckkenstschaft?tab=repositories";
  window.open(link, "_blank");
});

document.getElementById("linkedin-btn").addEventListener("click", function () {
  var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
  window.open(link, "_blank");
});

document
  .getElementById("linkedin-btn-I")
  .addEventListener("click", function () {
    var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
    window.open(link, "_blank");
  });

document
  .getElementById("linkedin-btn-II")
  .addEventListener("click", function () {
    var link = "https://www.linkedin.com/in/syed-amaan-hasan-497898212/";
    window.open(link, "_blank");
  });

// Scroll TOP BUTTON
// JavaScript code to show/hide the button based on the scroll position
window.onscroll = function () {
  var button = document.getElementById("scrollTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// JavaScript code to handle the click event and scroll to the top
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}
