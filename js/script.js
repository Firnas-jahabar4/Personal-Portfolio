// Highlight active nav link on scroll
const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section[id]");

function updateActive() {
  let current = "";
  sections.forEach((sec) => {
    const secTop = sec.offsetTop - 120;
    if (scrollY >= secTop) current = sec.id;
  });
  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
}
window.addEventListener("scroll", updateActive);
window.addEventListener("load", updateActive);
// Smooth scroll for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: "smooth",
    });
  });
});
// --- IGNORE ---
