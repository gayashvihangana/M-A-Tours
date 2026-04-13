// script.js

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  const setMobileMenuState = (isOpen) => {
    if (!mobileMenuToggle || !navMenu) {
      return;
    }
    navMenu.classList.toggle('active', isOpen);
    mobileMenuToggle.classList.toggle('active', isOpen);
    mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
  };

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      
      // Only prevent default for internal anchor links (starting with #)
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          
          // Close mobile menu after clicking
          setMobileMenuState(false);
        }
      } else {
        // For external links, just close the mobile menu
        setMobileMenuState(false);
      }
    });
  });

  // Mobile menu toggle
  if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = !navMenu.classList.contains('active');
      setMobileMenuState(isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        setMobileMenuState(false);
      }
    });

    setMobileMenuState(false);
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
    scrollBtn.className = 'scroll-top-btn';
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
  const customDestinationInput = document.getElementById('customDestination');
  const customDestinationRow = document.getElementById('customDestinationRow');
  const serviceTypeSelect = document.getElementById('serviceType');
  const vehicleSelect = document.getElementById('vehicle');
  const passengersSelect = document.getElementById('passengers');
  const vehicleSuggestion = document.getElementById('vehicleSuggestion');
  const pickupDateInput = document.getElementById('pickupDate');
  const estimatedPriceDiv = document.getElementById('estimatedPrice');
  const priceAmountSpan = document.getElementById('priceAmount');
  const bookingStatus = document.getElementById('bookingStatus');
  const BOOKING_DRAFT_KEY = 'mat_booking_draft_v1';

  const getFieldErrorElement = (field) => {
    const formGroup = field.closest('.form-group');
    if (!formGroup) {
      return null;
    }

    let errorEl = formGroup.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('small');
      errorEl.className = 'field-error';
      formGroup.appendChild(errorEl);
    }
    return errorEl;
  };

  const setFieldError = (field, message) => {
    if (!field) {
      return;
    }
    const formGroup = field.closest('.form-group');
    const errorEl = getFieldErrorElement(field);
    field.classList.add('input-error');
    field.setAttribute('aria-invalid', 'true');
    if (formGroup) {
      formGroup.classList.add('has-error');
    }
    if (errorEl) {
      errorEl.textContent = message;
    }
  };

  const clearFieldError = (field) => {
    if (!field) {
      return;
    }
    const formGroup = field.closest('.form-group');
    const errorEl = formGroup?.querySelector('.field-error');
    field.classList.remove('input-error');
    field.removeAttribute('aria-invalid');
    if (formGroup) {
      formGroup.classList.remove('has-error');
    }
    if (errorEl) {
      errorEl.textContent = '';
    }
  };

  const showBookingStatus = (type, messageHtml) => {
    if (!bookingStatus) {
      return;
    }
    bookingStatus.className = `booking-status is-${type}`;
    bookingStatus.innerHTML = messageHtml;
    bookingStatus.hidden = false;
  };

  const hideBookingStatus = () => {
    if (!bookingStatus) {
      return;
    }
    bookingStatus.hidden = true;
    bookingStatus.innerHTML = '';
    bookingStatus.className = 'booking-status';
  };

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePhone = (value) => {
    const cleaned = value.replace(/\s+/g, '').replace(/[()-]/g, '');
    return /^\+?\d{9,15}$/.test(cleaned);
  };

  const updateVehicleSuggestion = () => {
    if (!vehicleSuggestion || !passengersSelect) {
      return;
    }

    const passengersValue = passengersSelect.value;
    const selectedVehicle = vehicleSelect?.value;
    const passengerCount = parseInt(passengersValue, 10);

    vehicleSuggestion.className = 'vehicle-suggestion';

    if (!passengersValue || Number.isNaN(passengerCount)) {
      vehicleSuggestion.textContent = '';
      return;
    }

    if (passengerCount <= 3) {
      vehicleSuggestion.classList.add('is-recommended');
      vehicleSuggestion.textContent = 'Recommended: Toyota Prius for up to 3 passengers.';
      if (selectedVehicle === 'kdh') {
        vehicleSuggestion.textContent += ' You can switch to Prius for a more cost-effective option.';
      }
      return;
    }

    if (passengerCount <= 7) {
      vehicleSuggestion.classList.add('is-recommended');
      vehicleSuggestion.textContent = 'Recommended: Toyota KDH for this group size.';
      if (selectedVehicle === 'prius') {
        vehicleSuggestion.classList.remove('is-recommended');
        vehicleSuggestion.classList.add('is-warning');
        vehicleSuggestion.textContent = 'Toyota Prius may not fit this group. Please choose Toyota KDH or Any Available.';
      }
      return;
    }

    vehicleSuggestion.classList.add('is-warning');
    vehicleSuggestion.textContent = 'For 8+ passengers, select Any Available. We will confirm the best vehicle setup on WhatsApp.';
  };

  const generateBookingReference = () => {
    const now = new Date();
    const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
    return `MAT-${datePart}-${randomPart}`;
  };

  const isPastDateTime = (dateValue, timeValue) => {
    if (!dateValue || !timeValue) {
      return false;
    }
    const pickupDateTime = new Date(`${dateValue}T${timeValue}`);
    if (Number.isNaN(pickupDateTime.getTime())) {
      return false;
    }
    return pickupDateTime.getTime() < Date.now() - 60 * 1000;
  };

  const saveDraft = () => {
    if (!bookingForm) {
      return;
    }
    try {
      const draft = Object.fromEntries(new FormData(bookingForm).entries());
      localStorage.setItem(BOOKING_DRAFT_KEY, JSON.stringify(draft));
    } catch (_error) {
      // Ignore localStorage failures (private mode, disabled storage, etc.)
    }
  };

  const restoreDraft = () => {
    if (!bookingForm) {
      return;
    }
    try {
      const rawDraft = localStorage.getItem(BOOKING_DRAFT_KEY);
      if (!rawDraft) {
        return;
      }
      const draft = JSON.parse(rawDraft);
      Object.entries(draft).forEach(([name, value]) => {
        const field = bookingForm.elements.namedItem(name);
        if (!field || typeof value !== 'string') {
          return;
        }
        if (field.tagName === 'SELECT') {
          const hasOption = Array.from(field.options).some((option) => option.value === value);
          if (hasOption) {
            field.value = value;
          }
          return;
        }
        field.value = value;
      });

      if (destinationSelect?.value === 'custom' && customDestinationRow && customDestinationInput) {
        customDestinationRow.style.display = 'block';
        customDestinationInput.required = true;
      }
      showBookingStatus('info', 'Saved draft restored. You can continue your booking.');
    } catch (_error) {
      // Ignore invalid draft data and continue with a clean form.
    }
  };

  const validateField = (field) => {
    if (!field) {
      return true;
    }

    const value = field.value.trim();
    let message = '';

    switch (field.id) {
      case 'fullName':
        if (!value) {
          message = 'Full name is required.';
        } else if (value.length < 3) {
          message = 'Please enter your full name.';
        }
        break;
      case 'email':
        if (!value) {
          message = 'Email is required.';
        } else if (!validateEmail(value)) {
          message = 'Enter a valid email address.';
        }
        break;
      case 'phone':
        if (!value) {
          message = 'Phone number is required.';
        } else if (!validatePhone(value)) {
          message = 'Enter a valid phone number (9-15 digits).';
        }
        break;
      case 'passengers':
      case 'vehicle': {
        if (!field.value) {
          message = 'Please select an option.';
          break;
        }
        const selectedVehicle = vehicleSelect?.options[vehicleSelect.selectedIndex];
        const vehicleCapacity = parseInt(selectedVehicle?.dataset.capacity, 10);
        const passengers = parseInt(passengersSelect?.value, 10);
        if (vehicleCapacity && passengers > vehicleCapacity) {
          message = `Selected vehicle supports up to ${vehicleCapacity} passengers.`;
        }
        break;
      }
      case 'serviceType':
      case 'pickupDate':
      case 'pickupTime':
      case 'pickupLocation':
      case 'destination':
        if (!field.value) {
          message = 'This field is required.';
        }
        if (field.id === 'pickupLocation' && value.length > 0 && value.length < 4) {
          message = 'Pickup location looks too short.';
        }
        if ((field.id === 'pickupDate' || field.id === 'pickupTime') && isPastDateTime(pickupDateInput?.value, document.getElementById('pickupTime')?.value)) {
          message = 'Pickup date/time cannot be in the past.';
        }
        break;
      case 'customDestination':
        if (destinationSelect?.value === 'custom' && !value) {
          message = 'Please provide your custom destination.';
        }
        break;
      default:
        break;
    }

    if (message) {
      setFieldError(field, message);
      return false;
    }

    clearFieldError(field);
    return true;
  };

  const validateBookingForm = () => {
    if (!bookingForm) {
      return false;
    }
    const fieldsToValidate = [
      document.getElementById('fullName'),
      document.getElementById('email'),
      document.getElementById('phone'),
      passengersSelect,
      vehicleSelect,
      serviceTypeSelect,
      pickupDateInput,
      document.getElementById('pickupTime'),
      document.getElementById('pickupLocation'),
      destinationSelect,
      customDestinationInput
    ].filter(Boolean);

    let firstInvalidField = null;
    fieldsToValidate.forEach((field) => {
      const valid = validateField(field);
      if (!valid && !firstInvalidField) {
        firstInvalidField = field;
      }
    });

    if (firstInvalidField) {
      firstInvalidField.focus();
      return false;
    }

    return true;
  };

  // Set minimum date to today
  if (pickupDateInput) {
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute('min', today);
  }

  restoreDraft();
  updateVehicleSuggestion();

  // Show/hide custom destination field
  if (destinationSelect && customDestinationRow) {
    destinationSelect.addEventListener('change', () => {
      if (destinationSelect.value === 'custom') {
        customDestinationRow.style.display = 'block';
        if (customDestinationInput) {
          customDestinationInput.required = true;
        }
      } else {
        customDestinationRow.style.display = 'none';
        if (customDestinationInput) {
          customDestinationInput.required = false;
          clearFieldError(customDestinationInput);
        }
      }
      calculatePrice();
      validateField(destinationSelect);
      saveDraft();
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

  [passengersSelect, vehicleSelect].forEach((element) => {
    if (element) {
      element.addEventListener('change', updateVehicleSuggestion);
    }
  });

  if (bookingForm) {
    const formFields = bookingForm.querySelectorAll('input, select, textarea');
    formFields.forEach((field) => {
      const eventName = field.tagName === 'SELECT' ? 'change' : 'input';
      field.addEventListener(eventName, () => {
        hideBookingStatus();
        validateField(field);
        if (field.id === 'pickupDate' || field.id === 'pickupTime') {
          validateField(pickupDateInput);
          validateField(document.getElementById('pickupTime'));
        }
        if (field.id === 'passengers' || field.id === 'vehicle') {
          validateField(passengersSelect);
          validateField(vehicleSelect);
          updateVehicleSuggestion();
        }
        saveDraft();
      });
    });
  }

  // Form submission handler
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      hideBookingStatus();
      const isValid = validateBookingForm();
      if (!isValid) {
        showBookingStatus('error', 'Please fix the highlighted fields and try again.');
        return;
      }

      // Get form data
      const formData = new FormData(bookingForm);
      const data = Object.fromEntries(formData.entries());
      const bookingReference = generateBookingReference();

      const submitButton = bookingForm.querySelector('.submit-btn');
      const originalButtonText = submitButton?.innerHTML;
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.classList.add('is-loading');
        submitButton.textContent = 'Opening WhatsApp...';
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

      const priceEstimate = estimatedPriceDiv?.style.display !== 'none' ? priceAmountSpan?.textContent : 'Will be confirmed';

      // Create WhatsApp message
      const message = [
        '*NEW BOOKING REQUEST*',
        '',
        `*Booking Ref:* ${bookingReference}`,
        `*Name:* ${data.fullName}`,
        `*Email:* ${data.email}`,
        `*Phone:* ${data.phone}`,
        '',
        '*Trip Details:*',
        `- Service Type: ${serviceText}`,
        `- Passengers: ${data.passengers}`,
        `- Vehicle: ${vehicleText}`,
        `- Pickup Date: ${data.pickupDate}`,
        `- Pickup Time: ${data.pickupTime}`,
        `- Pickup Location: ${data.pickupLocation}`,
        `- Destination: ${destinationText}`,
        `- Estimate: ${priceEstimate}`,
        data.specialRequests ? `- Special Requests: ${data.specialRequests}` : '',
        '',
        '_Please confirm availability and final price._'
      ].filter(Boolean).join('\n');

      // WhatsApp number
      const whatsappNumber = '94760781959';
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      // Open WhatsApp
      const openedTab = window.open(whatsappURL, '_blank');

      try {
        localStorage.removeItem(BOOKING_DRAFT_KEY);
      } catch (_error) {
        // Ignore localStorage failures
      }

      if (openedTab) {
        showBookingStatus(
          'success',
          `<strong>Booking prepared successfully.</strong><br>Reference: <strong>${bookingReference}</strong><br>WhatsApp opened in a new tab.`
        );
      } else {
        showBookingStatus(
          'error',
          `<strong>Popup was blocked.</strong><br>Your booking reference is <strong>${bookingReference}</strong>.<br><a href="${whatsappURL}" target="_blank" rel="noopener noreferrer">Tap here to open WhatsApp manually</a>.`
        );
      }

      setTimeout(() => {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.classList.remove('is-loading');
          submitButton.innerHTML = originalButtonText || 'Send Booking via WhatsApp';
        }
      }, 300);
    });
  }
});
