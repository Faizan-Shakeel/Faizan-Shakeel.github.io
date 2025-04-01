document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const body = document.body;

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      // Toggle body scroll based on menu state
      body.classList.toggle("no-scroll", navMenu.classList.contains("active"));
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
          body.classList.remove("no-scroll");
        }
      });
    });
  }

  // --- Optional: Add subtle shadow to header on scroll ---
  const header = document.getElementById("main-header");
  if (header) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 10) {
          // You could add a class here if you defined .scrolled in CSS
          // header.classList.add('scrolled');
        } else {
          // header.classList.remove('scrolled');
        }
      },
      { passive: true }
    );
  }

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(
    ".reveal-fade, .reveal-slide-up, .reveal-slide-left, .reveal-slide-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: Stop observing after revealed
          // observer.unobserve(entry.target);
        }
        // Optional: Uncomment to re-animate when scrolling up
        // else {
        //     entry.target.classList.remove('is-visible');
        // }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  revealElements.forEach((el) => {
    observer.observe(el);
  });

  // --- Update Footer Year ---
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}); // End DOMContentLoaded
