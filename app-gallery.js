// app-gallery.js - Gallery Page Application Entry Point
// Initializes MVC components for the gallery page

import GalleryController from './controllers/GalleryController.js';
import BookingController from './controllers/BookingController.js';

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Gallery Controller
  const galleryController = new GalleryController();
  galleryController.init('#gallery-full-container');

  // Initialize Booking Controller
  const bookingController = new BookingController();
  bookingController.init('#booking-gallery-container');

  console.log('Gallery Page MVC Application initialized successfully');
});
