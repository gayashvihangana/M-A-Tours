// app.js - Main Application Entry Point
// Initializes all MVC components for the main index page

import VehicleController from './controllers/VehicleController.js';
import PlaceController from './controllers/PlaceController.js';
import GalleryController from './controllers/GalleryController.js';
import BookingController from './controllers/BookingController.js';
import NavigationController from './controllers/NavigationController.js';

// Initialize the application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Navigation Controller
  const navigationController = new NavigationController();
  navigationController.init();

  // Initialize Vehicle Controller
  const vehicleController = new VehicleController();
  vehicleController.init('#vehicle-container');

  // Initialize Place Controller
  const placeController = new PlaceController();
  placeController.init('#places-container');

  // Initialize Gallery Controller
  const galleryController = new GalleryController();
  galleryController.init('#gallery-container');

  // Initialize Booking Controller
  const bookingController = new BookingController();
  bookingController.init('#booking-container');

  console.log('MVC Application initialized successfully');
});
