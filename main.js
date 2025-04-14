const menuBtn = document.getElementById("menubtn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  .nav__links {
  position: absolute;
  top: 65px;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--extra-light);
  border-bottom: 1px solid var(--text-light);
  transition: 0.5s;
  z-index: -9999;
  transform: translateY(-200%);
}

.nav__links.open {
  transform: translateY(0);
}

.nav__links a {
  font-family: var(--header-font);
  font-weight: 600;
  white-space: nowrap;
  color: var(--text-light);
}

.nav__links a:hover {
  color: var(--primary-color);
}
});
