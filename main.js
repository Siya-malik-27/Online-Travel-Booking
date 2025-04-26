const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});


// Handle "Book Now" button clicks
document.addEventListener("DOMContentLoaded", () => {
  const bookButtons = document.querySelectorAll(".package__card .btn");

  bookButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Booking functionality coming soon!");
      // Replace this with actual booking logic or redirection
    });
  });
});

// Handle "Join Us" button
const joinUsBtn = document.querySelector(".discount__btn .btn");

if (joinUsBtn) {
  joinUsBtn.addEventListener("click", () => {
    alert("🎉 Thanks for your interest! A special summer discount will be sent to your email soon.");
    // Optionally: trigger a signup modal or redirect to a registration page
    });
  }