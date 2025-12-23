// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn ? menuBtn.querySelector("i") : null;

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    }
  });

  navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  });
}

// ScrollReveal Animations
if (typeof ScrollReveal !== 'undefined') {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
  });

  ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
  });

  ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".location__content .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".story__card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".download__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".download__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".download__links", {
    ...scrollRevealOption,
    delay: 1000,
  });
}

// Select Card Swiper
const selectCards = document.querySelectorAll(".select__card");
if (selectCards.length > 0) {
  selectCards[0].classList.add("show__info");
}

const price = ["225", "455", "275", "625", "395"];
const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    if (priceEl && price[index]) {
      priceEl.innerText = price[index];
    }
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });
    if (selectCards[index]) {
      selectCards[index].classList.add("show__info");
    }
  }
}

// Initialize Swiper
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      depth: 500,
      modifier: 1,
      scale: 0.75,
      slideShadows: false,
      stretch: -100,
    },

    onAny(event, ...args) {
      updateSwiperImage(event, args);
    },
  });
}

// Banner Animation
const banner = document.querySelector(".banner__wrapper");

if (banner) {
  const bannerContent = Array.from(banner.children);

  bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
  });
}
