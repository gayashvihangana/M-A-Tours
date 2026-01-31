// View: NavigationView.js
// Handles smooth scrolling navigation

class NavigationView {
  constructor() {
    this.navLinks = null;
  }

  init() {
    this.navLinks = document.querySelectorAll("nav a");
    this.attachEventListeners();
  }

  attachEventListeners() {
    if (!this.navLinks) return;

    this.navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }
}

export default NavigationView;
