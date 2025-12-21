$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-x");
  });
});

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: false,

  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

let lastScrollTop = 0;
const header = document.querySelector("header");

const sectionMap = [
  { id: "home", navIndex: 0 },
  { id: "menu", navIndex: 1 },
  { id: "testimonials", navIndex: 2 },
];

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 50) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  const navItems = document.querySelectorAll(".nav-item");
  let activeIndex = 0;

  sectionMap.forEach((section, index) => {
    const element = document.getElementById(section.id);
    if (element) {
      const sectionTop = element.offsetTop;
      const sectionHeight = element.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const viewportCenter = currentScroll + window.innerHeight / 2;

      if (viewportCenter >= sectionTop && viewportCenter < sectionBottom) {
        activeIndex = index;
      }
    }
  });

  navItems.forEach((item, index) => {
    if (index === activeIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  if (currentScroll > 0) {
    header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.boxShadow = "none";
  }
});
