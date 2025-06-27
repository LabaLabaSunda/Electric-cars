/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Show menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Hide menu
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  window.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== POPULAR SWIPER ===============*/
const swiperPopular = new Swiper(".popular__container", {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1024: {
      spaceBetween: 48,
    },
  },
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (scrollUp) {
    window.scrollY >= 350
      ? scrollUp.classList.add("show-scroll")
      : scrollUp.classList.remove("show-scroll");
  }
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionLink = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink?.classList.add("active-link");
    } else {
      sectionLink?.classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__title, .popular__container, .footer__container`);
sr.reveal(`.home__subtitle`, { delay: 500 });
sr.reveal(`.home__elec`, { delay: 600 });
sr.reveal(`.home__img`, { delay: 800 });
sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: "bottom" });
sr.reveal(`.home__button`, { delay: 1000, origin: "bottom" });

sr.reveal(`.about__img, .offer__img`, { origin: "left" });
sr.reveal(`.about__data, .offer__data`, { origin: "right" });

sr.reveal(`.featured__card`, { interval: 200 });

document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector(".home__button");
  const startSound = document.getElementById("start-sound");

  if (startButton && startSound) {
    startButton.addEventListener("click", (e) => {
      e.preventDefault(); // agar tidak reload halaman
      startSound.currentTime = 0;
      startSound.play().catch((err) => {
        console.log("Playback failed:", err);
      });
    });
  }
});
