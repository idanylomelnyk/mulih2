document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("js-menu-open");
  const closeBtn = document.getElementById("js-menu-close");
  const mobileMenu = document.getElementById("js-mobile-menu");

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("is-active");
  });

  const menuLinks = mobileMenu.querySelectorAll(".sidebar__link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("is-active");
    });
  });
});
