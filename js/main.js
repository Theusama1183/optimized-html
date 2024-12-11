// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Example of adding interactivity
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Simple active state management
      navLinks.forEach((l) => l.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  // Optional: Simple analytics or tracking
  console.log("Page loaded successfully");
});
