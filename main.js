document.addEventListener("DOMContentLoaded", () => {
  // Menu button toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  // Handle "Search" form
  const searchForm = document.getElementById("search-form");
  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const selects = searchForm.querySelectorAll("select");
      const destination = selects[0]?.value.trim();
      const location = selects[1]?.value.trim();
      const tourType = selects[2]?.value.trim();

      if (!destination && !location && !tourType) {
        alert("Please select at least one option before searching.");
      } else {
        alert(`🔍 Searching with filters:\n${destination ? "🌍 Destination: " + destination + "\n" : ""}${location ? "📍 Location: " + location + "\n" : ""}${tourType ? "🧭 Tour Type: " + tourType : ""}`);
      }
    });
  }

  // Handle "Book Now" button clicks
  const bookButtons = document.querySelectorAll(".package__card .btn");
  bookButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Booking functionality coming soon!");
    });
  });

  // Handle "Join Us" button
  const joinUsBtn = document.querySelector(".discount__btn .btn");
  if (joinUsBtn) {
    joinUsBtn.addEventListener("click", () => {
      alert("🎉 Thanks for your interest! A special discount will be emailed soon.");
    });
  }

  // Handle "Subscribe" form
  const subscribeForm = document.querySelector(".subscribe__container form");
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = subscribeForm.querySelector("input");
      const email = emailInput.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email) {
        alert("📭 Please enter your email address.");
      } else if (!emailRegex.test(email)) {
        alert("⚠ Please enter a valid email address.");
      } else {
        alert(`✅ Thanks for subscribing! Updates will be sent to: ${email}`);
        emailInput.value = "";
      }
    });
  }

  // Initialize ScrollReveal
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption });
  ScrollReveal().reveal(".header__container p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__container form", { ...scrollRevealOption, delay: 1000 });

  ScrollReveal().reveal(".feature__card", { duration: 1000, interval: 500 });
  ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".package__card", { ...scrollRevealOption, interval: 500 });

  // Initialize Swiper
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
