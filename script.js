document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );

  // --- Sticky Header ---
  const header = document.getElementById("main-header");
  const heroSection = document.getElementById("hero"); // Get hero section

  // Use hero section height if available, otherwise fallback
  const scrollThreshold = heroSection ? heroSection.offsetHeight * 0.5 : 50;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // --- Scroll Animations ---
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: Unobserve after animation to save resources
          // observer.unobserve(entry.target);
        } else {
          // Optional: Remove class if you want animation to repeat on scroll up
          // entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });

  // --- Update Footer Year ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Back to Top Button ---
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        // Show after scrolling 300px
        backToTopButton.classList.add("visible");
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.remove("visible");
        backToTopButton.classList.add("hidden"); // Use hidden for accessibility if needed
      }
    });

    // Smooth scroll back to top on click
    backToTopButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
}); // End DOMContentLoaded
