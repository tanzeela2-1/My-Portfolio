
AOS.init({
  duration: 1000,
  once: true,
});
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const carousel = document.getElementById("skillsCarousel");

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌙";
  }
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


leftBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -220, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 220, behavior: "smooth" });
});
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});
const navbarLinks = document.querySelectorAll("#navbar ul li a");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});