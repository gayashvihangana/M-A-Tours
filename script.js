// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        
        // Close mobile menu after clicking
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu) {
          navMenu.classList.remove('active');
        }
      }
    });
  });

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  // Sticky navigation scroll effect
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (navbar) {
      if (scrollTop > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    
    lastScrollTop = scrollTop;
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections and cards for animation (except about-section)
  const animateElements = document.querySelectorAll('section:not(.about-section), .vehicle-card, .place-card, .gallery-card, .testimonial-card');
  animateElements.forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });

  // Simple lightbox for gallery images
  const galleryCards = document.querySelectorAll('.gallery-card img, .place-card img');
  
  if (galleryCards.length > 0) {
    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
      display: none;
      position: fixed;
      z-index: 10000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.95);
      justify-content: center;
      align-items: center;
      cursor: pointer;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
      border-radius: 8px;
      box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
      position: absolute;
      top: 20px;
      right: 40px;
      color: white;
      font-size: 50px;
      font-weight: bold;
      cursor: pointer;
      transition: color 0.3s;
    `;
    closeBtn.onmouseover = () => closeBtn.style.color = '#ccc';
    closeBtn.onmouseout = () => closeBtn.style.color = 'white';

    lightbox.appendChild(lightboxImg);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    // Add click handlers to images
    galleryCards.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        document.body.style.overflow = 'hidden';
      });
    });

    // Close lightbox
    const closeLightbox = () => {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === closeBtn) {
        closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') {
        closeLightbox();
      }
    });
  }

  // Add loading animation to images
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease-in-out';
    
    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.addEventListener('load', () => {
        img.style.opacity = '1';
      });
    }
  });

  // Smooth scroll to top button (optional enhancement)
  const createScrollToTopBtn = () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #25d366, #128c7e);
      color: white;
      border: none;
      font-size: 24px;
      cursor: pointer;
      display: none;
      z-index: 1000;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      transition: all 0.3s ease;
    `;

    scrollBtn.addEventListener('mouseover', () => {
      scrollBtn.style.transform = 'translateY(-5px)';
    });

    scrollBtn.addEventListener('mouseout', () => {
      scrollBtn.style.transform = 'translateY(0)';
    });

    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollBtn.style.display = 'block';
      } else {
        scrollBtn.style.display = 'none';
      }
    });
  };

  createScrollToTopBtn();

  // Booking Form Functionality
  const bookingForm = document.getElementById('bookingForm');
  const destinationSelect = document.getElementById('destination');
  const customDestinationRow = document.getElementById('customDestinationRow');
  const serviceTypeSelect = document.getElementById('serviceType');
  const vehicleSelect = document.getElementById('vehicle');
  const passengersSelect = document.getElementById('passengers');
  const pickupDateInput = document.getElementById('pickupDate');
  const estimatedPriceDiv = document.getElementById('estimatedPrice');
  const priceAmountSpan = document.getElementById('priceAmount');

  // Set minimum date to today
  if (pickupDateInput) {
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute('min', today);
  }

  // Show/hide custom destination field
  if (destinationSelect && customDestinationRow) {
    destinationSelect.addEventListener('change', () => {
      if (destinationSelect.value === 'custom') {
        customDestinationRow.style.display = 'block';
        document.getElementById('customDestination').required = true;
      } else {
        customDestinationRow.style.display = 'none';
        document.getElementById('customDestination').required = false;
      }
      calculatePrice();
    });
  }

  // Price calculation function
  const calculatePrice = () => {
    const serviceType = serviceTypeSelect?.value;
    const destination = destinationSelect?.value;
    const passengers = parseInt(passengersSelect?.value) || 0;
    const vehicle = vehicleSelect?.value;

    if (!serviceType || !destination || !passengers || !vehicle) {
      estimatedPriceDiv.style.display = 'none';
      return;
    }

    let basePrice = 0;
    let priceRange = { min: 0, max: 0 };

    // Base prices for different destinations (approximate)
    const destinationPrices = {
      'airport': { min: 8000, max: 12000 },
      'hiriketiya': { min: 3000, max: 5000 },
      'ella': { min: 15000, max: 20000 },
      'mirissa': { min: 4000, max: 6000 },
      'galle': { min: 3000, max: 5000 },
      'yala': { min: 12000, max: 18000 },
      'sigiriya': { min: 25000, max: 35000 },
      'dambulla': { min: 20000, max: 28000 },
      'bentota': { min: 8000, max: 12000 },
      'unawatuna': { min: 3500, max: 5500 },
      'custom': { min: 5000, max: 30000 }
    };

    // Get base price from destination
    if (destinationPrices[destination]) {
      priceRange = { ...destinationPrices[destination] };
    }

    // Adjust for service type
    if (serviceType === 'day-tour') {
      priceRange.min *= 1.5;
      priceRange.max *= 1.5;
    } else if (serviceType === 'multi-day') {
      priceRange.min *= 3;
      priceRange.max *= 4;
    }

    // Adjust for vehicle type
    if (vehicle === 'kdh') {
      priceRange.min *= 1.2;
      priceRange.max *= 1.2;
    }

    // Format and display price
    const formattedMin = Math.round(priceRange.min).toLocaleString('en-LK');
    const formattedMax = Math.round(priceRange.max).toLocaleString('en-LK');
    
    priceAmountSpan.textContent = `LKR ${formattedMin} - ${formattedMax}`;
    estimatedPriceDiv.style.display = 'block';
  };

  // Add event listeners for price calculation
  [serviceTypeSelect, destinationSelect, passengersSelect, vehicleSelect].forEach(element => {
    if (element) {
      element.addEventListener('change', calculatePrice);
    }
  });

  // Form submission handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Get form data
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());

      // Validate passenger capacity
      const selectedVehicle = vehicleSelect.options[vehicleSelect.selectedIndex];
      const vehicleCapacity = parseInt(selectedVehicle.dataset.capacity);
      const passengers = parseInt(data.passengers);

      if (vehicleCapacity && passengers > vehicleCapacity) {
        alert(`⚠️ The selected vehicle can only accommodate ${vehicleCapacity} passengers. Please select a different vehicle or reduce the number of passengers.`);
        return;
      }

      // Format destination
      let destinationText = destinationSelect.options[destinationSelect.selectedIndex].text;
      if (data.destination === 'custom' && data.customDestination) {
        destinationText = data.customDestination;
      }

      // Format vehicle
      const vehicleText = vehicleSelect.options[vehicleSelect.selectedIndex].text;

      // Format service type
      const serviceText = serviceTypeSelect.options[serviceTypeSelect.selectedIndex].text;

      // Create WhatsApp message
      const message = `*🚗 NEW BOOKING REQUEST*%0A%0A` +
        `*Name:* ${data.fullName}%0A` +
        `*Email:* ${data.email}%0A` +
        `*Phone:* ${data.phone}%0A%0A` +
        `*Trip Details:*%0A` +
        `• Service Type: ${serviceText}%0A` +
        `• Passengers: ${data.passengers}%0A` +
        `• Vehicle: ${vehicleText}%0A` +
        `• Pickup Date: ${data.pickupDate}%0A` +
        `• Pickup Time: ${data.pickupTime}%0A` +
        `• Pickup Location: ${data.pickupLocation}%0A` +
        `• Destination: ${destinationText}%0A` +
        (data.specialRequests ? `%0A*Special Requests:*%0A${data.specialRequests}%0A` : '') +
        `%0A_Please confirm availability and final price._`;

      // WhatsApp number
      const whatsappNumber = '94760781959';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

      // Open WhatsApp
      window.open(whatsappURL, '_blank');

      // Optional: Show success message
      setTimeout(() => {
        if (confirm('✅ Booking details sent via WhatsApp!\n\nWould you like to submit another booking?')) {
          bookingForm.reset();
          estimatedPriceDiv.style.display = 'none';
          customDestinationRow.style.display = 'none';
        }
      }, 1000);
    });
  }
});
