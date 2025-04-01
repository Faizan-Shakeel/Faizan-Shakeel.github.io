document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const body = document.body;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    body.classList.toggle("no-scroll"); // Prevent scrolling when menu is open
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) =>
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      body.classList.remove("no-scroll");
    })
  );

  // --- Sticky Header on Scroll ---
  const header = document.getElementById("main-header");
  const scrollThreshold = 50; // Pixels to scroll before changing header

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    },
    { passive: true }
  ); // Improve scroll performance

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Optional: Unobserve after reveal to save resources
          // observer.unobserve(entry.target);
        }
        // Optional: else { entry.target.classList.remove('is-visible'); } // Re-animate on scroll up
      });
    },
    {
      threshold: 0.1, // Trigger when 10% is visible
      // rootMargin: "-50px 0px -50px 0px" // Adjust trigger point slightly
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

  // --- Custom Cursor --- (Optional - can be removed if not desired)
  const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline = document.querySelector("[data-cursor-outline]");

  // Check if elements exist before adding listeners
  if (cursorDot && cursorOutline) {
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      // Make cursor visible when mouse moves
      cursorDot.style.opacity = "1";
      cursorOutline.style.opacity = "1";

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      // Outline follows with a slight delay
      // Use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
      });

      // Animate outline with delay using CSS transition (alternative to JS delay)
      // cursorOutline.animate({
      //     left: `${posX}px`,
      //     top: `${posY}px`
      // }, { duration: 300, fill: "forwards" }); // Adjust duration for desired delay effect
    });

    // Hide cursor when mouse leaves window
    document.addEventListener("mouseout", () => {
      cursorDot.style.opacity = "0";
      cursorOutline.style.opacity = "0";
    });
  }

  // Add hover effects for specific elements to change cursor style (using CSS :hover is often simpler)
  // Example:
  // document.querySelectorAll('a, button, .portfolio-link').forEach(el => {
  //     el.addEventListener('mouseover', () => cursorOutline.classList.add('hover-effect'));
  //     el.addEventListener('mouseout', () => cursorOutline.classList.remove('hover-effect'));
  // });
}); // End DOMContentLoaded
