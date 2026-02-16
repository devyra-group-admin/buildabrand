/**
 * Build A Brand - Main JavaScript
 */

document.addEventListener("DOMContentLoaded", function () {
  initSmoothScroll();
  initNavbarScroll();
  initFormSubmission();
  initMobileMenu();
});

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", function () {
      menuBtn.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });

    // Close menu when clicking a link
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", function () {
        menuBtn.classList.remove("active");
        mobileNav.classList.remove("active");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!menuBtn.contains(e.target) && !mobileNav.contains(e.target)) {
        menuBtn.classList.remove("active");
        mobileNav.classList.remove("active");
      }
    });
  }
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Navbar background change on scroll
 */
function initNavbarScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(5, 5, 5, 0.98)";
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.9)";
    }
  });
}

/**
 * Form submission handler
 */
function initFormSubmission() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Here you would typically send data to a server
      console.log("Form submitted:", data);

      // Show success message
      alert("Thank you! We will contact you shortly.");

      // Reset form
      form.reset();
    });
  }
}
